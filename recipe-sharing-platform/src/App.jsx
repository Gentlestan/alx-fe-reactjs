import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import './index.css'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  )
}

export default App

 

