// Write a function, bfs(root, target), that takes in the root of a binary tree and target
// and a target value as arguments.

// The function should return a boolean indicating whether or not the tree
// contains the target value

//     a
//   b   c
// d   e   f

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Depth-first recursive version
const treeContainsValue = (t, value) => {
  if (!t) return false;
  // console.log(t.val);
  if (t.val === value) return true;
  return treeContainsValue(t.left, value) || treeContainsValue(t.right, value);
};

const breadthFirstSearch = (root, value) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    // console.log(curr.val);
    if (curr.val === value) return true;
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false;
};

console.log(breadthFirstSearch(a, "e")); // true
console.log(breadthFirstSearch(a, "z")); // false
console.log(breadthFirstSearch(a, "c")); // true
console.log(breadthFirstSearch(a, "b")); // true
console.log(breadthFirstSearch(a, "h")); // false
console.log(breadthFirstSearch(a, "a")); // true
