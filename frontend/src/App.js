import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import HomePage from "./pages/homepage/homepage";
import SpiritsPage from "./pages/spiritspage/spiritspage";
import CocktailListPage from "./pages/cocktaillistpage/cocktaillistpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/homepage" element={<HomePage />} />
        <Route path="/spirits" element={<SpiritsPage />} />
        <Route path="/cocktaillist" element={<CocktailListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
