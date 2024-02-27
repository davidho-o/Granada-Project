/*let text;
function functie() {
  text=document.getElementById('idk').value;
  console.log(text);
}

let formularulMeu = document.getElementById('formular');
let inputuMio = document.getElementById('idk1');

formularulMeu.addEventListener("submit", (event) => {  
  event.preventDefault();
  console.log(inputuMio.value);
})
*/
let food = '';
// food = localStorage.getItem('foodie');
// if(food){
//   document.getElementById('input').value = food;
//   console.log(food);
// }else{
//   food = document.getElementById('input').value;
//   localStorage.setItem('foodie', food);
// }
// food = localStorage.getItem('foodie');
// if(food){
//   document.getElementById('input').innerHTML = food;
// }else{
//   food = document.getElementById('input').value;
//   localStorage.setItem('foodie', food);
// }
let ok=1;
 async function myFunction(){
  food = document.getElementById('input').value;
  let data = [];
  data = await fetchIt(food);
  console.log(data);
  const noru = document.body.querySelector(".container");
  if(noru) noru.remove();
  const recCont = document.body.querySelector(".recipeContainer");
  if(recCont) recCont.remove();



  const recipeContainer = document.createElement("div");
  recipeContainer.className = 'recipeContainer';
  document.body.appendChild(recipeContainer);
  data.forEach((element) => {
    const uiEl = document.createElement("div");
    uiEl.className = 'oneRecipe';
    const titlu = document.createElement("a");
    // console.log(element);
    titlu.innerText = `${element.recipe.label}`;
    titlu.href = `${element.recipe.url}`;
    titlu.className = 'textRecipe';
    const image = document.createElement("img");
    image.src = `${element.recipe.image}`;
    image.className = 'reteta';
    const textul = document.createElement("p");
    textul.innerHTML = "Ingredients: "
    textul.innerHTML += ` ${element.recipe.ingredientLines}`;
    uiEl.appendChild(titlu);
    uiEl.appendChild(image);
    uiEl.appendChild(textul);
    recipeContainer.appendChild(uiEl);
  });
  // body.innerHTML = `<div id="header">
  // <p class="textHeader">FlavorFusions</p>
  // <p class="textHeader">|</p>
  // <button class="buttonHeader"><a href="index.html" class="ankor">Home</a></button>
  // <button class="buttonHeader"><a href="recipes.html" class="ankor">Our recipes</a></button>
  // <button class="buttonHeader"><a href="aboutUs.html" class="ankor">About us</a></button>
  // <div class="search">
  //   <input id="input" placeholder="Search..."></input>
  //   <button id="buttonSearch" onclick="myFunction()">⌕</button>
  //   </div>
  //   </div>`
 }

 let fetchIt = async(food)=>{
    const result = await fetch(`https://api.edamam.com/search?q=${food}&app_id=1c1ce910&app_key=
  887fcb91823c9c068ee0d73d92e3041c`);
    const hits = (await result.json()).hits;
    // const label = (await result.json()).label;
  return hits;
 }

 const ananiaBoss = (event) => {
  if(event.key === "Enter"){
    myFunction();
  }
 }