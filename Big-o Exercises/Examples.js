// function beginnerExample(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log("i",i);
//     // console.log("arr[i]",arr[i]);
//     console.log(arr[i]);
//   }
// }

// beginnerExample([1,2,3,4,5])

// // Time Complex - o(n)

//------------------------

// function beginnerExample(arr) {
//     console.log(arr[0]);

// }

// beginnerExample([1,2,3,4,5])

// Time Complex - o(1)

//------------------------

// function beginnerExample(arr) {
//   console.log(arr[0]);
//   console.log(arr[2]);

// }

// beginnerExample([1,2,3,4,5])

// Time Complex - o(1)

//------------------------

// function intermediateExample(arr) {

//   for(let i=0; i< arr.length; i++){
//     for(let h=0; h< arr.length; i++){
//      console.log(arr[i],arr[j])
//     }

//   }

// }

// intermediateExample([1,2,3,4,5])

// // Time Complex - o(n2)

//------------------------

// function intermediateExample2(arr) {

//   let mid = Math.floor(arr.length / 2)
//   console.log(arr[mid])

// }

// intermediateExample2([1,2,3,4,5])

// Time Complex - o(1)

//------------------------

// function intermediateExample3(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }

// intermediateExample3([1, 2, 3, 4, 5]);

// Time Complex - o(n)

//------------------------

// function intermediateExample3(n) {
//     for(var i = 0; i <= Math.min(n,10); i++){
//       console.log(i)
//     }
// }

// intermediateExample3(20);

// Time Complex - o(1)


//------------------------

// function intermediateExample3(n) {
//   for(var i = 0; i <= Math.max(n,10); i++){
//     console.log(i)
//   }
// }

// intermediateExample3(22);

// Time Complex - o(n)

//------------------------

// function intermediateExample3(n) {
//    let i = 1
//    while (i < n) {
//     console.log(i)
//      i *= 2;

//    }

// }

// intermediateExample3(4);

// Time Complex - o(n)

// ------------------- Object Methods


// const myObj = {
//   name:"John",
//   age: 20,
//   city: "Bilaspur"

// }

// console.log(Object.keys(myObj))              // Depends on Keys O(n)
// console.log(Object.values(myObj))            //  Depends on Keys O(n)
// console.log(Object.entries(myObj))           //  Depends on Keys O(n)
// console.log(Object.hasOwnProperty('name'))   //  Constant  - O(1)

//-------------------- Array Methods

// arr.push()      // (push in last) -  o(1)
// arr.pop()       // (remove from last)-  o(1)
// arr.unshift()   // (add in front)  - o(n)
// arr.shift()     // (remove first ele) - o(n)

//------------ Class


// class Animal {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   getAnimal (){
//     return this.name
//   }
//   setAnimal(name){
//     this.name =  name
//   }
// }

// const myAnimal = new Animal("Leo",58)
// // const myAnimal2 = new Animal("Leo",58)

// // console.log(myAnimal)
// console.log(myAnimal.setAnimal("Baba"))
// console.log(myAnimal.getAnimal())


// ----------------- Pointer Example


// const obj = {
//     key: 'Value'
// }
// const obj2 = obj


// console.log(obj2.key)
// console.log(obj.key = "new")


// ---------------- Linked List 

 
//// ---  (no good aproach to write node)
// class  Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// var first =  new Node("1")
// first.next = new Node("2")
// first.next.next = new Node("3")




// class SinglyLinkedList {
//   constructor(val){
//     const newNode = new Node(val)
//     this.head = newNode
//     this.tail = this.head
//     this.length = 1
//   }
// }

// var first =  new Node("1")
// first.next = new Node("2")
// first.next.next = new Node("3")
//

