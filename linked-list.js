//A linked list  is a data structure where you have a node with values and a pointer to node with similar properties. Each node is chained or 'linked' together by pointers

//constructor function for a linked list
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  //create a new node with a value and next/prev pointers
  let newNode = new Node(value, this.head, null);

  //check if a head node already exists
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  //regardless of whether a head node exists or not, set the newNode to be the head node.
  this.head = newNode;
}

//test it out. The head should be 30, tail should be 10, and 20 should be the next prop of the head and the prev prop of the tail. (think FIFO)
let list = new LinkedList();
list.addToHead(10);
list.addToHead(20);
list.addToHead(30);
console.log(list);

// add a node to the tail
LinkedList.prototype.addToTail = function(value) {
  //create new node to add to the tail of the list. Set its next prop to null (no other nodes after tail exist), and set its prev to the current tail.
  let newNode = new Node(value, null, this.tail);

  //check if a tail node exists
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  //regardless of whether there is an existing tail node or not, set the new node to tail
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  }

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while(currentValue) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = this.head.next;
  }
  return null;
}

//return all indices that match search value in an array
LinkedList.prototype.indexOf = function(value) {
  let currentNode = this.head;
  let arrayOfIndexes = [];
  let index = 0;
  while (currentNode) {
    if (currentNode.value === value) {
      arrayOfIndexes.push(index);
    }
      counter++;
      currentNode = currentNode.next;
  }
  return arrayOfIndexes;
}

LinkedList.prototype.get = function(index) {
  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter > index) return null;
    if (counter === index) return currentNode.value;
    counter++;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.middle = function() {
  let length = 0;
  let currentNode = this.head;
  while (currentNode) {
    counter++;
    currentNode = currentNode.next;
  }

}



























// function LinkedList() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
// }

// function Node(value, next, prev) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
// }

// // var LL = new LinkedList();
// // var userList = new LinkedList();
// // var todoList = new LinkedList();

// // var node1 = new Node(1100, 'node2', null); // should be objects instead of string
// // console.log(node1);

// LinkedList.prototype.addToHead = function(value) {
//     var newNode = new Node(value, this.head, null);
//     //already nodes present in LinkedList
//     if (this.head) {
//       this.head.prev = newNode;
//     } else  {
//       this.tail = newNode;
//     }
//     //regardless if there is already nodes, set newNode to head.
//     this.head = newNode;
// }

// LinkedList.prototype.addToTail = function(value) {
//     var newNode = new Node(value, null, this.tail);
//     if (this.tail) this.tail.next = newNode;
//     else this.head = newNode;
//     this.tail = newNode;
// }

// // var ll = new LinkedList();
// // ll.addToHead(100);
// // ll.addToHead(200);
// // ll.addToHead(300);
// // console.log(ll)

// // var myLL = new LinkedList();
// // myLL.addToTail(10);
// // myLL.addToTail(20);
// // myLL.addToTail(30);
// // myLL.addToHead(100);

// // console.log(myLL.tail.prev.prev.prev);

// //return removed head
// LinkedList.prototype.removeHead = function() {
//     if (!this.head) return null;
//     var val = this.head.value;
//     this.head = this.head.next;
//     if (this.head) this.head.prev = null;
//     else this.tail = null;
//     return val;
// }
// LinkedList.prototype.removeTail = function() {
//     if (!this.tail) return null;
//     var val = this.tail.value;
//     this.tail = this.tail.prev;
//     if (this.tail) this.tail.next = null;
//     else this.head = null;
//     return val;
// }
// // var ll = new LinkedList();
// // ll.addToHead(1000);
// // ll.addToHead(2000);
// // ll.addToTail(3000);
// // // ll.removeTail();
// // console.log(ll.removeTail());

// LinkedList.prototype.search = function(searchValue) {
//     var currentNode  = this.head;
//     while (currentNode) {
//         if (currentNode.value === searchValue) return currentNode.value;
//         currentNode = currentNode.next;
//     }
//     return null;
// }

// LinkedList.prototype.indexOf = function(searchValue) {
//     var arrayOfIndexes = [];
//     var index = 0;
//     var currentNode = this.head;
//     while (currentNode) {
//         if (currentNode.value === searchValue) {
//             arrayOfIndexes.push(index);
//         }
//         currentNode = currentNode.next;
//         index++;
//     }
//     return arrayOfIndexes;
// };


// LinkedList.prototype.get = function(index) {
//   var counter = 0;
//   var currentNode = this.head;
//   while (currentNode) {
//     if (counter > index) return null;
//     if (counter === index) return currentNode.value;
//     else currentNode = currentNode.next;
//     counter++;
//   }
// }

// LinkedList.prototype.middle = function() {
//   var middle = this.length / 2;
//   var counter = 0;
//   var currentNode = this.head;
//   while (currentNode) {
//     if (counter === middle) {
//       return currentNode.value;
//     }
//     counter++;
//     currentNode = currentNode.next;
//   }
// };

// var ll = new LinkedList();
// ll.addToHead(1);
// ll.addToHead(5);
// ll.addToHead(3);
// ll.addToHead(2);
// // ll.addToHead(8);
// // ll.addToHead(7);
// // ll.addToHead(5);

// console.log(ll.get(3));

