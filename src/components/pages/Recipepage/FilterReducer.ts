export function filterReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_RECIPES":
      return action.payload; // Assuming you want to store the recipes in `recipes;
    case "NEWEST":
      // Assuming recipes are stored in state.recipes
      const newestRecipes = [...state].sort((a: any, b: any) => {
        // Replace 'createdAt' with the appropriate date property
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime(); // Ensure we are comparing timestamps
      });
      return [...newestRecipes];
    
    case "OLDEST":
        const oldestRecipes = [...state].sort((a: any, b: any) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA.getTime() - dateB.getTime();
        });
        return [...oldestRecipes];

    case "TOP_RATED":
        const topRatedRecipes = [...state].sort((a: any, b: any) => {
            return b.ratings - a.ratings;
        });
        return [...topRatedRecipes];

    case "LOWEST_RATED":
        const lowestRatedRecipes = [...state].sort((a: any, b: any) => {
            return a.ratings - b.ratings;
        });
        return [...lowestRatedRecipes];

    case "MOST_REVIEWED":
        const mostReviewedRecipes = [...state].sort((a: any, b: any) => {
            return b.reviews.length - a.reviews.length;
        });
        return [...mostReviewedRecipes];

    case "FILTER_BY_CATEGORY":
        const filteredByCategory = state.filter((recipe: any) => {
            return recipe.category.some((category: any) =>
                action.payload.includes(category.categoryId)
            );
        });
        return filteredByCategory; ;
    default:
      return state;
  }
}
