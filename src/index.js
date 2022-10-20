import "./css/styles.css";
import githubImage from "./images/github_logo.png";
import startingKnightImage from "./images/knight-gold.png";
import targetKnightImage from "./images/knight-green.png";

let dragged;

// Create header element
const header = document.createElement("header");
header.classList.add("header");
header.textContent = "Knights Travails";
document.body.appendChild(header);

// Create chessboard div element
const chessboardDiv = document.createElement("div");
chessboardDiv.classList.add("chessboard");
document.body.appendChild(chessboardDiv);

// Create chessboard squares
createChessboard();

// Create interactive knight pieces
const movableStartingKnightImg = document.createElement("img");
movableStartingKnightImg.classList.add("draggable");
movableStartingKnightImg.draggable = true;
movableStartingKnightImg.src = startingKnightImage;
movableStartingKnightImg.addEventListener("dragstart", knightDragStart);
const movableTargetKnightImg = document.createElement("img");
movableTargetKnightImg.classList.add("draggable");
movableTargetKnightImg.classList.add("target");
movableTargetKnightImg.draggable = true;
movableTargetKnightImg.src = targetKnightImage;
movableTargetKnightImg.addEventListener("dragstart", knightDragStart);

// Place initial knight pieces
placeKnight(movableStartingKnightImg, 4, 4);
placeKnight(movableTargetKnightImg, 6, 5);

// Create instructions div element
const instructionsDiv = document.createElement("div");
instructionsDiv.classList.add("instructions");
instructionsDiv.textContent =
  "Use the mouse to drag the knights to their starting and target positions";
document.body.appendChild(instructionsDiv);

// Create legend div element
const legendDiv = document.createElement("div");
legendDiv.classList.add("legend");
document.body.appendChild(legendDiv);

// Create legend content
const startingDiv = document.createElement("div");
legendDiv.appendChild(startingDiv);
const startingImg = document.createElement("img");
startingImg.src = startingKnightImage;
startingDiv.appendChild(startingImg);
const startingP = document.createElement("p");
startingP.textContent = "Starting Knight";
startingDiv.appendChild(startingP);
const targetDiv = document.createElement("div");
legendDiv.appendChild(targetDiv);
const targetImg = document.createElement("img");
targetImg.src = targetKnightImage;
targetDiv.appendChild(targetImg);
const targetP = document.createElement("p");
targetP.textContent = "Target Knight";
targetDiv.appendChild(targetP);

// Create footer element
const footer = document.createElement("footer");
footer.classList.add("footer");
document.body.appendChild(footer);

// Footer text element
const footerTextDiv = document.createElement("div");
footerTextDiv.textContent = "The Odin Project - joemattar";
footer.appendChild(footerTextDiv);

// Footer a element
const footerA = document.createElement("a");
footerA.href = "https://github.com/joemattar";
footerA.target = "_blank";
footer.appendChild(footerA);

// Footer img element
const footerImg = document.createElement("img");
footerImg.src = githubImage;
footerA.appendChild(footerImg);

// Function to create/clear chessboard
function createChessboard() {
  chessboardDiv.textContent = "";
  let k = 0;
  for (let i = 8; i >= 1; i -= 1) {
    // Create row div
    const newChessboardRowDiv = document.createElement("div");
    newChessboardRowDiv.classList.add("chessboard-row");
    chessboardDiv.appendChild(newChessboardRowDiv);
    for (let j = 1; j <= 8; j += 1) {
      // Create square div
      const newChessboardSquareDiv = document.createElement("div");
      newChessboardSquareDiv.classList.add("square");
      newChessboardSquareDiv.dataset.row = i;
      newChessboardSquareDiv.dataset.column = j;
      // Add event listener for DRAGOVER event
      newChessboardSquareDiv.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
      });
      newChessboardSquareDiv.addEventListener("drop", knightDrop);
      if (k % 2 === 0) {
        newChessboardSquareDiv.classList.add("white");
      } else {
        newChessboardSquareDiv.classList.add("black");
      }
      k += 1;
      newChessboardRowDiv.appendChild(newChessboardSquareDiv);
    }
    k += 1;
  }
}

// Function to place knightpiece
function placeKnight(knight, row, column) {
  const selectedSquareDiv = document.querySelector(
    `[data-row="${row}"][data-column="${column}"]`
  );
  selectedSquareDiv.appendChild(knight);
}

// Function to clear chessboard from everything except knights
function clearChessboard() {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    if (
      square.hasChildNodes() &&
      !square.firstChild.classList.contains("draggable")
    ) {
      square.textContent = "";
    }
  }
}

// Function for knight element drag start event
function knightDragStart(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  clearChessboard();
}

// Function for knight element drop event
function knightDrop(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (
    !event.target.hasChildNodes() &&
    !event.target.classList.contains("draggable")
  ) {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}

// <a href="https://www.flaticon.com/free-icons/knight" title="knight icons">Knight icons created by BZZRINCANTATION - Flaticon</a>
