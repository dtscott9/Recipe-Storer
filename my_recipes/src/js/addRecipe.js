
import { db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AddRecipe() {
    console.log("Test");
    const userLoggedIn = localStorage.getItem("email");

     async function saveInput(event) {
        event.preventDefault();

        const elementsArray = [...event.target.elements];
        console.log(elementsArray);

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator;
        }, {});
        console.log({ formData });

        const collectionName = document.querySelector("#recipeTitle").value;

        await setDoc(doc(db, userLoggedIn, collectionName), {
            formData
        });
        alert("Your recipe has been saved!") 
    }

  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="heroAdd">
        <h1>Create a New Recipe</h1>
        <form className="recipeMaker" onSubmit={saveInput}>
            <label for="title">Recipe Title</label>
            <input id= "recipeTitle" type="text" name="title"/>
            <label for="videoLink">Video Link</label>
            <input id= "videoLink" type="url" name="videoLink"/>
            <label for="description">Description</label>
            <textarea id="desc" name="description"/>
            <label for="measurements">Measurements</label>
            <textarea id="measurements" name="measurements"/>
            <label for="instructions">Instructions</label>
            <textarea id="instructions" name="instructions"/>
            <input type="submit" id="submit"/>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
