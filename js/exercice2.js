
const body=document.getElementById("body");
const toggleTheme=document.getElementById("toggleTheme");


let fond = false;

toggleTheme.addEventListener("click", function (){
    fond = !fond; 
    toggleTheme.innerText = fond ? "LIGHTMODE" : "DARKMODE";
    
    if (fond) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    }else {
    document.body.classList.add('light');
       document.body.classList.remove('dark');
    }
})





add.addEventListener("click", function (){
    const div = document.createElement("div");
    let text;
    if (onOff){
        // ici je créé un nombre + pattate
        let rand = Math.round((Math.random() * 1000 - 1) + 2);
        text = rand + " patates";
    }else {
        // ici je réécris le text normale avec nouvel élément
        text = "Nouvel élement"
    }
    div.textContent = text;
    div.className = "box";
    container.appendChild(div);
})


remove.addEventListener("click", function(){
let lastElement=container.lastElementChild;
// si le container à encore un élément il retournera cet élément, si cet élément est dans if  il retournera true
if (lastElement){
container.removeChild(lastElement);

}else{
    console.log("le conteneur n'a pas d'enfant")
}
})



color.addEventListener("click", function() {
    if (container.firstElementChild){
        container.firstElementChild.style.backgroundColor = "tomato";
    }else{
        console.log("Le conteneur n'a pas d'enfant, coloriage impossible");
    }
})
