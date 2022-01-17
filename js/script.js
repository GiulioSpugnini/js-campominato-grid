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

// #FUNZIONI
function createCell(index) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
    cell.setAttribute('id', index + 1);
    cell.innerText = cell.id;
    return cell;
}

function selectedCell(totalCells) {
    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(i);
        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-lightblue');
        })
    }
}

// !PROGRAMMA
difficulty.addEventListener('change', (event) => {
    grid.innerHTML = '';
    switch (event.target.value) {
        case "1":
            selectedCell(100);
            break;
        case "2":
            selectedCell(80);
            break;
        case "3":
            selectedCell(50);
    }

});