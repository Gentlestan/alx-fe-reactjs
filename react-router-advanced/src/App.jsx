import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <h1>My Application</h1>

        <Routes>
          <Route path="/" element={<Home />} />
        {/*Dynamic Route---- Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        {/*Nested Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
