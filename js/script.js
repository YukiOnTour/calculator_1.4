//Add function: adds two parameters and returns the sum
function add(num1, num2){
return num1 + num2;
}

//Subtract function: subtracts the second number from the first number and returns the difference
function subtract(num1, num2){
  return num1 - num2;
  }

//Multiply function: multiplies two numbers and returns the product
function multiply(num1, num2){
  return num1 * num2;
  }

//Divide function: 
//If the divisor is equal to zero, the function returns the string 'Not Allowed' 
function divide (num1, num2){
  if (num2 === 0){
    return 'Not Allowed';
  }
  //Divides the first number by the second number and returns the quotient
  else {return num1 / num2;}
  }
