const btn = document.querySelector("button");
const conteneurBlague = document.getElementById("conteneur-blague");

    btn.addEventListener("click", async () => {
        // Récupération des sélections
        const langue = document.getElementById("langues").value;
        const type = document.getElementById("types").value;
        const nombre = document.getElementById("nbr-blagues").value;
        
        // Récupération des exclusions cochées
        const exclusions = [];
        document.querySelectorAll("conteneur-checkbox input:checked").forEach(chk => {
            exclusions.push(chk.value);
        });

        // Conversion des valeurs en format JokeAPI
        const languesMap = {
            "anglais": "en",
            "francais": "fr",
            "allemand": "de",
            "espagnol": "es",
            "tchèque": "cs"
        };

        const langueCode = languesMap[langue] || "en";

        const typeMap = {
            "toutes": "",
            "ligne": "&type=single",
            "question-reponse": "&type=twopart"
        };
        const typeCode = typeMap[type];

        // Nombre de blagues (on extrait juste le chiffre du texte)
        const nb = parseInt(nombre);

        // Construction de l’URL de l’API
        let url = `https://v2.jokeapi.dev/joke/Any?lang=${langueCode}${typeCode}`;
        if (exclusions.length > 0) {
            url += `&blacklistFlags=${exclusions.join(",")}`;
        }

        try {
            conteneurBlague.innerHTML = "";

            for (let i = 0; i < nb; i++) {
                const response = await fetch(url);
                const data = await response.json();
                
                const div = document.createElement("div");
                const h4= document.createElement("h4")
                const p=document.createElement("p")
                if (data.type === "single") {
                    h4.innerHTML = `${data.joke}`;
                    div.appendChild(h4);
                } else if (data.type === "twopart") {
                    h4.innerHTML = `${data.setup}`;
                    p.innerHTML = `${data.delivery}`;
                    div.appendChild(h4);
                    div.appendChild(p);
                } else {
                    div.innerHTML = "Aucune blague trouvée.";
                }

                conteneurBlague.appendChild(div);
                div.className="div"
    
            }

        } catch (error) {
            conteneurBlague.innerHTML = `❌ Erreur : ${error.message}</p>`;
        }
    });
