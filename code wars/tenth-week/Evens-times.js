/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

*/

function evenLast(numbers) {
  // Good luck 
  if(numbers == []) return 0
  let result = 0
  numbers.forEach((num, i) => {
    if(i % 2 == 0) result += num * numbers[numbers.length - 1]
  })
  return result
}