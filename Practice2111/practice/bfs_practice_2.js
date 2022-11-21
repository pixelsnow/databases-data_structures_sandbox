// Write a function, sumTree(root), that takes in the root of a binary
// as an arguments

// The function should return total sum of all values in the trees.
// You can assume that the tree only contains number values

//     3
//   2    7
// 4   -2   5

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const recursiveSum = (t) => {
  if (!t) return 0;
  // console.log(t.val);
  return t.val + recursiveSum(t.left) + recursiveSum(t.right);
};

const breadthFirstSum = (root) => {
  res = 0;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    // console.log(curr.val);
    res += curr.val;
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return res;
};

console.log(recursiveSum(a));
console.log(breadthFirstSum(a));
