// Exemple de variables

let jambon="Jambon"; //let est une variable modifiable
const pi=3.1415926; // const est une constante non modifiable
var age=25; // variable modifiable , à fort taux d'erreurs ne surtout pas l'utiliser!!!!!!!

//les règles de déclaration

let a =12;
console.log(a);
// Ne pas remettre let devant une variable , car cela voudrais dire que l'on la redéclare
//pour la modifier il suffit, de l'appeler par son nom et de mettre = ensuite sa nouvelle valeur.
a=4;
console.log(a);

const tau=6.28318;
console.log(tau);
//Les constantes n'acceptent pas d'autre valeurs, que celles déclarées,
//tau=7;
//console.log(tau);
//les deux lignes ci*dessus feront buggés le script.


var b=40;
console.log(b);
var b=50;
console.log(b);

//les var peuvent être redéclarer, causant de gros problèmes de lisibilité.

//le typage Dynamique

let k="coucou tu veux voir ma bcyclette";
console.log(k);
k=16.2;
console.log(k)

//type de données

// les nombres = Number
let q=2; // nombre entier
let p=45.32; // nombre virgule flottant
let r=273.15; //nombre négatif
let s=1/3; //Fraction
let t=16_000;// veut dire 16000 et donné de l'espace

// Les chaînes de caractères = string

const corneille="ingrat, rends-moi mon Cid jusques au dernier mot";
const moliere='Votre sang, monsieur, n\'est pas tombé dans de mauvaises mains.';
console.log(moliere)
let blague=`c'est une autruche qui rentre dans un bar ....`;

// les booléens
const vrai= true;
const jeSuisFaux= false;


// les tableaux = Array

const eleves=["Autruche", "Joconde", 4, true];
console.log(eleves);
console.log(eleves[2])
console.log(eleves[0])
console.log(eleves[4])//les undefined, on sort des limites du tableaux
// les tableaux n'ont pas d'index négatifs
// les tableaux commencent toujours par l index 0 et finissent toujours par 
//l index égale à la teille du tableau -1


//les undefined

let d;
console.log(d);
//la variable a était déclarée, mais à une valeur, alors le js la déclare indéfinie
//ou par exemple en sortant de limite d'un tableau, ou en ciblant un élément HTML mal écrit.
//ce type de données est à éviter ABSOLUMENT;


//les nulle => null

let x=null;

//les objets
const tasse={
    color: "rouge",
    material: "céramique",
    price: 1,
    content_volume: 25,
}


const eleve={
    name: "jean-Michel",
    age:18,
    class: "Terminal",
    notes: [13, 18, 19, 2, 16, 15.5],
}

console.log(eleve.name)
// calcul de la moyenne de jean michel, en codage naif

let moyenne= ( eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5] ) / 6
console.log(moyenne)

// Les opérateurs

//l'affectation
// on donne à la variable aa la valeur de 7
let aa=7;

//l'addition
// la valeur 7 est écrasé par l addition 12 + 4 donc la variable "aa" est égale 16
aa = 12 + 4;

console.log(aa);

// l'affectation après l 'addition
//avec cette écriture on écrase pas la valeur mais on ajoute 4
//à l"ancienne valeur
aa += 4;
console.log(aa) // donne 20


//la soustraction
let bb = 20 - 4;

console.log(bb);// donne 16

// l'affectation après la soustraction
bb -= 4;
console.log(bb) // donne 12


//la multiplication
let cc = 5 * 8;

console.log(cc);// donne 40

// l'affectation après la multiplication
cc *= 2;
console.log(cc) // donne 80


//la division
let dd = 20 / 4;

console.log(dd);// donne 5

// l'affectation après la multiplication
dd /= 2;
console.log(dd) // donne 2.5

//les modulo

let ee = 13 % 5

console.log(ee) // donne 3


// les exponentiels

let ff = 3**2

console.log(ff)// donne 9


// les conditions 

let gg = 4;
let hh = 4;
let ii = 9;

if (gg == hh) {
//si la condition est bien remplie alors il renvoi true
// avec ==
} else {
// si la condition n'est pas remplie alors il renvoi false

}

//vérification égalité non strict
if (6=="6") {
   console.log("ça marche") 
}

//égalité strict varie en plus le type de données
//ici l'égalité est fausse car 6 et un number et "6" est une
//chaîne de caractère
if (6==="6") {
   
} else{

   console.log("ça marche pas") 
}



if (eleve.age>=18){
    // ici la concaténation (coller plusieurs chaine de caractère entre elles)
    //avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur.")
}else{
    console.log(`${eleve.name} n'est pas majeur`)
}


const feuille = {
    format : "A4",
    prix: 5.0,
    densite: 80,
    couleur: "#f0ddae"

}


const recette= ["patate", "tomate", "ail", "huile d'olive"];

const vitessedelalumiere= 299_792_458; //constante dans le vide
// vitessedelalumiere=60; CA C'EST IMPOSSIBLE CAR CONSTANTE DEJA APPELE

const table = [1, 2,3]
table.push(4)
console.log(table)
// const = [];// tableau vide que l'on remplira plus tard
const ingredients = [];

//Ici on va fabriquer un plan qui permettra ça en js le prototypage

class Ingredient{
    constructor(nom, unite, quantite) {
        this.nom = nom;
        this.unite = unite;
        this.quantite = quantite;
    }
}

class Recette {
    constructor(nom_recette, nbr_personne, etapes, liste_ingredients) {
        this.nom_recette = nom_recette;
        this.nbr_personne = nbr_personne;
        this.etapes = etapes;
        this.liste_ingredients = liste_ingredients;
    }
}
// const sucreDeCanne = {
//     nom: "Sucre de Canne",
//     unite:'g',
//     quantite : 75,
// }

const sucreDeCanne = new Ingredient ("sucre de canne", "g", 75);

const lait = new Ingredient ("lait", "cl", 25);

const oeuf = new Ingredient ("oeuf", "oeuf(s)", 3);

const pain = new Ingredient ("Pains", "tranche(s) de pain", 6);


console.log(sucreDeCanne)

// Je vais donc mettre mes ingredient dans le tableau ingredients.
ingredients.push(sucreDeCanne, lait, oeuf, pain)// permet de prendre un element et de le mettre au dernier emplacement d'un tableau
console.log(ingredients)

const etapes = ["Fouetter les oeufs avec le sucre et le lait.", "Y tremper les tranches de pain.", "Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu'à que les tranches soient dorées."];

const pain_perdu = new Recette ("Pain perdu", 4, etapes, ingredients);

console.log(pain_perdu)


//LES BOUCLES
console.log("coucou!")
console.log("coucou!")
console.log("coucou!")
console.log("coucou!")
console.log("coucou!")
console.log("coucou!")


//imginons que l'on ai besoin d'écrire dans un console.log
// 0 patate(s) à 2000 patate(s)
// Allons nous écrire à la main 2001 console.log ?
// non nous allons utiliser une boucle 
//  et pour cette exemple nous allons utiliser la boucle for.

for (let i=0; i<=20; i++) {
    console.log(i + " patate(s)");

}

// boucle while
                let n = 0;
                while (n < 6) {
                    console.log(n + "* 5 est égale à" + n * 5);
                    n++ // veut dire n+1
                }

// Exercice
// Utiliser une boucle while pour générer 10 nombres aléatoires
// compris entre 0 et 100, puis les afficher dans la console

                let w = 0;

                while (w < 10) {
                    console.log(Math.floor(Math.random() * 101)); // math.floor pour arrondir le nombre
                    w++ // veut dire n+1
                }


// Do while 

                // let password;

                // // password=prompt("Entrez le mot de passe");
                // // console.log(password)


                // do {
                // password=prompt("Entrez le mot de passe");
                // } while (password !== "abc123");// !== veut dire tant que le mot de passe est mauvais

                // console.log("Tu as trouver le mot de passe!")

/// On simule un lancer de dé qui continue jusqu'à ce le joueur obtienne 6.
// On ne peut pas savoir d'avance combien de fois il faudra executé la boucle

    let de;
                do {

                 de= Math.floor((Math.random())*6+1); // veut dire intervalle de 0 à 6
                 console.log("Résultat du dé :" + de);
                 } while (de !==6);

                 console.log("Tu as reussi à faire un 6!")
// boucle for 
for (let i = 0; i < 5; i++) {
    console.log("compteur :" + i);
}

//Boucle for -> traverser les tableaux

let voitures = ["Dacia", "Lada", "Audi", "Daihatsu", "Toyota", "Chevrolet"]

for(let i =0; i< voitures.length; i++){
    console.log(voitures[i])
}

// Boucle FOR .. OF

let fruits = ["Pomme", "Banane", "Kiwi", "Avocat", "Durian"];

for (let fruit of fruits){
    console.log('J\'aime :' + fruit)
}

//exerice

// vous allez me créer un ul li dans la div container

const gafams = ["Google", "Amazon", "Facebook", "Apple", "Microsoft"]
// A partir d'une boucle for of, vous   allez m'afficher dans chaque
// li le nom d'une de ces sociétés

const container=document.getElementById("container");
const ul = document.createElement("ul");
container.appendChild(ul)

for (const gafam of gafams){
    const li = document.createElement("li");
    li.textContent=gafam;
    ul.appendChild(li);
}

// // FOR IN

// const stylo ={
//     taille : 15,
//     marque: "Bic",
//     couleur: "#0000FF",
//     aEncoreSonCapuchon: true
// }

// const penContainer = document.getElementById("pen-container");
// penContainer.appendChild(ulPen);
// const ulPen = document.createElement("ul");

// for (let cle in stylo){
// let value =stylo [cle];
// let li = document.createElement("li");
//  li.innerHTML = '<span class='bleu'>${cle}</span>: ${value}'
// ul.appendChild(li);
// console.log(value);
// }

// // BREAK
// for (let i=0; i<10; i++){
//     if (i=== 5){
//         break;
//     }
//     console.log(i)
// }
// console.log(i)(*-------------Séparation-------------------*)

// // CONTINUE
// // Imaginons que l'on veut récupérer uniquement les nombres impaires générés par une boucle for
// for (let i=0; i<10; i++) {
//     if (i%2 === 0) {
//         continue;
//     }
//     console.log(i)
// }


//Exo continue

const utilisateurs = [
    {nom: "alice", actif: true},
    {nom: "bob", actif: false},
    {nom: "charlie", actif: true},
    {nom: "david", actif: false},
];

//Dans un console log et avec une boucle et un continue, filtrer moi les utilisateurs pas actif
// dans la console log on doit lire "Utilisateur actif : alice" etc...

for (let i=0; i<utilisateurs.length; i++) {
if (!utilisateurs[i].actif) {
continue;
 }
console.log('Utilisateur actif :' + utilisateurs[i].nom)
 }

// exo 2 boucle continue

const panier = [
    {nom: "clavier", stock: 5},
    {nom: "souris", stock: 0},
    {nom: "écran", stock: 3},
    {nom: "casque", stock: 0},
    {nom: "Webcam", stock: 2},
];

// Dans un console.log(), afficher uniquement les produits qui ne sont pas en rupture de stock

for (let i=0; i<panier.length; i++) {
if (panier[i].stock===0) {
continue;
 }
console.log(panier[i].nom + ' est(sont) en stock')
 }


 // Vous arrêter la recherche (boucle) dès qu'un produit est en stock

 for (let i=0; i<panier.length; i++) {
if (panier[i].stock===0) {
continue;
 }
console.log(panier[i].nom + ' premier en stock')
break;
 }

 //Avec une boucle while cherchez le premier multiple de 7 dans le tableau donné, la boucle s'arrête
 //dès qu'il trouve ce multiple
 // afficher le dans la console

const nbrs = [2, 1, 9, 13, 14, 8, 74];
let iter = 0;


while (iter < nbrs.length) {
    if (nbrs[iter] % 7 === 0) {
        console.log("le premier multiple de 7 trouvé est " + nbrs[iter]);
        break;
    }
    iter++
}


// Ecrire un programme qui parcourt un tableau de nombre avec boucle for
// qui va aller chercher le premier nombre pair après un nombre impair
//quand cela est fait ca coupe la boucle.

const nbrs2 = [2, 18, 46, 19, 25, 14, 18, 9978];

for (let i = 1; i < nbrs2.length; i++) {
    const precedante = nbrs2[i - 1];
    const actuel = nbrs2[i];

    const precedentEstImpaire = precedante % 2 !== 0;
    const actuelEstPair = actuel % 2 === 0;

    if (precedentEstImpaire && actuelEstPair) {
        console.log("Premier nombre pair après un impaire : " + actuel)
        break;

    }
}


// Exo a debuguer

// const nombres = [3, 4, 18, 5, 27, 6];
// let trouvé = false;

// for (let i = 0; i <= nombres.length; i++) {
//     if (nombres[i] % 9 == 0) {
//         console.log("Trouvé :", nombres[i])
//         trouvé = true
//         break
//     }
// }

// if (trouvé = false) {
//     console.log("Aucun multiple de 9 trouvé")
// }


const nombres = [3, 1, 5, 5, 2, 6];
let trouve = false;

for (let i = 0; i <nombres.length; i++) {
    if (nombres[i] % 9 === 0) {
        console.log("Trouvé :", nombres[i])
        trouve = true;
        break;
    }
}

if (!trouve) {
        console.log("Aucun multiple de 9 trouvé");
}



// LES TABLEAUX

const fruits2 = ["pomme", "banane", "orange"];


// AJOUTER UN ELEMENT A LA FIN DU TABLEAU.
fruits2.push("fraise");
// AJOUTER UN ELEMENT AU DEBUT
fruits2.unshift("melon");
// SUPPRIMER  LE PREMIER ELEMENTS
fruits2.shift();
// SUPPRIMER LE DERNIER ELEMENTS
fruits2.pop();


// Autres fonctions utiles
const fruits3 = ["framboise", "tomates", "coing", "poires"];
// trouver l'index d'un élément
let posFruit = fruits3.indexOf("tomates")
console.log(posFruit)

// verifier si un element est present
console.log (fruits3.includes('orange'))

//Convertir un tableau en chaine de caractere
let saladeDeFruit = fruits.join(",")
console.log(saladeDeFruit)

// String
// Connaître la taille d'une string
let mot= "jean-Michel"
console.log(mot.length);

//Attend ?!! Length
console.log(mot[3]);

// On vous a menti depuis le début les string sont des tableaux
// Pour ajouter par exemple une majuscule au premier élément
let mot2=mot[0].charAt(0).toUpperCase() +mot.slice(1); //J + ean Michel
console.log(mot2);

