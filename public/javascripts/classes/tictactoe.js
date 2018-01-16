"use strict";

class TicTacToe {
  constructor(host) {
    this.o = host;
    this.x = null;
    this.currentTurn = 1;
    this.board = [];
  }
  setPlayer(player) {
    this.x = player;
    return this.x
  }
  initializeBoard() {
    if (this.board.length === 9) {
      return this.board
    }
    for (var i = 0; i < 9; i ++) {
      this.board.push(0)
    }
    return this.board
  }
  reset() {
    this.board = [];
    return this.board
  }
  setMove(id) {
    if (this.board[id] !== 0) {
      return
    } else {
      this.board[id] = this.string(this.currentTurn)
      this.getTurn()
      return this.board
    }
  }
  string(turn) {
    if (turn === 1) {
      return 'x'
    } else if (turn === 2) {
      return 'o'
    }
  }
  getTurn() {
    this.currentTurn = (this.currentTurn === 1 ? 2 : 1)
    return this.currentTurn
  }
  findWinner() {

  }

}
