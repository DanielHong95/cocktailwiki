import React from "react";

// import components
import NavBar2 from "../../components/navbar2/navbar2";
import Spirits from "../../components/spirits/spirits";

function SpiritsPage() {
  return (
    <div className="container">
      <NavBar2 />
      <h2>
        <center>Spirits</center>
      </h2>
      <Spirits />
    </div>
  );
}

export default SpiritsPage;
