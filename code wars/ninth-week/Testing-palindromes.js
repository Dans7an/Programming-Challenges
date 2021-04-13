/*
A palindrome is word which reads the same backwards as it does forwards.

For example, pip is a palindrome, as pip backwards is still pip. kip, however, is not, for kip backwards is pik, not kip.

Write a function, palindrome, which returns true if the passed string is a palindrome, regardless of capitalisation, and false otherwise.

*/

palindrome = function(str) {
  let palindrome = str.split("").reverse().join("")
  if(str.toLowerCase() == palindrome.toLowerCase()){
    return true
  } else {
    return false
  }
}