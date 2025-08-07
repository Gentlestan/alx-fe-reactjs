import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import './App.css'


function App() {
  console.log("App is working")
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/services" element={<Services />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
