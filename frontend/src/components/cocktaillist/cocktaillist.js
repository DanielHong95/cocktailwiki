import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cocktaillist.css";
import axios from "axios";

function List() {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkpage/${idDrink}`;
    navigate(path);
  };

  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      const cocktails = await axios.get("http://localhost:5000/cocktails/");
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);

  return (
    <div className="container">
      {cocktails.length ? (
        cocktails.map((cocktail, index) => {
          return (
            <div key={cocktail.idDrinK}>
              <center>
                <div
                  href="#"
                  className="list"
                  onClick={() => routePage(cocktail.idDrinK)}
                >
                  {cocktail.strDrink}
                </div>
              </center>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default List;
