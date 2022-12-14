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
    }
    newNode.next = this.head;
    this.head = newNode;
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
    console.log(arr);
  }
}

const hasSameData = (l1, l2) => {
  let s1 = "";
  let tmp = l1.head;
  while (tmp) {
    s1 += tmp.val;
    tmp = tmp.next;
  }
  let s2 = "";
  tmp = l2.head;
  while (tmp) {
    s2 += tmp.val;
    tmp = tmp.next;
  }
  console.log(s1, s2);
  return s1 === s2;
};

const mergeTwoLists = (l1, l2) => {
  tmp1 = l1.head;
  tmp2 = l2.head;
  res = new SinglyLinkedList();
  while (tmp1 && tmp2) {
    if (tmp1.val < tmp2.val) {
      res.push(tmp1.val);
      tmp1 = tmp1.next;
    } else {
      res.push(tmp2.val);
      tmp2 = tmp2.next;
    }
  }
  while (tmp1) {
    res.push(tmp1.val);
    tmp1 = tmp1.next;
  }
  while (tmp2) {
    res.push(tmp2.val);
    tmp2 = tmp2.next;
  }
  return res;
};

let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();

list1.push(2);
list1.push(4);
list1.push(6);
list2.push(1);
list2.push(3);
list2.push(7);

mergeTwoLists(list1, list2).print();
/*
Given two sorted linked lists merge them while keeping the asc order.

@examples
mergeTwoLists([2, 4, 6], [1, 3, 7]); // => [1, 2, 3, 4, 6, 7]
mergeTwoLists([2, 4, 6], []); // => [2, 4, 6]
mergeTwoLists([], [1, 3]) // => [1, 3]

*/
