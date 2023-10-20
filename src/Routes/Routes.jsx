import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Home";
import Products from "../Components/Products";
import AddProduct from "../Components/AddProduct";
import Update from "../Components/Update";
import Detail from "../Components/Detail";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";
import About from "../Components/About";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                 path:"/products/:id",
                 element:<Products/>
            },
            {
                path:"/addproduct",
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><Update/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path:"/detail/:id",
                element:<PrivateRoute><Detail/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path:"/cart/:id",
                element:<PrivateRoute><Cart/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`)
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])

export default routes;