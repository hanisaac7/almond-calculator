//operations have been tested
function add(num1, num2) {
    return num1 + num2
  }
  
function subtract (num1, num2) {
    return num1 - num2
  }
  
function multiply (num1, num2) {
    return num1 * num2
  }
  
function divide(num1, num2) {
    return num1 / num2
  }
  

  
//operate function has been tested
function operate() {
  switch(operator) {
    case '+':
      console.log(add(num1, num2))
      equalNumber = add(num1, num2)
    break;
    case '-':
      console.log(subtract(num1, num2))
      equalNumber = subtract(num1, num2)
    break;
    case 'x':
      console.log(multiply(num1, num2))
      equalNumber = multiply(num1, num2)
    break;
    case '/':
      console.log(divide(num1, num2))
      equalNumber = divide(num1, num2)
    break;
    default:
      console.log("Error")
      equalNumber = "Error"
  }
}  

  
const display = document.getElementById("display")
const numberButton = document.querySelectorAll(".digits")
const operatorButton = document.querySelectorAll(".sign")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equals")

let num1 = null
let num2 = null
let operator = null

//function to display the button value 
function displayButton(button) {
    if (isNaN(operatorButton) == true) {
      result = button.target.innerHTML
      display.value += result
    } else {
      result = parseFloat(numberButton.target.innerHTML)
      display.value += result
    }
}

function operatorAssignment(button) {
  if (isNaN(operatorButton) == true) {
    operator = button.target.innerHTML
  }
  console.log(num1 + operator + num2)
}

function numberAssignment(button) {
  const clickedNumber = button.target.innerHTML
  if (num1 == null) {
    num1 = clickedNumber
  } else if (num1 != null && operator == null) {
    num1 += clickedNumber
  } else if (num1 != null && operator != null && num2 == null) {
    num2 = clickedNumber
  } else if (num1 != null && operator != null && num2 != null) {
    num2 += clickedNumber
  }

  console.log(num1 + operator + num2)
}

//will empty text field when clear button is pressed
clearButton.addEventListener("click", () => {
  result = ''
  display.value = result
  
  num1 = null
  num2 = null
  operator = null
  console.log(result)
})

//will be ran when a number is pressed
numberButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", numberAssignment)
})

//will be ran when a operator is pressed
operatorButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", operatorAssignment)
})

//will run the operate function
equalButton.addEventListener("click", () => {
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  operate()
  display.value = equalNumber

  num1 = null
  num2 = null
  operator = null 
  
})



