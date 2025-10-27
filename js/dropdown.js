const menuButton = document.getElementById("menu-button")
const dropdown = document.getElementById("dropdown")

// menuButton.addEventListener("click", function (){
//     dropdown.classList.toggle("show")
// })

menuButton.addEventListener("mouseover", function (){
    dropdown.classList.toggle("show")
})

dropdown.addEventListener("mouseleave", function(){
    this.classList.toggle("show")
})