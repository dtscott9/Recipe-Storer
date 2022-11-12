import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Footer from "./js/footer";
import Home from "./js/home";
import About from "./js/about";
import SavedRecipes from "./js/savedRecipes";
import AddRecipe from "./js/addRecipe";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <nav>
        <ul className="links">
          <li><Link className="link" to="home">Home</Link></li>
          <li><Link className="link" to="saved">Saved Recipes</Link></li> 
          <li><Link className="link" to="addRecipe">Create New Recipe</Link></li>
          <li><Link className="link" to="about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="home" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="saved" element={<SavedRecipes />} />
        <Route path="addRecipe" element={<AddRecipe />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

console.log("Hello World");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
