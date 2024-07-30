import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Articles = () => {
    const { ref: articlesRef, inView: articlesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const articles = [
        // Your article data here
        
            {
                id: 1,
                title: 'Modi launches PM-SURAJ portal to benefit marginalised sector',
                description: 'Modi said that the government has spent nearly Rs.1.60 lakh crore for the welfare of the SC community this year alone. “Today’s occasion provides a glimpse of the government’s commitment to prioritise the underprivileged,” said Modi. He expressed satisfaction with how welfare schemes are reaching the Dalits, deprived, and backward communities. “This makes me emotional as I am not separate from them, and I see in them my family,” he said.The PM talked about the importance of reaching out to marginalised communities and ensuring their inclusion in the nation’s development process. He stressed the significance of initiatives like PM-SURAJ in providing financial assistance directly to beneficiaries, eliminating middlemen and commissions.',
                image: 'topart1.jpg',
                date: '10 July 2024',
                author: 'Vrinda Tulsian',
                isMarginalizedCommunity: true
            },
            {
                id: 2,
                title: 'Maharashtra puts curbs on scholarship for marginalised students',
                description: 'In a significant policy shift, Maharashtra, Indias second-most populous state, has introduced stricter eligibility criteria for its overseas scholarship scheme aimed at marginalized communities...',
                image: 'art1.jpg',
                date: '19 June 2024',
                author: 'Abhishek Nair',
                isMarginalizedCommunity: true
            },
            {
                id: 3,
                title: 'Accessing Justice In India: Needs Of Marginalised Communities',
                description: 'Initiatives are being implemented to support women entrepreneurs, providing access to resources and networks...',
                image: 'art2.jpg',
                date: '8 June 2024',
                author: 'Purnima Sharma',
                isMarginalizedCommunity: true
            },
            {
                id: 4,
                title: 'Creating opportunities for inclusivity among marginalized groups',
                description: 'Educational programs tailored to the needs of indigenous communities are making a significant impact...',
                image: 'art3.jpeg',
                date: '05 Jan 2024',
                author: 'Vinita Agarwal',
                isMarginalizedCommunity: true
            },
            {
                id: 5,
                title: 'Transition away from coal power poses grave challenges to marginalised groups: report',
                description: 'India plans to phase down coal use to achieve the target of 50% cumulative electric power installed capacity from sources based on non-fossil fuels by 2030...',
                image: 'art4.avif',
                date: '25 Dec 2023',
                author: 'Michael Brown',
                isMarginalizedCommunity: true
            },
            {
                id: 6,
                title: 'PM Modi launches one-stop portal for credit schemes for marginalised sections',
                description: 'The Prime Minister reiterated his “guarantee” that the campaign of development and respect for deprived classes will intensify in next 5 years.Launching the Pradhan Mantri Samajik Utthan evam Rozgar Adharit Jankalyan (PM-SURAJ) portal for credit support to entrepreneurs from disadvantaged sections of society virtually on Wednesday, Prime Minister Narendra Modi said, “This is a testament to our commitment to provide dignity and justice to the underprivileged. Modi gives you this guarantee - this campaign of development and respect for the deprived class will intensify in the coming 5 years.”',
                image: 'art6.jpg',
                date: '25 Dec 2023',
                author: 'Michael Brown',
                isMarginalizedCommunity: true
            },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container bg-white mx-auto py-12 px-6">
            <motion.div
                className="mb-12"
                variants={fadeIn}
                initial="hidden"
                animate={articlesInView ? "visible" : "hidden"}
                transition={{ duration: 1 }}
                ref={articlesRef}
            >
                <h1 className="text-center text-5xl font-bold mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>Top Articles</h1>

                <div className="relative w-full mb-6">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full p-4 pr-12 border-2 border-orange-300 rounded"
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

                {/* Show top article only if there's no search query */}
                {!searchQuery && (
                    <div className="flex flex-col md:flex-row bg-white border-2 border-blue-50 rounded-lg overflow-hidden shadow-lg mb-8">
                        <div className="md:w-1/2 p-4">
                            <img
                                src={articles[0].image}
                                alt={articles[0].title}
                                className="w-full object-cover object-center h-64 md:h-auto border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-center md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 ">{articles[0].title}</h2>
                            <p className="text-gray-700 mb-4">
                                {articles[0].description.length > 100
                                    ? `${articles[0].description.substring(0, 300)}...`
                                    : articles[0].description
                                }
                            </p>
                            <span className="text-gray-500 mb-4 block">{articles[0].date} • {articles[0].author}</span>
                            <button
                                className="text-blue-500 hover:underline mt-2"
                                onClick={() => setSelectedArticle(articles[0])}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                )}

                {/* Trending Articles */}
                <h2 className="text-4xl mx-2 text-gray-800 mb-6 tracking-tight leading-snug">
  Trending Articles
</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-200 cursor-pointer"
                            key={article.id}
                            variants={fadeIn}
                            initial="hidden"
                            animate={articlesInView ? "visible" : "hidden"}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            onClick={() => setSelectedArticle(article)}
                        >
                            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-md mb-4 transition-transform transform hover:scale-105" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{article.title}</h3>
                            <p className="text-gray-700 mb-4">
                                {article.description.length > 100 ? `${article.description.substring(0, 100)}...` : article.description}
                            </p>
                            <div className="flex justify-between">
                                <span className="text-gray-500 mb-2">{article.date} • {article.author}</span>
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedArticle(article);
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
                isOpen={!!selectedArticle}
                onRequestClose={() => setSelectedArticle(null)}
                contentLabel="Article Details"
                className="fixed inset-0 flex items-center justify-center z-50 outline-none p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
                ariaHideApp={false}
            >
                {selectedArticle && (
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl p-6 mx-4 sm:mx-8 lg:mx-12 h-[75vh] overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => setSelectedArticle(null)}
                            aria-label="Close"
                        >
                            <span className=''>&times;</span>
                        </button>
                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.title}
                            className="w-full h-80 object-cover border rounded-md border-gray-300 mb-4"
                        />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600">{selectedArticle.title}</h2>
                        <span className="text-gray-500">{selectedArticle.date} • {selectedArticle.author}</span>
                        <p className="text-gray-700 mt-4">{selectedArticle.description}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Articles;
