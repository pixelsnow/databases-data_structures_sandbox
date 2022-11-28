/*
Write a function,minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land.
The function should return the size of the smallest island. An island is a vertically or horizontally
connected region of land.You may assume that the grid contains at least one island.

*/



// const grid = [
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["W", "W", "L", "L", "W"],
//   ["L", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "W"],
// ];
// console.log(minimumIsland(grid)); // -> 2

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(minimumIsland(grid)); // -> 1
