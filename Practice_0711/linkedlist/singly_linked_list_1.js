// piece of data - val or value
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null; //in the beginning, there is nothing come after it
    }
}

// uncomment second
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//
//     }
// }

  // uncomment first
  // let first = new Node("Hi")
  // first.next = new Node("there")
  // first.next.next = new Node("how")
  // first.next.next.next = new Node("are")
  // first.next.next.next.next = new Node("you")

  // uncomment third
// let list = new SinglyLinkedList()
// list.push("HELLO") // pushing is inserting at end
// list.push("GOODBYE")
