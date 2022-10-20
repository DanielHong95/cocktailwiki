import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

// const strIngredientJson = [
//   { strIngredient: "Gin" },
//   { sdfasdfadf: "Grand Marnier" },
//   {
//     strIngredient: "Lemon Juice",
//   },
//   {
//     strIngredient: "Amaretto",
//   },
//   {
//     strIngredient: "Baileys irish cream",
//   },
//   {
//     strIngredient: "Cognac",
//   },
//   {
//     strIngredient: "Grenadine",
//   },
//   {
//     strIngredient: "Heavy cream",
//   },
//   {
//     strIngredient: "Egg White",
//   },
//   {
//     strIngredient: "Dark rum",
//   },
//   {
//     strIngredient: "Lemon juice",
//   },
//   {
//     strIngredient: "Absolut Vodka",
//   },
//   {
//     strIngredient: "Tonic water",
//   },
//   {
//     strIngredient: "151 proof rum",
//   },
//   {
//     strIngredient: "Wild Turkey",
//   },
//   {
//     strIngredient: "Applejack",
//   },
//   {
//     strIngredient: "Grapefruit juice",
//   },
//   {
//     strIngredient: "Strawberry schnapps",
//   },
//   {
//     strIngredient: "Orange juice",
//   },
//   {
//     strIngredient: "Cranberry juice",
//   },
//   {
//     strIngredient: "Apple juice",
//   },
//   {
//     strIngredient: "Vodka",
//   },
//   {
//     strIngredient: "Pisang Ambon",
//   },
//   {
//     strIngredient: "Lemonade",
//   },
//   {
//     strIngredient: "Peach nectar",
//   },
//   {
//     strIngredient: "Rye Whiskey",
//   },
//   {
//     strIngredient: "Dry Vermouth",
//   },
//   {
//     strIngredient: "Maraschino Liqueur",
//   },
//   {
//     strIngredient: "Maraschino Cherry",
//   },
//   {
//     strIngredient: "Kahlua",
//   },
//   {
//     strIngredient: "Egg white",
//   },
//   {
//     strIngredient: "Vermouth",
//   },
//   {
//     strIngredient: "Light rum",
//   },
//   {
//     strIngredient: "Triple sec",
//   },
//   {
//     strIngredient: "Lime juice",
//   },
//   {
//     strIngredient: "Mint",
//   },
//   {
//     strIngredient: "Scotch",
//   },
//   {
//     strIngredient: "Sweet Vermouth",
//   },
//   {
//     strIngredient: "lemon juice",
//   },
//   {
//     strIngredient: "maraschino liqueur",
//   },
//   {
//     strIngredient: "Creme de Cacao",
//   },
//   {
//     strIngredient: "Light cream",
//   },
//   {
//     strIngredient: "Blended whiskey",
//   },
//   {
//     strIngredient: "Pineapple juice",
//   },
//   {
//     strIngredient: "Bourbon",
//   },
//   {
//     strIngredient: "Blackberry brandy",
//   },
//   {
//     strIngredient: "Lemon peel",
//   },
//   {
//     strIngredient: "Bitters",
//   },
//   {
//     strIngredient: "Absinthe",
//   },
//   {
//     strIngredient: "Champagne",
//   },
//   {
//     strIngredient: "Soda water",
//   },
//   {
//     strIngredient: "Frangelico",
//   },
//   {
//     strIngredient: "Cream",
//   },
//   {
//     strIngredient: "Creme de Banane",
//   },
//   {
//     strIngredient: "Sambuca",
//   },
//   {
//     strIngredient: "Orange Bitters",
//   },
//   {
//     strIngredient: "Green Chartreuse",
//   },
//   {
//     strIngredient: "Irish cream",
//   },
//   {
//     strIngredient: "Goldschlager",
//   },
//   {
//     strIngredient: "Peach schnapps",
//   },
//   {
//     strIngredient: "Sugar syrup",
//   },
//   {
//     strIngredient: "Blue Curacao",
//   },
//   {
//     strIngredient: "Maraschino cherry",
//   },
//   {
//     strIngredient: "Yoghurt",
//   },
//   {
//     strIngredient: "Banana",
//   },
//   {
//     strIngredient: "Ice",
//   },
//   {
//     strIngredient: "Passion fruit juice",
//   },
//   {
//     strIngredient: "Rum",
//   },
//   {
//     strIngredient: "Galliano",
//   },
//   {
//     strIngredient: "Pineapple Juice",
//   },
//   {
//     strIngredient: "Prosecco",
//   },
//   {
//     strIngredient: "Corona",
//   },
//   {
//     strIngredient: "Bacardi Limon",
//   },
//   {
//     strIngredient: "Hot Chocolate",
//   },
//   {
//     strIngredient: "Cherry Heering",
//   },
//   {
//     strIngredient: "Sloe gin",
//   },
//   {
//     strIngredient: "Midori melon liqueur",
//   },
//   {
//     strIngredient: "Jägermeister",
//   },
//   {
//     strIngredient: "Banana liqueur",
//   },
//   {
//     strIngredient: "Southern Comfort",
//   },
//   {
//     strIngredient: "Lime",
//   },
//   {
//     strIngredient: "Everclear",
//   },
//   {
//     strIngredient: "Mountain Dew",
//   },
//   {
//     strIngredient: "Tomato juice",
//   },
//   {
//     strIngredient: "Tabasco sauce",
//   },
//   {
//     strIngredient: "Lemon",
//   },
//   {
//     strIngredient: "Powdered sugar",
//   },
//   {
//     strIngredient: "Cherry",
//   },
//   {
//     strIngredient: "Maraschino liqueur",
//   },
//   {
//     strIngredient: "Sugar",
//   },
//   {
//     strIngredient: "Cachaca",
//   },
//   {
//     strIngredient: "Cherry brandy",
//   },
//   {
//     strIngredient: "Coca-Cola",
//   },
//   {
//     strIngredient: "Coffee",
//   },
//   {
//     strIngredient: "Milk",
//   },
//   {
//     strIngredient: "Spiced rum",
//   },
//   {
//     strIngredient: "Ginger ale",
//   },
//   {
//     strIngredient: "Falernum",
//   },
//   {
//     strIngredient: "Angostura Bitters",
//   },
//   {
//     strIngredient: "blackstrap rum",
//   },
//   {
//     strIngredient: "Port",
//   },
//   {
//     strIngredient: "Carbonated water",
//   },
//   {
//     strIngredient: "Brandy",
//   },
//   {
//     strIngredient: "Water",
//   },
//   {
//     strIngredient: "Caramel coloring",
//   },
//   {
//     strIngredient: "White rum",
//   },
//   {
//     strIngredient: "Lager",
//   },
//   {
//     strIngredient: "Campari",
//   },
//   {
//     strIngredient: "Absolut Citron",
//   },
//   {
//     strIngredient: "Cointreau",
//   },
//   {
//     strIngredient: "Egg yolk",
//   },
//   {
//     strIngredient: "Wine",
//   },
//   {
//     strIngredient: "Vanilla extract",
//   },
//   {
//     strIngredient: "Chocolate liqueur",
//   },
//   {
//     strIngredient: "Triple Sec",
//   },
//   {
//     strIngredient: "Lillet Blanc",
//   },
//   {
//     strIngredient: "Chocolate",
//   },
//   {
//     strIngredient: "Grain alcohol",
//   },
//   {
//     strIngredient: "Food coloring",
//   },
//   {
//     strIngredient: "gin",
//   },
//   {
//     strIngredient: "Peach Bitters",
//   },
//   {
//     strIngredient: "Cider",
//   },
//   {
//     strIngredient: "Blackcurrant cordial",
//   },
//   {
//     strIngredient: "Fruit punch",
//   },
//   {
//     strIngredient: "Sprite",
//   },
//   {
//     strIngredient: "Tequila",
//   },
//   {
//     strIngredient: "Olive",
//   },
//   {
//     strIngredient: "Olive Brine",
//   },
//   {
//     strIngredient: "demerara Sugar",
//   },
//   {
//     strIngredient: "Pisco",
//   },
//   {
//     strIngredient: "Lime Juice",
//   },
//   {
//     strIngredient: "Pineapple Syrup",
//   },
//   {
//     strIngredient: "Pepper",
//   },
//   {
//     strIngredient: "Lavender",
//   },
//   {
//     strIngredient: "Dark Rum",
//   },
//   {
//     strIngredient: "Ginger Beer",
//   },
//   {
//     strIngredient: "Whiskey",
//   },
//   {
//     strIngredient: "Hot Damn",
//   },
//   {
//     strIngredient: "Dubonnet Rouge",
//   },
//   {
//     strIngredient: "Cinnamon",
//   },
//   {
//     strIngredient: "Whipped cream",
//   },
//   {
//     strIngredient: "Chocolate syrup",
//   },
//   {
//     strIngredient: "Salt",
//   },
//   {
//     strIngredient: "Whipping cream",
//   },
//   {
//     strIngredient: "Vanilla syrup",
//   },
//   {
//     strIngredient: "Espresso",
//   },
//   {
//     strIngredient: "Egg",
//   },
//   {
//     strIngredient: "Condensed milk",
//   },
//   {
//     strIngredient: "Nutmeg",
//   },
//   {
//     strIngredient: "Apricot brandy",
//   },
//   {
//     strIngredient: "Elderflower cordial",
//   },
//   {
//     strIngredient: "Mezcal",
//   },
//   {
//     strIngredient: "Coffee liqueur",
//   },
//   {
//     strIngredient: "Rose",
//   },
//   {
//     strIngredient: "Strawberries",
//   },
//   {
//     strIngredient: "Orange",
//   },
//   {
//     strIngredient: "Benedictine",
//   },
//   {
//     strIngredient: "Honey",
//   },
//   {
//     strIngredient: "Figs",
//   },
//   {
//     strIngredient: "Tonic Water",
//   },
//   {
//     strIngredient: "Apple",
//   },
//   {
//     strIngredient: "Apricot Nectar",
//   },
//   {
//     strIngredient: "Pomegranate juice",
//   },
//   {
//     strIngredient: "Soda Water",
//   },
//   {
//     strIngredient: "Raspberry Liqueur",
//   },
//   {
//     strIngredient: "pineapple juice",
//   },
//   {
//     strIngredient: "Lillet",
//   },
//   {
//     strIngredient: "Fruit juice",
//   },
//   {
//     strIngredient: "Firewater",
//   },
//   {
//     strIngredient: "Absolut Peppar",
//   },
//   {
//     strIngredient: "Beer",
//   },
//   {
//     strIngredient: "Sarsaparilla",
//   },
//   {
//     strIngredient: "Pineapple",
//   },
//   {
//     strIngredient: "Sugar Syrup",
//   },
//   {
//     strIngredient: "Orange peel",
//   },
//   {
//     strIngredient: "Peach Vodka",
//   },
//   {
//     strIngredient: "Red wine",
//   },
//   {
//     strIngredient: "Cloves",
//   },
//   {
//     strIngredient: "Grapefruit Juice",
//   },
//   {
//     strIngredient: "Lemon Peel",
//   },
//   {
//     strIngredient: "Malibu rum",
//   },
//   {
//     strIngredient: "lemon",
//   },
//   {
//     strIngredient: "Club soda",
//   },
//   {
//     strIngredient: "Green Creme de Menthe",
//   },
//   {
//     strIngredient: "Whisky",
//   },
//   {
//     strIngredient: "White Rum",
//   },
//   {
//     strIngredient: "Tea",
//   },
//   {
//     strIngredient: "Blackberries",
//   },
//   {
//     strIngredient: "Grape juice",
//   },
//   {
//     strIngredient: "Carbonated soft drink",
//   },
//   {
//     strIngredient: "Sherbet",
//   },
//   {
//     strIngredient: "Irish whiskey",
//   },
//   {
//     strIngredient: "Corn syrup",
//   },
//   {
//     strIngredient: "Cherry Juice",
//   },
//   {
//     strIngredient: "Orange Peel",
//   },
//   {
//     strIngredient: "Red Chili Flakes",
//   },
//   {
//     strIngredient: "Ginger",
//   },
//   {
//     strIngredient: "Orange bitters",
//   },
//   {
//     strIngredient: "Butter",
//   },
//   {
//     strIngredient: "Marshmallows",
//   },
//   {
//     strIngredient: "Brown sugar",
//   },
//   {
//     strIngredient: "Iced tea",
//   },
//   {
//     strIngredient: "Half-and-half",
//   },
//   {
//     strIngredient: "Peach brandy",
//   },
//   {
//     strIngredient: "Aperol",
//   },
//   {
//     strIngredient: "Chambord raspberry liqueur",
//   },
//   {
//     strIngredient: "Anis",
//   },
//   {
//     strIngredient: "Jack Daniels",
//   },
//   {
//     strIngredient: "Jello",
//   },
//   {
//     strIngredient: "Mint syrup",
//   },
//   {
//     strIngredient: "Yellow Chartreuse",
//   },
//   {
//     strIngredient: "Apple brandy",
//   },
//   {
//     strIngredient: "Tennessee whiskey",
//   },
//   {
//     strIngredient: "Creme de Cassis",
//   },
//   {
//     strIngredient: "Absolut Kurant",
//   },
//   {
//     strIngredient: "Kiwi liqueur",
//   },
//   {
//     strIngredient: "Bitter lemon",
//   },
//   {
//     strIngredient: "Kiwi",
//   },
//   {
//     strIngredient: "Cranberry vodka",
//   },
//   {
//     strIngredient: "Apfelkorn",
//   },
//   {
//     strIngredient: "Schweppes Russchian",
//   },
//   {
//     strIngredient: "Kool-Aid",
//   },
//   {
//     strIngredient: "Papaya",
//   },
//   {
//     strIngredient: "Angostura bitters",
//   },
//   {
//     strIngredient: "Drambuie",
//   },
//   {
//     strIngredient: "Cayenne pepper",
//   },
//   {
//     strIngredient: "Tia maria",
//   },
//   {
//     strIngredient: "Mango",
//   },
//   {
//     strIngredient: "Orgeat syrup",
//   },
//   {
//     strIngredient: "Orange spiral",
//   },
//   {
//     strIngredient: "Coconut Liqueur",
//   },
//   {
//     strIngredient: "Cumin seed",
//   },
//   {
//     strIngredient: "Cocoa powder",
//   },
//   {
//     strIngredient: "Tomato Juice",
//   },
//   {
//     strIngredient: "Worcestershire Sauce",
//   },
//   {
//     strIngredient: "Soy Sauce",
//   },
//   {
//     strIngredient: "Pina colada mix",
//   },
//   {
//     strIngredient: "Daiquiri mix",
//   },
//   {
//     strIngredient: "Pepsi Cola",
//   },
//   {
//     strIngredient: "Black pepper",
//   },
//   {
//     strIngredient: "Butterscotch schnapps",
//   },
//   {
//     strIngredient: "White Creme de Menthe",
//   },
//   {
//     strIngredient: "Sour mix",
//   },
//   {
//     strIngredient: "Lemon-lime soda",
//   },
//   {
//     strIngredient: "Rye whiskey",
//   },
//   {
//     strIngredient: "Oreo cookie",
//   },
//   {
//     strIngredient: "Orange Juice",
//   },
//   {
//     strIngredient: "Rosemary",
//   },
//   {
//     strIngredient: "Grape Soda",
//   },
//   {
//     strIngredient: "Apricot Brandy",
//   },
//   {
//     strIngredient: "Orange Curacao",
//   },
//   {
//     strIngredient: "Egg Yolk",
//   },
//   {
//     strIngredient: "Blended Scotch",
//   },
//   {
//     strIngredient: "Honey syrup",
//   },
//   {
//     strIngredient: "Islay single malt Scotch",
//   },
//   {
//     strIngredient: "Coconut milk",
//   },
//   {
//     strIngredient: "Passoa",
//   },
//   {
//     strIngredient: "Cherry liqueur",
//   },
//   {
//     strIngredient: "Fresh Lime Juice",
//   },
//   {
//     strIngredient: "Pink lemonade",
//   },
//   {
//     strIngredient: "Coffee brandy",
//   },
//   {
//     strIngredient: "Lime vodka",
//   },
//   {
//     strIngredient: "Sherry",
//   },
//   {
//     strIngredient: "Black Sambuca",
//   },
//   {
//     strIngredient: "7-Up",
//   },
//   {
//     strIngredient: "Sweet and sour",
//   },
//   {
//     strIngredient: "Crown Royal",
//   },
//   {
//     strIngredient: "Raspberry syrup",
//   },
//   {
//     strIngredient: "Raspberry vodka",
//   },
//   {
//     strIngredient: "Lime peel",
//   },
//   {
//     strIngredient: "Ricard",
//   },
//   {
//     strIngredient: "Peychaud bitters",
//   },
//   {
//     strIngredient: "Amaro Montenegro",
//   },
//   {
//     strIngredient: "Ruby Port",
//   },
//   {
//     strIngredient: "Advocaat",
//   },
//   {
//     strIngredient: "Jim Beam",
//   },
//   {
//     strIngredient: "Allspice",
//   },
//   {
//     strIngredient: "Godiva liqueur",
//   },
//   {
//     strIngredient: "Anisette",
//   },
//   {
//     strIngredient: "Fresca",
//   },
//   {
//     strIngredient: "Cherries",
//   },
//   {
//     strIngredient: "Irish Whiskey",
//   },
//   {
//     strIngredient: "Creme De Banane",
//   },
//   {
//     strIngredient: "Celery salt",
//   },
//   {
//     strIngredient: "Coriander",
//   },
//   {
//     strIngredient: "Cardamom",
//   },
//   {
//     strIngredient: "Rosso Vermouth",
//   },
//   {
//     strIngredient: "7-up",
//   },
//   {
//     strIngredient: "Melon Liqueur",
//   },
//   {
//     strIngredient: "Cranberry Juice",
//   },
//   {
//     strIngredient: "Yukon Jack",
//   },
//   {
//     strIngredient: "Maple syrup",
//   },
//   {
//     strIngredient: "Limeade",
//   },
//   {
//     strIngredient: "Rosemary Syrup",
//   },
//   {
//     strIngredient: "Cream of coconut",
//   },
//   {
//     strIngredient: "White Wine",
//   },
//   {
//     strIngredient: "Apple Brandy",
//   },
//   {
//     strIngredient: "Fruit",
//   },
//   {
//     strIngredient: "Peachtree schnapps",
//   },
//   {
//     strIngredient: "Surge",
//   },
//   {
//     strIngredient: "Root beer",
//   },
//   {
//     strIngredient: "Gold rum",
//   },
//   {
//     strIngredient: "Ouzo",
//   },
//   {
//     strIngredient: "Zima",
//   },
// ];

// const arrayOfStrings = ["poop", "fart"];

function IngredientFilter() {
  const [ingredients, setIngredients] = useState([]);

  // get all cocktails data
  useEffect(() => {
    async function fetchIngredients() {
      // You can await here
      const cocktailsResponse = await axios.get(
        "http://localhost:5000/cocktails/"
      );
      const cocktails = cocktailsResponse.data;
      console.log(cocktails.data);

      let ingredientSet = new Set();
      for (let i = 0; i < cocktails.length; i++) {
        ingredientSet.add(cocktails[i].strIngredient1);
        ingredientSet.add(cocktails[i].strIngredient2);
        ingredientSet.add(cocktails[i].strIngredient3);
        ingredientSet.add(cocktails[i].strIngredient5);
        ingredientSet.add(cocktails[i].strIngredient6);
        ingredientSet.add(cocktails[i].strIngredient7);
        ingredientSet.add(cocktails[i].strIngredient8);
      }
      console.log(ingredientSet);
      const ingredientArrayPoop = Array.from(ingredientSet);
      const ingredientArray = ingredientArrayPoop.filter((n) => n);
      console.log(ingredientArray);

      setIngredients(ingredientArray);
      // console.log(cocktails);
    }
    fetchIngredients();
  }, []);

  // get all cocktails data
  // useEffect(() => {}, [ingredients]);

  // Create set of unique ingredients
  // let ingredientSet = new Set();
  // for (let i = 0; i < ingredients.length; i++) {
  //   ingredientSet.add(ingredients[i].strIngredient1);
  //   ingredientSet.add(ingredients[i].strIngredient2);
  //   ingredientSet.add(ingredients[i].strIngredient3);
  //   ingredientSet.add(ingredients[i].strIngredient5);
  //   ingredientSet.add(ingredients[i].strIngredient6);
  //   ingredientSet.add(ingredients[i].strIngredient7);
  //   ingredientSet.add(ingredients[i].strIngredient8);
  // }
  // console.log(ingredientSet);
  // const ingredientArray = Array.from(ingredientSet);
  // console.log(ingredientArray);

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ingredients}
        // getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ingredients"
            placeholder="Search Ingredients"
          />
        )}
      />
    </Stack>
  );
}

export default IngredientFilter;
