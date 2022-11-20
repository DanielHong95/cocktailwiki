// import components
import NavBar from "../../components/navbar/navbar";
import UniqueIngredients from "../../components/uniqueingredients/uniqueingredients";

function IngredientSearchPage() {
  return (
    <div className="container">
      <NavBar />
      <h1>SEARCH BY INGREDIENTS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UniqueIngredients />
      </div>
    </div>
  );
}

export default IngredientSearchPage;
