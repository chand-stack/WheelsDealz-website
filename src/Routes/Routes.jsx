import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Home";
import Products from "../Components/Products";
import AddProduct from "../Components/AddProduct";
import Update from "../Components/Update";
import Detail from "../Components/Detail";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
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
                element:<AddProduct/>
            },
            {
                path:"/update/:id",
                element:<Update/>,
                loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path:"/detail/:id",
                element:<Detail/>,
                loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])

export default routes;