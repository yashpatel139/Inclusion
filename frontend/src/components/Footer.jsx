import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com" className="text-gray-600"><img src='https://img.icons8.com/?size=48&id=118497&format=png' className="fab fa-facebook-f"></img></a>
          <a href="https://www.instagram.com" className="text-gray-600"><img src='https://img.icons8.com/?size=48&id=32323&format=png' className="fab fa-instagram"></img></a>
          <a href="https://www.X.com" className="text-gray-600"><img src='https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png' className="fab fa-twitter"></img></a>
          <a href="https://www.youtube.com" className="text-gray-600"><img src='https://img.icons8.com/?size=48&id=19318&format=png' className="fab fa-youtube"></img></a>
          <a href="https://www.LinkedIn.com" className="text-gray-600"><img src='https://img.icons8.com/?size=48&id=13930&format=png' className="fab fa-linkedin-in"></img></a>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded">Donate Now</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded">How can I help?</button>
        </div>
        <div className="flex justify-center space-x-8 text-center">
          <div>
            <h4 className="font-bold mb-2">GET TO KNOW US</h4>
            <ul>
              <li><Link to="/about" className="text-gray-600">About Us</Link></li>
              <li><a className="text-gray-600">Our Story</a></li>
              <li><Link to="/about" className="text-gray-600">Our Board</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">THE DETAILS</h4>
            <ul>
              <li><a className="text-gray-600">Mission & Vision</a></li>
              <li><a className="text-gray-600">Our Presence</a></li>
              <li><Link to="/goals" className="text-gray-600">Our Work</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">CONNECT</h4>
            <ul>
              <li><Link to="/contact" className="text-gray-600">Contact Us</Link></li>
              <li><a className="text-gray-600">Partner with Us</a></li>
              <li><a className="text-gray-600">Internship Opportunities</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
    <div>
        <div className='bg-green-50 text-center w-full py-5 text-lg'>
            <p>Copyrights &copy; 2024 | All Rights Reserved</p>
            <p>Designed by Web Wizards</p>
        </div>
    </div>
    </>
  );
}

export default Footer;
