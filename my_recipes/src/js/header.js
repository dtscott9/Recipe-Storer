import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import Home from "./home";
import About from "./about";
import SavedRecipes from "./savedRecipes";
import AddRecipe from "./addRecipe";
function Header() {
    function HamMenu() {
        const menuButton = document.getElementById("ham");
        const navi = document.querySelector(".links");
        console.log(menuButton)
        navi.classList.toggle("responsive");  
      }
    return(
    <Router>
    <nav>
      
      <img className="logo" src="images/recipeLogo.png" />
      <a id="ham" href="#" onClick={HamMenu}>
        &#9776;
      </a>
      <ul className="links">
        <li className="responsive"></li>
        <li>
          <Link className="link" to="home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="saved">
            Saved Recipes
          </Link>
        </li>
        <li>
          <Link className="link" to="addRecipe">
            Create New Recipe
          </Link>
        </li>
        <li>
          <Link className="link" to="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="home" index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="saved" element={<SavedRecipes />} />
      <Route path="addRecipe" element={<AddRecipe />} />
    </Routes>
  </Router>
    );
}

export default Header;