//import useRecipeStore from "./recipeStore"
import { useRecipeStore } from "./recipeStore"
import { Link } from "react-router-dom"

const RecipeList = () => {
    
    const recipes = useRecipeStore(state => state.recipes)

     const recipeStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '1rem',
        border: '1px solid #ccc', 

    }

  return (
    <div style={recipeStyle}>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList