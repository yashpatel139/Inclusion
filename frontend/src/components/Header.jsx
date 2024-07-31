import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const authtoken = localStorage.getItem('token');
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-50 py-3 bg-white relative">
      <div className="m-2 p-4 bg-indigo-200 rounded-lg">
        <div className="flex justify-between items-center font-semibold text-lg">
          <Link to="/">
            <div className="flex items-center pl-8">
              <img
                className="h-16 w-18 mr-2 rounded-full"
                src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Logo"
              />
              <span className="text-2xl tracking-tight">Empowering India</span>
            </div>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul className="lg:flex lg:space-x-8 lg:justify-end lg:pr-8 hidden lg:relative lg:flex-row">
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
            <li className="relative group">
              <Link
                to="/articles"
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
            {authtoken ? (
              <li className="relative group">
                <button
                  onClick={logout}
                  className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Logout
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </li>
            ) : (
              <li className="relative group">
                <Link
                  to="/login"
                  className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Login/Signup
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute left-0 right-0 mt-3 bg-indigo-200 z-40 flex flex-col items-center space-y-4 py-4">
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/about"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/articles"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              Articles
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/goals"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              Goals
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/gallery"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group w-full bg-indigo-100 text-center py-2">
            <Link
              to="/contact"
              className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              onClick={toggleMenu}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          {authtoken ? (
            <li className="relative group w-full bg-indigo-100 text-center py-2">
              <button
                onClick={logout}
                className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
              >
                Logout
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </li>
          ) : (
            <li className="relative group w-full bg-indigo-100 text-center py-2">
              <Link
                to="/login"
                className="relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                onClick={toggleMenu}
              >
                Login/Signup
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
