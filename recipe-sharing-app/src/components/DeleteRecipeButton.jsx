import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ background: '#e74c3c', color: 'white', padding: '8px 12px', border: 'none', borderRadius: 4 }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
