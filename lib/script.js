// This is the Javascript File for tic-tac-toe


// Grand Function to make the tic tac toe board
const makeBoard = () => {

  // Makes the squares on the board
  const board = document.querySelector(".board")
  for (let i = 0; i < 9; i++) {
    board.appendChild(makeSquare())
  }

  // Function to make each board square
  const makeSquare = () => {
    const square = document.createElement('button')
    square.classList.add('button')
    square.innerText = ""
    return square
  }

  // Function to handle each click
  const clickHandler = (element) => {
    console.log("It works")
  }
}


makeBoard()
