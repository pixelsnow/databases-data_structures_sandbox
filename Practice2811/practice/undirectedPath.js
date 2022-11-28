/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph
and two nodes (nodeA, nodeB). The function should return a boolean indicating
whether or not there exists a path between nodeA and nodeB.
*/

const undirectedPath = (edges, nodeA, nodeB) => {

};





const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
console.log(undirectedPath(edges, "j", "m")); // -> true



// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];
// console.log(undirectedPath(edges, "k", "o")); // -> false
