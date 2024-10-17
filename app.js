let num1 = parseInt(prompt("Enter First Number: "));
let num2 = parseInt(prompt("Enter Second Number: "));
let option = parseInt(prompt("Choose an operation: "));
let result = null;
let optionName = null;

let num1Con = isNaN(num1); // if it's a number it will return false
let num2Con = isNaN(num2);
let num3Con = isNaN(option);

if (num1Con || num2Con || num3Con) {
  document.write(`<h1>Try again and put a Valid Number please!</h1>`);
} else {
  switch (option) {
    case 1:
      optionName = "Add";
      result = num1 + num2;
      break;
    case 2:
      optionName = "Subtraction";
      result = num1 - num2;
      break;
    case 3:
      optionName = "Multiplication";
      result = num1 * num2;
      break;
    case 4:
      optionName = "Division";
      result = parseFloat(num1 / num2);
      break;

    default:
      break;
  }
  if (result == null) {
    result = "No Result";
    document.write(`<h1>result is: ${result} </h1>`);
  } else {
    document.write(
      `<h1>num1: ${num1} and num2: ${num2} <br> option number is: ${option} <br> option name is: ${optionName} <br> result is: ${result} </h1>`
    );
  }
}
