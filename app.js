const cells = document.querySelectorAll('.cell')
const X_PLAYER = 'X'
const O_PLAYER = 'O'
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
let currentPlayer = X_PLAYER


btn.addEventListener('click', restartGame)
function restartGame() {
  for (let cell of cells) {
    cell.textContent = ''
  }
  text.textContent = 'X Player turn'
  i = 0
  init()
}


function init() {
  for (let cell of cells) {
    cell.addEventListener('click', playGame)
  }
}
let i = 0
function playGame() {
  this.textContent = i % 2 === 0 ? X_PLAYER : O_PLAYER
  text.textContent =
    i % 2 === 0 ? `${O_PLAYER} Player turn` : `${X_PLAYER} Player turn`

  this.removeEventListener('click', playGame)
  if (isVictory(cells)) {
    text.textContent = `${this.textContent} Player Won`
    gameOver()
  }
  if (i === 8) {
    text.textContent = `It's a tie`
  }

  i++
}

function gameOver() {
  for (let cell of cells) {
    cell.removeEventListener('click', playGame)
  }
}

function isVictory(cells) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let comb of combs) {
    if (
      cells[comb[0]].textContent != '' &&
      cells[comb[0]].textContent == cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent
    ) {
      return true
    }
  }
  return false
}

init()
