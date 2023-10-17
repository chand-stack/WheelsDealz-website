import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;