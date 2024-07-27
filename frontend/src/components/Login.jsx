import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleGoogleLogin = (response) => {
    // Handle Google login response here
    console.log(response);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-200 via-indigo-300 to-purple-300">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Google Login Button */}
        <div className="mb-4">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error('Google login error:', error)}
            logo={<img src="/google.svg" alt="Google logo" className="h-6 w-6" />}
            buttonText="Login with Google"
            className="w-full max-w-xs flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 mx-auto"
          />
        </div>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="text-gray-500">OR</span>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
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
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex flex-col items-center">
          <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700">
            Forgot Password?
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
