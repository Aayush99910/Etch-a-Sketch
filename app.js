// some variables
let defaultColor = "black"; // default color in the board
let whiteColor = "white";   // white color
let eraserOn = false; // checks if the erase is toggled
let newColor; // assigns newcolor to the brush
let mouseDown = false; // checks if the mouse is down or not


// lets the user draw after they have selected the grid
function userDraw () {
    const grid = document.querySelectorAll(".grid");
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
}


// removes the color of all the div and changes it back to white
function removeAll() {
    const grid = document.querySelectorAll(".grid");
    const gridArray = Array.from(grid); // converting NODELIST into an array
    gridArray.forEach((eachgrid) => {
        eachgrid.style.backgroundColor = whiteColor;
    });
}


// creates a grid of user's choice || if default is passed 10 X 10 grid is created
// else user's input is created. This function also changes the style of 
// the grid after the input. Lastly it creates the requird amount of 
// div using a for loop.
function createGrid (choice) {
    let divThatShouldBeCreated;
    let divNum;
    const size = document.querySelector("#size");
    const gridContainer = document.querySelector(".paint-pad");

    if (choice === "default") {
        divThatShouldBeCreated = 100;
        divNum = 10;
        gridContainer.innerHTML = " ";
        gridContainer.style.gridTemplateColumns = `repeat(${divNum}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${divNum}, 1fr)`;
                
    }else{
        divNum = slider.value;
        divThatShouldBeCreated = Number(divNum) * Number(divNum);
        gridContainer.innerHTML = " ";
        gridContainer.style.gridTemplateColumns = `repeat(${divNum}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${divNum}, 1fr)`;
    }

    size.textContent = `${divNum} X ${divNum}`;
    for (let i = 0; i < divThatShouldBeCreated; i++) {
        const div = document.createElement('div');
        div.classList.add("grid");
        gridContainer.appendChild(div);
    }     

    userDraw();
}


// changes color to new color from the given color pallete 
const colors = document.querySelectorAll(".co");
const colorsArray = Array.from(colors); // converting NODELIST to an array
colorsArray.forEach(function (color) {
    color.addEventListener("click", () => {
        newColor = color.innerText; // changing the color to user's choice
        eraserOn = false;
    });
});


// event listener for eraser btn? / toggles the eraser button
const eraserBtn = document.querySelector("#eraser");
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


// event listener for the color btn // when clicked on the button it
// shows four color option and makes the text black
const colorBtn = document.querySelector("#color");
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


// changes the brush's color to user's choice
const COLOR = document.querySelector("#colorpicker");
COLOR.addEventListener("mouseout", () => {
    newColor = COLOR.value;
});


const paintDiv = document.querySelector(".paint-pad");
paintDiv.addEventListener("mousedown", () => {
    mouseDown = true;
});

paintDiv.addEventListener("mouseup", () => {
    mouseDown = false;
});


const gridBtn = document.querySelector("#grid"); 
const slider = document.querySelector(".slider");
const gridOption = document.querySelector(".grid-option");
// toggles the grid button | when clicked shows the option and vice versa
gridBtn.addEventListener("click", () => {
    const spangrid = document.querySelector("#gd");
    if (window.getComputedStyle(gridOption).display === "none") {
        gridOption.style.display = "flex";
        spangrid.style.color = defaultColor;
    } else if (window.getComputedStyle(gridOption).display === "flex") {
        gridOption.style.display = "none";
        spangrid.style.color = whiteColor;
    }
});
slider.addEventListener("mouseup", createGrid);


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", removeAll);


createGrid("default");
