import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header'; // Import your Header component
import {Footer} from './components/Footer'
import Home from './pages/Home';
import Contact from './pages/contact';
import Book from './pages/book';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/Book-now" element={<Book />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App