function DrinkInfo(props) {
  return (
    <div key={props.idDrink}>
      <h1>{props.drinkHeader}</h1>
      <img src={props.drinkImage} alt="images" />
      <p>{props.drinkInstructions}</p>
      <p>{props.drinkIngredient1}</p>
      <p>{props.drinkIngredient2}</p>
      <p>{props.drinkIngredient3}</p>
      <p>{props.drinkIngredient4}</p>
      <p>{props.drinkIngredient5}</p>
    </div>
  );
}

export default DrinkInfo;
