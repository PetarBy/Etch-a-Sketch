const container = document.querySelector('.container');

function createGrid (size = 16) {
    container.innerHTML = '';
    container.style.setProperty('--size', size);
    const total = size * size;
    const frag = document.createDocumentFragment();

    for (let i = 0; i< total; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })

        frag.appendChild(cell);
    }
    container.appendChild(frag);
}

function resetGrid() {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"), 10);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(newSize);
}


createGrid();

const button = document.createElement('button');
button.textContent = "Reset Grid";
button.addEventListener('click', resetGrid);
document.body.insertBefore(button, container);