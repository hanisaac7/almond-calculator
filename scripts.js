let num1 = null
let num2 = null
let operator = null
let equalNumber = null

const display = document.getElementById("display")
const numberButton = document.querySelectorAll(".digits")
const operatorButton = document.querySelectorAll(".sign")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equals")
const decimalButton = document.querySelector(".decimal")
const negativeButton = document.querySelector(".negative")

//operations
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
  if (num2 == 0) {
    return "Error"
  }
  return num1 / num2
}

//function that runs operation 
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

//function to make variables null
function reset() {
  num1 = null
  num2 = null
  operator = null
}

//function restarts equation and display after result
function restart(button) {
  const clickedNumber = button.target.innerHTML
  if (num1 == equalNumber && operator == null && num2 == null) { 
    result = clickedNumber
    display.value = result
    reset()
  } else if (num1 == null && operator == "Error" && num2 == null) {
    result = clickedNumber
    display.value = result
    reset()
  }
}

//displays button text to display
function displayButton(button) {
  result = button.target.innerHTML
  display.value += result
}

//erases equation and displays result
function displayResult() {
  if (isNaN(equalNumber)) {
    equalNumber = "Error"
    reset()
  }
  display.value = equalNumber
  num1 = equalNumber
  num2 = null
  operator = null 
}

//assignment of num1 and num2
function numberAssignment(button) {
  const clickedNumber = button.target.innerHTML
  if (equalNumber != null) {
    restart(button)
  }
  if (num1 == null) {
    num1 = clickedNumber
  } else if (num1 != null && operator == null && num2 === null) {
    num1 += clickedNumber
  } else if (num1 != null && operator != null && num2 == null) {
    num2 = clickedNumber
  } else if (num1 != null && operator != null && num2 != null) {
    num2 += clickedNumber
  } else if (num1 == null && operator != null && num2 == null) {
    display.value = "Error"
    reset()
  }
  console.log(num1 + operator + num2) 
}

//assignment of operator
function operatorAssignment(button) {
  operator = button.target.innerHTML
  if (num1 == null && operator != null && num2 == null) {
    equalNumber = NaN
    displayResult()
  }
  console.log(num1 + operator + num2)
}

//display operator only once regardless of multiple clicks
function operatorDisplay(button) {
  if (operator != null) {
    newDisplay = button.target.innerHTML
    display.value = num1 + newDisplay
    num2 = null
  }
}

//will be ran when a number is pressed
numberButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", numberAssignment)
  button.addEventListener("click", restart)
})

//will be ran when a operator is pressed
operatorButton.forEach(function(button) {
  button.addEventListener("click", displayButton)
  button.addEventListener("click", operatorDisplay)
  button.addEventListener("click", operatorAssignment)
})

//will empty text field when clear button is pressed
clearButton.addEventListener("click", () => {
  result = ''
  display.value = result
  reset()
})

//will run the operate function
equalButton.addEventListener("click", () => {
  if (num1 != null && operator == null && num2 == null) {
    operator = "+"
    num2 = 0
  } 
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  operate()
  displayResult()
})

//allows for floating point numbers
decimalButton.addEventListener("click", () => {
  if (num1 != null && operator == null && num2 == null) {
    num1 += "."
    display.value = num1
  } else if (num1 == null && operator == null && num2 == null) {
    num1 = "0."
    display.value = num1
  } else {
    num2 += "."
    display.value = num1 + operator + num2
  } 
})

//allows for num1 to be negative
negativeButton.addEventListener("click", () => {
  num1 = "-"
  display.value = "-"
})


