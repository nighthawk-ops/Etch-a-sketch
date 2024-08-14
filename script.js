let sizeLabel = document.querySelector(".currentSize");
const setSize = document.querySelector(".setSize");
const container = document.querySelector(".container");
let gridSize = 16;


setSize.addEventListener('click', () =>{
    let inputSize = prompt("Enter grid size not more then 100");
    
    if (inputSize > 100){
        inputSize=prompt("Enter grid size not more then 100");
    }else{
        gridSize = inputSize;
        console.log(gridSize);
        sizeLabel.textContent =`${inputSize}`;
    }

    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    } 

    createGrid(inputSize);
});

function random(i){
    i.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}

function createGrid(size){
    var columns = size;
    var rows = size;

    for (let i = 0; i < rows; i++){
        let row = document.createElement("div");
        container.appendChild(row);
        for(let j = 0; j < columns; j++){
            let col = document.createElement("div");
            col.style.cssText="padding:10px; border: 1px solid black; flex:1;";
            const randomColor = document.querySelector(".randomColor");

            randomColor.addEventListener('click', () =>{     
                col.addEventListener('mouseover', () =>{
                   random(col);  
            });
            });

            col.addEventListener('mouseover', () =>{
                col.style.backgroundColor = "black";
            });
            row.appendChild(col);
        }
    }
}

createGrid(16);

const retryBtn = document.querySelector(".reset");

retryBtn.addEventListener('click',()=>{

    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    } 

    createGrid(gridSize);
});