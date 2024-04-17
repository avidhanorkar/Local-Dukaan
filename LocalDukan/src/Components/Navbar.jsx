import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <>
            <div className="navbar flex bg-[#FFFFFF] justify-between h-[88px] items-center px-16">
                <div className="logo flex items-center gap-2">
                    <img src="./src/assets/Logo.png" className="h-10" alt="Logo" />
                    <p className="text-[#FD650B] font-bold text-[30px] ">LocalDukaan</p>
                </div>
                <div className="navContents">
                    <ul className="flex gap-16 justify-center h-[50px]">
                        <li className="cursor-pointer font-semibold hover:text-[#FD650B] my-[auto] text-[20px]">Home</li>
                        <li className="cursor-pointer font-semibold hover:text-[#FD650B] my-[auto] text-[20px]">Explore</li>
                        <li className="cursor-pointer font-semibold hover:text-[#FD650B] my-[auto] text-[20px]">About</li>
                        <li className="cursor-pointer font-semibold hover:text-[#FD650B] my-[auto] text-[20px]">Contact</li>
                        {
                            isAuthenticated ? (
                                <li className="cursor-pointer w-[100px] font-semibold hover:text-[#FD650B] text-[20px]my-auto]">
                                    <button className="bg-[#FD6507]  text-white h-[40px] w-[100px] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] duration-150 ease-out hover:ease-in hover:transition-all" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                </li>
                            ) : (
                                <li className="cursor-pointer w-[100px] font-semibold hover:text-[#FD650B] text-[20px]my-auto ">
                                    <button onClick={() => loginWithRedirect()} className="bg-[#FD6507]  text-white h-[40px] w-[100px] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] duration-150 ease-out hover:ease-in hover:transition-all">Sign In</button>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar;

