import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import StudentDashboard from './components/StudentDashboard';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ make sure this exists

import DashboardLayout from './components/DashboardLayout';
import Overview from './components/dashboard/Overview';
import DashboardGWACalculator from './components/dashboard/GWACalculator';
import EPortfolio from './components/dashboard/EPortfolio';
import Handbook from './components/dashboard/Handbook';

import AdminDashboard from './components/dashboard/AdminDashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
        <OfflineStatus />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard routes with persistent sidebar */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="gwa-calculator" element={<DashboardGWACalculator />} />
            <Route path="grades" element={<div>Grades Page</div>} />
            <Route path="tasks" element={<div>Tasks Page</div>} />
            <Route path="files" element={<div>Files Page</div>} />
            <Route path="handbook" element={<Handbook />} />
            <Route path="calendar" element={<div>Calendar Page</div>} />
            <Route path="e-portfolio" element={<EPortfolio />} />
            <Route path="profile" element={<div>Profile Page</div>} />
          </Route>
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Landing Page */}
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

          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-4">Page not found</p>
                <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Return to Homepage
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
