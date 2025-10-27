const size = 8
const board = document.getElementById("damier")
const btn = document.getElementById("btn")
const message = document.getElementById("message")
// représentation des cases mais de manière informatique
const cases = []


createBoard();

function createBoard() {
    board.innerHTML = "";
    board.style.width = `${size * 50}px`;

    for (let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){
            const div = document.createElement("div");
            div.classList.add("case");
            // On calcul pour savoir s'il est blanc ou noir
            const isBlack = (row + col) % 2 === 0;
            div.classList.add(isBlack ? "black" : "white")
            board.appendChild(div)
            cases.push(div);
        }
    }
}

function generatePawn() {
    let caseFounded = false;
    let tries = 0;

    // Je dois faire une boucle pour qu'il recherche les case vide dans le tableau de case
    while (!caseFounded && tries < cases.length) {
        const randIndex = Math.floor(Math.random() * cases.length)
        const targetCase = cases[randIndex];

        // Ici on verifie si la case n'a pas d'enfant, ce qui revient à dire qu'il na pas de pion en son sein.
        if (targetCase.childNodes.length === 0) {
            const pawn = document.createElement("div")
            pawn.classList.add("pawn")
            // ici on verifie si une classe existe dans las case
            // si la case est noire alors le pion sera blanc et vice versa
            if (targetCase.classList.contains("black")) {
                pawn.classList.add("white")
            } else {
                pawn.classList.add("black")
            }
            targetCase.appendChild(pawn);
            caseFounded = true
        }

        tries++;
    }

    // Ici je vérifie s'il il reste au moin une case vide
    let emptyCase = 0;
    for (let i = 0; i < cases.length; i++) {
        if ( cases[i].childNodes.length === 0){
            emptyCase++
        }
    }

    if (emptyCase === 0){
        message.textContent = "Toutes les cases sont remplies !"
        btn.disabled = true;
    }
}


btn.addEventListener("click", generatePawn)