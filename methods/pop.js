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


  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

let list = new SinglyLinkedList(1);
list.push(2);
list.push(3);
console.log("First Push list", list);

console.log("pop", list.pop());

console.log("After Pop list", list);
