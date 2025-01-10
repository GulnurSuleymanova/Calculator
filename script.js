const display = document.getElementById("display");


function appendNumber(x) {
    display.textContent += x;
}


function clearScreen() {
    display.textContent = "";
}


function calculate() {
    display.textContent=eval(display.textContent)
  
}
