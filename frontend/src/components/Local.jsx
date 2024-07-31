import React, { useEffect } from 'react';
import 'animate.css'; // Make sure you have installed 'animate.css'

const Local = () => {
  useEffect(() => {
    // Scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to check for elements already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Localised Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Local Resources */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 4v16l11-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Resources</h3>
              <p className="text-gray-600">Find nearby resources such as food banks, shelters, and community centers that offer support.</p>
            </div>

            {/* Card 2: Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a6 6 0 0 0-6 6v4H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v4a6 6 0 0 0 12 0v-4h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v6H8V8a4 4 0 0 1 4-4zm-4 8h8v2H8v-2zm-2 4v-2h12v2a4 4 0 0 1-8 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-600">Access important contact information for local services, including emergency hotlines and support centers.</p>
            </div>

            {/* Card 3: Legal Aid */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v18l9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legal Aid</h3>
              <p className="text-gray-600">Get information about local legal aid services that can assist with various legal issues.</p>
            </div>

            {/* Card 4: Educational Programs */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-10 10v4h2v-4a8 8 0 0 1 16 0v4h2v-4a10 10 0 0 0-10-10zm-2 4h4v8h-4V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Programs</h3>
              <p className="text-gray-600">Find local educational programs and resources designed to help individuals improve their skills and knowledge.</p>
            </div>

            {/* Card 5: Health Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4a2 2 0 0 0-2 2v6H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v6a2 2 0 0 0 4 0v-6h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2zm-2 4h4v8h-4V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Services</h3>
              <p className="text-gray-600">Access information about local health services, including clinics and mental health support.</p>
            </div>

            {/* Card 6: Employment Support */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer animate-on-scroll">
              <div className="mb-4">
                <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-10 10v4h2v-4a8 8 0 0 1 16 0v4h2v-4a10 10 0 0 0-10-10zm-2 4h4v8h-4V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Employment Support</h3>
              <p className="text-gray-600">Find local employment support services that can assist with job search, resume building, and interview preparation.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Local;
