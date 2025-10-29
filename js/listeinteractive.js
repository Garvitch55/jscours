const mushrooms = ["Cèpe", "Psilocybe", "Panaeolus", "Girolle", "Chanterelle"];
const ul = document.getElementById("liste-mushrooms")

mushrooms.forEach( mushroom => {
    const li = document.createElement("li")
    li.textContent = mushroom
    li.addEventListener("click", () => {
        li.classList.toggle("strike")
    })

    ul.appendChild(li)
})