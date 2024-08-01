import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import logo from '../assets/image.png'; // Import the local image
import { useAuth } from '../AuthContext'; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Access the login method from the context

  // Load stored email and password if 'Remember Me' was checked
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedRememberMe) {
      setEmail(storedEmail || '');
      setPassword(storedPassword || '');
      setRememberMe(storedRememberMe);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://inclusion-backend.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result)
      console.log("------>>>>>",result.userInfo)
      console.log(result.auth)
        // Handle successful login
        if (result.auth) {
          // Update authentication context
          // login({ token: result.token, email });
          localStorage.setItem("token", JSON.stringify(result.auth));

          // Decide storage based on 'Remember Me' checkbox
          if (rememberMe) {
            // localStorage.setItem('authToken', result.auth); // Store in localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('rememberMe', 'true');
          } else {
            // sessionStorage.setItem('authToken', result.token); // Store in sessionStorage
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
          }

          // Redirect to home page
          navigate('/');
        } else {
          setError(result.message );
        }
     
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/login3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darker Overlay */}
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <div className="mb-4 flex justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Signup logo"
            className="w-28 h-18 rounded-l-full rounded-r-full object-cover" // Adjust size and rounded corners
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-black"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 pr-10 text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 mt-6" aria-hidden="true" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 mt-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-black">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 border border-purple-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 hover:border-purple-700 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-600 text-center mt-4" style={{ color: '#ff0000' }}>{error}</p>}
        </form>
        <div className="mt-4 flex flex-col items-center">
          <Link to="/forgot-password" className="text-purple-900 hover:text-purple-700">
            Forgot Password?
          </Link>
          <p className="mt-2 text-sm text-black">
            Don't have an account? <Link to="/signup" className="text-purple-900 hover:text-purple-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
