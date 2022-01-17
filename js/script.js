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
const diff1 = document.getElementById('diff1');
const diff2 = document.getElementById('diff2');
const diff3 = document.getElementById('diff3');



// #FUNZIONI
function createCells(rows, columns, totalCells) {
    rows = 10;
    columns = 10;
    totalCells = rows * columns;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);

        cell.setAttribute('id', i + 1);
        return cell;
    }

}

function selectedCell(totalCells) {
    for (let i = 0; i < totalCells; i++) {
        const cell = createCells();
        cell.addEventListener('click', function() {
            cell.classList.toggle('bg-lightblue');

        })
    }
}

// !PROGRAMMA
difficulty.addEventListener('change', (event) => {
    switch (event.target.value) {
        case "1":
            createCells(10, 10, 100);
            selectedCell(100);
            diff2.classList.add('d-none');
            diff3.classList.add('d-none');
            break;
        case "2":
            createCells(10, 8, 82);
            selectedCell(100);
            diff1.classList.add('d-none');
            diff3.classList.add('d-none');

            break;
        case "3":
            createCells(10, 5, 50);
            selectedCell(50);
            diff1.classList.add('d-none');
            diff2.classList.add('d-none');

    }

});




// diff1.addEventListener('click', function() {




// })
// diff2.addEventListener('change', function() {
//     rows = 10;
//     columns = 8;
//     selectedCell();


// })
// diff3.addEventListener('change', function() {
//     rows = 10;
//     columns = 5;
//     selectedCell();


// })