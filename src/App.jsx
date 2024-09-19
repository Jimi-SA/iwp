import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Book = lazy(() => import('./pages/book'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
  const whatsappNumber = "123456789"; // Your WhatsApp number here
  const whatsappMessage = "Hello, I would like to know more about your services!";
  
  // State for managing the toast message
  const [open, setOpen] = useState(false);

  // Function to handle FAB click
  const handleFabClick = () => {
    setOpen(true); // Show the message
    setTimeout(() => {
      // Open WhatsApp after a 2-second delay
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 2000); // 2-second delay
  };

  // Function to close the Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/Book-now" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      
      {/* Floating Action Button for WhatsApp contact */}
      <Fab
        onClick={handleFabClick}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#57534e', // stone-700 hex equivalent
          color: '#f0fdf4', // lime-100 for the icon color
          '&:hover': {
            backgroundColor: '#65a30d', // lime-700 hex equivalent on hover
          },
        }}
        aria-label="whatsapp"
      >
        <WhatsAppIcon />
      </Fab>
      
      {/* Snackbar for the message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Connect with us on WhatsApp!
        </MuiAlert>
      </Snackbar>
    </Router>
  );
}

export default App;
