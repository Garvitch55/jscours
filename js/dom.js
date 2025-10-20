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



// SetTimeout()


// setTimeout(function(){

//     console.log(" 3 secondes se sont écoulés")
// }
// , 3000
// )

// SetInterval(function(){

//     console.log(" 1 seconde VIENT DE SE passer")
// }
// , 1000
// )

let timer = setTimeout (function(){
    console.log(" 3 secondes se sont écoulés")
}
, 3000
)

clearTimeout(timer) // c'est plus interessant dans un évènement


const interval = setInterval (function(){

    console.log(" 1 seconde VIENT DE SE passer")
}
, 1000
)

clearInterval(interval)


const punchlines = [
  "Tu descends plus lentement qu’une mise à jour Windows ",
  "Allez, on se réveille… le bas de la page va pas venir tout seul ! ",
  "Tu veux un café pour te motiver ou c’est une stratégie de flemme ? ",
  "Je pourrais tricoter un pull pendant que tu scrolles… ",
  "C’est un concours de lenteur ou tu fais ça exprès ? ",
  "Encore un effort, c’est pas le Mont Everest non plus ",
  "Allez courage, même les tortues ont des objectifs ! ",
  "Tu scrolles comme si tu voulais pas savoir la fin ",
  "Je vois plus de poussière que de progrès ",
  "On dirait que tu scrolles avec les coudes ",
  "Si tu vas plus lentement, on va repartir en 2022… ",
  "Il y a des glaciers qui fondent plus vite que toi ",
  "Même une limace sous calmants serait déjà arrivée ",
  "Tu veux qu’on t’applaudisse pour chaque pixel descendu ? ",
  "Tu scrolles en morse ou c’est ton style naturel ? ",
  "Je me demande si t’as pas mis une brique sur la barre d’espace ",
  "T’as le même rythme qu’un fax sous la pluie ",
  "On est sur une promenade digestive ou un vrai scroll ? ",
  "Tu vas finir par t'endormir avant d’y arriver ",
  "Il faut que je t’envoie une newsletter pour te motiver ? ",
  "Tu scrolles comme si tu testais chaque pixel à la main ",
  "Courage, t’es à deux doigts d’arriver au milieu ! (ou pas...) ",
  "Même la barre de chargement d'Internet Explorer est jalouse de ta lenteur ",
  "Faut-il t’envoyer une carte au trésor pour trouver le bas ? ",
  "Si tu scrolles encore plus doucement, je vais devoir appeler ta maman "
];


let intervalid = null;

// fonction qui va vérifié si nous sommes en bas de la page

function isAtTheBottomOfThePage(){
    
    // Window.innerHeight => correspond à la taille en pixel de votre écran
    // window.scrollY => la position du scroll par rapport à la taille maximale de l'écran
    // document.body.scrollHeight => c'est nos 2000 vh converties en pixel.
    // le -10 est une tolérance    
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
}

function startPunchlines(){
    if (intervalid===null){

intervalid = setInterval( function(){
    if (!isAtTheBottomOfThePage()){// tant que l'on est pas en bas de la page
        // il doit envoyer une insulte au hasard parmi les lignes du tableaux punchlines

            const rand = Math.floor(Math.random() * punchlines.length);
            const punchline = punchlines[rand];
            console.log(punchline)
    } else[
        console.log("Super tu es en bas du scroll")
        // fonction qui arrête le chrono
    ]
}, 1000)
    }
}

function stopPunchlines(){
    clearInterval(intervalid)
    intervalid = null;
}

startPunchlines()








