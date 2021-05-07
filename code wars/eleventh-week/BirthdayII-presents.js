Your colleagues have been good enough(?) to buy you a birthday gift. Even though it is your birthday and not theirs, they have decided to play pass the parcel with it so that everyone has an even chance of winning. There are multiple presents, and you will receive one, but not all are nice... One even explodes and covers you in soil... strange office. To make up for this one present is a dog! Happy days! (do not buy dogs as presents, and if you do, never wrap them).

Depending on the number of passes in the game (y), and the present you unwrap (x), return as follows:

x == goodpresent --> return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)

x == crap || x == empty --> return string sorted alphabetically

x == bang --> return string turned to char codes, each code reduced by number of passes and summed to a single figure

x == badpresent --> return 'Take this back!'

x == dog, return 'pass out from excitement y times' (where y is the value given for y).



/*
PREP
  goodpresent 
  have an empty arr, loop through string while converting each letter to charCode
  push to new array while adding y to it, convert the codes back to letters
  and the array back to a string
  
  empty
  return the string sorted using sort()
  
  bang
  convert string to charcode, each code subtracted by y and sumed to a single figure
  using reduce
  
  badpresent
  return Take this back
  
  dog
  return pass out from excitement y times hence use .repeat()
  
*/

function present(x, y){
  let newChar = ''
 let arr = []
  if(x == 'goodpresent'){
    for(let i = 0; i < x.length; i++){
      newChar = x.charCodeAt(i) + y
      newChar = String.fromCharCode(newChar)
     arr.push(newChar)
    }
    return arr.join('')
  } else if(x == 'crap' || x == 'empty'){
    return x.split('').sort((a,b) => a.localeCompare(b)).join('')
  } else if(x == 'bang'){
    for(let i = 0; i < x.length; i++){
      newChar = x.charCodeAt(i) - y
      arr.push(newChar) 
}
    return arr.reduce((a,c) => a + c, 0)
  } else if(x == 'badpresent'){
    return 'Take this back!' 
  } else if(x == 'dog'){
    return `pass out from excitement ${y} times`
  }
}