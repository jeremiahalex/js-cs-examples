Array.prototype.mergeSort = function () {
  console.time('MergeSort')
  // define our merge function logic - in a proper implementation, this would not be contained in here
  function merge (a, b) {
    // console.log('merging', a, b)
    let mergedArray = []
    let len = a.length + b.length
    let aIndex = 0
    let bIndex = 0
    for (let i = 0; i < len; ++i) {
      // // console.log('a at index ' + aIndex + " is " + a[aIndex], '-- b at index ' + bIndex + " is " + b[bIndex])
      if (bIndex === b.length || b[bIndex] >= a[aIndex]) {
        // // console.log('>use a')
        mergedArray.push(a[aIndex++])
      } else {
        // // console.log('>use b')
        mergedArray.push(b[bIndex++])
      }
    }
    // console.log('mergedArray', mergedArray)
    return mergedArray
  }

  // // console.log('Testing Merge Function With: [1,3,5,7,9], [2,4,5,6,8,10,12]')
  // // console.log('Result: ", merge([1,3,5,7,9], [2,4,5,6,8,10,12]))
  // for debugging we pass in the side as a string that we can console log
  function sort (a, side) {
    // if the length is 1, then it is sorted
    if (a.length === 1) {
      // console.log(side, a, ' END')
      return a
    }

    let midPoint = Math.floor(a.length / 2)
    // console.log(side, a, 'mid', midPoint)
    let left = a.slice(0, midPoint)
    let right = a.slice(midPoint, a.length)

    return merge(sort(left, 'left'), sort(right, 'right'))
  }

  var merged = sort(this, 'full')
  // nothing fancy, we just copy over the internal array
  for (var i = 0; i < this.length; i++) {
    this[i] = merged[i]
  }
  // console.log('sorted array: ', arr)
  console.timeEnd('MergeSort')
}

let arr = []
let max = 100000
for (let i = 0; i < max; ++i) {
  arr.push(Math.round(Math.random() * 10))
}
console.log('sorting array of length: ', max)
arr.mergeSort()
