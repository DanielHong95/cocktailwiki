import React from "react";

// import components
import NavBar from "../../components/navbar/navbar";
import Spirits from "../../components/spirits/spirits";

function SpiritsPage() {
  return (
    <div className="container">
      <NavBar />
      <header>Spirits</header>
      <Spirits />
    </div>
  );
}

export default SpiritsPage;
