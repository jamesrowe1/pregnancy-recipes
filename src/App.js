// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeIndex from "./components/RecipeIndex";
import RecipeViewer from "./components/RecipeViewer";

function App() {
  return (
    <Router basename="/pregnancy-recipes">
      <Routes>
        <Route path="/" element={<RecipeIndex />} />
        <Route path="/recipes/:recipeName" element={<RecipeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;