import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonateForm = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState({ first: '', last: '' });
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    street: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const [idProof, setIdProof] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleAmountSelect = (value) => {
    setAmount(value);
    if (value !== 'custom') {
      setCustomAmount('');
    }
  };

  const handleFileChange = (e) => {
    setIdProof(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Introduction Text */}
      <div className="mb-8 text-center ">
        {/* Centered Image with Animation */}
        <motion.img
          src='/don.png'
          alt="Donation"
          className="mx-auto mb-4" // Center the image
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Final state for animation
          transition={{ duration: 0.5 }} // Duration of the animation
        />
        <p className="text-lg text-gray-700">
          Thank you for considering a donation to support our initiatives. Your generosity can make a significant impact in empowering communities and fostering sustainable development. Please fill out the form below to contribute:
        </p>
        <div className='py-4 mt-2 text-sm font-bold'>
          <p className='float-left '>How much do you want to contribute?</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex space-x-4">
          {['1000', '2000', '3000', 'custom'].map((value) => (
            <motion.button
              key={value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${amount === value ? 'bg-blue-400' : 'bg-blue-200'} flex-1`}
              onClick={() => handleAmountSelect(value)}
              type="button"
            >
              {value === 'custom' ? 'Custom Amount' : `Rs. ${value}`}
            </motion.button>
          ))}
        </div>

        {amount === 'custom' && (
          <div className="mb-4">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter custom amount"
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">First Name *</label>
            <input
              type="text"
              value={name.first}
              onChange={(e) => setName({ ...name, first: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              value={name.last}
              onChange={(e) => setName({ ...name, last: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Phone (Required)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Billing Address</label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full p-2 border rounded mb-2"
            placeholder="Street Address"
          />
          <input
            type="text"
            value={address.line2}
            onChange={(e) => setAddress({ ...address, line2: e.target.value })}
            className="w-full p-2 border rounded mb-2"
            placeholder="Address Line 2"
          />
          <div className="flex space-x-4 mb-2">
            <input
              type="text"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="flex-1 p-2 border rounded"
              placeholder="City"
            />
            <input
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              className="flex-1 p-2 border rounded"
              placeholder='State'
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
              className="flex-1 p-2 border rounded"
              placeholder="ZIP / Postal Code"
            />
            <input
              type="text"
              value={address.country}
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
              className="flex-1 p-2 border rounded"
              placeholder="Country"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Id Proof</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <p className="text-sm text-gray-500 mt-1">Max. file size: 512 MB.</p>
          <p className="text-sm text-gray-500">Upload government ID proof (Passport, Aadhar Card)</p>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="confirm"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mr-2"
            required
          />
          <label htmlFor="confirm">Confirm Donation *</label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-green-500 text-white py-2 rounded"
          type="submit"
        >
          Donate Now
        </motion.button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Bank Account Details:</h3>
        <p className="text-sm text-gray-700 mt-2">Account Number: 1234567890</p>
        <p className="text-sm text-gray-700">IFSC Code: ABCD0123456</p>
      </div>
    </div>
  );
};

export default DonateForm;
