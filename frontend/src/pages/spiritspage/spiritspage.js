import React from "react";

// import components
import NavBar2 from "../../components/navbar2/navbar2";
import Spirits from "../../components/spirits/spirits";
import "../spiritspage/spiritspage.css";

function SpiritsPage() {
  return (
    <div>
      <NavBar2 />
      <h1>SPIRITS</h1>
      <Spirits />
    </div>
  );
}

export default SpiritsPage;
