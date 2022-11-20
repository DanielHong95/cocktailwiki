import "../drinkinfo/drinkinfo.css";

function DrinkInfo(props) {
  return (
    <div key={props.idDrink}>
      <h1>{props.drinkHeader}</h1>
      <img src={props.drinkImage} alt="images" className="image" />\
      <div className="info">
        <p>{props.drinkInstructions}</p>
        <p>
          {props.drinkMeasure1} {props.drinkIngredient1}
        </p>
        <p>
          {props.drinkMeasure2} {props.drinkIngredient2}
        </p>
        <p>
          {props.drinkMeasure3} {props.drinkIngredient3}
        </p>
        <p>
          {props.drinkMeasure4} {props.drinkIngredient4}
        </p>
        <p>
          {props.drinkMeasure5} {props.drinkIngredient5}
        </p>
      </div>
    </div>
  );
}

export default DrinkInfo;
