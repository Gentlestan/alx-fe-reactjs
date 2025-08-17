import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="border rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600">{recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
