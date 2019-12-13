let dimension = prompt("Choose Dimension");
const colorOn = () => {
    const randomNumber = () => {
        return Math.floor(255 * Math.random());
    }
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    const a = Math.random();
    // console.log("color generated: " + )
    return "rgba(" + r + "," + g + "," + b + "," + 1 + ")";  
}
const colorOff = "black";

// querying nodes:
let gridContainer = document.querySelector("#container");
gridContainer.style.cssText = "display : inline-grid";

let resetButton = document.querySelector("#clear");

// creating DOM objects: 
// I want to create Grid Elements as a 2D array or sorts
let arr = [];
for (let r = 0; r < dimension; r++) {
    arr[r] = [];
    for (let c = 0; c < dimension; c++) {
        // maybe create empty arrays within each first?
        arr[r][c] = [];
    }
}

// 2D creation of Divs 
arr.forEach((row) => {
    //create a div first:
    let div = document.createElement('div');
    div.classList.add('rowDiv');
    gridContainer.appendChild(div);
    row.forEach(col => {
        let cellDiv = document.createElement('div');
        console.log("A new cell is created")
        cellDiv.classList.add('cellDiv');
        cellDiv.textContent = "lol";
        cellDiv.style.cssText = "display : inline-grid"
        cellDiv.style.backgroundColor = colorOff;
        cellDiv.style.borderStyle = "none";
        cellDiv.style.padding = "20px";
        cellDiv.style.borderColor = "black";
        div.appendChild(cellDiv);
    });
});

// create group: 
let cells = document.querySelectorAll('.cellDiv'); // this is a nodeList
cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = colorOn();
    });

});

resetButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = colorOff;
    })
    dimension = prompt("Choose Dimension");
});


// ========================= TRYING TO RESET PROPERLY======================= 

// function main(){
        
//     let dimension = prompt("Choose Dimension");
//     const colorOn = () => {
//         const randomNumber = () => {
//             return Math.floor(255 * Math.random());
//         }
//         const r = randomNumber();
//         const g = randomNumber();
//         const b = randomNumber();
//         const a = Math.random();
//         // console.log("color generated: " + )
//         return "rgba(" + r + "," + g + "," + b + "," + 1 + ")";  
//     }
//     const colorOff = "black";

//     // querying nodes:
//     let gridContainer = document.querySelector("#container");
//     gridContainer.style.cssText = "display : inline-grid";

    

//     // creating DOM objects: 
//     // I want to create Grid Elements as a 2D array or sorts
//     let arr = [];
//     for (let r = 0; r < dimension; r++) {
//         arr[r] = [];
//         for (let c = 0; c < dimension; c++) {
//             // maybe create empty arrays within each first?
//             arr[r][c] = [];
//         }
//     }

//     // 2D creation of Divs 
//     arr.forEach((row) => {
//         //create a div first:
//         let div = document.createElement('div');
//         div.classList.add('rowDiv');
//         gridContainer.appendChild(div);
//         row.forEach(col => {
//             let cellDiv = document.createElement('div');
//             console.log("A new cell is created")
//             cellDiv.classList.add('cellDiv');
//             cellDiv.textContent = "lol";
//             cellDiv.style.cssText = "display : inline-grid"
//             cellDiv.style.backgroundColor = colorOff;
//             cellDiv.style.borderStyle = "none";
//             cellDiv.style.padding = "20px";
//             cellDiv.style.borderColor = "black";
//             div.appendChild(cellDiv);
//         });
//     });

//     // create group: 
//     let cells = document.querySelectorAll('.cellDiv'); // this is a nodeList
//     cells.forEach((cell) => {
//         cell.addEventListener('mouseover', (e) => {
//             e.target.style.backgroundColor = colorOn();
//         });

//     });

    





// }
// main();
// let resetButton = document.querySelector("#clear");
// resetButton.addEventListener('click', () => {
//     grid
//     main();
// });



