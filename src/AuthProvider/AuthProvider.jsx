import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
       const [user,setUser] = useState(null)
       const [loading,setLoading] = useState(true)

       const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
       }

       const googleProvider = new GoogleAuthProvider()

       const loginGoogle = () => {
        return signInWithPopup(auth,googleProvider)
       }

       const updateUserProfile = (name,photo) => {
        setLoading(true)
       return updateProfile(auth.currentUser,{
        displayName:`${name}`,photoURL:`${photo}`
       })
       }

       useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })

        return () => {
            unsubsCribe()
        }

       },[])

    const authInfo = {
           user,
           createUser,
           loginUser,
           loginGoogle,
           updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;