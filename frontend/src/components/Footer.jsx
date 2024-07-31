import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }
  return (
    <>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://www.facebook.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition duration-300">
              <img src='https://img.icons8.com/?size=48&id=118497&format=png' alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" className="text-gray-600 hover:text-pink-600 transform hover:scale-110 transition duration-300">
              <img src='https://img.icons8.com/?size=48&id=32323&format=png' alt="Instagram" />
            </a>
            <a href="https://www.X.com" className="text-gray-600 hover:text-blue-400 transform hover:scale-110 transition duration-300">
              <img src='https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png' alt="Twitter" />
            </a>
            <a href="https://www.youtube.com" className="text-gray-600 hover:text-red-600 transform hover:scale-110 transition duration-300">
              <img src='https://img.icons8.com/?size=48&id=19318&format=png' alt="YouTube" />
            </a>
            <a href="https://www.LinkedIn.com" className="text-gray-600 hover:text-blue-700 transform hover:scale-110 transition duration-300">
              <img src='https://img.icons8.com/?size=48&id=13930&format=png' alt="LinkedIn" />
            </a>
          </div>
          <div className="flex justify-center space-x-8 text-center">
            <div className="border-r border-gray-300 pr-8">
              <h4 className="text-gray-800 font-futura font-semibold mb-2">GET TO KNOW US</h4>
              <ul>
                <li ><Link to="/about" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/goals" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Our Goals</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Our Board</Link></li>
              </ul>
            </div>
            <div className="border-r border-gray-300 pr-8 pl-8">
              <h4 className="text-gray-800 font-futura font-semibold mb-2">THE DETAILS</h4>
              <ul>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Mission & Vision</Link></li>
                <li><Link to="/goals" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Our Presence</Link></li>
                <li><Link to="/goals" className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Our Work</Link></li>
              </ul>
            </div>
            <div className="pl-8">
              <h4 className="text-gray-800 font-futura font-semibold mb-2">CONNECT</h4>
              <ul>
                <li><Link to="/contact"onClick={scrollToTop} className="text-gray-600 hover:text-gray-800">Contact Us</Link></li>
                <li><a className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Partner with Us</a></li>
                <li><a className="text-gray-600 hover:text-gray-800" onClick={scrollToTop}>Internship Opportunities</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <div className='bg-green-50 font-semibold text-gray-500 text-center w-full py-3 text-sm'>
          <p>Copyrights &copy; 2024 | All Rights Reserved</p>
          <p>Designed by Web Wizards</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
