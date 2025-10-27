let heure = document.getElementById("heure");
let alarme = document.getElementById("alarme");


let minutes = 0;
let seconds = 0;

let alarmHour = 0, alarmMin = 0, alarmSec = 0;
let alarmSet = false;


let amin=document.getElementById('alarmMin');
let ahour =  document.getElementById('alarmHour')

function updateHorloge() {
    // Met à jour le texte de l'horloge
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    document.getElementById('heure').textContent = `${m}:${s}`;

    // Incrémente le temps
    seconds++;
    if (seconds === 60) {
        //Les secondes rédémarre à 0
        seconds = 0;
        //Une minute s'ajoute 
        minutes++;
    }
    if (minutes === 24) {
        //Les minutes que l'on considère comme heure rédémarre à 0
        minutes = 0;
    }

    
    // Vérifie l'alarme
       if (
         alarmSet &&
         minutes === alarmHour &&
         seconds === alarmMin
       ) {
         alert("⏰ Alarme !");
       }
}







// L horloge se met à jour toutes les secondes
setInterval(updateHorloge, 1000);
updateHorloge(); // Démarre la fonction




 // --- Réglage de l’alarme par clic ---
    function updateAlarme() {
      document.getElementById('alarmHour').textContent = String(alarmHour).padStart(2, '0');
      document.getElementById('alarmMin').textContent = String(alarmMin).padStart(2, '0');
      alarmSet = true;
      document.getElementById('message').textContent = `Alarme réglée à ${String(alarmHour).padStart(2, '0')}:${String(alarmMin).padStart(2, '0')}`;
    }


   ahour.addEventListener('click', () => {
      alarmHour = (alarmHour + 1) % 24;
      updateAlarme();
    });


    amin.addEventListener('click', () => {
      alarmMin = (alarmMin + 1) % 60;
      updateAlarme();
    });


    const activedesactive = document.getElementById("active-desactive");
let onOff = false;


activedesactive.addEventListener("click", function (){
  onOff = !onOff; // Ici on inverse l'état actuelle par son état contraire.
    // Ecriture ternaire.
    // Ecriture alternative d'un if avec des instructions courtes
    // Ci dessous est équivalent à si onOff est true alors toggleText.innerText = ON sinon toggleText.innerText = OFF
    activedesactive.innerText = onOff ? "Alarme activée" : "Alarme désactivée";

    if (!onOff) {
        alarme.classList.add("displaynone")
        alarme.classList.remove("display")
    }else {
        alarme.classList.remove("displaynone");
        alarme.classList.add("display")
    }
})
