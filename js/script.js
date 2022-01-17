console.log('JS OK!');
/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
     con difficoltà 1 => tra 1 e 100
     con difficoltà 2 => tra 1 e 81
     con difficoltà 3 => tra 1 e 49
     Quando l 'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/
// #ELEMENTI DA UTILIZZARE
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');
const rows = 10;
const columns = 10;
const totalCells = rows * columns;

// #FUNZIONI
function createCells() {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
    return cell;
}

function selectedCell() {
    for (let i = 0; i < totalCells; i++) {
        const cell = createCells();
        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-lightblue');

        })
    }
}

function setNumberCell() {
    for (let i = 0; i < totalCells; i++) {
        const cell = createCells();
        cell.setAttribute('id', i + 1);
    }
}
setNumberCell();