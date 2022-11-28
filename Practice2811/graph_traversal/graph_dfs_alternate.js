
const depthFristPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
};

// recursive
// const depthFristPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFristPrint(graph, neighbor);
//   }
// };



const graph = {
  a: ['c', 'b'],  // b, c if recursive
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

depthFristPrint(graph, 'a') // abdfce

//
