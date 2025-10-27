const inputNomObjet = document.getElementById('input-nom-objet');
const inputQuantite = document.getElementById('input-quantite');
const listeCategorie= document.getElementById('liste-select')

const addObjet = document.getElementById('add-objet');
const clearButton = document.getElementById('clearinventaire');
const gallery = document.getElementById('objetsContainer');
const counter = document.getElementById('objetCounter');




let click = 0;


let objets = [];


console.log(document.getElementById('liste-select').options[document.getElementById('liste-select').selectedIndex].value);






// Je créé un objet qui contient un url et l'alt de l'image
class objetItem {
    constructor(nom, quantite, categorie) {
        this.nom = nom;
        this.quantite = quantite;
        this.categorie = categorie;
    }

    createObjetBlock(index) {
        // On fait la div
        const div = document.createElement("div");
        div.className = "block"

        // on met le nom objet et catégorie
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        div2.innerHTML = '📝' + this.nom;
        div3.innerHTML = '📦 Quantité: ' + this.quantite;
        div4.innerHTML = '📂 Catégorie: ' + this.categorie;
        const btn = document.createElement('button')
        const btn1 = document.createElement('button')
        btn.textContent = '🗑️ Supprimer';
        btn1.textContent = '➕ +1';
        
        let clickNumber = this.quantite;

        btn1.addEventListener("click", function (){
            
            click ++; // est équivalent à click +=1;
            div3.innerHTML=click + this.quantite;
        
        })
        
        btn.addEventListener("click", function (){
            // pseudoCode //
            // ici on fait le code de supression du block//
            removeObjetFromIndex(index)
        })

        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
        div.appendChild(btn1);
        div.appendChild(btn);
        return div;
    }
}

function removeObjetFromIndex(index){
     const tempObjets = []
     for(let i = 0; i < objets.length; i++){
         if (i !== index){
             tempObjets.push(objets[i]);
         }
     }
     objets = tempObjets
     renderObjet();
 }



// Fonction qui affiche notre gallery

// Fonction ajoute dans le tableau images

addObjet.addEventListener('click', function (){
    const nom = inputNomObjet.value.trim();
    const quantite = inputQuantite.value.trim();
    const categorie = document.getElementById('liste-select').options[document.getElementById('liste-select').selectedIndex].value;
     
console.log(categorie);
 

    if (nom !== "" && quantite !== ""){
        // je créé une instance d'objet
        const newObjet = new objetItem(nom, quantite, categorie);
        objets.push(newObjet);
        
        // on nettoie les inputs
        inputNomObjet.value = "";
        inputQuantite.value = "";
        listeCategorie.selectedIndex = "Autre";
        
        console.log(categorie.selected)
        console.log(objets)
    }
    renderObjet();
})

function renderObjet() {
    objetscontainer.innerHTML = "";

    for(let i = 0; i < objets.length; i++){
         const objet = objets[i].createObjetBlock(i)
         objetscontainer.appendChild(objet);
     }
    updateCounter()
}

function updateCounter() {
    counter.textContent = `Total : ${objets.length} objet${objets.length > 1 ? 's' : ''}`;
}

clearButton.addEventListener("click", function (){
    while (objets.length > 0){
        objets.pop();
    }
    renderObjet();

});


