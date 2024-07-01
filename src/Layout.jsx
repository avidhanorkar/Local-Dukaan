import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function Layout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default Layout;