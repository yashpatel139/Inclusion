import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }
  const scrollToDown=()=>{
    window.scrollTo(0, document.body.scrollHeight);
  }
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
        <Link to="/about" onClick={scrollToTop}><button className="bg-red-500 text-white px-6 py-3 rounded-md mt-8 transform transition-transform duration-300 hover:bg-red-600 hover:scale-105 animate-on-scroll">
            Learn More
          </button></Link> 
        </div>
      </div>
      <section className="py-12 px-6 bg-gray-100">
            <div className="container mx-auto ">
                <h2 className="text-3xl font-bold text-center mr-14 mb-8">OUR FOCUS</h2>
                <div className="flex overflow-x-auto space-x-8 pb-4 px-10 ">
                    
                    {/* Card 1: Multilingual Support */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-64 transform transition-transform hover:scale-105 cursor-pointer animate-fadeInUp animate-on-scroll" onClick={scrollToDown}>
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 4v16l11-8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
                    </div>

                    {/* Card 2: Government Scheme */}
                  <Link to="/govt" onClick={scrollToTop}> <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-64 transform transition-transform hover:scale-105 cursor-pointer animate-fadeInUp animate-on-scroll">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a6 6 0 0 0-6 6v4H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v4a6 6 0 0 0 12 0v-4h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v6H8V8a4 4 0 0 1 4-4zm-4 8h8v2H8v-2zm-2 4v-2h12v2a4 4 0 0 1-8 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Government Scheme</h3>
                    </div>
                    </Link> 

                    {/* Card 3: NGO's */}
                    <Link to="/body" onClick={scrollToTop}>  <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-64 transform transition-transform hover:scale-105 cursor-pointer animate-fadeInUp animate-on-scroll">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3v18l9-9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">NGO's</h3>
                    </div>
                    </Link> 
               
                    {/* Card 5: Localised Support */}
                  <Link to="/local" onClick={scrollToTop}> <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-64 transform transition-transform hover:scale-105 cursor-pointer animate-fadeInUp animate-on-scroll ">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4a2 2 0 0 0-2 2v6H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v6a2 2 0 0 0 4 0v-6h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2zm-2 4h4v8h-4V8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Localised Support</h3>
                    </div></Link> 

                    {/* Card 6: Community Help */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-64 transform transition-transform hover:scale-105 cursor-pointer animate-fadeInUp animate-on-scroll">
                        <div className="mb-4">
                            <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 0 0-10 10v4h2v-4a8 8 0 0 1 16 0v4h2v-4a10 10 0 0 0-10-10zm-2 4h4v8h-4V8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community Help</h3>
                    </div>

                </div>
            </div>
        </section>
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
