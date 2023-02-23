import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SearchBar() {
  const [cocktails, setCocktails] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchCocktails() {
      const cocktails = await axios.get("http://localhost:5000/cocktails/");
      setCocktails(cocktails.data);
      // console.log(cocktails.data);
    }
    fetchCocktails();
  }, []);
  console.log(cocktails);

  const navigate = useNavigate();
  const onSearch = (idDrinK) => {
    let path = `/drinkinfo/${idDrinK}`;
    navigate(path);
    setValue(idDrinK);
    console.log("search ", idDrinK);
  };

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
