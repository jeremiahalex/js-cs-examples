"use strict"
// Binary Search

// implemented using loops
function binarySearch (arr, item) {
  if (arr.length === 0) return false
  let min = 0
  let max = arr.length - 1
  while (min < max) {
    let median = min + Math.floor((max - min + 1) / 2)
    if (arr[median] === item) {
      console.log('min', min, 'max', max, 'median', median, 'value@p', arr[median], '-- item found')
      return true
    } else if (item < arr[median]) {
      console.log('min', min, 'max', max, 'median', median, 'value@p', arr[median], '-- value is less')
      max = median - 1
    } else {
      console.log('min', min, 'max', max, 'median', median, 'value@p', arr[median], '-- value is greater')
      min = median + 1
    }
  }
  return false
}

// implemented using recursion
function binarySearchRecursive (arr, item, min = 0, max = arr.length - 1) {
  if (min > max) return false

  let median = min + Math.floor((max - min + 1) * 0.5)

  if (arr[median] === item) return true
  if (item < arr[median]) return binarySearchRecursive(arr, item, min, median - 1)

  return binarySearchRecursive(arr, item, median + 1, max)
}

var sortedArr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('>>Contains 1?')
console.log('>>result = ' + binarySearchRecursive(sortedArr, 1))
console.log('>>Contains 8?')
console.log('>>result = ' + binarySearchRecursive(sortedArr, 8))
console.log('>>Contains 0?')
console.log('>>result = ' + binarySearchRecursive(sortedArr, 0))
console.log('>>Contains 9?')
console.log('>>result = ' + binarySearchRecursive(sortedArr, 9))
console.log('>>Contains 4?')
console.log('>>result = ' + binarySearchRecursive(sortedArr, 4))
