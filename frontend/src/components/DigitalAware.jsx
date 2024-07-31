import React from 'react'
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

const DigitalAware = () => {
    const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: whatWeDoRef, inView: whatWeDoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: teamMembersRef, inView: teamMembersInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const { ref: providingRef, inView: providingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: awarenessRef, inView: awarenessInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div>
            <section className="bg- py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <motion.h2
                            className="text-4xl p-1 rounded-md font-bold text-orange-600"
                            variants={slideInFromLeft}
                            initial="hidden"
                            animate={providingInView ? "visible" : "hidden"}
                            transition={{ duration: 1 }}
                            ref={providingRef}
                        >
                            What we are Providing is
                        </motion.h2>
                        <div className="bg-white p-2 rounded">
                            <img src="arr2.png" className="w-20 h-20 opacity-50" style={{ animation: 'fadeIn 2s forwards infinite', animationDelay: '1s' }} />
                        </div>
                        <motion.h2
                            className="text-4xl p-1 rounded-md font-bold mb-4 text-gray-700"
                            variants={slideInFromRight}
                            initial="hidden"
                            animate={awarenessInView ? "visible" : "hidden"}
                            transition={{ duration: 1 }}
                            ref={awarenessRef}
                        >
                            Digital Awareness
                        </motion.h2>
                    </div>

                    <motion.div 
                        className="text-center mb-12"
                        variants={fadeIn}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={featuresRef}
                    >                  
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Government Schemes", description: "Comprehensive information about various government schemes.", image: "gov1.jpg" , path: "/govt"},
                                { title: "Social/NGO", description: "Access to healthcare, education resources, legal aid, and other support through NGOs.", image: "ngo.jpg" , path:"/body"},
                                { title: "Articles", description: "Information on micro loans, savings programs, and financial advice.", image: "art6.jpg", path:"/articles" },
                            ].map((feature, index) => (
                                <Link to={feature.path} key={index}>
                                    <motion.div 
                                        className="p-6 bg-white rounded-lg border-2 border-gray-300 shadow-lg hover:bg-green-100 cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300"
                                        variants={scaleUp}
                                        initial="hidden"
                                        animate={featuresInView ? "visible" : "hidden"}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                    >
                                        <img src={feature.image} alt={feature.title} className="w-full h-60 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">{feature.title}</h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DigitalAware;
