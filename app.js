const button = document.querySelector(".button1");

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    button.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  }
}

createBoard(16);

function changeSize(input) {
  if (input >= 2 && input < 100) {
    createBoard(input);
  } else {
    alert("Canvas cannot exceed 100x100");
  }
}
