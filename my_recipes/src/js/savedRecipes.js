import { doc, onSnapshot, collection, query, where, orderBy, limit, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

function SavedRecipes() {
  const item = [];
  const userLoggedIn = localStorage.getItem("email");
  const collectionRef = collection(db, userLoggedIn);
  function displayRecipe() {
    onSnapshot(collectionRef, (querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
        
      });
      console.log(item);
      item.forEach(CreateRecipeTitel);
    })
  }

  function CreateRecipeTitel(items) {
    //console.log(items);

    const title = document.createElement("h2");
    const description = document.createElement("p");
    const measure = document.createElement("p");
    const instruct = document.createElement("p");
    const video = document.createElement("iframe");

    title.textContent = items.formData.recipeTitle;
    description.textContent = items.formData.desc;
    measure.textContent = items.formData.measurements;
    instruct.textContent = items.formData.instructions;
    video.setAttribute("src", items.formData.videoLink)
    video.setAttribute("width", "500px");
    video.setAttribute("height", "300px");

    const recipeTitleList = document.createElement("section");
    recipeTitleList.appendChild(title);
    recipeTitleList.appendChild(description);
    recipeTitleList.appendChild(measure);
    recipeTitleList.appendChild(instruct);
    recipeTitleList.appendChild(video);

    document.querySelector(".recipes").appendChild(recipeTitleList);
    

    
  }
  

  displayRecipe();

  return (
    <div className="page">
      <div className="saved">
        <h1>Saved Recipes</h1>
        <div className="recipes" >
         
        </div>
      </div>
    </div>
  );
}

export default SavedRecipes;
