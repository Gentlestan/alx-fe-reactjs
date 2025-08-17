import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />  
      </div>
    </BrowserRouter>
  )
}

export default App
