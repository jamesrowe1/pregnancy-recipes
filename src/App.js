import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeIndex from "./components/RecipeIndex";
import RecipeViewer from "./components/RecipeViewer";

function App() {
  return (
    <Router basename="/pregnancy-recipes">
      <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
        <Routes>
          <Route path="/" element={<RecipeIndex />} />
          <Route path="/recipes/:recipeName" element={<RecipeViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;