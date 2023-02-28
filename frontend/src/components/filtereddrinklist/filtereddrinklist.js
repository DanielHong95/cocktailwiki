import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FilteredDrinkList(props) {
  const [filteredDrink, setFilteredDrinks] = useState([]);

  // route to drink info page
  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkinfo/${idDrink}`;
    navigate(path);
  };

  useEffect(() => {
    async function fetchIngredients() {
      const filteredDrink = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/cocktails/`
      );
      setFilteredDrinks(filteredDrink.data);
    }
    // console.log(filteredDrink);
    fetchIngredients();
  }, []);

  let selectedIngredients = props.ingredientsArray;
  // console.log(selectedIngredients);
  // console.log(filteredDrink);

  // filter all cocktails for selected cocktails
  let filterBy = {
    strIngredient1: selectedIngredients,
    strIngredient2: selectedIngredients,
    strIngredient3: selectedIngredients,
    strIngredient4: selectedIngredients,
    strIngredient5: selectedIngredients,
    strIngredient6: selectedIngredients,
    strIngredient7: selectedIngredients,
    strIngredient8: selectedIngredients,
    strIngredient9: selectedIngredients,
    strIngredient10: selectedIngredients,
  };
  let drink = filteredDrink.filter((o) =>
    Object.keys(filterBy).some((k) => filterBy[k].some((f) => o[k] === f))
  );
  console.log(drink);

  return (
    <div className="container">
      {drink.length ? (
        drink.map((cocktail, index) => {
          return (
            <center>
              <div key={cocktail.idDrinK}>
                <div
                  className="list"
                  onClick={() => routePage(cocktail.idDrinK)}
                >
                  {cocktail.strDrink}
                </div>
              </div>
            </center>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default FilteredDrinkList;
