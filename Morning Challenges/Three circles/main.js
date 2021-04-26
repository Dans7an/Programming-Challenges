console.log('hello World');

//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
var angle = 0;
let boxes = document.querySelector('section');

// boxes.forEach(box => {
//
// });
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
document.querySelector('.box1').addEventListener('click', function(event) {
    angle += 45;
    counter1 ++;
    console.log(counter1);
    document.querySelector('.box1').style.transform = 'rotate(' + angle + 'deg)';
    document.querySelector('.box1').style.borderRadius = '55%'
    document.querySelector('.box1').style.marginLeft = '50rem'
    if(counter1 % 3 == 0){
      document.querySelector('.box2').style.backgroundColor = 'blue';
      document.querySelector('.box3').style.backgroundColor = 'green';
    }
});
document.querySelector('.box2').addEventListener('click', function() {
    angle += 45;
    counter2 ++;
    document.querySelector('.box2').style.transform = 'rotate(' + angle + 'deg)';
    document.querySelector('.box2').style.borderRadius = '55%'
    document.querySelector('.box2').style.marginLeft = '50rem'
    if(counter2 % 3 == 0){
      document.querySelector('.box1').style.backgroundColor = 'green';
      document.querySelector('.box2').style.backgroundColor = 'red';
    }
});
document.querySelector('.box3').addEventListener('click', function() {
    angle += 45;
    counter3 ++;
    document.querySelector('.box3').style.transform = 'rotate(' + angle + 'deg)';
    document.querySelector('.box3').style.borderRadius = '55%'
    document.querySelector('.box3').style.marginLeft = '50rem'
    if(counter3 % 3== 0){
      document.querySelector('.box1').style.backgroundColor = 'blue';
      document.querySelector('.box3').style.backgroundColor = 'red';
    }
});
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
