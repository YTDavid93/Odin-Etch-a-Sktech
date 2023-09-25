let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#popup");
  btn.addEventListener("click", function () {
    let size = maximumBoard();
    createBoard(size);
  });
  createBoard(16);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector("#draw");
      if (click) {
        draw.innerHTML = "Now You can draw";
      } else {
        draw.innerHTML = "You'r not allowed to draw";
      }
    }
  });
});

function createBoard(size) {
  let board = document.querySelector(".border");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div);
    div.addEventListener("mouseover", colorDiv);
  }
}

function maximumBoard() {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector("#message");
  if (input === "") {
    message.innerHTML = "please provide a number";
  } else if (input < 0 && input > 100) {
    message.innerHTML = "provide a number between 1 and 100";
  } else {
    message.innerHTML = "Now play the game!";
    return input;
  }
}

function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // generates random color
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
