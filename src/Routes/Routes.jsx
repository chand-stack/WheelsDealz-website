import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Home";
import Products from "../Components/Products";
import AddProduct from "../Components/AddProduct";


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
            }
        ]
    }
])

export default routes;