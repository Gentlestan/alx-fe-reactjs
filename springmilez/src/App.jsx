// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Contact from "./components/pages/contact/Contact";
import Services from "./components/pages/services/Services"
import ProjectCard from "./components/pages/projects/ProjectCards";
import ProjectDetail from "./components/pages/projects/ProjectDetail";
//import Projects from "./components/ProjectCards";


//import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-zinc-50">
        <Navbar /> 
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectCard />} />
             <Route path="/projects/:id" element={<ProjectDetail />} />
           </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
