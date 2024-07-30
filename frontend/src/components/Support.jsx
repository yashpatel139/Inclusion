import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


const Support = () => {
    const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div>
            <section className="flex items-center bg-blue-50 py- 8px-6 min-h-screen">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={visionRef}
                    >
                        <img src="donation.jpg" alt="Our Vision" className="w-60 h-60 md:w-64 md:h-64  object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={visionRef}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
                            Support Our Project
                            <motion.img
                                src="charity.png"
                                alt="Vision Logo"
                                className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-xl border-4 border-blue-200 ml-4 mb-4 "
                                variants={fadeIn}
                                initial="hidden"
                                animate={visionInView ? "visible" : "hidden"}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            If you're a funding agency, donor, or potential supporter interested in learning more about a specific project and exploring ways to join hands with us, we welcome your inquiries at Ashray Foundation. We value your commitment to making a positive impact, and we're excited to discuss how your support can help our initiatives thrive.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="flex items-center bg-blue-50 py-8 px-6 min-h-screen">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={visionRef}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
                            How to Inquire:
                            <motion.img
                                src="charity.png"
                                alt="Vision Logo"
                                className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-xl border-4 border-blue-200 ml-4 mb-4 "
                                variants={fadeIn}
                                initial="hidden"
                                animate={visionInView ? "visible" : "hidden"}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        To inquire about a particular project and discuss potential avenues for support, please reach out to us at <strong>contact us </strong> . We are eager to share project details, goals, and opportunities for collaboration. Your support can make a significant difference in our mission to create a better, more sustainable future.
                        </p>
                        <p>
                        Join us in our efforts to bring about positive change, and let's explore how we can work together to achieve our shared goals. We look forward to hearing from you and discussing the possibilities of a partnership that makes a real impact.
                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={visionRef}
                    >
                        <img src="inquire.jpg" alt="Our Vision" className="w-60 h-60 md:w-64 md:h-64  object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Support;