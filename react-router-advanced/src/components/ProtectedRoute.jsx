// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

// simple useAuth hook defined here
function useAuth() {
  // for now, just simulate authentication with a boolean state
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
