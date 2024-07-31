import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, confirmpassword: confirmPassword }),
      });

      const result = await response.json();
      console.log(result);
      console.log(result.auth);
      
      if (result.auth) {
        localStorage.setItem("token", JSON.stringify(result.auth));
        // setSuccess(result.message);
        navigate('/');
      } else {
        setError(result.message);
      }
      
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/login3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darker Overlay */}
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {/* Logo Image */}
        <div className="mb-4 flex justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.VBYvbPBeY-IRDIC4GD2aCgHaE4?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Signup logo"
            className="w-28 h-18 rounded-l-full rounded-r-full object-cover" // Adjust size and rounded corners
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-black">Signup</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-black"
              required
            />
          </div>
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
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 pr-10 text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeIcon className="h-5 w-5 mt-6" aria-hidden="true" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 mt-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 border border-purple-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 hover:border-purple-700 transition duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
        <div className="mt-4 flex flex-col items-center">
          <p className="text-sm text-black">
            Already have an account? <a href="/login" className="text-purple-900 hover:text-purple-700">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
