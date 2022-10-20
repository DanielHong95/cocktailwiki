import NavBar from "../../components/navbar/navbar";
import IngredientFilter from "../../components/ingredientfilter/ingredientfilter";
import Tags from "../../components/multiplefiltertest/multiplefiltertest";

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
        <Tags />
      </div>
    </div>
  );
}

export default IngredientSearchPage;
