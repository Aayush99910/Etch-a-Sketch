// grabbing all the necessary elements from the document
const grid = document.querySelectorAll(".grid");
const colors = document.querySelectorAll(".co");
const eraserBtn = document.querySelector("#eraser");
const colorBtn = document.querySelector("#color");
const COLOR = document.querySelector("#colorpicker");
const paintDiv = document.querySelector(".paint-pad");


// some variables
let defaultColor = "black"; // default color in the board
let whiteColor = "white";   // white color
let eraserOn = false; // checks if the erase is toggled
let newColor; // assigns newcolor to the brush
let mouseDown = false; // checks if the mouse is down or not


const gridArray = Array.from(grid); // converting NODELIST into an array
// looping through the array
gridArray.forEach(function (eachgrid) {
    eachgrid.addEventListener("mouseover", function () {
        if (mouseDown === false) { 
            return; // skips if the mouse is up
        }else {
            if (eraserOn === true) {
                eachgrid.style.backgroundColor = whiteColor; // changes bg color to white if the erase is on
            }else if (!newColor) {
                eachgrid.style.backgroundColor = defaultColor; // if no color has been selected the default color acts on it
            }else if (newColor) {
                eachgrid.style.backgroundColor = newColor; // new color which the user selected
            }
        }
    })
});

const colorsArray = Array.from(colors); // converting NODELIST to an array
colorsArray.forEach(function (color) {
    color.addEventListener("click", () => {
        newColor = color.innerText; // changing the color to user's choice
        eraserOn = false;
    });
});

// event listener for eraser btn
eraserBtn.addEventListener('click', () => {
    const eraserText = document.querySelector("#on");
    // toggles the button
    if (eraserOn === false) {
        eraserOn = true;
        eraserText.style.color = defaultColor;
    } else {
        eraserOn = false;
        eraserText.style.color = whiteColor;
    }
});

// event listener for the color btn
colorBtn.addEventListener('click', () => {
    const colorOption = document.querySelector(".color-option");
    const colorText = document.querySelector("#colo"); // makes the textcolor black when selected
    if (window.getComputedStyle(colorOption).display === "none") {
        colorText.style.color = defaultColor;
        colorOption.style.display = "flex";
    }else if (window.getComputedStyle(colorOption).display === "flex"){
        colorText.style.color = whiteColor;
        colorOption.style.display = "none";
    }
});


COLOR.addEventListener("mouseout", () => {
    newColor = COLOR.value;
});

paintDiv.addEventListener("mousedown", () => {
    mouseDown = true;
});

paintDiv.addEventListener("mouseup", () => {
    mouseDown = false;
});