import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Main;