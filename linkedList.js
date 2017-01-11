// LinkedList
// Simple SingleLinkedList implentation
function LinkedListNode (data) {
  this.data = data
  this.next = null
}

function SingleLinkedList () {
  this.head = null
}
// Add: store some new data in the LinkedList
SingleLinkedList.prototype.add = function (data) {
  // if we don't have a head then we simply insert this at the beginning
  if (this.head === null) {
    this.head = new LinkedListNode(data)
    return
  }

  // else we look for the first empty next pointer and add it there
  let current = this.head
  while (current.next != null) {
    current = current.next
  }
  current.next = new LinkedListNode(data)
}

// Add: store some new data in the LinkedList
SingleLinkedList.prototype.itemAt = function (index) {
  let current = this.head
  // move along the chain [index] places but return null if chain is too short
  for (let i = 0; i < index; ++i) {
    if (current === null) return null
    current = current.next
  }
  // if node is null return that else return the data
  if (current === null) return null
  return current.data
}

// Remove: remove the node at a specific position - implementation is a bit lengthy but hopefully clear
SingleLinkedList.prototype.remove = function (index) {
  // if no list then quit
  if (!this.head) {
    return
  }
  // special condition if it is the first node to remove as we change the head pointer
  if (index === 0) {
    if (this.head && this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
    }
    return
  }
  let prev = this.head
  let current = this.head.next
  // move along the chain [index] places but return null if chain is too short
  for (let i = 1; i < index; ++i) {
    if (current === null) return null
    prev = current
    current = current.next
  }
  // if node is null return that else return the data
  if (current === null) return
  // else just change the next pointer the previous to the child of the current
  prev.next = current.next
}

// toArray: for testing lets convert it to an array
SingleLinkedList.prototype.toArray = function () {
  let arr = []
  let current = this.head
  while (current !== null) {
    arr.push(current.data)
    current = current.next
  }
  return arr
}

var ll = new SingleLinkedList()
console.log('ll out of bounds: ' + ll.itemAt(0))
ll.remove(0)
ll.add(1)
ll.add(2)
ll.add(3)
console.log('ll: ' + ll.toArray())
console.log('ll@0: ' + ll.itemAt(0))
console.log('ll@1: ' + ll.itemAt(1))
console.log('ll@2: ' + ll.itemAt(2))
console.log('ll@3: ' + ll.itemAt(3))
ll.remove(0)
console.log('ll: ' + ll.toArray())
ll.add(4)
ll.remove(1)
console.log('ll: ' + ll.toArray())
ll.remove(3)
console.log('ll: ' + ll.toArray())
