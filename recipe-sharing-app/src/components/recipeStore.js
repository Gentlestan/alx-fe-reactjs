import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm)
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter(recipe => recipe.id !== id);
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm)
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm)
    });
  },

  setRecipes: (recipes) => {
    set({
      recipes,
      filteredRecipes: filterByTerm(recipes, get().searchTerm)
    });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const currentRecipes = get().recipes;
    set({ filteredRecipes: filterByTerm(currentRecipes, term) });
  },
}));

// 🔎 Helper function (outside the Zustand store)
function filterByTerm(recipes, term) {
  if (!term) return recipes;
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}
export default useRecipeStore