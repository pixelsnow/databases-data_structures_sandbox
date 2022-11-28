/*
Write a function,shortestPath, that takes in an array of edges for an   undirected   graph
and   two   nodes   (nodeA,nodeB).   The   function should   return   the   length   of   the   shortest   path
betweenAandB. Consider the length as the number of edges in the path, not the number of nodes.
If there is no path betweenAandB, then return -1.
*/
const shortestPath = (edges, nodeA, nodeB) => {
  
};




const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
console.log(shortestPath(edges, "w", "z")); // -> 2

// const edges = [
//   ["a", "c"],
//   ["a", "b"],
//   ["c", "b"],
//   ["c", "d"],
//   ["b", "d"],
//   ["e", "d"],
//   ["g", "f"],
// ];
// console.log(shortestPath(edges, "b", "g")); // -> -1
