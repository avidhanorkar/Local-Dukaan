import { Link, NavLink } from "react-router-dom"
function Navbar(){
    return(
        <>
            <div className="navbar flex bg-[#FFFFFF] justify-between h-[88px] items-center px-16">
                <div className="logo flex items-center gap-2">
                    <img src="./src/assets/Logo.png" className="h-10" alt="Logo" />
                    <p className="text-[#FD650B] font-bold text-[30px] ">LocalDukaan</p>
                </div>
                <div className="navContents">
                    <ul className="flex gap-16">
                        <li> <NavLink className={`cursor-pointer font-semibold hover:text-[#FD650B] hover:underline text-[20px]`}>Home</NavLink></li>
                        <li> <NavLink className={`cursor-pointer font-semibold hover:text-[#FD650B] hover:underline text-[20px]`}>Explore</NavLink></li>
                        <li> <NavLink className={`cursor-pointer font-semibold hover:text-[#FD650B] hover:underline text-[20px]`}>About</NavLink></li>
                        <li> <NavLink className={`cursor-pointer font-semibold hover:text-[#FD650B] hover:underline text-[20px]`}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;