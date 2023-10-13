function halfNumber(num) {
  let halfNumber = num / 2;
  console.log(`Half of ${num} is ${halfNumber}.`);
  return halfNumber;
}

function squareNumber(num) {
  let squareNumber = num * num;
  console.log(`The result of squaring the number ${num} is ${squareNumber}.`);
  return squareNumber;
}

function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}

function findModulus(num1, num2) {
  let modulus = num1 % num2;
  console.log(`${modulus} is the modulus of ${num1} and ${num2}`);
  return modulus
}
