import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import HomePage from "./pages/homepage/homepage";
import SpiritsPage from "./pages/spiritspage/spiritspage";
import CocktailListPage from "./pages/cocktaillistpage/cocktaillistpage";
import DrinkPage from "./pages/drinkpage/drinkpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/spirits" element={<SpiritsPage />} />
        <Route path="/cocktaillist" element={<CocktailListPage />} />
        <Route path="/drinkpage/:idDrink" element={<DrinkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
