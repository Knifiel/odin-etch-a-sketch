const container = document.querySelector(".container");
const gridcontainer = document.createElement("div");
const button = document.createElement('button');
button.textContent = "Change grid dimensions";
gridcontainer.style.width = "960px";
gridcontainer.style.height = "960px";

gridcontainer.classList.add('gridContainer');
gridcontainer.style.display = 'grid';
for (let i = 0; i<(16**2); i++){
    const gridElement = document.createElement("div");
    gridElement.classList.add(`element${i}`);
    gridcontainer.appendChild(gridElement);
}

container.appendChild(gridcontainer);
container.insertBefore(button, gridcontainer);