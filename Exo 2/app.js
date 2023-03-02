const div = document.querySelector(".boxs")

for (let i = 1; i < 5; i++) { // boucle pour création des carrés 
    const element = document.createElement("div"); // création d'un élément div
    element.classList.add("square");
    element.innerHTML = i
    div.appendChild(element);
}

const squares = document.querySelectorAll(".square")

squares.forEach(function (square) {
    square.addEventListener("click", function () {
        square.classList.toggle("animate")
    })
})