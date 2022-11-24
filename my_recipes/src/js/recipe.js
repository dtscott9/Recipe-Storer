import { displayRecipe } from "./savedRecipes";


function Recipe() {

const recipeId = localStorage.getItem("recipeI");

displayRecipe(renderRecipe);

function renderRecipe(items, item) {
    if (recipeId == items.indexOf(item)) {
   
    const title = document.createElement("h2");
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

    const recipe = document.createElement("section");
    recipe.appendChild(title);


    recipe.appendChild(description);
    recipe.appendChild(measure);
    recipe.appendChild(instruct);
    recipe.appendChild(video);
    document.querySelector(".recipeDisplay").appendChild(recipe);

    }
}

return (
    <div className="recipeDisplay">

    </div>
)

}

export default Recipe;