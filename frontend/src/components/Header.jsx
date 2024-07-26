import {Menu,X,SunSnow,Biohazard} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/image.png";
const Header = ()=>{
    const [mobiledrawerOpen, setmobileDrawerOpen] = useState(false);
    const toggleNavbar = () =>{
        setmobileDrawerOpen(!mobiledrawerOpen);
    };
    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-indigo-500">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo"></img>
                        <span className="text-xl tracking-tight">Inclusion : Empowering India</span>
                    </div>
                    <ul className="hidden lg:flex  space-x-12 justify-center">
                        <li><a href="/" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >home</a></li>
                        <li><a href="/about" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >about</a></li>
                        <li><a href="/contect" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >contact</a></li>
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <Link to='/articles' className="py-2 px-3 border rounded-md bg-slate-400">Articles</Link>
                        <Link to='/login' className="bg-gradient-to-r from-indigo-400 to-indigo-800 py-2 px-3 rounded-md">Login / Signup</Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobiledrawerOpen?<X/>:<Menu/>}
                        </button>
                    </div>
                </div>
                {mobiledrawerOpen && (
                    <div className="fixed right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><a href="/" >home</a></li>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><a href="/about" >about</a></li>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><a href="/contect" >contact</a></li>
                        </ul>
                        <div className="flex space-x-6">
                        <Link to='/articles' className="py-2 px-3 border rounded-md bg-slate-400">Articles</Link>
                        <Link to='/login' className="bg-gradient-to-r from-indigo-400 to-indigo-800  py-2 px-3 rounded-md">Login / Signup</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;