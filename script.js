generateGrid();

resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetTile);

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

