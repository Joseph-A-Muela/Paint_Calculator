var width = prompt('What is the width of the room in feet?');
var length = prompt('What is the length of the romm in feet?');
var answer = parseFloat(length*width);
var area = Math.ceil(width * length / 350);

console.log('You have '+answer+' square feet to paint.');
console.log('You will need to purchase '+area+' gallons of paint.');

document.write('<div>You have '+answer+' square feet to paint.</div>');
document.write('<div>You will need to purchase '+area+' gallons of paint.</div>');


