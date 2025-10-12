
const accueil=document.getElementById("accueil");
const profil=document.getElementById("profil");
const contact=document.getElementById("contact");
const text=document.getElementById("text");
let btnselect = true;

text.textContent = "Lorem ipsum 1";

accueil.addEventListener("focus", function (){


text.textContent = "Lorem ipsum 1";


})

profil.addEventListener("focus", function (){


text.textContent = "Lorem ipsum 2";


})


contact.addEventListener("focus", function (){


text.textContent = "Lorem ipsum 3";


})