generateGrid();

resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetTile);
customButton = document.getElementById('custom');
customButton.addEventListener('click', customGrid)

function generateGrid(size = 16) {
    const container = document.querySelector('.container')
    container.setAttribute('style',`grid-template-columns: repeat(${size}, 1fr) ; grid-template-rows: repeat(${size}, 1fr)`)
    for(let i=0;i<size;i++){ //column
        for(let j=0;j<size;j++) { //row
            const tile = document.createElement('div');
            tile.classList = 'tile';
            container.appendChild(tile);
        }
    }
    start();
}

selectContainer = document.getElementById('container');
selectContainer.addEventListener('mouseover', determineColor);

function determineColor(){
    
}

function start() {
    selectTile = document.getElementsByClassName('tile');
    //change tile color on mouse hover
    for(let i=0;i<selectTile.length;i++){
        selectTile[i].addEventListener("mouseover" ,function(e) {
            e.target.style.backgroundColor = 'salmon'
        })
        };
}

function resetTile(){
    selectTile = document.getElementsByClassName('tile');
    for(let i=0;i<selectTile.length;i++){
        selectTile[i].style.backgroundColor='black';
    }
}

function customGrid(){
    let size = prompt('Enter the grid size');
    if(size>100)
    {
        do{
            size = prompt('Size too big! Enter another number')
        }while(size>100)
    }
    resetTile();
    generateGrid(size);
}