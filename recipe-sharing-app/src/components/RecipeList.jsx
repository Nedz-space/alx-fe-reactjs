import React from "react";
import useRecipeStore from "./recipeStore";
import RecipeDetails from "./RecipeDetails";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <RecipeDetails key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
