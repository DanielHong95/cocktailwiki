// import components
import NavBar from "../../components/navbar/navbar";
import FilteredCocktaiList from "../../components/filteredcocktaillist/filteredcocktaillist";

function SpiritsDrinksPage() {
  return (
    <div className="container">
      <NavBar />
      <FilteredCocktaiList />
    </div>
  );
}

export default SpiritsDrinksPage;
