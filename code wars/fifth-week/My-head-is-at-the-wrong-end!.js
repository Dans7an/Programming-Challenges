/* You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
*/

function fixTheMeerkat(arr) {
 //your code here 
  arr.unshift(arr[2],arr[1])
  arr.pop()
  arr.pop()
  return arr
}

0ForkCompare with your solutionLink
Dans7an
function fixTheMeerkat(arr) {
 //your code here 
    arr.push(arr[1])
  arr.push(arr[0])
  arr.shift()
  arr.shift()
  return arr
}

0ForkCompare with your solutionLink
Ben_Poling, Dans7an
function fixTheMeerkat(arr) {
  let array = [];
  array.push(arr[2])
  array.push(arr[1])
  array.push(arr[0]);
  return array;
}