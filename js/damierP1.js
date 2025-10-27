const size = 8
const board = document.getElementById("damier")
const btn = document.getElementById("btn")
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
    // A chaque déplacement du pion je nettoie l'interieur de la case
    for (const c of cases){
        c.innerHTML = "";
    }

    // const la fonction choisi une case aléatoire
    const randIndex = Math.floor(Math.random() * cases.length)
    const targetCase = cases[randIndex];

    const pawn = document.createElement("div")
    pawn.classList.add("pawn")
    // ici on verifie si une classe existe dans las case
    // si la case est noire alors le pion sera blanc et vice versa
    if(targetCase.classList.contains("black")){
        pawn.classList.add("white")
    }else{
        pawn.classList.add("black")
    }

    targetCase.appendChild(pawn);

    btn.textContent = "Déplacer le pion ♟️"
}

btn.addEventListener("click", generatePawn)