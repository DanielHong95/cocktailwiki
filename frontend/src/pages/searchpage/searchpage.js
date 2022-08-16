import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NavBar from "../../components/navbar/navbar";

function SearchPage() {
  return (
    <div className="container">
      <NavBar />
      <div>Search by Ingredient</div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={ingredients}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Ingredient" />}
      />
    </div>
  );
}

const ingredients = [{ label: "ingredents" }];
export default SearchPage;
