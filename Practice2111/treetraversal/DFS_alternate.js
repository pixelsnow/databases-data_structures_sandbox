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

//     a
//   b   c
// d   e   f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Iteratively
const depthFirstPrint = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
};

// Recursively
// const depthFirstPrint = (root) => {
//    if (root === null) return  // if the tree is empty, base case
//    console.log(root.val);
//    depthFirstPrint(root.left)
//    depthFirstPrint(root.right)
// }
//
//
depthFirstPrint(a);
//abdecf

// pre-order traversal (print out parent before children i.e. self, left, right)

// const preOrder = (root) => {
//    if (root === null) return  // if the tree is empty, base case
//    console.log(root.val);
//    preOrder(root.left)
//    preOrder(root.right)
// }
// preOrder(a);

// post-order traversal (left, right, self)
// const postOrder = (root) => {
//    if (root === null) return  // if the tree is empty, base case
//    postOrder(root.left)
//    postOrder(root.right)
//    console.log(root.val);
//
// }
// postOrder(a);  //debfca

// in-order traversal (left, self, right)

// const inOrder = (root) => {
//    if (root === null) return  // if the tree is empty, base case
//    inOrder(root.left)
//    console.log(root.val);
//    inOrder(root.right)
//
// }
// inOrder(a);  //dbeacf
