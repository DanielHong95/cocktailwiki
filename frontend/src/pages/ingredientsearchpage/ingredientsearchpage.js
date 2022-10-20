import NavBar from "../../components/navbar/navbar";
import UniqueIngredients from "../../components/uniqueingredients/uniqueingredients";

function IngredientSearchPage() {
  return (
    <div className="container">
      <NavBar />
      <div>Search by Ingredient</div>
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
