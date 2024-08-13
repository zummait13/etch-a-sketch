// h1 text

// grid input x input with fix width
// max input is 100
// by "for" method to create div elements
// flex-wrip
// each div has border
// when coursor hovers div changes background color
// when hovers again opacity +10%

// slider for number of grid
// two modes - buttons - colorful and black-white

// get container width and numbers input
// divide it and assign it to div element

const gridContainer = document.querySelector(".gridContainer");
const inputGridNumber = document.querySelector("#gridNumber");

function buildGrid() {

let gridSize = (gridContainer.offsetWidth / +inputGridNumber.value);

for (let i = 1; i <= inputGridNumber.value**2; i++) {
    let cell = document.createElement("div");
    cell.style.boxSizing = "border-box";
    cell.style.width = `${gridSize}px`;
    gridContainer.appendChild(cell).className = "gridCell";
}

}

function rebuildGrid(callback) {
    
    // clear gridContainer
    let gridCells_list = document.querySelectorAll(".gridCell")
    let gridCells_arr = [...gridCells_list];

    gridCells_arr.forEach(cell => cell.remove());

    if(callback) callback();
}

buildGrid();
