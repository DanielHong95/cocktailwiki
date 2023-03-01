import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SearchBar() {
  const [cocktails, setCocktails] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchCocktails() {
      const cocktails = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/cocktails/`
      );
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);
  // console.log(cocktails);

  const navigate = useNavigate();
  const onSearch = (idDrinK) => {
    let path = `/drinkinfo/${idDrinK}`;
    navigate(path);
    setValue(idDrinK);
    // console.log("search ", idDrinK);
  };

  return (
    <Autocomplete
      disablePortal
      id="cocktail=search"
      getOptionLabel={(option) => `${option.strDrink} (${option.idDrinK})`}
      options={cocktails}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Cocktails"
          sx={{ bgcolor: "#fff" }}
          value={value}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              const selectedOption = cocktails.find(
                (option) =>
                  `${option.strDrink} (${option.idDrinK})` ===
                  params.inputProps.value
              );
              const selectedIdDrink = selectedOption
                ? selectedOption.idDrinK
                : null;
              onSearch(selectedIdDrink);
            }
          }}
        />
      )}
    />
  );
}

export default SearchBar;
