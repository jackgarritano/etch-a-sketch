let gridcontainer = document.querySelector('.gridcontainer');
let button = document.querySelector('button');
let rows;
let values = ['rgb(108, 121, 255)',
    'rgb(0, 145, 255)',
    'rgb(0, 165, 255)',
    'rgb(0, 182, 255)',
    'rgb(0, 198, 255)',
    'rgb(0, 212, 255)',
    'rgb(0, 224, 247)',
    'rgb(0, 235, 229)',
    'rgb(0, 245, 212)'];

function populateRows(){
    console.log("populateRows() has been triggered");
    gridcontainer.style.gridTemplateColumns = `repeat(${rows},calc(90vw / ${rows}))`;
    gridcontainer.style.gridTemplateRows = `repeat(${rows},calc(88vh / ${rows}))`;
    console.log(`gridcontainer's gridTemplateColumns property has been set to ${gridcontainer.style.gridTemplateColumns}
     and its gridTemplateRows property has been set to ${gridcontainer.style.gridTemplateRows}`);
    let prevcell = document.querySelectorAll('.cell')
    if(prevcell){
        prevcell.forEach((item) =>{
            item.remove();
        })
    }
    for(let i=0; i<rows*rows; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        gridcontainer.append(cell);
        console.log(`the for loop has appended cell ${cell.dataset.index} to gridcontainer`);
    }
    darkenCells();
}

function darkenCells(){
console.log("darkenCells() has been triggered");
cells = document.querySelectorAll('.cell');
cells.forEach((item) =>{
    item.addEventListener('mouseover', (e) =>{
        let thiscell = e.target;
        if(thiscell.style.backgroundColor){
            let colorvalue = thiscell.style.backgroundColor;
            console.log("colorvalue has been found to be: " + colorvalue);
            let valueindex;
            values.map((item,ind) =>{
                if(colorvalue == item){
                    valueindex = ind;
                }
            console.log("valueindex is: " + valueindex);
            })
            if(valueindex != values.length-1){
                colorvalue = values[valueindex+1];
            }
            thiscell.style.backgroundColor = colorvalue;
        }
        else{
            thiscell.style.backgroundColor = values[0];
            console.log("backgroundColor set to: " + thiscell.style.backgroundColor);
        }
        console.log(`hover event listener has been added to cell ${thiscell.dataset.index}`);
    })
})
}

button.addEventListener('click', () =>{
    console.log("the button click event listener has been triggered")
    textelement = document.querySelector('#rows');
    rows = parseInt(textelement.value);
    console.log("rows has been set to: " + rows);
    populateRows();
})

