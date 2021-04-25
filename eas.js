//<INITIAL PAGE SETUP STARTS>
//Creates a variable to hold the main container
let mainContainer = document.getElementById('main-container');

//Adds an initial 10,000 divs to the page (to be styled as a 100 x 100 grid by the CSS)
addDivs(10000);

//Calls the function to add the mouseover listeners to all the grid squares
addListeners();

//Adds the click event to the reset button
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);

//<INITIAL PAGE SETUP ENDS>

//Function to add a number of divs to the main container, with the square syling and
//initital opacity set to 0 (to be light grey)
function addDivs(n){
    for (let i = 0; i<n; i++){
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        newDiv.classList.add('grid-square');
        newDiv.style.opacity=0;
        mainContainer.appendChild(newDiv);
    }
}

//Generates a random number up to 255
function rndRGBInt(){
    let output = Math.floor(Math.random() * 256);
    return output;
}

//Function to increase the opacity of a grid square by 0.1 with each mouseover event
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

//Function to add mouseover event listeners to every grid square, and call the lightSquare function
function addListeners(){
    let gridSquares = mainContainer.querySelectorAll(".grid-square");
    gridSquares.forEach((item, index) => gridSquares[index].addEventListener('mouseover', lightSquare));
}

//Function to remove all grid squares
function removeSquares(){
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

//Function to clear the grid, create a new grid and add the event listeners
function resetGrid(){
    removeSquares();
    setDimensions();
    addListeners();
}

//Function to prompt the user to set the new grid dimensions and return the result
function getDimensions(){
    let dimension = prompt("How many boxes Per Side? (max 100)", "16");
    if (dimension > 100){
        alert("That's too many!");
    } else {
    return dimension;
    }
}

//Function to add grid squares to the container at the requested dimensions
function setDimensions(){
    let dimensions = getDimensions();
    mainContainer.style.gridTemplateColumns="repeat(" + dimensions + ", 1fr)";
    mainContainer.style.gridTemplateRows="repeat(" + dimensions + ", 1fr)";
    addDivs((dimensions * dimensions));
}