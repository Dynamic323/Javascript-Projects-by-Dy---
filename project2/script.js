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
// controls.forEach((element) => {
//   element.addEventListener("change", () => {
//     if (element.checked && element.dataset.case == "upper") {
//       isupper = true;
//       generatePsw(isupper);
//     } else if (element.dataset.case == "upper" && !element.checked) {
//       isupper = false;
//       generatePsw(isupper);
//     }
//     if (element.checked && element.dataset.case == "lower") {
//       islower = true;
//       generatePsw(false ,islower);
//     } else if (element.dataset.case == "lower" && !element.checked) {
//       islower = false;
//       generatePsw(false, islower);
//     }

//     if (element.checked && element.dataset.case == "numbers") {
//       isnumber = true;

//       generatePsw(false, false,false,isnumber);
//     } else if (element.dataset.case == "numbers" && !element.checked) {
//       isnumber = false;

//       generatePsw(false, false,false, isnumber);
//     }

//     if (element.checked && element.dataset.case == "symbols") {
//       isSymbol = true;
//       generatePsw(false, false, isSymbol);
//     } else if (element.dataset.case == "symbols" && !element.checked) {
//       isSymbol = false;
//       generatePsw(false, false, isSymbol);
//     }
//     //   // console.log(element.dataset.case);
//   });
// });

// console.log(rangeBar.value);

function HandelPsw() {
  console.log(rangeBar.value);
  showText.textContent = rangeBar.value;
}

let generatebtn = document.getElementById("generatebtn");

function generatePsw() {
  let allowedChars = "";
  let password = "";
  let lenght = rangeBar.value;

  let isupper = document.querySelector('[data-case="upper"]').checked;

  let islower = document.querySelector('[data-case="lower"]').checked;
  let isSymbol = document.querySelector('[data-case="numbers"]').checked;
  let isnumber = document.querySelector('[data-case="symbols"]').checked;
  allowedChars += isupper ? UppercaseLetters : "";
  allowedChars += islower ? LowercaseLetters : "";
  allowedChars += isnumber ? Numbers : "";
  allowedChars += isSymbol ? Symbols : "";

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
rangeBar.addEventListener("change", HandelPsw);
