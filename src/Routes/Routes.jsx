import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Home";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default routes;