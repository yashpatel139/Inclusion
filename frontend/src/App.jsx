import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './AuthContext.jsx';
import Articles from './components/Articles';
import Support from './components/Support';
import Body from './components/Body';
import Ourwork from './components/Ourwork.jsx';
import DonHome from './components/DonHome';
import Gallery from './components/Gallery';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='nav-router'>
      <AuthProvider>
        <BrowserRouter>
          <Header />
         
           
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/support' element={<Support/>}/>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path='/articles' element={<Articles/>}/>
            <Route path='/body' element={<Body/>}/>
            <Route path='/goals' element={<Ourwork/>}/>
            <Route path="/donate" element={<DonHome/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;