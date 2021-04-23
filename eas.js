let mainContainer = document.getElementById('main-container');

function addDivs(n){
    for (let i = 0; i<n; i++){
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        newDiv.classList.add('grid-square');
        newDiv.style.opacity=0;
        mainContainer.appendChild(newDiv);
    }
}

addDivs(10000);

let gridSquares;

addListeners();

function rndRGBInt(){
    let output = Math.floor(Math.random() * 256);
    return output;
}

function lightSquare(e){
    //this.style.backgroundColor="rgb(" + rndRGBInt() + "," + rndRGBInt() + "," + rndRGBInt() + ")";
    let currentOpacity = parseFloat(this.style.opacity);
    if (currentOpacity <1) {
        let newOpacity = parseFloat(this.style.opacity) + 0.1;
        this.style.opacity = newOpacity;
    } else {
        return
    }
}

function addListeners(){
    gridSquares = mainContainer.querySelectorAll(".grid-square");
    gridSquares.forEach((item, index) => gridSquares[index].addEventListener('mouseover', lightSquare));
}

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetGrid);

function removeSquares(){
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function resetGrid(){
    removeSquares();
    let dimensions = newGrid();
    mainContainer.style.gridTemplateColumns="repeat(" + dimensions + ", 1fr)";
    mainContainer.style.gridTemplateRows="repeat(" + dimensions + ", 1fr)";
    addDivs((dimensions * dimensions));
    addListeners();
}

function newGrid(){
    let dimension = prompt("How many boxes Per Side? (max 100)", "16");
    if (dimension > 100){
        alert("That's too many!");
    } else {
    return dimension;
    }
}