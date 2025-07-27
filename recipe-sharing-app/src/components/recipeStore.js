import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Recipes state
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // Recipe actions
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
    });
  },

  setRecipes: (recipes) => {
    set({
      recipes,
      filteredRecipes: filterByTerm(recipes, get().searchTerm),
    });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const currentRecipes = get().recipes;
    set({ filteredRecipes: filterByTerm(currentRecipes, term) });
  },

  // Favorites state
  favorites: [],

  // Add a recipe ID to favorites (avoid duplicates)
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  // Remove a recipe ID from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations state
  recommendations: [],

  // Generate mock recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Simple mock: recommend favorite recipes with some randomness
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

// Helper function to filter recipes by search term
function filterByTerm(recipes, term) {
  if (!term) return recipes;
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}

export default useRecipeStore;
