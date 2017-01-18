// Patched on the Array Prototype
Array.prototype.insertionSort = function () {
  console.time('InsertionSort')
  var arr = this
  // loop through each element in our array
  for (let i = 1; i < arr.length; ++i) {
    let j = i
    // loop backwards and shuffle the content of the array, rather than creating a new
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
      --j
    }
  }
  console.timeEnd('InsertionSort')
}

let arr = []
let max = 10000
for (let i = 0; i < max; ++i) {
  arr.push(Math.round(Math.random() * 10))
}
console.log('sorting array on length: ', max)
// console.log('unsorted array: ', arr)
arr.insertionSort()
// console.log('sorted array: ', arr)
// console.log('restorting array...')
arr.insertionSort()
