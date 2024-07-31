import React from 'react';
import './Body.css'; // Import your CSS file

const cardData = [
  {
    title: 'Pratham',
    description: 'Education for underprivileged children.',
    link: 'https://www.pratham.org/',
    funders: ['Bill & Melinda Gates Foundation', 'Google', 'Infosys'],
    image: '/pratham.jpg',
    details: 'Pratham focuses on improving literacy and learning outcomes among children in India. They have been active since 1994 and work across various states to ensure every child gets a quality education.',
    impact: 'Over 50 million children reached through various educational programs.',
    contact: 'For inquiries, email: info@pratham.org',
  },
  {
    title: 'SOS Children\'s Village India',
    description: 'Child care and protection.',
    link: 'https://www.soschildrensvillages.in/',
    funders: ['Individual Donors', 'Various Foundations'],
    image: '/sos.jpg',
    details: 'SOS Children’s Village India provides orphaned and abandoned children with a family environment. They focus on the holistic development of children through education, health care, and emotional support.',
    impact: 'Over 15,000 children provided with family-based care annually.',
    contact: 'For inquiries, email: contact@sosindiahq.org.in',
  },
  {
    title: 'Tata Trusts',
    description: 'Empowering communities through philanthropy.',
    link: 'https://www.tatatrusts.org/',
    funders: ['Tata Group', 'Various Corporate Partners'],
    image: '/tata-trusts.jpg',
    details: 'Tata Trusts work to address key challenges facing marginalized communities by providing grants and engaging in development projects. Their focus includes health, education, and rural development across India.',
    impact: 'Improved the lives of millions through various developmental initiatives and partnerships.',
    contact: 'For inquiries, email: info@tatatrusts.org',
  },
  {
    title: 'SEWA',
    description: 'Empowering women in informal sectors.',
    link: 'https://www.sewa.org/',
    funders: ['Ford Foundation', 'Government Grants'],
    image: '/sewa.jpg',
    details: 'SEWA supports women working in the informal sector by offering them opportunities for self-employment and improving their working conditions. They focus on increasing the income and status of women.SEWA provides vocational training, access to financial services.',
    impact: 'Over 2 million women empowered through various programs.',
    contact: 'For inquiries, email: sewa@sewa.org',
  },
  {
    title: 'United Nations Development Programme (UNDP)',
    description: 'Eradicating poverty and reducing inequalities.',
    link: 'https://www.undp.org/',
    funders: ['Government Contributions', 'Private Sector Partnerships'],
    image: '/undp.jpg',
    details: 'The UNDP works to eradicate poverty and reduce inequalities by fostering sustainable development. Their initiatives often target marginalized communities to improve access to resources and economic opportunities.',
    impact: 'Supports various projects focused on poverty reduction, crisis recovery, and sustainable development.',
    contact: 'For inquiries, email: undp@undp.org',
  },
  
  {
    title: 'United Nations Children’s Fund (UNICEF)',
    description: 'Protecting the rights and well-being of children.',
    link: 'https://www.unicef.org/',
    funders: ['Government Contributions', 'Private Sector Partnerships', 'Individual Donors'],
    image: '/unicef.jpg',
    details: 'UNICEF works to protect the rights and well-being of children globally, with a strong focus on marginalized and vulnerable children and families. Their programs cover areas such as health, education, protection, and emergency relief.',
    impact: 'Provides crucial support in education, health, and emergency relief to children in need worldwide.',
    contact: 'For inquiries, email: unicef@unicef.org',
  }
];

const Body = () => {
  return (
    <div className="p-8 bg-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center">NGOs and UN Programs</h1>
      <div className="cards-container">
        {cardData.map((card, idx) => (
          <div key={idx} className="card shadow-lg hover:bg-gray-200 cursor-pointer hover:shadow-xl">
            <div className="card-image-container ">
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title hover:text-blue-500">{card.title}</h2>
              <p className="card-text">{card.description}</p>
              <p className="card-text">{card.details}</p>
              <p className="card-text"><strong>Impact:</strong> {card.impact}</p>
              <p className="card-text"><strong>Contact:</strong> {card.contact}</p>
              <div className="card-footer">
                <a href={card.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
