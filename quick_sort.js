Array.prototype.quickSort = function () {
  console.time('QuickSort')

  const arr = this
  // console.log('unsorted array', arr)
  // TODO. ideally you would randomise the array to ensure it is not already sorted

  function sort (min, max, side) {
    // console.log(side, 'section')
    // min and max are the start and end points of our array
    if (min >= max) {
      // if they overlap then we have reached the bottom
      // console.log('end reached')
      return
    }
    // else step through this side
    let p = min
    let i = min + 1
    let j = max

    // console.log('p = ' + p, 'i = ' + i, 'j = ' + j, arr)

    while (i <= j) {
      // console.log(side, 'p = ' + p + ' value = ' + arr[p], 'i = ' + i + ' value = ' + arr[i], '-- j = ' + j + ' value = ' + arr[j])
      let leftMoved = false
      let rightMoved = false
      // move i to the right if we can
      if (arr[i] <= arr[p]) {
        i++
        leftMoved = true
      }
      // move j to the left if we can
      if (arr[j] >= arr[p]) {
        j--
        rightMoved = true
      }
      // if neither have moved then it is time to swap them
      if (!leftMoved && !rightMoved) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
        // console.log('swapped i & j', arr)
      }
    }
    // when the loop finishes, then we have finished, last thing to do is move the pivot to the edge of the left

    let temp = arr[p]
    arr[p] = arr[j]
    arr[j] = temp
    // console.log('swapped p & j', arr)

    // now we recurse left and right unless
    sort(min, j - 1, 'left')
    sort(j + 1, max, 'right')
  }

  // start the sort on the full array
  sort(0, arr.length - 1, 'full')

  // console.log('sorted array: ', arr)
  console.timeEnd('QuickSort')
}

let arr = []
let max = 100000
for (let i = 0; i < max; ++i) {
  // if the array contains a lot of duplicates, then quick sort is very slow
  arr.push(Math.round(Math.random() * 100000))
}
console.log('sorting array of length: ', max)
arr.quickSort()
