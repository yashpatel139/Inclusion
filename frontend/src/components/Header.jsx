import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="z-50 py-3 backdrop-blur-lg bg-gray-200">
      <div className="m-2 p-4 bg-indigo-200 rounded-lg">
        <div className="flex justify-between items-center font-semibold text-lg">
          <div className="flex items-center pl-8">
            <img
              className="h-16 w-18 mr-2 rounded-full"
              src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Logo"
            />
            <span className="text-2xl tracking-tight">Empowering India</span>
          </div>
          <div className="flex flex-1 items-center justify-between px-8">
            <ul className="hidden lg:flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/goals"
                  className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Goals
                </Link>
              </li>
            </ul>
            <div className="hidden lg:flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to="/articles"
                    className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                  >
                    Articles
                  </Link>
                  <span className="text-white" style={{ color: '#009933' }} >Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text transition-colors duration-300 px-4 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/articles"
                    className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                  >
                    Articles
                  </Link>
                  <Link
                    to="/login"
                    className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                  >
                    Login/Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
