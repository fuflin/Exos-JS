const div = document.querySelector(".boxs")

for (let i = 1; i < 5; i++) {
    const element = document.createElement("p");
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