//dom objects
const goButton = document.getElementById('go')
const table = document.getElementById('table')
const cell = function(id) {return document.getElementById(id)}
// dom-object event listeners
table.addEventListener('click', cellId)
goButton.addEventListener('click', go)
// data objects
const game = new TicTacToe('haha')



function cellId(evt) {
  if (evt.target.id.length === 1) {
    data(evt.target.id)

  }
  render(game)
  return this
}



function data(id) {

  game.setMove(id)
  console.log(game.board);
  return id
}

function render(game) {
  for (var i = 0; i < 9; i ++) {
    cell(i).textContent = (game.board[i] === 0 ? '' : game.board[i] )
  }
}
function go() {
  game.initializeBoard()
  console.log(game);

}
