let saisie = document.getElementById("euro"); //variable à saisir en euros

let conv = document.getElementById("francs"); // variable pour modifié le temps en francs

let valeur = 11.0721; // valeur en monnaie

saisie.addEventListener("keyup", function(){ // fonction sur pression du clavier instancie la fonction convertir
    convertir()
})

function convertir(){
    let num = parseFloat(saisie.value); // fonction vérifiant la chaine de caractère ici Float renvoyant des chiffres décimaux 
    if(isNaN(num)){ // isNaN est une fonction pour déterminé si une valeur est NaN (Not A Number) dans ce cas si la variable n'est pas un nombre
        alert("Saisir uniquement des nombres") // fenêtre pop-up affichant un message
    } else 

    conv.textContent = (num * valeur).toFixed(2) + " Dirhams"; // affichage valeur de la monnaie arrondit à 2 chiffres après la virgule
}


