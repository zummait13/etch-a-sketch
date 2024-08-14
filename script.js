const gridContainer = document.querySelector(".gridContainer");
const inputGridNumber = document.querySelector("#gridNumber");

buildGrid(); 

function buildGrid() {

    let cellSizePercent = (gridContainer.offsetWidth / +inputGridNumber.value) / gridContainer.offsetWidth *100;
    let gridCells_arr = [];

    for (let i = 1; i <= inputGridNumber.value**2; i++) {
        let cell = document.createElement("div");
        cell.style.width = `${cellSizePercent}%`;
        gridCells_arr.push(cell);
        gridContainer.appendChild(cell).className = "gridCell";
    }

    paintCells(gridCells_arr);
}

function rebuildGrid(callback) {
    
    let gridCells_list = document.querySelectorAll(".gridCell")
    let gridCells_arr = [...gridCells_list];

    // clear gridContainer
    gridCells_arr.forEach(cell => cell.remove());

    if(callback) callback();
}

function paintCells (gridCells_arr) {

    gridCells_arr.forEach(cell => {
        cell.addEventListener("mouseover", e => {

            let checkbox_RGB_mode = document.querySelector("#RGB_mode");
            let RGB_mode_on = checkbox_RGB_mode.checked;

            // if it is colored opacity +10%, is not paint it
            // WB or RGB
            if (e.target.id == "rgb-colored")
            {
                let cellOpacity = +e.target.style.opacity + 0.2;
                e.target.style.opacity = cellOpacity.toString();
            }
            else if (RGB_mode_on == true) {
                e.target.style.backgroundColor = getRandomColor();
                e.target.id = "rgb-colored";
                e.target.style.opacity = "0.1";
            }
            else if (e.target.id == "wb-colored"){
                let cellOpacity = +e.target.style.opacity + 0.2;
                e.target.style.opacity = cellOpacity.toString();
            }
            else {
                e.target.style.backgroundColor = "black";
                e.target.id = "wb-colored";
                e.target.style.opacity = "0.1";
            }
        })
    })
}

function getRandomColor () {
    let letters = "0123456789ABCDEF";
    let color = "#" //start value;
    for (let i = 0; i < 6; i++) {
        color += letters[~~(Math.random()*16)];
    }
    return color;
}