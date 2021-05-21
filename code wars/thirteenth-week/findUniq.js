/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

*/

function findUniq(arr) {
  let prevNumber = arr[0]
  if(prevNumber != arr[1] && prevNumber != arr[2]){
    return prevNumber
  }
    
  for(let i = 1; i < arr.length; i++){
    if(prevNumber != arr[i]){
      return arr[i]
    }
    prevNumber = arr[i]
  }
}