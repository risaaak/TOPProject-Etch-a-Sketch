const container = document.querySelector('.container')
for(let i=0;i<16;i++){ //column
    for(let j=0;j<16;j++) { //row
        const tile = document.createElement('div');
        tile.classList = 'tile';
        container.appendChild(tile);
    }
}

selectTile = document.getElementsByClassName('tile');

//change tile color on mouse hover
for(let i=0;i<selectTile.length;i++){
    selectTile[i].addEventListener("mouseover" ,function(e) {
        e.target.style.backgroundColor = 'salmon'
    })
}




