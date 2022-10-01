// This is the Javascript File for tic-tac-toe

// Grand Function to make the tic tac toe board
const makeBoard = () => {
   
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
    console.log(square)
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
        checkBoard(squareLog)
      }
      else if (clickLog %2 === 1) {
        btn.style.backgroundColor = 'blue'
        clickLog += 1
        squareLog[btn.id] = 'blue'
        checkBoard(squareLog)
      }
    }
  }
  
  // Function to check gamestatus
  function checkBoard (log) {
    console.log(log)
    // Row 1 Win
    if (log[0] === log[1] && log[1] === log[2] && log[0] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
      makeBoard()
    }
    // Row 2 Win
    else if (log[3] === log[4] && log[4] === log[5] && log[3] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Row 3 Win
    else if (log[6] === log[7] && log[7] === log[8] && log[6] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Column 1 Win
    else if (log[0] === log[3] && log[3] === log[6] && log[0] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Column 2 Win
    else if (log[1] === log[4] && log[4] === log[7] && log[1] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Column 3 Win
    else if (log[3] === log[5] && log[5] === log[8] && log[3] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Diagonal Top Left Win
    else if (log[0] === log[4] && log[4] === log[8] && log[0] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    // Diagonal Top Right Win
    else if (log[2] === log[4] && log[4] === log[6] && log[2] !== undefined) {
      console.log("Winner")
      board.innerHTML = ""
    }
    else{
      console.log("_'s Turn")
    }
  }
}


makeBoard()
