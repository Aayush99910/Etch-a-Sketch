const grid = document.querySelectorAll(".grid");
const colors = document.querySelectorAll(".co");
const eraserBtn = document.querySelector("#eraser");
const colorBtn = document.querySelector("#color");

let defaultColor = "black";
let eraserOn = false;
let newColor;

const gridArray = Array.from(grid);
gridArray.forEach(function (eachgrid) {
    eachgrid.addEventListener("mouseover", function () {
        if (eraserOn === true) {
            eachgrid.style.backgroundColor = "white";
        }else if (!newColor) {
            eachgrid.style.backgroundColor = defaultColor;
        }else if (newColor) {
            eachgrid.style.backgroundColor = newColor;
        }
    })
});

const colorsArray = Array.from(colors);
colorsArray.forEach(function (color) {
    color.addEventListener("click", () => {
        newColor = color.innerText;
        eraserOn = false;
    });
});


eraserBtn.addEventListener('click', () => {
    if (eraserOn === false) {
        eraserOn = true
    } else {
        eraserOn = false;
    }
});

colorBtn.addEventListener('click', () => {
    const colorOption = document.querySelector(".color-option");
    if (window.getComputedStyle(colorOption).display === "none") {
        colorOption.style.display = "flex";
    }else if (window.getComputedStyle(colorOption).display === "flex"){
        colorOption.style.display = "none";
    }
});