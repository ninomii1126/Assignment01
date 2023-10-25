let num1;
let num2;
let operation;

collectData();
calculate(num1, num2, operation);

function displayCar(color, make, model) {
    console.log(`I own a ${color} ${make} ${model}.`);
}
displayCar("white", "Chevy");

function calculate(x, y, operation) {
  let result;
  switch (operation) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = Math.round(x / y);
      break;
    default:
      break;
  }
  alert(`The result of ${x}${operation}${y} is ${result}`);
}



function collectData() {
  // COLLECT FIRST NUMBER FROM USER
  num1 = parseInt(prompt("Enter first number."));

  // COLLECT SECOND NUMBER FROM USER
  num2 = parseInt(prompt("Enter second number."));

  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  operation = prompt("Enter operation(+-*/).");
}

while (
  operation !== "+" &&
  operation !== "-" &&
  operation !== "*" &&
  operation !== "/"
) {
  alert("Invalid operation, please enter again.");
  collectData();
}

