import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Loader from './components/loader';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Regular imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/contact';
import BookAppointment from './components/BookAppointment';

// Lazy load Book page only
const Book = lazy(() => import('./pages/book'));
const Shop = lazy(() => import('./pages/Shop'));

function App() {
  const whatsappNumber = '123456789'; // Your WhatsApp number here
  const whatsappMessage = 'Hello, I would like to know more about your services!';

  // Snackbar state
  const [open, setOpen] = useState(false);

  // FAB click handler
  const handleFabClick = () => {
    setOpen(true); // Show message
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 2000); // Delay before opening WhatsApp
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Non-lazy loaded routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" component={BookAppointment} />
        {/* Lazy load the Book component with fallback */}
        <Route
          path="/Book-now"
          element={
            <Suspense fallback={<Loader />}>
              <Book />
            </Suspense>
          }
        />
         <Route
          path="/Shop-here"
          element={
            <Suspense fallback={<Loader />}>
              <Shop />
            </Suspense>
          }
        />
      </Routes>
      <Footer />

      {/* WhatsApp Floating Action Button */}
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
