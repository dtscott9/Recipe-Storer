import { doc, onSnapshot, collection, query, where, orderBy, limit, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

export function displayRecipe(createDetails) {
  const items = [];
  const userLoggedIn = localStorage.getItem("email");
  const collectionRef = collection(db, userLoggedIn);
  onSnapshot(collectionRef, (querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
      
    });
    
    items.forEach((item) => {
      createDetails(items,item);
    });
  })
}

function SavedRecipes() {

  function CreateRecipeTitel(items, item) {
    //console.log(items);

    const icon = document.createElement("img");
    icon.setAttribute("alt", "Icon Image");
    icon.setAttribute("src", "images/cookBookIcon.png");
    icon.setAttribute("width", "100px")
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const measure = document.createElement("p");
    const instruct = document.createElement("p");
    const video = document.createElement("iframe");

    title.textContent = item.formData.recipeTitle;
    description.textContent = item.formData.desc;
    measure.textContent = item.formData.measurements;
    instruct.textContent = item.formData.instructions;
    video.setAttribute("src", item.formData.videoLink)
    video.setAttribute("width", "500px");
    video.setAttribute("height", "300px");

    const recipeTitleList = document.createElement("section");
    recipeTitleList.appendChild(title);
    recipeTitleList.appendChild(icon);

    // recipeTitleList.appendChild(description);
    // recipeTitleList.appendChild(measure);
    // recipeTitleList.appendChild(instruct);
    // recipeTitleList.appendChild(video);

    recipeTitleList.addEventListener("click", ()=> {
      console.log(items.indexOf(item));
      localStorage.setItem("recipeI", items.indexOf(item));
      document.location.href = "recipe";
      
    })

    document.querySelector(".recipes").appendChild(recipeTitleList);
    

    
  }
  

  displayRecipe(CreateRecipeTitel);

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
