import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import components
import NavBar from "../../components/navbar/navbar";
import DrinkImage from "../../components/drinkimage/drinkimage";

function DrinkPage(props) {
  const { idDrink } = useParams();
  const [cocktailInfo, setCocktailInfo] = useState();

  useEffect(() => {
    async function fetchCocktailById() {
      const cocktail = await axios.get(
        `http://localhost:5000/cocktails/${idDrink}`
      );
      setCocktailInfo(cocktail.data);
    }
    fetchCocktailById();
  });

  if (cocktailInfo == undefined) {
    return <p>loading...</p>;
  }
  return (
    <div className="container">
      <NavBar />
      <header>Old Fasioned</header>
      <p></p>
      <DrinkImage
        idDrink={idDrink}
        cocktailImage={cocktailInfo.strDrinkThumb}
      />
    </div>
  );
}

export default DrinkPage;
