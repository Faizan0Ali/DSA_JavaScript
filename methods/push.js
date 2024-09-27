class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    const NewNode = new Node(val);
    this.head = NewNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(val) {
    const newNode = new Node(val);

    // If There is no node then create node and head & tail both
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // Else Push it into the last node
    else {
      this.tail.next = newNode; // after the tail next is
      this.tail = newNode;
      this.length++;
      return this
    }
  }
}

let list = new SinglyLinkedList(1)
list.push(25)
list.push(30)

console.log(list)





























