// QUEUE - FIFO
// Simple Queue implentation using Array for internal representation
function Queue () {
  this.arr = []
}

// Enqueue: adds a new item
Queue.prototype.enqueue = function (newItem) {
  return this.arr.push(newItem)
}

// Dequeue: returns the first item
Queue.prototype.dequeue = function () {
  return this.arr.shift()
}

// Peak: shows the first item without Dequeuing it
Queue.prototype.peak = function () {
  return this.arr[0]
}

// Tests
var orders = new Queue()
console.log('enqueue jeremiah')
orders.enqueue('jeremiah')
console.log('enqueue nick')
orders.enqueue('nick')
console.log('enqueue terance')
orders.enqueue('terance')
console.log('peaking: ' + orders.peak())
do {
  var order = orders.dequeue()
  console.log('dequeue ' + order)
} while (order)
