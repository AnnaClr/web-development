const cells = Array.from(document.querySelectorAll('.board'));

let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => cell.addEventListener('click', handleClick));

function handleClick() {
    if (this.innerHTML !== '' || gameOver)
    return (
        this.innerHTML = currentPlayer 
    )
    winnerCheck();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function winnerCheck() {
    winningCombination.forEach(combination => {
        const [a, b, c] = combination;
    if (cells[a].innerHTML === currentPlayer && cells[b].innerHTML === currentPlayer && cells[c].innerHTML === currentPlayer) {
        alert(`${currentPlayer} venceu!`);
        gameOver = true;
        cells.forEach(cell => cell.addEventListener('click', handleClick));
    }    
    })
}
