import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FilteredDrink from "../filtereddrink/filtereddrink";

function IngredientFilter() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // get all cocktails data
  useEffect(() => {
    async function fetchIngredients() {
      // You can await here
      const cocktailsResponse = await axios.get(
        "http://localhost:5000/cocktails/"
      );
      const cocktails = cocktailsResponse.data;
      console.log(cocktails.data);

      // filter for unique strIngredient
      let ingredientSet = new Set();
      for (let i = 0; i < cocktails.length; i++) {
        ingredientSet.add(cocktails[i].strIngredient1);
        ingredientSet.add(cocktails[i].strIngredient2);
        ingredientSet.add(cocktails[i].strIngredient3);
        ingredientSet.add(cocktails[i].strIngredient5);
        ingredientSet.add(cocktails[i].strIngredient6);
        ingredientSet.add(cocktails[i].strIngredient7);
        ingredientSet.add(cocktails[i].strIngredient8);
      }
      // convert set to array
      const aggregateIngredients = Array.from(ingredientSet);
      // get rid of null values
      const ingredientArray = aggregateIngredients.filter((n) => n);
      console.log(ingredientArray);

      setIngredients(ingredientArray);
      // console.log(cocktails);
    }
    fetchIngredients();
  }, []);

  // create an array of selected ingredients
  function handleInputChage(event, value) {
    setSelectedIngredients(value);

    console.log(selectedIngredients);
  }

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ingredients}
        onChange={handleInputChage}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ingredients"
            placeholder="Search Ingredients"
          />
        )}
      />
      <FilteredDrink drinkArray={selectedIngredients} />
    </Stack>
  );
}

export default IngredientFilter;
