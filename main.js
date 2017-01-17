var x = 1
function doX () {
  var x = 2
  console.log('doing x')
  return function doY () {
    var y = 3
    console.log('doing y')
  }
}


doX()()
