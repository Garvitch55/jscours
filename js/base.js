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


