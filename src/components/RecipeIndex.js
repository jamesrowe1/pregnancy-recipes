import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  "30-Minute Chicken Pasta Primavera",
  "Arugula Salad With Fruit",
  "Bibimbap",
  "Corn Salad Without Mayo",
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
  "Slow Cooker Mongolian Beef",
  "Slow Cooker Lamb Curry",
  "Sous Vide Turkey Breast",
  "Steak Fajitas with Peppers & Onions",
  "Sweet Potato Bowl",
  "Taste of Morocco",
  "Tuscan-Style Veal Chops",
  "Watermelon Salad Recipe with Feta and Cucumber",
  "Yellow Curry with Chicken, Kale & Butternut Squash"
];

function RecipeIndex() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pregnancy Recipes</h1>
      <ul className="list-disc pl-6">
        {recipes.map((title) => {
          const path = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
          return (
            <li key={title}>
              <Link to={`/recipes/${path}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeIndex;