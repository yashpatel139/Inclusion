import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
       <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <div className='nav-router bg-indigo-300'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
