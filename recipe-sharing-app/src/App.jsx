import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  console.log("App is rendering")
  
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
