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
    <nav className="z-50 py-3 backdrop-blur-lg bg-gray-200">
      <div className=" m-2 p-4 bg-indigo-200 rounded-lg">
        <div className="flex justify-between items-center font-semibold text-lg">
          <div className="flex items-center pl-8">
            <img className="h-16 w-18 mr-2 rounded-full" src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo"/>
            <span className="text-2xl tracking-tight">Empowering India</span>
          </div>
          <ul className="lg:flex space-x-8 justify-end pr-8">
            <li>
              <Link to="/" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Contact</Link>
            </li>
            <li>
              <Link to="/goals" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Goals</Link>
            </li>
          
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {user ? (
              <>
                <span className="text-white">Welcome, {user.name}</span>
                <Link to='/profile' className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Profile</Link>
                <button onClick={logout} className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Logout</button>
              </>
            ) : (
              <>
                <Link to='/articles' className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Articles</Link>
                <Link to='/login' className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Login/Signup</Link>
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
