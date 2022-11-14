import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { signInWGoogle } from "./firebase";
import { signOutFromGoogle } from "./firebase";
import { isLoggedIn } from "./firebase";
import Home from "./home";
import About from "./about";
import SavedRecipes from "./savedRecipes";
import AddRecipe from "./addRecipe";
import "../css/index.css";



function Header() {
    function HamMenu() {
        const menuButton = document.getElementById("ham");
        const navi = document.querySelector(".links");
        console.log(menuButton)
        navi.classList.toggle("responsive");  
      }
    function checkLogin() {
        if(localStorage.getItem("userName") != null) {
            document.querySelector(".links").style.display = "initial";
            document.querySelector(".google").style.display = "none";
            document.getElementById("user").textContent = `Welcome ${localStorage.getItem("userName")}!`;
            document.querySelector(".signOut").style.display = "initial";
        }
        else {
            document.querySelector(".links").style.display = "none";
            document.querySelector(".google").style.display = "initial";
            document.querySelector("#ham").style.display = "none";
            document.querySelector(".signOut").style.display = "none";
        }
    }

    
     
    
  
    return(
    <Router>
    <nav onLoad={checkLogin}>
      
      <Link to="home"><img className="logo" src="images/recipeLogo.png" /></Link>
      <a id="ham" href="#" onClick={HamMenu}>
        &#9776;
      </a>
      <ul className="links">
        <li className="responsive" ></li>
        <li>
          <Link className="link" to="home" >
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="addRecipe" onClick={isLoggedIn}>
            Create New Recipe
          </Link>
        </li>
        <li>
          <Link className="link" to="saved">
            Saved Recipes
          </Link>
        </li>
        <li>
          <Link className="link" to="about">
            About
          </Link>
        </li>
      </ul>
      <button className="google" onClick={signInWGoogle}>Sign In</button>
      <h3 id="user"></h3>
      <button className="signOut" onClick={signOutFromGoogle}>Sign Out</button>
    </nav>

    <Routes>
      <Route path="home" index element={<Home />}  />
      <Route path="about" element={<About />} />
      <Route path="saved" element={<SavedRecipes />} />
      <Route path="addRecipe" element={<AddRecipe />} />
    </Routes>

  </Router>
    );
}



export default Header;