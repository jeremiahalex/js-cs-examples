// DEQUE (deck) - Double Ended Queue
// Simple Deque implentation using Array for internal representation
function Deque () {
  this.arr = []
}

// Push: adds a new item
Deque.prototype.add = function (newItem) {
  return this.arr.push(newItem)
}

// Pop: returns the last item
Deque.prototype.pop = function () {
  return this.arr.pop()
}

// Dequeue: returns the first item
Deque.prototype.dequeue = function () {
  return this.arr.shift()
}

// PeakFront: shows the first item without Dequeuing it
Deque.prototype.peakFront = function () {
  return this.arr[0]
}

// PeakBack: shows the last item without Popping it
Deque.prototype.peakBack = function () {
  return this.arr[this.arr.length - 1]
}

// Tests
var deque = new Deque()
console.log('add 1')
deque.add(1)
console.log('add 2')
deque.add(2)
console.log('add 3')
deque.add(3)
console.log('add 4')
deque.add(4)
console.log('Peak Front: ' + deque.peakFront())
console.log('Peak Back: ' + deque.peakBack())
console.log('Pop: ' + deque.pop())
console.log('Deque: ' + deque.dequeue())
