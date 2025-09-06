import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import InstallPrompt from './components/InstallPrompt';
import OfflineStatus from './components/OfflineStatus';
import CalendarHighlights from './components/CalendarHighlights';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary-600 font-semibold">Loading DYCI Connect...</p>
        </div>
      </div>
    );
  }

  return (
    <Router> {/* Add this Router wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
        <OfflineStatus />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Main landing page with all components */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <CalendarHighlights />
              <About />
              <Footer />
              <InstallPrompt />
            </>
          } />

          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-4">Page not found</p>
                <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Return to Homepage
                </a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router> // Close the Router wrapper
  );
}

export default App;