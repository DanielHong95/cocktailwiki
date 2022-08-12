import React from "react";

// import components
import NavBar from "../../components/navbar/navbar";
import DrinkImage from "../../components/drinkimage/drinkimage";

function DrinkPage() {
  return (
    <div className="container">
      <NavBar />
      <header>Old Fasioned</header>
      <DrinkImage />
    </div>
  );
}

export default DrinkPage;
