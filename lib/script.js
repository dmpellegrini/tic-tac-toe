// This is the Javascript File for tic-tac-toe

// Grand Function to make the tic tac toe board
const makeBoard = () => {
   
  // Sets The Title Of The Page
  let titleBar = document.querySelector('h1')
  titleBar.innerText = "Tic Tac Toe"

  // Logs clicks to determine player's turn
  let clickLog = 0

  // Logs the squares a player has clicked on
  let squareLog = []

  // Makes the squares on the board
  const board = document.querySelector('.board')
  for (let i = 0; i < 9; i++) {
    const square = makeSquare(i)
    square.addEventListener('click', clickHandler)
    board.appendChild(square)
  }

  // Function to make each board square
  function makeSquare (index) {
    const square = document.createElement('button')
    square.classList.add('button')
    square.innerText = ""
    square.id = `${index}`
    return square
  }

  // Function to handle each click
  function clickHandler (e) {
    let btn = e.target
    if (btn.style.backgroundColor === "") {
      if (clickLog % 2 === 0) {
        btn.style.backgroundColor = 'red'
        clickLog += 1
        squareLog[btn.id] = 'red'
        checkBoard(squareLog, squareLog[btn.id])
      }
      else if (clickLog %2 === 1) {
        btn.style.backgroundColor = 'blue'
        clickLog += 1
        squareLog[btn.id] = 'blue'
        checkBoard(squareLog, squareLog[btn.id])
      }
    }
  }
  
  // Function to check gamestatus
  function checkBoard (log, color) {
    
    // Conditions for a win 
    if ( 
      // Row 1 Win
      (log[0] === log[1] && log[1] === log[2] && log[0] !== undefined) ||
      // Row 2 Win
      (log[3] === log[4] && log[4] === log[5] && log[3] !== undefined) ||
      // Row 3 Win
      (log[6] === log[7] && log[7] === log[8] && log[6] !== undefined) ||
      // Column 1 Win
      (log[0] === log[3] && log[3] === log[6] && log[0] !== undefined) ||
      // Column 2 Win
      (log[1] === log[4] && log[4] === log[7] && log[1] !== undefined) ||
      // Column 3 Win
      (log[2] === log[5] && log[5] === log[8] && log[2] !== undefined) ||
      // Diagonal Top Left Win
      (log[0] === log[4] && log[4] === log[8] && log[0] !== undefined) ||
      // Diagonal Top Right Win
      (log[2] === log[4] && log[4] === log[6] && log[2] !== undefined) 
    ) {
      titleBar.innerText = `${color} wins!`
      resetGame()  
    }
    else if (!log.includes(undefined) && log.length >= 9) {
      titleBar.innerText = `It's a tie!`
      resetGame()
    }
  }

  // Function to declare winner and reset game 
  function resetGame() {
    setTimeout(() => {
      board.innerHTML = ""
      makeBoard()
    }, 2000)
  }
}

makeBoard()
