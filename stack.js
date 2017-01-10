// STACK - FILO
// Simple Array for internal representation
function Stack () {
  this.arr = []
}

// Push: adds a new item
Stack.prototype.push = function (newItem) {
  return this.arr.push(newItem)
}

// Pop: returns the last item
Stack.prototype.pop = function () {
  return this.arr.pop()
}

// Peak: shows the last item without popping it
Stack.prototype.peak = function () {
  return this.arr[this.arr.length - 1]
}

// Tests
var openTags = new Stack()
console.log('push html')
console.log('push body')
console.log('push div')
openTags.push('html')
openTags.push('body')
openTags.push('div')
console.log('peaking: ' + openTags.peak())
do {
  var tag = openTags.pop()
  console.log('pop ' + tag)
} while (tag)
