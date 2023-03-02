const item = document.querySelector(".boxs")

let players = [ // instancié objet avec 2 joueurs avec image respective
    {
        name: "player 1", // attribut : nom
        img: "img/circle2.png" // attribut : source
    },
    {
        name: "player 2",
        img: "img/cross2.png"
    }
]

let tour = 0 //nombre de tour de la partie
let alternate = 0 // alternance des joueurs
let message = document.getElementById("message") // variable message afficher sur la page


for (let i = 1; i < 10; i++) { // boucle pour générer une grille  
    const element = document.createElement("div");// création d'une élément div
    element.classList.add("square"); // ajout des propriétés de la classe square
    item.appendChild(element); // ajout d'un enfant à la dernière position dans l'élément parent
}

const squares = document.querySelectorAll(".square") // déclaration du tableau regroupant la grille 

squares.forEach(function (square) { // parcours des éléments du tableau 
    square.addEventListener("click", function () { // événement au click déclenchant une fonction
        if (square.innerHTML.length != 0) { // si l'élément contient déjà une valeur 
            // alert("case déjà prise")
            message.innerHTML = "case déjà prise" // alors affichage du message
            setTimeout(function () { // fonction timer pour affichage du message
                message.innerHTML = "" // après la tempo on retire le message
            }, 1200) // tempo exprimé en millisecondes
        } else {
            const imgEl = document.createElement('img') // création d'un élément image 
            imgEl.setAttribute('src', players[alternate].img) // attribution de l'élément depuis la source de l'image
            square.appendChild(imgEl) // génération d'un élément enfant 
            square.style.opacity = 1 // retrait de l'opacité
            square.style.backgroundColor = "transparent" // flou des cases 
            alternate++ // incrémentation de l'alternance
            tour++ // incrémentation des tours
            // alert("C'est au tour du joueur suivant")
            message.textContent = "C'est au tour du joueur suivant" // affichage du message pour signaler le changement de tour des joueurs
            alternate = alternate % 2 // modulo pour forcé les valeurs entre 0 et 1 
            if (tour === 9) { // condition pour la fin de partie
                // alert("Partie Terminée")
                message.textContent = "Partie Terminée" // affichage du message pour la fin de partie
            } else {
                console.log()
                setTimeout(function () {
                    message.textContent = ""
                }, 1200)
            }
        }
    })
})



