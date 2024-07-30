import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../AuthContext';

const Header = () => {
//   const [mobiledrawerOpen, setmobileDrawerOpen] = useState(false);
  const { user, logout } = useAuth();

//   const toggleNavbar = () => {
//     setmobileDrawerOpen(prevState => !prevState);
//   };

  return (
    <nav className="z-50 py-3 bg-white">
      <div className=" m-2 p-4 bg-indigo-200 rounded-lg">
        <div className="flex justify-between items-center font-semibold text-lg">
         <Link to="/"> <div className="flex items-center pl-8">
            <img className="h-16 w-18 mr-2 rounded-full" src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo"/>
            <span className="text-2xl tracking-tight">Empowering India</span>
          </div>
          </Link>
          <ul className="lg:flex space-x-8 justify-end pr-8">
  <li className="relative group">
    <Link 
      to="/" 
      className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
    >
      Home
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
  <li className="relative group">
    <Link 
      to="/about" 
      className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
    >
      About
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
  <li className='relative group'>
  <Link 
          to='/articles' 
          className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
        >
          Articles
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
  </li>
  <li className="relative group">
    <Link 
      to="/goals" 
      className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
    >
      Goals
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
  <li className="relative group">
    <Link 
      to="/gallery" 
      className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
    >
      Gallery
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
  <li className="relative group">
    <Link 
      to="/contact" 
      className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
    >
      Contact
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
  <div className="hidden lg:flex justify-center space-x-12 items-center">
    {user ? (
      <>
        <span className="text-white">Welcome, {user.name}</span>
        <li className='relative group'>
        <Link 
          to='/profile' 
          className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
        >
          Profile
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        </li>
        <li className='relative group'>
        <button 
          onClick={logout} 
          className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
        >
          Logout
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>
        </li>
      </>
    ) : (
      <>
       
        <Link 
          to='/login' 
          className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
        >
          Login/Signup
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </>
    )}
  </div>
</ul>

      </div>
      </div>
    </nav>
  );
};

export default Header;
