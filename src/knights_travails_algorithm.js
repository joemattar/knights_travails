import { Chessboard } from "./graph_chessboard.js";

const chessboard = new Chessboard();

function shortestPath([startRow, startColumn], [endRow, endColumn]) {
  const startNode = chessboard.getChessboardNode(startRow, startColumn);
  const endNode = chessboard.getChessboardNode(endRow, endColumn);

  // Reset chessboard node visited and previous attributes
  chessboard.resetNodesPrevious();
  chessboard.resetNodesVisited();

  // Create queue
  let queue = [];

  // Visit and add the start node to the queue
  startNode.visited = true;
  queue.push(startNode);

  // BFS until queue is empty
  whileLoop: while (queue.length > 0) {
    // Pop a node from queue for search operation
    let currentNode = queue.shift();

    // Loop through neighbors nodes to find the 'end' node
    for (let neighbourNode of currentNode.neighbours) {
      if (neighbourNode.visited === false) {
        // visit and add neighbors nodes to the queue
        neighbourNode.visited = true;
        queue.push(neighbourNode);
        // update its preceding node
        neighbourNode.previous = currentNode;
        // stop BFS if the visited node is the end node
        if (neighbourNode === endNode) {
          // queue = [];
          break whileLoop;
        }
      }
    }
  }

  // Function to trace the route using previous nodes
  let currentNode = endNode;
  const route = [];

  // start node has no preceding node
  // so loop until node->previous is null
  while (currentNode !== null) {
    route.push(currentNode.id);
    currentNode = currentNode.previous;
  }
  // reverse the route bring start to the front
  route.reverse();
  // output route

  return route;
}

export { shortestPath };
