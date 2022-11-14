//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(`Stack: ${arr}`);
  }
}

const isOpeningBracket = (c) => c === "(" || c === "[" || c === "{";

const isClosingBracket = (c) => c === ")" || c === "]" || c === "}";

const areMatchingBrackets = (c1, c2) => {
  return (
    (c1 === "(" && c2 === ")") ||
    (c1 === "[" && c2 === "]") ||
    (c1 === "{" && c2 === "}")
  );
};

const isParenthesesValid = (string) => {
  const stack = new SinglyLinkedList();
  /*   console.log("list initialised");
  stack.print();
  stack.unshift("a");
  stack.print(); */

  while (string.length > 0) {
    // is we encounter an opening bracket, push it to a stack
    if (isOpeningBracket(string.charAt(0))) {
      stack.unshift(string.charAt(0));
    } else {
      if (!stack.length) return false;
      const topOfStack = stack.shift();
      // if we encounter a closing bracket,
      if (!areMatchingBrackets(topOfStack.val, string.charAt(0))) {
        // and either stack is empty or the bracket is not matching the one on top,
        // the brackets are invalid
        return false;
      }
    }
    string = string.substring(1);
  }
  if (stack.length) return false;
  return true;
};

const stack = new SinglyLinkedList();

console.log(isParenthesesValid("()"));
console.log(isParenthesesValid("(){}[]")); // true
console.log(isParenthesesValid("(")); // false (closing parentheses is missing)
console.log(isParenthesesValid("([{}])")); // true
console.log(isParenthesesValid("[{]}")); // false (brackets are not closed in the right order)
console.log(isParenthesesValid("([{)}]")); // false (closing is out of order)
console.log(isParenthesesValid("([{}])([{)}]"));
console.log(isParenthesesValid("(([{}])(){}[](()))"));
