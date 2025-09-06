import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute component
 * @param {ReactNode} children - The component to render if access is granted
 * @param {string} requiredRole - Optional role to restrict access (e.g., "student")
 */
const ProtectedRoute = ({ children, requiredRole }) => {
  // Get authentication + user data from localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const user = JSON.parse(localStorage.getItem("user"));

  // If not logged in → redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // If role required but doesn't match → redirect to homepage
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ Allowed → render children
  return children;
};

export default ProtectedRoute;
