let display = document.getElementById("display");

function appendToDisplay(value) {
  let currentDisplay = display.value;
  let lastChar = currentDisplay.slice(-1);

  if (
    (lastChar >= "0" && lastChar <= "9" && value === "(") ||
    (lastChar === ")" && value >= "0" && value <= "9") ||
    (lastChar === ")" && value === "(")
  ) {
    display.value += "*" + value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

display.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});
