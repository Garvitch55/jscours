const firstNameInput = document.getElementById("first-name-input");
const addButonFirstName = document.getElementById("add-first-name");
const listFirstName = document.getElementById("list-first-name")
const firstNameArray = [];


function showList() {
    // Il faut vider la liste des li
    listFirstName.innerHTML = "";

    for (let i = 0; i < firstNameArray.length; i++){
        const li = document.createElement('li')
        li.textContent = firstNameArray[i];
        listFirstName.appendChild(li)
    }
}

function addFirstName() {
    const cleanString = firstNameInput.value.trim();

    if (cleanString !== ""){ // on verifie que cleanString n'est pas vide
        firstNameArray.push(cleanString);
        firstNameInput.value = "" // Je vide l'input de l'ancienne chaine de caractère
        showList();
    }else{
        console.log("La chaine caractère est vide.")
    }
}



// On appel la fonction directement dans l'evenement
// car une fonction anonyme qui appel une fonction ne sert à rien.
// on appel ce genre de fonction un callback.
// une fonction qu'on appel plsu tard.
addButonFirstName.addEventListener("click", addFirstName)
firstNameInput.addEventListener("keydown", function (event){
    if(event.key === "Enter") {
        addFirstName()
    }
})

