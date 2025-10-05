import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientList.length < 2) {
      setError("⚠️ Please include at least two ingredients.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: instructions.split("\n"),
    };

    console.log("✅ New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mt-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🥗 Add a New Recipe
        </h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mb-4">
            ✅ Recipe submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder={"e.g.\n200g flour\n2 eggs\n1 cup sugar"}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Preparation Steps
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder={"e.g.\nMix all ingredients.\nBake for 20 minutes."}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
