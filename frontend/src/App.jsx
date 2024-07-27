import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';


function App() {

  return (
    <>
    <div className='nav-router bg-indigo-300'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
