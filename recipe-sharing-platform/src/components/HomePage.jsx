import { useState, useEffect } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load mock data from data.json
  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
      </h1>

      {/* ✅ Responsive Grid Layout with grid-cols-1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
