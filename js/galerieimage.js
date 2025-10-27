const urlInput = document.getElementById("url-input");
const altInput = document.getElementById("alt-input");
const addImage = document.getElementById("add-image");
const gallery = document.getElementById("gallery");
const viderImage = document.getElementById("vider-image");


let clickNumber = document.getElementById("nbr");
let click=0;






addImage.addEventListener("click", function (){

const containerImgButton = document.createElement("div")
gallery.appendChild(containerImgButton);
containerImgButton.id = 'img1';

let url=urlInput.value
let alt=altInput.value
const img = document.createElement("img");
img.src = url;
containerImgButton.appendChild(img);
img.style.width = "200px";
img.alt= alt;

const supprimer = document.createElement("button");
containerImgButton.appendChild(supprimer)
supprimer.innerHTML = "supprimer";


click ++; // est équivalent à click +=1;
clickNumber.innerHTML=click;

})




viderImage.addEventListener("click", function (){

img1.remove();
click --; // est équivalent à click +=1;
clickNumber.innerHTML=click;


})