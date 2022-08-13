const DrinkImage = (props) => {
  return (
    <div>
      <div>
        <img key={props.idDrink} src={props.cocktailImage} alt="images" />
      </div>
    </div>
  );
};

export default DrinkImage;
