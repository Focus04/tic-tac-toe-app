const cells = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
const winMsg = document.querySelector('.win-msg');
const msg = document.querySelector('.msg');
const restart = document.querySelector('.restart')

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const startGame = () => {
  let i = 1;
  let oTurn = 0;
  let currentClass;
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      let clickedCell = e.target;
      if (oTurn) currentClass = 'o';
      else currentClass = 'x';
      clickedCell.classList.add(currentClass);
      if (clickedCell.className === 'cell x o') clickedCell.className = 'cell o';
      else if (clickedCell.className === 'cell o x') clickedCell.className = 'cell x';
      let win = 0;
      winningCombinations.forEach((combination) => {
        let ok = 1;
        combination.forEach((index) => {
          if (!cells[index].classList.contains(currentClass)) ok = 0;
        });
        if (ok) win = 1;
      });
      if (win) {
        msg.innerHTML = `${currentClass.toUpperCase()} won!`
        winMsg.style.display = 'grid';
      } else if (i === 9) {
        msg.innerHTML = 'Draw!';
        winMsg.style.display = 'grid';
      } else {
        i++;
        oTurn = !oTurn;
        board.classList.remove(currentClass);
        if (oTurn) board.classList.add('o');
        else board.classList.add('x');
      }
    }, { once: 1 });
  });
  winMsg.style.display = 'none';
  cells.forEach((cell) => cell.classList.remove('x', 'o'));
  board.classList.remove('x', 'o');
  board.classList.add('x');
}
startGame();
restart.addEventListener('click', startGame);