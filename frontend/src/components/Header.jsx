import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import logo from '../assets/image.png';

const Header = () => {
  const [mobiledrawerOpen, setmobileDrawerOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleNavbar = () => {
    setmobileDrawerOpen(prevState => !prevState);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-indigo-500">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Inclusion : Empowering India</span>
          </div>
          <ul className="hidden lg:flex space-x-12 justify-center">
            <li>
              <Link to="/" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">Contact</Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {user ? (
              <>
                <span className="text-white">Welcome, {user.name}</span>
                <Link to='/profile' className="py-2 px-3 border rounded-md bg-slate-400">Profile</Link>
                <button onClick={logout} className="bg-gradient-to-r from-indigo-400 to-indigo-800 py-2 px-3 rounded-md">Logout</button>
              </>
            ) : (
              <>
                <Link to='/articles' className="py-2 px-3 border rounded-md bg-slate-400">Articles</Link>
                <Link to='/login' className="bg-gradient-to-r from-indigo-400 to-indigo-800 py-2 px-3 rounded-md">Login / Signup</Link>
              </>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobiledrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobiledrawerOpen && (
          <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                <Link to="/">Home</Link>
              </li>
              <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                <Link to="/about">About</Link>
              </li>
              <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex space-x-6">
              {user ? (
                <>
                  <Link to='/profile' className="py-2 px-3 border rounded-md bg-slate-400">Profile</Link>
                  <button onClick={logout} className="bg-gradient-to-r from-indigo-400 to-indigo-800 py-2 px-3 rounded-md">Logout</button>
                </>
              ) : (
                <>
                  <Link to='/articles' className="py-2 px-3 border rounded-md bg-slate-400">Articles</Link>
                  <Link to='/login' className="bg-gradient-to-r from-indigo-400 to-indigo-800 py-2 px-3 rounded-md">Login / Signup</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
