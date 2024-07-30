import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const fadeOut = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const Ourwork = () => {
    const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: healthRef, inView: healthInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: indiaRef, inView: indiaInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: eduRef, inView: eduInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ngoRef, inView: ngoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div>
            <div className=" w-full flex justify-center font-bold text-5xl bg-gradient-to-r from-red-300 to-orange-400 py-4 ">
                OUR GOALS
            </div>
            <section className="flex items-center p-10 min-h-96 bg-green-100 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={visionRef}
                    >
                        <motion.img
                            src="leaf.png"
                            alt="Vision Logo"
                            className="inline-block w-12 h-12 md:w-16 md:h-16 "
                            variants={fadeIn}
                            initial="hidden"
                            animate={visionInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Environment
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            At Inclusion: Empowering India, we're dedicated to sustainability. We balance nature preservation with eco-friendly innovation. Our mission is simple yet powerful: we revisit, review, reuse, and resume, ensuring our practices reflect nature's wisdom while meeting human needs.                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeOut}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={visionRef}
                    >
                        <img src="environment.jpg" alt="Our Vision" className="w-48 h-48 md:w-64 md:h-64 rounded-md object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>

            {/* health */}

            <section className="flex items-center  p-10 min-h-96 bg-red-100">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={healthInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={healthRef}
                    >
                        <img src="doctor.jpg" alt="Our Vision" className="w-48 h-48 md:w-64 md:h-64 rounded-md object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeOut}
                        initial="hidden"
                        animate={healthInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={healthRef}
                    >
                        <motion.img
                            src="cylinder.png"
                            alt="Vision Logo"
                            className="inline-block w-15 h-10 md:w-16 md:h-16 ml-4 mb-4 "
                            variants={fadeOut}
                            initial="hidden"
                            animate={healthInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Health & Hygiene
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            At Inclusion: Empowering India, we firmly believe that a healthy community is the cornerstone of a thriving society. Our unwavering commitment to reshaping healthcare is founded on the principles of quality and accessibility.                        </p>
                    </motion.div>

                </div>
            </section>
            {/* skill and community */}

            <section className="flex items-center bg-purple-100 min-h-96 p-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeIn}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={featuresRef}
                    >
                        <motion.img
                            src="lady2.png"
                            alt="Vision Logo"
                            className="inline-block w-12 h-12 md:w-16 md:h-16  "
                            variants={fadeIn}
                            initial="hidden"
                            animate={featuresInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Skill & Community
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            At Inclusion: Empowering India, our Skill and Community Development initiative will paves the way for our rural and poor communities allies to thrive by equipping them with the essential life skills needed for prosperity. When it comes to skilling, we believe in more than just imparting training; we're committed to helping them find opportunities to make the most of their training. Our equation is simple:

                            Skill Development + Community Development = Total Empowerment, and this is our guiding philosophy.

                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeOut}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={featuresRef}
                    >
                        <img src="lady.jpg" alt="Our Vision" className="w-48 h-48 md:w-64 md:h-64 rounded-md object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>

            {/* education */}

            <section className="flex items-center  p-10 min-h-96 bg-red-100 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={eduInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={eduRef}
                    >
                        <img src="pratham.jpg" alt="Our Vision" className="w-48 h-48 md:w-64 md:h-64 rounded-md object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeOut}
                        initial="hidden"
                        animate={eduInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={eduRef}
                    >
                        <motion.img
                            src="book.png"
                            alt="Vision Logo"
                            className="inline-block w-15 h-10 md:w-16 md:h-16 ml-4 mb-4 "
                            variants={fadeOut}
                            initial="hidden"
                            animate={eduInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Education
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            At Inclusion: Empowering India, we firmly believe that a Educated community is the cornerstone of a thriving society. Our unwavering commitment to reshaping Education is founded on the principles of quality and accessibility.                        </p>
                    </motion.div>

                </div>
            </section>

            {/*ngo  */}

            <section className="flex items-center bg-purple-100 min-h-96 p-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-0"
                        variants={fadeIn}
                        initial="hidden"
                        animate={ngoInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={ngoRef}
                    >
                        <motion.img
                            src="trust.png"
                            alt="Vision Logo"
                            className="inline-block w-12 h-12 md:w-16 md:h-16  "
                            variants={fadeIn}
                            initial="hidden"
                            animate={ngoInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            NGOs & Organisations
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Empowering communities through philanthropy. Various NGOs Trusts work to address key challenges facing marginalized communities by providing grants and engaging in development projects. Their focus includes health, education, and rural development across India.
                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeOut}
                        initial="hidden"
                        animate={ngoInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={ngoRef}
                    >
                        <img src="nggos.jpg" alt="Our Vision" className="w-48 h-48 md:w-64 md:h-64 rounded-md object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>


            {/* heading */}

            <h1 className=" w-full flex justify-center font-bold text-5xl bg-gradient-to-r from-red-300 to-orange-400 p-4">
                OUR PREDICTED FUTURE PRESENCE
            </h1>

            {/* india */}

            <section className="flex items-center  p-6 min-h-screen bg-orange-100">
                <div className="container h-1/2 mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="flex flex-col w-1/2 py-5 pl-5">
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={indiaRef}
                    >
                        <h1 className="text-sm md:text-2xl font-bold mb-6 leading-tight text-yellow-400">
                            Gujarat
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Thematic Areas
                            Environment
                            Health & Hygiene
                            Skill & Community Development
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={indiaRef}
                    >
                        <h1 className="text-sm md:text-2xl font-bold mb-6 leading-tight text-red-400">
                            Rajasthan
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Thematic Areas
                            Environment
                            Health & Hygiene
                            Skill & Community Development
                        </p>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={indiaRef}
                    >
                        <h1 className="text-sm md:text-2xl font-bold mb-6 leading-tight text-cyan-400">
                            Himachal Pradesh
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Thematic Areas
                            Environment
                            Health & Hygiene
                            Skill & Community Development
                        </p>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={indiaRef}
                    >
                        <h1 className="text-sm md:text-2xl font-bold mb-6 leading-tight text-green-400">
                            Jammu & Kashmir
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Thematic Areas
                            Environment
                            Health & Hygiene
                            Skill & Community Development
                        </p>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 text-left mb-8 md:mb-6"
                        variants={fadeIn}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={indiaRef}
                    >
                        <h1 className="text-sm md:text-2xl font-bold mb-6 leading-tight text-purple-400">
                            Maharashtra
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Thematic Areas
                            Environment
                            Health & Hygiene
                            Skill & Community Development
                        </p>
                    </motion.div>
                    </div>

                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={fadeOut}
                        initial="hidden"
                        animate={indiaInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={indiaRef}
                    >
                        <img src="india.png" alt="Our Vision" className="w-full h-full " />
                    </motion.div>
                </div>
            </section>
            <img src="bg.png" alt="bg" className="w-full h-32" />

        </div>
    )
}

export default Ourwork;