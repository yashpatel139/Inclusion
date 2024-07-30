import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

// Ensure modal root element is attached to the document
Modal.setAppElement('#root');

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const images = [
  { src: '/gal1.jpg', alt: 'Marginalized Community 1' },
  { src: '/gal2.jpeg', alt: 'Marginalized Community 2' },
  { src: '/gal3.jpg', alt: 'Marginalized Community 3' },
  { src: '/gal12.jpg', alt: 'Marginalized Community 4' },
  { src: '/gal5.jpg', alt: 'Marginalized Community 1' },
  { src: '/gal13.jpeg', alt: 'Marginalized Community 2' },
  { src: '/gal14.webp', alt: 'Marginalized Community 3' },
  { src: '/gal9.jpg', alt: 'Marginalized Community 4' },
  { src: '/gal10.jpg', alt: 'Marginalized Community 1' },
  { src: '/gal13.jpeg', alt: 'Marginalized Community 2' },
  { src: '/gal15.jpg', alt: 'Marginalized Community 3' },
  { src: '/gal6.jpg', alt: 'Marginalized Community 4' },

  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-12 px-6 bg-gray-100 ">
      <div className="container mx-auto ">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8 relative">
  Gallery of Empowerment
 
</h2>
<span className="absolute left-1/3 w-1/3 border-b-4 border-gray-600"></span>
        <div className="grid mx-10 px-20 py-20 rounded-md grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain transition-transform duration-300  hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">View Image</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="relative bg-white p-4 rounded-lg max-w-full max-h-full overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              X
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-screen-md max-h-screen-md object-contain"
            />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Gallery;
