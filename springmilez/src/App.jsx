// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

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
            <Route path="/projects" element={<Projects />} />
           </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
