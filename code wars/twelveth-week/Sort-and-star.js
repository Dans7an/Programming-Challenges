/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

function twoSort(s) {
  return s.sort()[0].split('').join('***')
}
2 days agoRefactor

function twoSort(s) {
  let str = ''
  s = s.sort()[0]
  for(let i of s){
    str +=  `***${i}`
  }
  return str.slice(3)
}