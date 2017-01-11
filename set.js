// SET
// Simple Integer Set implentation using an Object for internal storage
function IntSet () {
  this.hash = {}
}

// Add: adds a new item to the set
IntSet.prototype.add = function (value) {
  // For now we only work with integers
  if (!Number.isInteger(value)) {
    return
  }
  this.hash[value] = true
}

// Contains: tests whether the set has a certain value
IntSet.prototype.contains = function (value) {
  if (!Number.isInteger(value)) {
    return false
  }
  return !!this.hash[value]
}

// Remove: remove an item from the set
IntSet.prototype.remove = function (value) {
  if (!Number.isInteger(value)) {
    return false
  }
  this.hash[value] = false
}

// List: returns all of the items in the set as an array
IntSet.prototype.list = function () {
  var results = []
  for (var key in this.hash) {
    if (this.hash[key]) {
      results.push(parseInt(key, 10))
    }
  }
  return results
}

// union: returns a new set containing all elements of the passed in set
IntSet.prototype.union = function (set2) {
  if (!(set2 instanceof IntSet)) {
    return null
  }
  // to combine the two sets, we combine the objects used internally an use that to create a new set
  var newSet = new IntSet()
  var newHash = {}
  Object.assign(newHash, this.hash)
  Object.assign(newHash, set2.hash)
  newSet.hash = newHash
  return newSet
}

// intersect: returns a new set containing all elements shared by both
IntSet.prototype.intersect = function (set2) {
  if (!(set2 instanceof IntSet)) {
    return null
  }
  // to intersect we loop through all objects in this set and check where the keys are also in set2
  var newSet = new IntSet()
  for (var key in this.hash) {
    if (this.hash[key] && set2.hash[key]) {
      newSet.add(parseInt(key, 10))
    }
  }
  return newSet
}
// TODO.
// difference: s1 - s2
// equals: are two sets equal
// subset: A set A is said to be a subset of B if and only if every element of A is also an element of B.

// Tests
var setA = new IntSet()
setA.add(1)
setA.add(2)
setA.add(5)
setA.add(5)
setA.add('html')
setA.add({})
console.log('set A ' + setA.list())
console.log('contains 1 ' + setA.contains(1))
console.log('contains 2 ' + setA.contains(2))
console.log('contains 4 ' + setA.contains(4))

var setB = new IntSet()
setB.add(3)
setB.add(6)
setB.add(5)
console.log('set B ' + setB.list())

var unionSet = setA.union(setB)
console.log('Union Set ' + unionSet.list())

var intersectSet = setA.intersect(setB)
console.log('Intersect Set ' + intersectSet.list())

console.log(setA.intersect(setB)
