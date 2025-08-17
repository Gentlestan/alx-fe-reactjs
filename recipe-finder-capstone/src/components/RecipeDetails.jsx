import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  if (!recipe) return null;

  // Extract ingredients + measures
  const getIngredients = (r) => {
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = r[`strIngredient${i}`];
      const meas = r[`strMeasure${i}`];
      if (ing && ing.trim()) {
        list.push(`${meas ? meas.trim() : ""} ${ing.trim()}`.trim());
      }
    }
    return list;
  };

  const ingredients = getIngredients(recipe);

  // Get YouTube video ID
  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  const ytId = getYoutubeId(recipe.strYoutube);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Close
        </button>

        {/* Title */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Category:</span> {recipe.strCategory} |{" "}
            <span className="font-semibold">Cuisine:</span> {recipe.strArea}
          </p>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-64 object-cover rounded mb-6"
          />

          {/* Ingredients */}
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Instructions */}
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <p className="text-gray-700 whitespace-pre-line mb-6">
            {recipe.strInstructions}
          </p>

          {/* YouTube Video */}
          {ytId && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Video Tutorial</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${ytId}`}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Source Link */}
          {recipe.strSource && (
            <p>
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                View full recipe on TheMealDB →
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
