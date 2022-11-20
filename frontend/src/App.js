import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import HomePage from "./pages/homepage/homepage";
import SpiritsPage from "./pages/spiritspage/spiritspage";
import CocktailListPage from "./pages/cocktaillistpage/cocktaillistpage";
import DrinkInfoPage from "./pages/drinkinfopage/drinkinfopage";
import IngredientSearchPage from "./pages/ingredientsearchpage/ingredientsearchpage";
import SpiritsCocktailsPage from "./pages/spiritscocktailspage/spiritscocktailspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/spirits" element={<SpiritsPage />} />
        <Route path="/cocktaillist" element={<CocktailListPage />} />
        <Route path="/drinkinfo/:idDrink" element={<DrinkInfoPage />} />
        <Route path="/searchbyingredient" element={<IngredientSearchPage />} />
        <Route
          path="/spiritscocktails/:spirits"
          element={<SpiritsCocktailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
