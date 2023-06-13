const numbers = [10, 5, 2, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 2;
}