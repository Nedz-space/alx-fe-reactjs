import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <p>The recipe you requested does not exist.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <hr />
      <h3>Edit recipe</h3>
      <EditRecipeForm recipeId={recipeId} />

      <hr />
      <DeleteRecipeButton recipeId={recipeId} />
      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
