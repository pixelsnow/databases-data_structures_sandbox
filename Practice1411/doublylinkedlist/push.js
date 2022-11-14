class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 99 -> 100
      newNode.prev = this.tail; // 99 <- 100
      this.tail = newNode;
    }
    this.length++;
    return this; // return the entire list
  }
}

list = new DoublyLinkedList();
//list.push(99)
//list.push(100)
//list.push("LAST ITEM")
//list
