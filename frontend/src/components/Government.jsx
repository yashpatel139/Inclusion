import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Government = () => {
    const { ref: schemesRef, inView: schemesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

const schemes = [
        // Your scheme data here
        {
            id: 1,
            title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
            Purpose: 'Financial inclusion by ensuring access to financial services',
            description: 'The main objective of PMJDY is to ensure that every Indian has access to basic financial services such as a savings account, debit card and insurance. This would help to curb financial exclusion and promote inclusive growth. PMJDY is also geared towards providing banking facilities to disadvantaged and marginalised sections of society, who receive benefits from various government schemes. Through direct benefits transfer, recipients will be able to receive financial assistance from the government without intermediaries, reducing corruption and increasing transparency. PMJDY accounts are zero-balance accounts and do not require any minimum balance to be maintained. This makes it easier for low-income groups and rural households to access banking services.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfGGjgSYDDfiJSd2cLbz5KHNf9kiD_Fja6A&s',
            date: '28 August 2014',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        {
            id: 2,
            title: ' Pradhan Mantri Vishwakarma Yojana (PMVY)',
            description: 'The scheme is designed to uplift traditional artisans and craftspeople engaged in various occupations like blacksmithing, goldsmithing, pottery, carpentry, and sculpting, with a focus on preserving cultural heritage and integrating them into the formal economy and global value chains. The Scheme will be jointly implemented by the MoMSME, the Ministry of Skill Development and Entrepreneurship and the Department of Financial Services, Ministry of Finance, Government of India. Artisans and craftspeople enrolled in the scheme will receive a PM Vishwakarma certificate and an identity card. The scheme offers a stipend of Rs 500 for skill training per day and Rs 15,000 grant for the purchase of modern tools.',
            image: 'https://sarkariyojnaa.org/wp-content/uploads/2023/02/pm-Vishwakarma-Kaushal-Samman-Yojana.jpg',
            date: '9 May 2015',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        {
            id: 3,
            title: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
            description: 'It is a one-year accidental insurance scheme renewable from year to year offering coverage for death or disability due to accident. It is administered by Public Sector General Insurance Companies (PSGICs) or any other general insurance company in partnership with banks/Post offices. Individuals in the age group of 18-70 years having a savings bank or a post office account are entitled to enroll. Accidental death cum disability cover of Rs. 2 lakhs (Rs. 1 lakh in case of partial disability) for death or disability due to an accident against a premium of Rs.20/- per annum.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDDgKxHlU8jx02ccHU2rAU6JfkE86qchLww&s',
            date: '09 May 2015',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        {
            id: 4,
            title: 'Atal Pension Yojana (APY)',
            description: 'The objective of creating a universal social security system for all Indians, especially the poor, the under-privileged and the workers in the unorganised sector. Any citizen of India can join the APY scheme. The age of the subscriber should be between 18-40 years. The contribution levels would vary and would be low if a subscriber joins early and increases if she joins late. It provides a minimum guaranteed pension ranging from Rs 1000 to Rs 5000 on attaining 60 years of age. The amount of pension is guaranteed for lifetime to the spouse on death of the subscriber. In the event of death of both the subscriber and the spouse, the entire pension corpus is paid to the nominee.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJauEF8TbUmazqKrD53qRlaxhP2JovzAGLCUs8o8payzt5-u3_pp7drLxWSQ&s',
            date: '09 May 2015',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        {
            id: 5,
            title: 'National Fellowship for OBC Students (SHREYAS Scheme)',
            description: 'The main objective of the schemes is Educational Empowerment of OBC & EBC students by way of awarding fellowship (financial assistance) in obtaining quality higher education and interest subsidy on educational loan for overseas studies. It aims to provide financial assistance to OBC students pursuing higher education, specifically M.Phil and Ph.D. degrees in various recognized universities, research, and scientific institutions.  Fellowship rates are set at Rs. 31,000 per month for JRF and Rs. 35,000 per month for SRF, in addition to contingencies.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfDj_uttw4Rwmtjkg0NzPIYGHiEKFG0R9zA&s',
            date: '25 April 2014',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        {
            id: 6,
            title: 'Schemes for Economic Empowerment of SCs and STs',
            description: 'It aims to provide free competitive exam coaching to these students, to provide health insurance to families, to uplift clusters of these communities through livelihood initiatives, and to provide financial assistance for housing. Free coaching to students from these communities for Civil Services, entry to professional courses like medicine, engineering, MBA, etc. The DWBDNCs (Development and Welfare Board for De-notified, Nomadic and Semi-Nomadic Communities) has been tasked with the implementation of this scheme. An online portal has been developed by the department which will ensure seamless registration and will also act as a repository of the data on these communities.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVxr7QuPpgcD1mst2mgykxsMYPaFTvlH-cg&s',
            date: '6 May 2015',
            author: 'Government of India',
            isMarginalizedCommunity: true
        },
        // ... more schemes
    ];

    const filteredSchemes = schemes.filter(scheme =>
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-gray-200 my-2 py-12 px-6 w-full">
            <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="hidden"
                animate={schemesInView ? "visible" : "hidden"}
                transition={{ duration: 1 }}
                ref={schemesRef}
            >
                <h1 className="text-center text-5xl font-bold mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>Top Schemes</h1>

                <div className="relative w-full mb-6">
                    <input
                        type="text"
                        placeholder="Search schemes..."
                        className="w-full p-4 pr-12 border rounded"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M16.35 11.65a6.5 6.5 0 1 0-9.2-9.2 6.5 6.5 0 0 0 9.2 9.2z"
                        />
                    </svg>
                </div>


                {/* Show top scheme only if there's no search query */}
                {!searchQuery && (
                    <div className="flex flex-col md:flex-row bg-white border-2 border-blue-50 rounded-lg overflow-hidden shadow-lg mb-8">
                        <div className="md:w-1/2 p-4">
                            <img
                                src={schemes[0].image}
                                alt={schemes[0].title}
                                className="w-full object-cover object-center h-64 md:h-auto border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-center md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{schemes[0].title}</h2>
                            <p className="text-gray-700 mb-4">
                                {schemes[0].description.length > 100
                                    ? `${schemes[0].description.substring(0, 300)}...`
                                    : schemes[0].description
                                }
                            </p>
                            <span className="text-gray-500 mb-4 block">{schemes[0].date} • {schemes[0].author}</span>
                            <button
                                className="text-blue-500 hover:underline mt-2"
                                onClick={() => setSelectedScheme(schemes[0])}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                )}


                {/* Trending Schemes */}
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Trending Schemes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSchemes.map((scheme, index) => (
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            key={scheme.id}
                            variants={fadeIn}
                            initial="hidden"
                            animate={schemesInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            onClick={() => setSelectedScheme(scheme)}
                        >
                            <img src={scheme.image} alt={scheme.title} className="w-full h-64 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{scheme.title}</h3>
                            <p className="text-gray-700 mb-4">
                                {scheme.description.length > 100 ? `${scheme.description.substring(0, 100)}...` : scheme.description}
                            </p>
                            <div className="flex justify-between">
                                <div className='grid'>
                                <p className="text-black mb-2">Launch Date: {scheme.date}</p>
                                <p className="text-black mb-2">Launch By: {scheme.author}</p>
                                </div>
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedScheme(scheme);
                                    }}
                                >
                                    Read More
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <Modal
                isOpen={!!selectedScheme}
                onRequestClose={() => setSelectedScheme(null)}
                contentLabel="Scheme Details"
                className="fixed inset-0 flex items-center justify-center z-50 outline-none p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
                ariaHideApp={false}
            >
                {selectedScheme && (
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl p-6 mx-4 sm:mx-8 lg:mx-12 h-[75vh] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => setSelectedScheme(null)}
                            aria-label="Close"
                        >
                            <span className=''>&times;</span>
                        </button>
                        <img
                            src={selectedScheme.image}
                            alt={selectedScheme.title}
                            className="w-full h-80 object-cover border border-gray-300 mb-4"
                        />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedScheme.title}</h2>
                        <p className="text-gray-800 font-semibold">Launch Date: {selectedScheme.date} </p>
                        <p className="text-gray-800 font-semibold">Launch By:  {selectedScheme.author}</p>
                        <p className="text-gray-700 mt-4">{selectedScheme.description}</p>
                    </div>
                )}
            </Modal>


        </div>
  )
}

export default Government;
