function createBoard(size) {

let board = document.querySelector('.board')
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
board.style.gridTemplateRows = `repeat(${size} , 1fr)`

for (x=0 ; x < 256 ; x++) {
    let square= document.createElement("div")
    square.style.backgroundColor = "purple"
    square.setAttribute("id", "square")
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white"
    })
    board.insertAdjacentElement("beforeend", square)
}


}

createBoard(16)

function changeSize(input) {
    createBoard(input)

}