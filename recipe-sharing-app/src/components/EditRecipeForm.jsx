import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const [editing, setEditing] = useState(false);

  // keep local state synced if recipe changes
  useEffect(() => {
    setTitle(recipe?.title ?? '');
    setDescription(recipe?.description ?? '');
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe(recipeId, { title: title.trim(), description: description.trim() });
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!editing ? (
        <>
          <div>
            <strong>Title:</strong> {title}
          </div>
          <div>
            <strong>Description:</strong> {description}
          </div>
          <button type="button" onClick={() => setEditing(true)} style={{ marginTop: 8 }}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: 8 }}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: 8 }}
          />
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditing(false)} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default EditRecipeForm;
