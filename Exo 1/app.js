
const make = document.querySelector(".square");
const style = getComputedStyle(make);

// make.addEventListener("click", function () {
//     alert(
//         '
//     Class: ${ make.className }
//     - background - color: ${ style.backgroundColor }
//     - Color: ${ style.color }
//     - Height: ${ style.height }
//     - Witdth: ${ style.width }
//     - Font: ${ style.font }
//         '
//     );
// });

// let message = ("Class: carré '</br>'- background-color: rgb(136, 174, 136)'</br>' - Color: rgb(255, 255, 255)'</br>' - Height: 200'</br>' -Width: 200'</br>' -Font: Times New Roman(40px)");

function show() {
    alert(`Class: ${make.className}
        - background - color: ${style.backgroundColor}
        - Color: ${style.color}
        - Height: ${style.height}
        - Witdth: ${style.width}
        - Font: ${style.font}`)
}

show()