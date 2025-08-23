// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = false; // simulate user login status

export default function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/blog" />;
}
