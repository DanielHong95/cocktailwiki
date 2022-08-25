import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import HomePage from "./pages/homepage/homepage";
import SpiritsPage from "./pages/spiritspage/spiritspage";
import CocktailListPage from "./pages/cocktaillistpage/cocktaillistpage";
import DrinkPage from "./pages/drinkpage/drinkpage";
import SearchPage from "./pages/searchpage/searchpage";
import SpiritsDrinksPage from "./pages/spiritsdrinkpage/spiritsdrinkpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/spiritspage" element={<SpiritsPage />} />
        <Route path="/cocktaillistpage" element={<CocktailListPage />} />
        <Route path="/drinkpage/:idDrink" element={<DrinkPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route
          path="/spiritsdrinkpage/:spirits"
          element={<SpiritsDrinksPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
