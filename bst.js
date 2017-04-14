function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
};

//return true or false if it contains value
BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthFirstTraversal = function(iterativeFunc, order) {
  if (order === 'pre-order') iterativeFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iterativeFunc, order);
  if (order === 'in-order') iterativeFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iterativeFunc, order);
  if (order === 'post-order') iterativeFunc(this.value);
}

BST.prototype.breadthFirstTraversal = function(iterativeFunc) {
  var queue = [this];
  //while queue is not empty
  while (queue.length) {
    var treeNode = queue.shift();
    iterativeFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

function logValue(value) {
  console.log(value);
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function logValue(value) {
  console.log(value);
}
// bst.depthFirstTraversal(logValue, 'post-order');

function logNode(node) {
  console.log(node.value);
}

bst.breadthFirstTraversal(logNode);
