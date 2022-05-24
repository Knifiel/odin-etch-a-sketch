const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyItems = "center";
container.style.alignItems = "center";

const gridcontainer = document.createElement("div");


const button = document.createElement('button');
button.textContent = "Change grid dimensions";
button.style.width = "max-content";

gridcontainer.style.flexShrink = "0";
gridcontainer.style.width = "960px";
gridcontainer.style.height = "960px";
gridcontainer.classList.add('gridContainer');
gridcontainer.style.display = 'grid';
gridcontainer.style.gap = 0;
gridcontainer.style.borderStyle = "solid";
gridcontainer.style.borderColor = "black";


container.appendChild(button);
container.appendChild(gridcontainer);

//make default 16/x16 grid
makeGrid(16);


function makeGrid(gridsize){
//remove all old children if there are any
var child = gridcontainer.firstElementChild;
while(child){
    gridcontainer.removeChild(child);
    child = gridcontainer.firstElementChild;
}

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
    })    
})
}
