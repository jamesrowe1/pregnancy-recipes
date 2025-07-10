import React from "react";
import { useParams, Link } from "react-router-dom";

function RecipeViewer() {
  const { recipeName } = useParams();

  const fileMap = {
    "arugula-salad-with-fruit": "Arugula Salad With Fruit.html",
    "couscous-salad-with-butternut-squash-and-cranberries": "Couscous Salad with Butternut Squash and Cranberries.html",
    "garlic-parmesan-kale-pasta": "Garlic Parmesan Kale Pasta.html",
    "grilled-sweet-potatoes": "Grilled Sweet Potatoes.html",
    "kale-crunch-salad": "Kale Crunch Salad.html",
    "oven-baked-sweet-potato-fries": "Oven Baked Sweet Potato Fries.html",
    "perfect-instant-pot-brown-rice": "Perfect Instant Pot Brown Rice.html",
    "portobello-mushroom-cheeseburgers": "Portobello Mushroom Cheeseburgers.html",
    "red-lentil-hummus": "Red Lentil Hummus.html",
    "rotini-with-chicken-and-garden-vegetables": "Rotini with Chicken and Garden Vegetables.html",
    "rub-lamb-chops": "Rub Lamb Chops.html",
    "salmon-couscous-salad-bowl": "Salmon Couscous Salad Bowl.html",
    "slow-cooker-lamb-curry": "Slow Cooker Lamb Curry.html",
    "sous-vide-turkey-breast": "Sous Vide Turkey Breast.html",
    "steak-fajitas-with-peppers-onions": "Steak Fajitas with Peppers & Onions.html",
    "sweet-potato-bowl": "Sweet Potato Bowl.html",
    "taste-of-morocco": "Taste of Morocco.html",
    "tuscan-style-veal-chops": "Tuscan-Style Veal Chops.html",
    "yellow-curry-with-chicken-kale-butternut-squash": "Yellow Curry with Chicken, Kale & Butternut Squash.html"
  };

  const file = fileMap[recipeName];
  const fullPath = file ? `${process.env.PUBLIC_URL}/recipes/${file}` : null;

  return fullPath ? (
    <div className="flex flex-col items-center px-2 pb-4">
      <div className="w-full max-w-4xl aspect-[3/4] sm:aspect-[4/3] md:aspect-video">
        <iframe
          title={file}
          src={fullPath}
          className="w-full h-full rounded-xl border border-gray-300"
        />
      </div>
      <Link
        to="/"
        className="mt-4 inline-block text-pink-600 hover:underline text-sm"
      >
        ← Back to all recipes
      </Link>
    </div>
  ) : (
    <p className="p-4 text-center">Recipe not found.</p>
  );
}

export default RecipeViewer;
