let sum = 0;
const numbers = [10, 20, 10, 20];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}