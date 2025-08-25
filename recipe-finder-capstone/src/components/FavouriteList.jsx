import React from "react";
import RecipeCard from "./RecipeCard";

const FavoritesList = ({ favorites, onSelect, onToggleFavorite }) => {
  if (!favorites || favorites.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">❤️ Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
            isFavorite={true} // favorites are always "active"
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
