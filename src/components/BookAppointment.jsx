import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";  // Using react-datepicker for beautiful calendar
import TherapistProfile from './TherapistProfile';  // Assuming you have a therapist profile component
import { motion, AnimatePresence } from 'framer-motion'; // For beautiful animations


const therapists = [
  {
    id: 1,
    name: 'John Doe',
    specialty: 'Deep Tissue Massage',
    rating: 4.9,
    gender: 'male',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialty: 'Aromatherapy',
    rating: 4.8,
    gender: 'female',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const BookAppointment = () => {
  const [therapists, setTherapists] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [numTherapists, setNumTherapists] = useState(1);
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [preferredGender, setPreferredGender] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // Form submission logic
    console.log({ selectedTherapist, numTherapists, startDate, timeSlot, promoCode, paymentMethod, specialRequests });
  };

  return (
    <div className="booking-form container mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Book Your Spa Appointment</h2>
      
      {/* Therapist Selection */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Therapist</label>
        <select 
          className="w-full border rounded p-2" 
          value={selectedTherapist} 
          onChange={e => setSelectedTherapist(e.target.value)}
        >
          <option value="" disabled>Select a therapist</option>
          {therapists.map(therapist => (
            <option key={therapist.id} value={therapist.id}>
              {therapist.name} ({therapist.specialty}) - {therapist.rating} ⭐
            </option>
          ))}
        </select>
      </div>

      {/* Preferred Gender */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Preferred Therapist Gender</label>
        <select 
          className="w-full border rounded p-2" 
          value={preferredGender} 
          onChange={e => setPreferredGender(e.target.value)}
        >
          <option value="" disabled>Select gender preference</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="any">No Preference</option>
        </select>
      </div>

      {/* Number of Therapists */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Number of Therapists</label>
        <input 
          type="number" 
          className="w-full border rounded p-2" 
          min="1" 
          max="5" 
          value={numTherapists} 
          onChange={e => setNumTherapists(e.target.value)} 
        />
      </div>

      {/* Calendar for Appointment Date */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Appointment Date</label>
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          className="border rounded p-2 w-full" 
          minDate={new Date()} 
          placeholderText="Select date" 
        />
      </div>

      {/* Time Slot */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Time Slot</label>
        <input 
          type="time" 
          className="w-full border rounded p-2" 
          value={timeSlot} 
          onChange={e => setTimeSlot(e.target.value)} 
        />
      </div>

      {/* Additional Details */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Additional Details</label>
        <textarea 
          className="w-full border rounded p-2" 
          rows="4" 
          placeholder="Enter any additional details here..." 
          value={additionalDetails} 
          onChange={e => setAdditionalDetails(e.target.value)}
        />
      </div>

      {/* Promo Code */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Promo Code</label>
        <input 
          type="text" 
          className="w-full border rounded p-2" 
          placeholder="Enter your promo code" 
          value={promoCode} 
          onChange={e => setPromoCode(e.target.value)} 
        />
      </div>

      {/* Payment Method */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Payment Method</label>
        <select 
          className="w-full border rounded p-2" 
          value={paymentMethod} 
          onChange={e => setPaymentMethod(e.target.value)}
        >
          <option value="" disabled>Select payment method</option>
          <option value="card">Credit Card</option>
          <option value="cash">Cash on Arrival</option>
          <option value="online">Online Payment</option>
        </select>
      </div>

      {/* Special Requests */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Special Requests</label>
        <textarea 
          className="w-full border rounded p-2" 
          rows="4" 
          placeholder="Any specific requests or preferences?" 
          value={specialRequests} 
          onChange={e => setSpecialRequests(e.target.value)}
        />
      </div>

      {/* Terms and Conditions */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            className="form-checkbox" 
            checked={termsAccepted} 
            onChange={e => setTermsAccepted(e.target.checked)} 
          />
          <span className="ml-2">I accept the terms and conditions</span>
        </label>
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 w-full"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
