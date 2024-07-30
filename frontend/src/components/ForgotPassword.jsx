import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    setMessage('If an account with that email exists, you will receive a password reset link.');
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/login3.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darker Overlay */}
      <div className="relative w-full max-w-md p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleForgotPassword} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded-md text-center">
            {message}
          </div>
        )}
        <div className="mt-4 flex flex-col items-center">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
