import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const About = () => {
    const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: whatWeDoRef, inView: whatWeDoInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: teamMembersRef, inView: teamMembersInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div>
            {/* Our Vision Section */}
            <section className="h-screen flex items-center bg-blue-50 py-16 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <motion.div 
                        className="md:w-1/2 text-left"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={visionRef}
                    >
                        <h2 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
                            Our Vision
                            <motion.img 
                                src="vis.jpg" 
                                alt="Vision Logo" 
                                className="inline-block w-16 h-16 rounded-full object-cover shadow-xl border-4 border-blue-200 ml-4 mb-4 "
                                variants={fadeIn}
                                initial="hidden"
                                animate={visionInView ? "visible" : "hidden"}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We aim to bridge gaps for marginalized communities by streamlining access to vital government schemes, donation opportunities, and NGO support. By consolidating social work resources and overcoming barriers like digital divides and language constraints, we strive to empower individuals and foster a more inclusive and equitable future.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={visionRef}
                    >
                        <img src="incl.avif" alt="Our Vision" className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="h-screen flex items-center bg-white py-12 px-6">
                <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                    <motion.div 
                        className="md:w-1/2 text-left"
                        variants={fadeIn}
                        initial="hidden"
                        animate={whatWeDoInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={whatWeDoRef}
                    >
                        <h2 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
                            What We Do
                            <motion.img 
                                src="we.jpg" 
                                alt="What We Do Logo" 
                                className="inline-block w-16 h-16 rounded-full object-cover shadow-lg border-4 border-blue-200 ml-4 mb-4"
                                variants={fadeIn}
                                initial="hidden"
                                animate={whatWeDoInView ? "visible" : "hidden"}
                                transition={{ duration: 1, delay: 0.3 }}
                            />
                        </h2>
                        <div className="space-y-6">
                            {[
                                { number: 1, title: "Easy Access to Information", description: "We streamline access to crucial information, making it straightforward for marginalized communities to locate necessary resources." },
                                { number: 2, title: "Comprehensive Resource Hub", description: "Our platform serves as a central resource for information on government schemes, financial services, and social/NGO support." },
                                { number: 3, title: "Community Connection", description: "We enable connections between individuals and community support opportunities, fostering meaningful engagement." },
                                { number: 4, title: "Broad Range of Services", description: "Our services address various needs, from financial advice to social support, providing holistic solutions for different challenges." }
                            ].map((item, index) => (
                                <motion.div 
                                    className="flex items-start space-x-4"
                                    key={index}
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate={whatWeDoInView ? "visible" : "hidden"}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{item.number}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-lg text-gray-700">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2 mt-4 md:mt-0 flex justify-center"
                        variants={fadeIn}
                        initial="hidden"
                        animate={whatWeDoInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.5 }}
                        ref={whatWeDoRef}
                    >
                        <img src="do.png" alt="What We Do" className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-200" />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-12 px-6">
                <div className="container mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        variants={fadeIn}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={featuresRef}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Government Schemes", description: "Comprehensive information about various government schemes.", path: "gov1.jpg" },
                                { title: "Financial Services", description: "Information on micro loans, savings programs, and financial advice.", path: "FinSer.jpg" },
                                { title: "Social/NGO", description: "Access to healthcare, education resources, legal aid, and other support through NGOs.", path: "ngo.jpg" },
                                { title: "Community Help", description: "Opportunities for volunteering and donating, plus a forum for sharing stories and advice.", path: "comh.jpg" },
                                { title: "Multilingual Support", description: "Support for multiple languages to overcome language barriers.", path: "mul.webp" },
                                { title: "Real-time Communication", description: "Real-time communication tools to connect with support services.", path: "real.webp" },
                                { title: "Skill Development", description: "Access to online courses, workshops, and training programs aimed at enhancing skills and improving employability for marginalized communities.", path: "skill.jpg" },
                                { title: "Personalized Recommendations", description: "Customized resource suggestions based on user profiles and needs, ensuring relevant support and information are easily accessible.", path: "prec.png" },
                                { title: "Localized Services", description: "Information on local services and support tailored to specific regions, ensuring that users find resources close to their location.", path: "loc.jpg" },
                                
                            ].map((feature, index) => (
                                <motion.div 
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
                                    key={index}
                                    variants={scaleUp}
                                    initial="hidden"
                                    animate={featuresInView ? "visible" : "hidden"}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                    <img src={feature.path} className="w-full h-32 object-cover rounded-md mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="bg-blue-50 py-12 px-6">
                <div className="container mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        variants={fadeIn}
                        initial="hidden"
                        animate={teamMembersInView ? "visible" : "hidden"}
                        transition={{ duration: 1 }}
                        ref={teamMembersRef}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Team Members</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: "Manu Saini", title: "Full Stack Developer", image: "manu.jpeg" },
                                { name: "Yash Patel", title: "Full Stack Developer", image: "manu.jpeg" },
                                { name: "Kunal Singh", title: "Full Stack Developer", image: "manu.jpeg" },
                                { name: "Bhoopendra Singh", title: "Full Stack Developer", image: "manu.jpeg" },
                                // Add more team members as needed
                            ].map((member, index) => (
                                <motion.div 
                                    className="bg-gray-50 p-6 rounded-lg shadow-md"
                                    key={index}
                                    variants={scaleUp}
                                    initial="hidden"
                                    animate={teamMembersInView ? "visible" : "hidden"}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                    <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-gray-700">{member.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
