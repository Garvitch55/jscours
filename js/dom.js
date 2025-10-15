const title=document.getElementById("title");

console.log(title);
title.innerHTML = "blablabla et avant s'était marqué le DOM dans le HTML"


const btn=document.getElementById("btn");
console.log(btn);


const btn2=document.getElementById("btn2");

const btn3=document.getElementById("btn3");

let clickNumber= document.getElementById("click-number")

let click=0;


btn.addEventListener("click", function(){
title.innerHTML= "jyguf"
})

btn2.addEventListener("click", function(){

click ++; // est équivalent à click +=1;
clickNumber.innerHTML=click;
})

btn3.addEventListener("click", function(){

click --; // est équivalent à click -=1;
clickNumber.innerHTML=click;
})


// AVEC LES INPUTS

const inputText = document.getElementById("input-text");

const input1 = document.getElementById("input1");
//Efface à cahque rechargement
input1.value="";
input1.addEventListener("input", function(){

let valueInput = this.value;
inputText.innerHTML =valueInput;


})

// HEIRARCHIE
const mom = document.getElementById("mom");


//ChildNodes
//récupéré tous les éléments / noeuds (meme le texte)

console.log(mom.childNodes)
console.log(mom.childNodes[5])


// Ici on récupére les éléments à l'intérieur de la div qui se trouve dans mom
console.log(mom.childNodes[5].childNodes)

//children
//récupère tous les enfants directs de mom (pas le texte)
console.log(mom.children)

//First-child
console.log(mom.firstChild)

//FirstElementCHild

console.log(mom.firstElementChild)

//on va supprimer le premier li de mom à partir des paramètres précédent
console.log(mom.children[2].firstElementChild.firstElementChild.remove());


// création d'un élément


let img = document.createElement("img");

//On modifie son src

img.src ="https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg";

img.style.width = "200px";

img.alt= "Une belle chips"


//maintenant que l'on a construit notre image 
// on peut "l accrocher" un autre élément mais tant qu'enfant

mom.appendChild(img)


// RECUPERER LES CLASS

// METHODE DECONSEILLER
// const pokemons=document.getElementsByClassName("pokemons");
// console.log(pokemons[0]);

const pokemons=document.querySelectorAll('.pokemons')
// si on sait qu'il y a qu'un élément d'une classe on peut utiliser :
// Queryselector prendra uniquement le premier avec ce nom de classe.
console.log(pokemons[0]);
const listpokemon=document.querySelector('.list-pokemon')
console.log(listpokemon);

const colorPokemon = ["#ebae34", "#f5b0d7", "#f5bf82", "#d2faac", "#d7c5d9"];
for (let i=0; i< colorPokemon.length; i++) {
    pokemons[i].style.color=colorPokemon[i]
}


// ajouter une class 
// element.classList.add(nom de l'élément)
// enlever une class
// element.classList.remove(nom de la class)
//basculer de class
//element.classList.Toggle(nom de la classe)

