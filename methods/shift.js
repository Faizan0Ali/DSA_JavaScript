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
        return this;
      }
    }
    shift(){
  
     if(!this.head) return undefined

     let temp = this.head
     this.head = this.head.next
     this.length --
     if(this.length == 0){
        this.head = null
        this.tail = null
     }
     temp.next = null
     return temp

    }

  }
  
  let list = new SinglyLinkedList(1);
  list.push(2);
  list.push(3);
  list.shift();
  
  console.log("list", list);
  