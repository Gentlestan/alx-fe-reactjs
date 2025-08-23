import { useState } from 'react'
import {Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/profile/Profile';
import ProfileDetails from './components/profile/ProfileDetails';
import ProfileSettings from './components/profile/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

function App() {

  return (
    <div>
    <h1>My Application</h1>
      
        <Routes>
        {/*Dynamic Route---- Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        {/*Nested Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/details" element={<ProfileDetails />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
