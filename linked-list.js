function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// var LL = new LinkedList();
// var userList = new LinkedList();
// var todoList = new LinkedList();

// var node1 = new Node(1100, 'node2', null); // should be objects instead of string
// console.log(node1);

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    //already nodes present in LinkedList
    if (this.head) {
      this.head.prev = newNode; 
    } else  {
      this.tail = newNode;
    }
    //regardless if there is already nodes, set newNode to head.
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

var ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log(ll)