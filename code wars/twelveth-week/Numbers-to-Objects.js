/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

*/

function numObj(s){
  return s.map(el => { return { [el] : String.fromCharCode(el)} })
}

function numObj(s){
  let arr = []
  for(let i of s){
    let obj = new Object()
    obj[i] = String.fromCharCode(i)
    arr.push(obj)
  }
  return arr
}