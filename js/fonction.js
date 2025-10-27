               
               const panier=[
                {name: "pommes", price: 2, quantity: 5},
                {name: "kiwi", price: 1, quantity: 50},
                {name: "Mangue", price: 9, quantity: 25},
               ];
               
               //Fonction qui additionne deux nombres
                //Fonction utilitaire
                    function add(nbrA, nbrB) {
                    return nbrA + nbrB;
                }

                // autre fonction utilitaire

                function multiply(nbrA, nbrB)  {
                    return nbrA * nbrB;
                }
                // fonction principale qui va calculer le prix total d'un panier
                function calculatePriceCart(cart)  {
                    //avant de calculer on va initialisé le total qui pourrait être 0.
                    let total=0;

                    for (let i=0; i<cart.length; i++){
                        // pour faciliter la lecture on renomme élément acutuel de la boucle par
                        // variable plus simple à écrire
                        const item= cart[i];
                        // le retour de la fonction multiply "injecte" son résultat dans itemPriceTotal
                        const itemPriceTotal = multiply (item.price, item.quantity);
                        total = add(total, itemPriceTotal)
                    }
                    return total
                    
                }
                console.log(calculatePriceCart(panier))




// Faire une fonction qui retourne le nombre de voyelles dans un mot
//mis en paramètres.
// exemple console.log(compterVoyelle("bonjour"))

const mot1="Bonjour";
function compterVoyelles(mot1) {
    var nbVoyelles = 0;
    for (i = 0; i < mot1.length; i++) {
        const lettre = mot1[i].toLowerCase();
        if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre ==="o") || (lettre === "u") || (lettre === "y")) {
            
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}




console.log("le nombre de voyelles est : " + compterVoyelles(mot1));


const mot2="Bonjour";
function compterNbVoyelles(mot2) {
    let nbVoyelles = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let lettre of mot2) {
        if (voyelles.includes(lettre.toLowerCase())) {
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}

console.log("le nombre de voyelles est : " + compterNbVoyelles(mot2));


// function compterNbVoyelles2(){
//     let voyelles2= "aeiouyAEIOUY";
//     let compteur=0;
//     for (let i=0; i<chaine.length; i++){

//         if (voyelles2.includes(chaine[i])){
//     compteur ++
// }
//     }
//     return compteur
//     }

//     console.log(compterNbVoyelles2("bonjour"));


//Exo Faire une fonction qui prend en parametre un tableau de nombre
//retourne le nombre le plus grand du tableau

// [3, 7, 2, 9, 5] et [-5, -2, -10]

    const tableau1 = [3, 7, 2, 9, 5]
    const tableau2 = [-5, -2, -10]

function trouverLeMaxDansTableau(tableau)
{
    let max=tableau[0];
    for (i=1;i<tableau.length; i++)
    {
        if (tableau[i] > max)
        {
           max=tableau[i];
        }
    }
    return max
}
console.log(trouverLeMaxDansTableau(tableau1));
console.log(trouverLeMaxDansTableau(tableau2));


// === ÉNONCÉ ===

// Ajouter un champ de texte (input), un bouton "Ajouter" et une liste <ul> directement dans le HTML.
// Donner un id à chacun de ces éléments pour pouvoir les manipuler en JavaScript.

// Quand l'utilisateur saisit du texte dans l'input et clique sur le bouton,
// cela doit créer un nouvel élément <li> contenant le texte saisi,
// et l'ajouter à la liste <ul> affichée à l'écran.

// Le texte saisi doit aussi être ajouté dans un tableau JavaScript.
// À chaque modification du tableau, la liste <ul> doit être regénérée
// (c’est-à-dire qu’on affiche tous les <li> du tableau, pas seulement le dernier ajouté).

// BONUS : le fait d’appuyer sur la touche "Entrée" doit avoir le même effet
// que de cliquer sur le bouton.


const input1=document.getElementById("input1");
const btn4=document.getElementById("btn4");
const liste=document.getElementById("liste");



btn4.addEventListener("click", function (){
    const input2 = document.getElementById("input1").value;
    console.log(input2);
    const li = document.createElement("li")
    
    
    
    liste.appendChild(li);
    li.textContent = input2;



})

// LES FONCTIONS FLECHEES

// function add(nbrA, nbrB) {
// return nbrA + nbrB;
// }

let sum= (a, b) => a +b;
console.log(sum(12, 15));  //27

// quand il n'y a qu'un paramètre, les parenthèse sont facultatives
let double = a => a * 2;
console.log(double(140)); //280

let calc = (a, b, c ) =>{
    let d= a*b;
    return d-c;
}
console.log(calc(14,2,12))//16

let maj = str => str.toUpperCase()
console.log(maj("coucou"));

//PROBLEME AVEC this

// Exemple normal

// function arrow(){
//     document.addEventListener("click", function(){
//         console.log(this)
//     })
// }

let arrow = () => {
     document.addEventListener("click", () => {
         console.log(this);
 })
 }

arrow();

const btnarrow = document.getElementById("btn-arrow");
btnarrow.addEventListener("click", ()=>{
console.log(this)
})



