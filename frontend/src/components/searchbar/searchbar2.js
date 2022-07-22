import { useEffect, useState } from "react";
import "./searchbar2.css";
import axios from "axios";

const SearchBar2 = () => {
  const [cocktails, setCocktails] = useState("");
  // const [value, setValue] = useState("");

  const onChange = (event) => {
    setCocktails(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setCocktails(searchTerm);
    console.log("search ", searchTerm);
  };

  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      const cocktails = await axios.get(`http://localhost:5000/cocktails/`);
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);

  // Convery cocktails object to cocktails array
  const cocktailsArray = Object.entries(cocktails);
  console.log(cocktailsArray);

  return (
    <div>
      <h1>Search Cocktails</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={cocktails} onChange={onChange} />
          <button onClick={() => onSearch(cocktails)}>Search</button>
        </div>
        <div className="dropdown">
          {cocktailsArray
            .filter((item) => {
              const searchTerm = cocktails.toLowerCase();
              const strDrink = item.strDrink.toLowerCase();

              return (
                searchTerm &&
                strDrink.startsWith(searchTerm) &&
                strDrink !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.strDrink)}
                className="dropdown-row"
                key={item.strDrink}
              >
                {item.strDrink}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar2;
