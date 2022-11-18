import React from "react";

// import components
import NavBar2 from "../../components/navbar2/navbar2";
import List from "../../components/cocktaillist/cocktaillist";
import "../cocktaillistpage/cocktaillistpage.css";

function CocktailListPage() {
  return (
    <div className="container">
      <NavBar2 />
      <h1 className="header">COCKTAILS</h1>
      <List />
    </div>
  );
}

export default CocktailListPage;
