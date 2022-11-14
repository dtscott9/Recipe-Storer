import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "./firebase";

function SavedRecipes() {

  const userLoggedIn = localStorage.getItem("email");
  function displayRecipe() {
    const q = query(collection(db));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const recipes = [];
      querySnapshot.forEach((doc) => {
          recipes.push(doc.data().recipeTitle);
      });
      console.log("Current Recipes: ", recipes.join(", "));
    });
  }

  return (
    <div className="page">
      <div className="saved">
        <h1>Saved Recipes</h1>
        <div className="recipes">
         
        </div>
      </div>
    </div>
  );
}

export default SavedRecipes;
