/* Your task is to make two functions, max and min (maximum and minimum in PHP and Python) 
that take a(n) array/vector of integers list as input and outputs, respectively, the largest
and lowest number in that array/vector.
*/

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}