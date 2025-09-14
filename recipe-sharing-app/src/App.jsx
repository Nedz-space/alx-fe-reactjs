import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function Home() {
  return (
    <div className="app-container">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
