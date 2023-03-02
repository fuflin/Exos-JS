
const make = document.querySelector(".square");
const style = getComputedStyle(make);

function show() {
    alert(`Class: ${make.className}
        - background - color: ${style.backgroundColor}
        - Color: ${style.color}
        - Height: ${style.height}
        - Witdth: ${style.width}
        - Font: ${style.font}`)
}

show()