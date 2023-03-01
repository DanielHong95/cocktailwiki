import React from "react";

//components
import SearchBar from "../../components/searchbar/searchbar.js";
import NavBar from "../../components/navbar/navbar.js";
import "./homepage.css";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>HOME</h1>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="paragraph">
        Hello world, my name is Daniel Hong and welcome to my Cocktail Wikipedia
        website! The idea for this website was born during the pandemic from my
        frustrations of not being able to find cocktail recipes that used the
        slew of ingredients that I had on hand. Throughout these past few
        months, I delved into the wonderful world of web development and have
        found that both web development and creating cocktails are not too
        dissimilar. Both pursuits require attention to detail, experimentation,
        and a willingness to try new things (and sometimes fail). I hope you
        enjoy this website!
      </div>
    </div>
  );
}

export default HomePage;
