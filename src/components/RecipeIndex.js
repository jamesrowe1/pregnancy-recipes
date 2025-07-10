import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  "Arugula Salad With Fruit",
  "Couscous Salad with Butternut Squash and Cranberries",
  "Garlic Parmesan Kale Pasta",
  "Grilled Sweet Potatoes",
  "Kale Crunch Salad",
  "Oven Baked Sweet Potato Fries",
  "Perfect Instant Pot Brown Rice",
  "Portobello Mushroom Cheeseburgers",
  "Red Lentil Hummus",
  "Rotini with Chicken and Garden Vegetables",
  "Rub Lamb Chops",
  "Salmon Couscous Salad Bowl",
  "Slow Cooker Lamb Curry",
  "Sous Vide Turkey Breast",
  "Steak Fajitas with Peppers & Onions",
  "Sweet Potato Bowl",
  "Taste of Morocco",
  "Tuscan-Style Veal Chops",
  "Yellow Curry with Chicken, Kale & Butternut Squash"
];

function RecipeIndex() {
  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Pregnancy Recipes</h1>
      <ul className="grid grid-cols-1 gap-3">
        {recipes.map((title) => {
          const path = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
          return (
            <li key={title}>
              <Link
                to={`/recipes/${path}`}
                className="block p-4 rounded-lg shadow-md bg-white text-center text-base font-medium hover:bg-pink-100 transition"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeIndex;