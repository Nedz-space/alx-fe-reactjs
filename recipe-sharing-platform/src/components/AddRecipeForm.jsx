import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ Added "steps" state
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New recipe added:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add a New Recipe
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-semibold">
            Ingredients
          </label>
          <textarea
            placeholder="List ingredients, separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Steps (Preparation Instructions) ✅ */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-semibold">
            Preparation Steps
          </label>
          <textarea
            placeholder="Describe how to prepare the recipe"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
