import NavBar2 from "../../components/navbar2/navbar2";
import UniqueIngredients from "../../components/uniqueingredients/uniqueingredients";

function IngredientSearchPage() {
  return (
    <div className="container">
      <NavBar2 />
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
