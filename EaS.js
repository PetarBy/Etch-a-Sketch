const container = document.querySelector('.container');

function createGrid (size = 16) {
    container.innerHTML = '';
    const total = size * size;
    const frag = document.createDocumentFragment();

    for (let i = 0; i< total; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        frag.appendChild(cell);
    }
    container.appendChild(frag);
}

createGrid();