/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

Example
For cell = "a1", the output should be 2.

For cell = "c2", the output should be 6.

Input/Output
[input] string cell

String consisting of letter+number - coordinates of the knight on an 8 × 8 chessboard in chess notation.

[output] an integer

*/


function chessKnight(cell) {
  //coding and coding..
  let row = cell.charAt(1)
  let column = cell.charAt(0)
  if(row == 1 || row == 8){
    if (column == 'a' || column == 'h')  return 2
    else if (column == 'b' || column == 'g')  return 3
    else return 4
  } else if(row == 2 || row == 7){
    if (column == 'a' || column == 'h')  return 3
    else if (column == 'b' || column == 'g')  return 4
    else return 6
  } else if(row == 3 || row == 6){
    if (column == 'a' || column == 'h')  return 4
    else if (column == 'b' || column == 'g')  return 6
    else return 8
  } else if(column == 'a' || column == 'h'){
    return 4
} else if(column == 'b' || column == 'g'){
  return 6
}
    
  return 8