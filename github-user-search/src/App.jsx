import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<div>Welcome Home</div>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
