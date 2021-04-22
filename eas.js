let mainContainer = document.getElementById('main-container');

function addDivs(n){
    for (let i = 0; i<n; i++){
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        newDiv.classList.add('grid-square');
        mainContainer.appendChild(newDiv);
    }
}

addDivs(256);


let gridSquares = mainContainer.querySelectorAll(".grid-square");


function lightSquare(e){
    this.classList.add("lit");
}

gridSquares.forEach((item, index) => gridSquares[index].addEventListener('mouseover', lightSquare));

