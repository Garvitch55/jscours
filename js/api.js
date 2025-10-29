// Convertir un JSON en objet javascript
// On va simuler un JSON
const json = '{"nom": "Jean-Michel", "age": 30}';
//on convertit la string en JSON en objet Javascript
const obj = JSON.parse(json)
console.log(obj.nom)


//CONVERTIR UN OBJET JAVASCRIPT EN JSON
const user = {
    nom : "Jean-Eude",
    age : 12,
}

/// Convertit en string
const jsonObj = JSON.stringify(user)
console.log(jsonObj)



//Les promises
//Ecriture standard
const myPromise = new Promise((resolve, reject) => {
setTimeout (()=>{
    isFine = true
    if(isFine){
        resolve("Succès")
    }else{
        reject('Erreur !!!')
    }
}, 2000)

})


myPromise
  .then(result=> console.log(result))//si tout va bien 
  .catch(error => console.log(error))// si une erreur
  .finally(() => console.log("C'est fini"))// affiche quoi qu'il arrive

// Exercice : Imaginons qu'on lance une pièce. il a 50% de chance et il a 50% de chance de tomber sur face
// si il fait pile alors c'est une réussite sil il fait face alors c'est une erreur impardonnable

//pour simuler cette promise on utilisera un set time out de 1 seconde

//si ça reussi on affiche un console.log, si ça rate rate on affiche console.error()


// Fonction qui simule un pile ou face avec une Promise
function lancerPileOuFace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultat = Math.random() < 0.5 ? "Pile" : "Face";

      // On suppose que si c'est "Pile", c'est un succès, sinon c'est un échec
      if (resultat === "Pile") {
        resolve(resultat); // succès (c'est une réussite)
      } else {
        reject(resultat); // échec (c'est impardonable)
      }
    }, 1000); // délai de 1 seconde
  });
}

// Utilisation de la Promise
lancerPileOuFace()
  .then((resultat) => {
    console.log("C'est un réussite :", resultat);
    return lancerPileOuFace()
  })
  .then(r => {
    console.log("Deuxième lancer : " + r)
  })
  .catch((erreur) => {
    console.error("C'est une erreur impardonnable :", erreur);
  });


//AJAX
//Pour faire un Ajax de manière moderne on utilise  l'API fetch()

//   const list = document.getElementById("huge-list")
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//   data.forEach( d=> {
//     const li=document.createElement("li")
//     li.innerText = d.title;
//     list.appendChild(li)
//   })
// })

// const fakeHtml = "dsdsjkmfsdmkhdfbjfsdmskhvdfvmsfkdjbfmksfddsfhbsfd9+4https://a.travel-assets.com/travel-assets-manager/destu-41418/Hero_Desktop.jpeg?impolicy=fcrop&w=1400&h=600&q=mediumHighsqdsdqdsqsdqqsdsqqds"

const regex = /https?:[^"'\s>]+?.(?:jpg|jpeg|png|gif|webp|svg)/g

// const found = fakeHtml.match(regex)
// console.log(found)
const aled = document.getElementById("aled")
fetch("https://www.lacoste.com/fr")
.then(resultat => resultat.text())
.then(data => {
  console.log(data)
  const images = data.match(regex)
  console.log(images)
  images.forEach(img=> {
    const imgEl = document.createElement("img")
  imgEl.src = img
  aled.appendChild(imgEl)
  
  
  })
});








