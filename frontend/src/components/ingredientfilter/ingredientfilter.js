import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function IngredientFilter() {
  const [ingredients, setIngredients] = useState([]);

  // get all cocktails data
  useEffect(() => {
    async function fetchIngredients() {
      // You can await here
      const cocktails = await axios.get("http://localhost:5000/cocktails/");
      setIngredients(cocktails.data);
      // console.log(cocktails);
    }
    fetchIngredients();
  }, []);

  // Create set of unique ingredients
  let ingredientSet = new Set();
  for (let i = 0; i < ingredients.length; i++) {
    ingredientSet.add(ingredients[i].strIngredient1);
    ingredientSet.add(ingredients[i].strIngredient2);
    ingredientSet.add(ingredients[i].strIngredient3);
    ingredientSet.add(ingredients[i].strIngredient5);
    ingredientSet.add(ingredients[i].strIngredient6);
    ingredientSet.add(ingredients[i].strIngredient7);
    ingredientSet.add(ingredients[i].strIngredient8);
  }
  console.log(ingredientSet);
  const ingredientArray = Array.from(ingredientSet);
  console.log(ingredientArray);

  return <ul>{ingredientArray}</ul>;
}

export default IngredientFilter;
