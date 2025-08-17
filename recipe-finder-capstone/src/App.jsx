import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchRecipes = async (query) => {
    setLoading(true);
    setError("");
    setRecipes([]);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!res.ok) throw new Error("Failed to fetch recipes");
      const data = await res.json();
      if (!data.meals) {
        setError("No recipes found.");
        setRecipes([]);
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch some default recipes on first mount
  useEffect(() => {
    
    searchRecipes("chicken"); // default query
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🍲 Recipe Finder</h1>
      <SearchBar onSearch={searchRecipes} />

      {loading && <p className="text-center text-blue-600">Loading recipes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={setSelectedRecipe}
          />
        ))}
      </div>

      <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
