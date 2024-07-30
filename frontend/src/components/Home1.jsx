import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import CountUp from 'react-countup';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the animation on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(/homeimg.png)` }} // Use the edited image
      >
        <div className="absolute inset-0 flex flex-col items-center text-center bg-blue-50 bg-opacity-30">
          <h1 className="text-3xl mt-12 font-bold text-gray-900 leading-tight animate-on-scroll">
            Empowering Marginalized Communities for a More Inclusive India
          </h1>
          <p className="text-lg text-gray-700 animate-on-scroll mt-4">
            Bridging the gap through awareness, access, and information to create a more equitable society.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
           <Link to="/donate" ><button className="bg-red-500 text-white px-6 py-3 rounded-md transform transition-transform duration-300 hover:bg-red-600 hover:scale-105 animate-on-scroll">
              Donate Now
            </button></Link>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md transform transition-transform duration-300 hover:bg-red-600 hover:scale-105 animate-on-scroll">
              How Can I Help?
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Innovating for a Sustainable and Inclusive Change
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">
            Addressing the digital divide and language barriers to enhance participation and societal involvement.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md mt-8 transform transition-transform duration-300 hover:bg-red-600 hover:scale-105 animate-on-scroll">
            Learn More
          </button>
        </div>
      </div>
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-green-600">
                <CountUp start={0} end={5} duration={4} />
              </h3>
              <h3 className="text-xl mt-2 leading-tight font-bold">States</h3>
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-green-600">
                <CountUp start={0} end={100} duration={4} />+
              </h3>
              <h3 className="text-xl mt-2 leading-tight font-bold">Districts</h3>
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-green-600">
                <CountUp start={0} end={3111359} duration={4} />+
              </h3>
              <h3 className="text-xl mt-2 leading-tight font-bold">Beneficiaries</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around bg-white py-10 gap-4">
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="pov1.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="Hun.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="Save.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="Educ.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="Gender.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="Econ.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="redu.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-110">
    <img src="resp.jpg" alt="Card Image" className="w-full h-full object-cover" />
  </div>
</div>

    </div>
  );
};

export default HomePage;
