// when coursor hovers div changes background color
// when hovers again opacity +10%

// slider for number of grid
// two modes - buttons - colorful and black-white

const gridContainer = document.querySelector(".gridContainer");
const inputGridNumber = document.querySelector("#gridNumber");

function buildGrid() {

let gridSizePercent = (gridContainer.offsetWidth / +inputGridNumber.value) / gridContainer.offsetWidth *100;

for (let i = 1; i <= inputGridNumber.value**2; i++) {
    let cell = document.createElement("div");
    cell.style.width = `${gridSizePercent}%`;
    // cell.textContent = `${i}`;
    // cell.style.fontSize = "10px";
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
