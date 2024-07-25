import React from "react";
const Header=()=>{
    return (
    <div>
    <div className="list-none bg-slate-500 text-white font-semibold text-lg py-4 flex justify-between items-center" >
        <div className="flex items-center">
        <img className="h-28 w-44 ml-8 border-rounded rounded-lg" src="https://th.bing.com/th/id/OIP._13xQ9Qpuf7QY73Wz8bt4QAAAA?rs=1&pid=ImgDetMain"/>
        <h1 className="text-4xl font-bold text-yellow-200 ml-4">Empowering India</h1>
        </div>
        <ul className="flex space-x-5 mr-8">
            <li>
                Home
            </li>
            <li>
                Contact
            </li>
            <li>
                About
            </li>
            <li>
                Profile
            </li>
        </ul>
        
    </div>
    </div>
    )
}
export default Header;
