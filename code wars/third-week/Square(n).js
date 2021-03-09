/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
return numbers.reduce((accumulator, currentValue) => Math.pow(currentValue, 2) + accumulator, 0)
}

Alternative solution

function squareSum(numbers){
  return numbers == "" ?  0 : numbers.map(num => Math.pow(num, 2)).reduce((a,c) => a + c)
}