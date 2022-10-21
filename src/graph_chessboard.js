import { Node } from "./graph_node.js";

class Chessboard {
  constructor() {
    // Create a list with all possible knight movements
    // A movement is an array consisting of row and column translation
    this.knightMovementList = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    // Create a list of all chessboard nodes
    this.chessboardNodeList = [];
    for (let i = 1; i <= 8; i += 1) {
      for (let j = 1; j <= 8; j += 1) {
        const newNode = new Node(i, j);
        this.chessboardNodeList.push(newNode);
      }
    }

    // Assign knight movement neighbour for each chessboard node
    for (let chessboarNode of this.chessboardNodeList) {
      for (let knightMovement of this.knightMovementList) {
        const neighbourRow = chessboarNode.row + knightMovement[0];
        const neighbourColumn = chessboarNode.column + knightMovement[1];
        if (
          1 <= neighbourRow &&
          neighbourRow <= 8 &&
          1 <= neighbourColumn &&
          neighbourColumn <= 8
        ) {
          const neighbourNode = this.getChessboardNode(
            neighbourRow,
            neighbourColumn
          );
          if (chessboarNode.neighbours.includes(neighbourNode) === false) {
            chessboarNode.addNeighbour(neighbourNode);
          }
        }
      }
    }
  }

  // Method to get a target node given its row and column number
  getChessboardNode(row, column) {
    for (let chessboarNode of this.chessboardNodeList) {
      if (chessboarNode.row === row && chessboarNode.column === column) {
        return chessboarNode;
      }
    }
  }

  // Method to reset the previous attribute of all nodes
  resetNodesPrevious() {
    for (let chessboardNode of this.chessboardNodeList) {
      chessboardNode.previous = null;
    }
  }

  // Method to rest the visited attribute of all nodes
  resetNodesVisited() {
    for (let chessboardNode of this.chessboardNodeList) {
      chessboardNode.visited = false;
    }
  }
}

export { Chessboard };
