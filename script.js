const display = document.getElementById("display");

// Rəqəm və simvolları əlavə etmək funksiyası
function appendNumber(input) {
    display.textContent += input;
}

// Ekranı təmizləmək funksiyası
function clearScreen() {
    display.textContent = "";
}

// İfadəni qiymətləndirmək funksiyası
function calculate() {
    try {
        const result = Function(`'use strict'; return (${display.textContent})`)();
        display.textContent = result;
    } catch (error) {
        display.textContent = "Error";
    }
}
