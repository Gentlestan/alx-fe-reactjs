import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import EmptyState from "./components/EmptyState";
import FavoritesList from "./components/FavouriteList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [favorites, setFavorites] = useState(() => {
  // Load from localStorage at first render
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});


  const fetchedRef = useRef(false);

  const searchRecipes = async (query) => {
    setLoading(true);
    setError("");
    setRecipes([]);
    setVisibleCount(9);

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
      setError(err.message || "Unknown error");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Auto-load "popular" feed (s=) once on mount
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      searchRecipes(""); // empty string = popular feed
    }
  }, []);

  useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);


const toggleFavorite = (recipe) => {
  setFavorites((prev) => {
    const exists = prev.find((r) => r.idMeal === recipe.idMeal);
    if (exists) {
      return prev.filter((r) => r.idMeal !== recipe.idMeal); // remove
    } else {
      return [...prev, recipe]; // add
    }
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-8 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg"
      >
        🍲 Recipe Finder
      </motion.h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto">
        <SearchBar onSearch={searchRecipes} />
      </div>

      {/* Loading / Error */}
      {loading && (
        <p className="text-center text-blue-600 font-semibold mt-6">
          Loading recipes...
        </p>
      )}
      {error && (
        <EmptyState
          title="No Recipes Found"
          message={`We couldn’t find any meals for your search. Try checking your spelling or explore some popular options below:`}
          suggestions={["Chicken", "Pasta", "Soup", "Beef"]}
          onSuggestionClick={searchRecipes}
        />
      )}

      {/* Recipe Grid */}
      {recipes.length > 0 && (
        <>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          >
            {recipes.slice(0, visibleCount).map((recipe) => (
              <motion.div
                key={recipe.idMeal}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeCard 
                recipe={recipe} 
                onSelect={setSelectedRecipe} 
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.some((f) => f.idMeal === recipe.idMeal)}
              />
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          {visibleCount < recipes.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="mt-10 block mx-auto px-8 py-3 
                         bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                         text-white font-semibold rounded-full shadow-md 
                         hover:shadow-lg transition"
            >
              Show More
            </motion.button>
          )}
          <FavoritesList
            favorites={favorites}
            onSelect={setSelectedRecipe}
            onToggleFavorite={toggleFavorite}
          />

        </>
      )}

      {/* Animated Recipe Details Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center 
                       bg-black/40 backdrop-blur-md z-50 p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 
                         overflow-y-auto max-h-[80vh]"
            >
              <RecipeDetails
                recipe={selectedRecipe}
                onClose={() => setSelectedRecipe(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
