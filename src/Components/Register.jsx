import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const registerHandler = e => {
        e.preventDefault()
        const name = e.target.name.value 
        const photo = e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(name,photo,email,password);
    }

    return (
        <div className=" container mx-auto px-2">
       <div className="border border-orange-500 my-10 shadow-2xl lg:mx-56 pb-10">
       <form onSubmit={registerHandler} className="card-body max-w-2xl mx-auto "> 
        <h1 className="text-center text-3xl font-bold">Register <span className="text-orange-500">Now!!</span></h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Your Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered border border-orange-500" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Photo URL</span>
          </label>
          <input type="url" placeholder="Your photo url" name="photo" className="input input-bordered border border-orange-500" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered border border-orange-500" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered border border-orange-500" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-orange-500 text-white border-none">Login</button>
        </div>
        <p className="font-semibold text-center">Already have an account? please <Link className="text-orange-500" to="/login">Login</Link></p>
        <p className="text-center font-semibold">---Or---</p>
      </form>
      <div className="flex justify-center"><button className="btn btn-outline">Continue with <FcGoogle className="text-2xl"/></button></div>
       </div>
      
       </div>
    );
};

export default Register;