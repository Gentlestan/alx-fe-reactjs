
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import {createBrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  
 console.log("App is rendering");
  return (
   <BrowserRouter>
   <div>
   <AddRecipeForm/>
     <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
   </div>
   </BrowserRouter> 
  )
}

export default App
