import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const Donate = () => {
  const whatWeDoRef = React.useRef(null);
  const [whatWeDoInView, setWhatWeDoInView] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const rect = whatWeDoRef.current.getBoundingClientRect();
      setWhatWeDoInView(rect.top < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex items-center bg-green-50 py-8 px-4 h-auto min-h-[50vh]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          variants={fadeIn}
          initial="hidden"
          animate={whatWeDoInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          ref={whatWeDoRef}
        >
          <img src="Dona.png" alt="Donate Now" className="w-40 h-40 border-4 border-blue-200 animate-on-scroll md:w-64 md:h-64 object-cover rounded-full shadow-lg" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-left"
          variants={fadeIn}
          initial="hidden"
          animate={whatWeDoInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.3 }}
          ref={whatWeDoRef}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 animate-on-scroll mb-4 leading-tight">
            Help us Make a Difference: Donate Now!
          </h2>
          <p className="text-sm md:text-base animate-on-scroll text-gray-700 mb-4">
            Join us in our mission to empower the underprivileged and forge resilient partnerships. Your generous donation directly supports capacity-building awareness sessions, promotes women's involvement in advocacy, and aids in essential material donations for the community. Together, we can create positive change!
          </p>
        <Link to="/donate" >  <button className="bg-green-500 text-white px-4 animate-on-scroll py-2 rounded-md hover:bg-green-400 hover:scale-105 transition-transform duration-200">
            Donate Now
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;

