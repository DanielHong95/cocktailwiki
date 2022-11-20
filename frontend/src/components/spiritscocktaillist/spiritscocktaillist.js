import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SpiritsCocktailList() {
  const { spirits } = useParams();
  console.log({ spirits });
  const [cocktails, setCocktails] = useState([]);

  // route to drink info page
  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkinfo/${idDrink}`;
    navigate(path);
  };

  // get all data of selected spirit
  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      console.log(spirits);
      const cocktails = await axios.get(
        `http://localhost:5000/cocktails/spirits/${spirits}`
      );
      setCocktails(cocktails.data);
    }
    console.log(cocktails);
    fetchCocktails();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>{spirits.toUpperCase()}</h1>
      </div>
      {cocktails.length ? (
        cocktails.map((cocktail, index) => {
          return (
            <div key={cocktail.idDrinK}>
              <div className="list" onClick={() => routePage(cocktail.idDrinK)}>
                {cocktail.strDrink}
              </div>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default SpiritsCocktailList;
