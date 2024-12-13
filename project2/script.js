let rangeBar = document.getElementById("range");
const controls = document.querySelectorAll(".controls");
let showText = document.getElementById("show");
let display = document.getElementById("display");

// Uppercase letters
const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Lowercase letters
const LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// Numbers
const Numbers = "0123456789";

// Symbols
const Symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\";

showText.textContent = rangeBar.value;

let generatebtn = document.getElementById("generatebtn");

function generatePsw() {
  let allowedChars = "";
  let password = "";
  let lenght = rangeBar.value;

  let isupper = document.querySelector('[data-case="upper"]').checked;

  let islower = document.querySelector('[data-case="lower"]').checked;
  let isSymbol = document.querySelector('[data-case="numbers"]').checked;
  let isnumber = document.querySelector('[data-case="symbols"]').checked;
  let bar1 = document.querySelector('[data-bar="bar-1"]');

  let width = 0;
  let bg;
  let text;
  if (isupper) {
    allowedChars += UppercaseLetters;
    width += 20;
    bg = "to right, #FF0000, #FF6347";
    // text = "bad ";
  }
  if (islower) {
    allowedChars += LowercaseLetters;
    width += 20;
    bg = "to right, #FFA500, #FFD700";
    // text = "good ";
  }
  if (isnumber) {
    allowedChars += Numbers;
    width += 20;
    bg = "to right, #FFFF00, #ADFF2F ";
    // text = "better ";
  }
  if (isSymbol) {
    allowedChars += Symbols;
    width += 20;
    bg = "to right, #008000, #00FF00";
  }

  console.log(width);

  bar1.style.width = `${width}%`;
  bar1.style.background = `linear-gradient(${bg})`;
  // // bar1.textContent = text;

  if (allowedChars.length <= 1) {
    return alert("At least 1 set of character need to be selcted");
  }

  for (let i = 0; i < lenght; i++) {
    const randIndex = Math.floor(Math.random() * allowedChars.length);

    password += allowedChars[randIndex];
  }
  return (display.value = password);
}
generatebtn.addEventListener("click", generatePsw);
rangeBar.addEventListener(
  "change",
  () => (showText.textContent = rangeBar.value)
);
