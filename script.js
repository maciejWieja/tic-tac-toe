const fields = document.getElementsByClassName("field")
const boardHtml = document.getElementById("board")
const resultDiv = document.getElementById("result")

let playerTurn = "X"
let moveCount = 0
let gameIsEnd = false

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
]

function fieldClick(field) {

    if(fields[field].innerHTML == "" && !gameIsEnd) {

        if(playerTurn == "X") moveCount++

        fields[field].innerHTML = playerTurn
        board[field] = playerTurn

        if(winCondition()) return win()

        if(moveCount == 5) draw()

        playerTurn = playerTurn == "X" ? "O" : "X"

    }
}

function winCondition() {
    if((board[0] == "O" && board[1] == "O" && board[2] == "O") || (board[3] == "O" && board[4] == "O" && board[5] == "O") || (board[6] == "O" && board[7] == "O" && board[8] == "O") || (board[0] == "O" && board[3] == "O" && board[6] == "O") || (board[1] == "O" && board[4] == "O" && board[7] == "O") || (board[2] == "O" && board[5] == "O" && board[8] == "O") || (board[0] == "O" && board[4] == "O" && board[8] == "O") || (board[2] == "O" && board[4] == "O" && board[6] == "O") || (board[0] == "X" && board[1] == "X" && board[2] == "X") || (board[3] == "X" && board[4] == "X" && board[5] == "X") || (board[6] == "X" && board[7] == "X" && board[8] == "X") || (board[0] == "X" && board[3] == "X" && board[6] == "X") || (board[1] == "X" && board[4] == "X" && board[7] == "X") || (board[2] == "X" && board[5] == "X" && board[8] == "X") || (board[0] == "X" && board[4] == "X" && board[8] == "X") || (board[2] == "X" && board[4] == "X" && board[6] == "X")) {
        return 1
    }
        return 0
}

function win() {

    gameIsEnd = true

    boardHtml.style.opacity = .3

    resultDiv.innerHTML = `

        ${playerTurn} won in ${moveCount} moves!

        <div id="reset" onclick="resetGame()">reset game</div>

    `
}

function draw() {

    gameIsEnd = true

    boardHtml.style.opacity = .3

    resultDiv.innerHTML = `

        Draw!

        <div id="reset" onclick="resetGame()">reset game</div>

    `
}

function resetGame() {

    gameIsEnd = false

    for(let i = 0; i < board.length; i++) {
        board[i] = ""
        fields[i].innerHTML = ""
    }

    boardHtml.style.opacity = 1
    resultDiv.innerHTML = ""
    moveCount = 0
    playerTurn = "X"
}

    fields[0].addEventListener("click", () => fieldClick(0))
    fields[1].addEventListener("click", () => fieldClick(1))
    fields[2].addEventListener("click", () => fieldClick(2))
    fields[3].addEventListener("click", () => fieldClick(3))
    fields[4].addEventListener("click", () => fieldClick(4))
    fields[5].addEventListener("click", () => fieldClick(5))
    fields[6].addEventListener("click", () => fieldClick(6))
    fields[7].addEventListener("click", () => fieldClick(7))
    fields[8].addEventListener("click", () => fieldClick(8))