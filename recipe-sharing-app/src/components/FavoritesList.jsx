import React from "react";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!favorites.length) {
    return <p>No favorites yet. Add some recipes to favorites!</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id} style={{ borderBottom: "1px solid #ccc" }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
