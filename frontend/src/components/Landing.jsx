import React, { useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  useEffect(() => {
    const solutionCard = document.getElementById('solution');
    const missionCard = document.getElementById('mission');
    const visionCard = document.getElementById('vision');

    setTimeout(() => {
      solutionCard.classList.add('visible');
    }, 500);

    setTimeout(() => {
      missionCard.classList.add('visible');
    }, 1000);

    setTimeout(() => {
      visionCard.classList.add('visible');
    }, 1000);
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center overflow-hidden m-auto">
    
        <div className="relative flex flex-col items-center justify-center h-full px-4">
        <div id="solution" className="card bg-indigo-200 shadow-lg p-6 mb-4 transform opacity-0 translate-y-12 transition duration-1000 ease-in-out">
        <h2 className="text-2xl font-bold mb-4 text-center">Solution</h2>
        <p className='font-semibold text-lg'>Developing a comprehensive, multilingual website that offers educational resources, access to services, community support, job opportunities, and digital literacy programs can empower these communities by providing the information and tools they need to improve their socio-economic status.</p>
      </div>
      <div className="bottom-section flex justify-between">
        <div id="mission" className="bg-yellow-100 card w-full shadow-lg p-6 transform opacity-50 -translate-x-full transition duration-1000 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Mission</h2>
          <p className='font-semibold text-lg'>To bridge the digital divide and eliminate language barriers by providing a platform that offers accessible information, educational resources, and support services, thereby empowering marginalized communities to achieve socio-economic advancement.</p>
        </div>
        
        <div id="vision" className="card w-full bg-yellow-100 shadow-lg p-6 transform opacity-50 translate-x-full transition duration-1000 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-center">Vision</h2>
          <p className='font-semibold text-lg'>To create an inclusive society where marginalized communities have equal access to information, resources, and opportunities, enabling them to participate fully in all aspects of life.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Landing;
