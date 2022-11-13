var assert = require('assert');


const deletionDistance = (str1, str2) => {
    let array1 = [...str1];
    let array2 = [...str2];

    let count = 0; 

    array1.filter(item =>  
       ( !array2.includes(item) ? count++ : ""))
    
    return count;
}

console.log(deletionDistance('rag', 'flag'))

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.verticesCount = 0;
  }

  addVertex(nodeVal) {
    this.adjacencyList.set(nodeVal, []);
    this.verticesCount++;
  }

  addEdge(src, dest) {
    this.adjacencyList.get(src).push(dest);
    this.adjacencyList.get(dest).push(src);
    // push to both adjacency lists
  }

  removeVertex(val) {
    if (this.adjacencyList.get(val)) {
      this.adjacencyList.delete(val);
    }

    this.adjacencyList.forEach((vertex) => {
      const neighborIdx = vertex.indexOf(val);
      if (neighborIdx >= 0) {
        vertex.splice(neighborIdx, 1);
      }
    });
  }

  removeEdge(src, dest) {
    const srcDestIdx = this.adjacencyList.get(src).indexOf(dest);
    this.adjacencyList.get(src).splice(srcDestIdx, 1);

    const destSrcIdx = this.adjacencyList.get(dest).indexOf(src);
    this.adjacencyList.get(dest).splice(destSrcIdx, 1);
  }

  printNeighbors() {
    const result = [];

    for (let vertex of this.adjacencyList.keys()) {
      const neighbors = [];

      neighbors.push(`${vertex}:`);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        neighbors.push(neighbor);
      });

      result.push(neighbors.join(' '));
    }

    return result;
  }

  verticesCount() {
    return this.verticesCount;
  }

  reverse() {
    const graph = new Graph();
    for (let [src, dests] of this.adjacencyList) {
      graph.addVertex(src);
    }

    for (let [src, dests] of this.adjacencyList) {
      for (let dest of this.adjacencyList.get(src)) {
        graph.adjacencyList.get(src).push(dest);
      }
    }

    return graph;
  }
}

var matrix1 = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 0],
];

var matrix2 = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 0],
];

var planeMatrix1 = [
  ['.', '.', '.', 'P'],
  ['.', '.', '.', 'P'],
  ['P', 'P', '.', 'P'],
  ['.', '.', '.', 'P'],
];

// try {
//   assert.equal(deletionDistance('', ''), 0);

//   console.log('PASSED: ' + "deletionDistance('', '') should return 0");
// } catch (err) {
//   console.log(err);
// }

// try {
//   assert.equal(deletionDistance('some', 'thing'), 9);

//   console.log('PASSED: ' + "deletionDistance('some', 'thing') should return 9");
// } catch (err) {
//   console.log(err);
// }

// try {
//   assert.equal(deletionDistance('rag', 'flag'), 3);

//   console.log('PASSED: ' + "deletionDistance('rag', 'flag') should return 3");
// } catch (err) {
//   console.log(err);
// }
