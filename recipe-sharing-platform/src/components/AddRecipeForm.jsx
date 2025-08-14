// src/components/AddRecipeForm.jsx
import { useState } from "react";

export const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required.";

    // Optional: ensure at least 2 ingredients
    if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients, separated by commas.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions
        .split(".")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted! Check console for data.");

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.title ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.ingredients ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="e.g., 2 eggs, 1 cup milk, 1 tbsp sugar"
            rows={4}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-1 font-semibold">Preparation Steps (period separated)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.instructions ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="e.g., Mix eggs with sugar. Bake at 180°C for 20 minutes."
            rows={5}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition-colors px-6 py-2 rounded font-semibold"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};
