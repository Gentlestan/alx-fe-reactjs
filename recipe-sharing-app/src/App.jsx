
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  
 console.log("App is rendering");
  return (
   <div>
   <AddRecipeForm/>
     <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
   </div>
  )
}

export default App
