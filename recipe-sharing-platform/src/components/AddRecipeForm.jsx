import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ Tracks individual field errors

  // ✅ Validation Function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Return true if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // ✅ Run validation before submit

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
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
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
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
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-semibold">
            Preparation Steps
          </label>
          <textarea
            placeholder="Describe how to prepare the recipe"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
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
