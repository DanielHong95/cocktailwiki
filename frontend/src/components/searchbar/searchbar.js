import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SearchBar() {
  const [cocktails, setCocktails] = useState([]);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const onSearch = (idDrink) => {
    let path = `/drinkinfo/${idDrink}`;
    navigate(path);
    setValue(idDrink);
    console.log("search ", idDrink);
  };

  useEffect(() => {
    async function fetchCocktails() {
      const cocktails = await axios.get("http://localhost:5000/cocktails/");
      setCocktails(cocktails.data);
      // console.log(cocktails.data);
    }
    fetchCocktails();
  }, []);
  console.log(cocktails);

  return (
    <Autocomplete
      disablePortal
      id="cocktail=search"
      getOptionLabel={(option) => option.strDrink}
      options={cocktails}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Cocktails"
          sx={{ bgcolor: "#fff" }}
          value={value}
          key={cocktails}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSearch("17222");
            }
          }}
        />
      )}
    />
  );
}

export default SearchBar;
