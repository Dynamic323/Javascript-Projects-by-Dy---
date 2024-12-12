let rangeBar = document.getElementById("range");
const controls = document.querySelectorAll(".controls");
let showText = document.getElementById("show");
let display = document.getElementById("display");

showText.textContent = rangeBar.value;
controls.forEach((element) => {
  element.addEventListener("change", () => {
    console.log(element.dataset.case);
  });
});

// console.log(rangeBar.value);
function HandelPsw() {
  console.log(rangeBar.value);
  showText.textContent = rangeBar.value;
}

let generatebtn = document.getElementById("generatebtn");

function HandelDisplay() {
  let result = Math.floor(Math.random() * showText.textContent + 232427);

  console.log(result);

  display.value = result;
}
generatebtn.addEventListener("click", HandelDisplay);
rangeBar.addEventListener("change", HandelPsw);
