// Patched on the Array Prototype
Array.prototype.selectionSort = function () {
  console.time('SelectionSort')
  var arr = this
  // loop through each element in our array
  for (let i = 0; i < arr.length; ++i) {
    let minValue = arr[i]
    let minIndex = i
    // find the minimum value in the remainder of the array
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < minValue) {
        minValue = arr[j]
        minIndex = j
      }
    }
    // swap values if not the same
    if (i !== minIndex) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  console.timeEnd('SelectionSort')
}

let arr = []
let max = 1000000
for (let i = 0; i < max; ++i) {
  arr.push(Math.round(Math.random() * 10))
}
console.log('sorting arr on length: ', max)
arr.selectionSort()
// console.log('sorted: ', arr)
