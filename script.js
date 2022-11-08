const container = document.querySelector('.container')
for(let i=0;i<16;i++){ 
        const tile = document.createElement('div');
        tile.classList = 'tile';
        container.appendChild(tile);
};
