function DrinkInfo(props) {
  return (
    <div key={props.idDrink}>
      <h1>{props.drinkHeader}</h1>
      <img src={props.drinkImage} alt="images" />
      <div>{props.drinkInstructions}</div>
      <div>{props.drinkIngredient1}</div>
      <div>{props.drinkIngredient2}</div>
      <div>{props.drinkIngredient3}</div>
      <div>{props.drinkIngredient4}</div>
      <div>{props.drinkIngredient5}</div>
    </div>
  );
}

export default DrinkInfo;
