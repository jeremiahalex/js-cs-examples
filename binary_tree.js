// BinaryTree
// Simple BinaryTree implentation
function BinaryTreeNode (value) {
  this.value = value
  this.left = null
  this.right = null
}
BinaryTreeNode.prototype.add = function (value) {
  // force the value to be unique
  if (value === this.value) return

  // it is easier less(left) or more(right) than our value
  if (value < this.value) {
    // if left is empty then save it, else push it to the child
    if (this.left === null) this.left = new BinaryTreeNode(value)
    else this.left.add(value)
  } else {
    if (this.right === null) this.right = new BinaryTreeNode(value)
    else this.right.add(value)
  }
}

BinaryTreeNode.prototype.contains = function (value) {
  // check the node itself
  if (this.value === value) return true
  // check it's child, left(if value is less) or right(if value is greater)
  if (value < this.value && this.left) return this.left.contains(value)
  else if (value > this.value && this.right) return this.right.contains(value)
  else return false
}
// get all the items out of the tree in sequential order
BinaryTreeNode.prototype.retrieve = function (results) {
  // to populate the results we start from the left, then self, then right
  if (this.left) this.left.retrieve(results)
  // self
  results.push(this.value)
  // right
  if (this.right) this.right.retrieve(results)
}

function BinaryTree () {
  this.root = null
}
// Add: store some new data in the Tree
BinaryTree.prototype.add = function (value) {
  if (!Number.isInteger(value)) {
    return
  }
  // if we don't have a root then we simply insert this at the beginning
  if (this.root === null) {
    this.root = new BinaryTreeNode(value)
    return
  }

  // else push down the tree, easiest done using recursion
  this.root.add(value)
}
BinaryTree.prototype.contains = function (value) {
  if (!Number.isInteger(value) || !this.root) {
    return false
  }
  // check down the tree, easiest done using recursion
  return this.root.contains(value)
}
// get all the items out of the tree in sequential order
BinaryTree.prototype.retrieve = function () {
  var results = []
  if (!this.root) return results
  // check down the tree, easiest done using recursion
  this.root.retrieve(results)
  return results
}

var bt = new BinaryTree()
bt.add(5)
bt.add(3)
bt.add(7)
bt.add(9)
bt.add(6)
bt.add(2)
bt.add(1)
bt.add(4)
bt.add(10)

console.log(JSON.stringify(bt.root))
console.log('contains 11:' + bt.contains(11))
console.log('contains 10:' + bt.contains(10))
console.log('results:' + bt.retrieve())
