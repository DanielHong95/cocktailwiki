import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import components
import NavBar from "../../components/navbar/navbar";
import DrinkInfo from "../../components/drinkinfo/drinkinfo";

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
  }, [idDrink]);

  if (cocktailInfo === undefined) {
    return <p>loading...</p>;
  }
  return (
    <div className="container">
      <NavBar />
      <p></p>
      <DrinkInfo
        idDrink={idDrink}
        drinkHeader={cocktailInfo.strDrink}
        drinkImage={cocktailInfo.strDrinkThumb}
        drinkInstructions={cocktailInfo.strInstructions}
        drinkIngredient1={cocktailInfo.strIngredient1}
        drinkIngredient2={cocktailInfo.strIngredient2}
        drinkIngredient3={cocktailInfo.strIngredient3}
        drinkIngredient4={cocktailInfo.strIngredient4}
        drinkIngredient5={cocktailInfo.strIngredient5}
        drinkIngredient6={cocktailInfo.strIngredient6}
        drinkIngredient7={cocktailInfo.strIngredient7}
        drinkIngredient8={cocktailInfo.strIngredient8}
        drinkIngredient9={cocktailInfo.strIngredient9}
        drinkIngredient10={cocktailInfo.strIngredient10}
      />
    </div>
  );
}

export default DrinkPage;
