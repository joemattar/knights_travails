class Node {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.id = [row, column];
    this.previous = null;
    this.neighbours = [];
    this.visited = false;
  }

  addNeighbour(node) {
    this.neighbours.push(node);
  }
}

export { Node };
