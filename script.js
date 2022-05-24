const container = document.querySelector(".container");
const gridcontainer = document.createElement("div");

const button = document.createElement('button');
button.textContent = "Change grid dimensions";

gridcontainer.style.width = "960px";
gridcontainer.style.height = "960px";
gridcontainer.classList.add('gridContainer');
gridcontainer.style.display = 'grid';
gridcontainer.style.gap = 0;

container.appendChild(button);
container.appendChild(gridcontainer);



function makeGrid(gridsize){
//calculate size of the resulting element and form a string to pass as parameter to style.gridTemplateX 
let elementSize = 960/gridsize + "px ";
elementSize = elementSize.repeat(gridsize);
elementSize = elementSize.slice(0, elementSize.length - 1);

//pass rows/columns parameters from before
gridcontainer.style.gridTemplateRows = `${elementSize}`;
gridcontainer.style.gridTemplateColumns = `${elementSize}`;

//create required number of grid children and put them in documentFragment to append later
var documentFragment = document.createDocumentFragment();
for (let i=0; i<(gridsize**2); i++){
    const element = document.createElement("div");
    element.className = "element";
    documentFragment.appendChild(element);
}
gridcontainer.appendChild(documentFragment);
addListeners();
}

function addListeners(){
document.querySelectorAll(".element").forEach(element => {
    element.addEventListener("mouseover", event => {
        var color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
        element.style.backgroundColor = color;
        console.log(element + "  " + color );
    })    
})
}
