const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const allClearBtn = document.querySelector(".allClear");
const equalsBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");

const display = document.querySelector(".display");
const currentOperandDisplay = document.querySelector(".currentOperand");
const previousOperandDisplay = document.querySelector(".previousOperand");

let curOperand = "";
let prevOperand = "";
let operator = "";

const updateDisplay = () => {
  currentOperandDisplay.innerText = curOperand;
  previousOperandDisplay.innerText = prevOperand;
};

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "." && curOperand.includes(".")) return;
    curOperand += button.innerText;
    updateDisplay();
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (curOperand === "") return;
    if (prevOperand !== "") {
      calculate();
    }
    prevOperand = curOperand + button.innerText;
    curOperand = "";
    operator = button.innerText;
  });

  updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  curOperand = "";
  prevOperand = "";
  operator = "";
  currentOperandDisplay.innerText = "";
  previousOperandDisplay.innerText = "";
});

function calculate() {
  let result = "";

  let prev = parseFloat(prevOperand);
  let cur = parseFloat(curOperand);

  switch (operator) {
    case "+":
      result = prev + cur;
      break;
    case "-":
      result = prev - cur;
      break;
    case "*":
      result = prev * cur;
      break;
    case "÷":
      result = prev / cur;
      break;
    default:
      return;
  }
  curOperand = result.toString();
  prevOperand = "";
  operator = "";

  updateDisplay();
}

equalsBtn.addEventListener("click", calculate);

deleteBtn.addEventListener("click", () => {
  curOperand = curOperand.slice(0, -1);
  updateDisplay();
});
