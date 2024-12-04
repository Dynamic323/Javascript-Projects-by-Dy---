// Form
let form = document.getElementById("form");
let Phone_email = document.getElementById("email");
let form_btn = document.getElementById("form-btn");
let userName = document.getElementById("username");
let questContainer = document.querySelector(".quest-container");
let text_div = document.querySelector(".text");
let Userscore = 0;
let currentIndex = 0;
let selectedAnswers = {};
let selectedType = {};
// Question data
const questions = [
  {
    question: "How do you feel about solving puzzles or logical problems?",
    options: [
      { answer: "I love it and find it fun", type: "correct" },
      { answer: "I’m okay with it, but it can get frustrating", type: "maybe" },
      { answer: "I dislike it and avoid it", type: "wrong" },
    ],
  },
  {
    question: "How do you respond to failure or mistakes?",
    options: [
      {
        answer: "I see it as an opportunity to learn and grow",
        type: "correct",
      },
      { answer: "I get discouraged but eventually try again", type: "maybe" },
      { answer: "I find it hard to move on and lose interest", type: "wrong" },
    ],
  },
  {
    question: "Do you enjoy working on tasks that require attention to detail?",
    options: [
      { answer: "Yes, I enjoy tasks that challenge my focus", type: "correct" },
      { answer: "Sometimes, but I can lose patience", type: "maybe" },
      {
        answer: "No, I prefer tasks that don’t require much detail",
        type: "wrong",
      },
    ],
  },
  {
    question:
      "How much time are you willing to dedicate to learning something new?",
    options: [
      {
        answer: "I can dedicate several hours a week consistently",
        type: "correct",
      },
      {
        answer: "I can dedicate some time, but not consistently",
        type: "maybe",
      },
      { answer: "I don’t have much time to spare", type: "wrong" },
    ],
  },
  {
    question: "Do you like experimenting with new technologies or apps?",
    options: [
      { answer: "Yes, I’m always curious to try new things", type: "correct" },
      {
        answer: "Sometimes, but only if it’s easy to understand",
        type: "maybe",
      },
      { answer: "No, I stick to what I already know", type: "wrong" },
    ],
  },
  {
    question:
      "Are you comfortable asking for help when you don’t understand something?",
    options: [
      { answer: "Yes, I actively seek help and feedback", type: "correct" },
      { answer: "Sometimes, but I feel shy about it", type: "maybe" },
      { answer: "No, I prefer figuring things out on my own", type: "wrong" },
    ],
  },
  {
    question:
      "Do you enjoy learning new concepts or skills by reading or watching tutorials?",
    options: [
      {
        answer: "Yes, I enjoy exploring and learning through tutorials",
        type: "correct",
      },
      {
        answer: "I can manage, but I prefer being taught in person",
        type: "maybe",
      },
      {
        answer: "No, I find it hard to stay engaged with tutorials",
        type: "wrong",
      },
    ],
  },
];

// Custome aleart message
function Alert(msg, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = msg;

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

const myalert = {
  success(msg) {
    Alert(`${msg}`, "alert-success");
  },

  error(msg) {
    Alert(`${msg}`, "alert-error");
  },

  loading(msg) {
    Alert(`${msg}`, "alert-loading");
  },
};
// from validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   Validation

  const userNameValue = userName.value.trim();
  const emailValue = Phone_email.value.trim();

  if (userNameValue == "" || emailValue == "") {
    myalert.error("Invalid input. Please fill out all fields.");
  } else if (userNameValue.length < 4) {
    myalert.error("Username must be at least 4 characters long.");
  } else {
    myalert.success("Form submitted successfully!");
    question_section.style.display = "flex";
    form.style.display = "none";
    currentQ(currentIndex);
  }
});

const question_section = document.querySelector(".question");
const qst = document.getElementById("qst");
let next_btn = document.createElement("button");
let prev_btn = document.createElement("button");
let bdiv = document.getElementById("b-div");
next_btn.textContent = "Next";
prev_btn.textContent = "Prev";

bdiv.classList.add("btn-div");

bdiv.appendChild(prev_btn);
bdiv.appendChild(next_btn);

function currentQ(index) {
  if (index < 0 || index >= questions.length) {
    return;
  }

  text_div.innerHTML = `  <h2 class="h2"> Can You Code? Answer these questions to find out! </h2>`;
  const currentQuestion = questions[index];

  const optionsContainer = document.querySelector(".options");
  optionsContainer.innerHTML = "";
  qst.innerHTML = `<p><span class="sp"> Qust  ${(index += 1)} : </span> ${
    currentQuestion.question
  } </p>`;

  shuffledOptions = currentQuestion.options.sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((option, i) => {
    let optionBtn = document.createElement("button");

    optionBtn.textContent = `${i + 1}: ${option.answer}`;
    optionBtn.value = `${option.type}`;
    optionBtn.classList.add("option");
    if (selectedAnswers[index] === i) {
      optionBtn.classList.add("click");
    }
    optionBtn.addEventListener("click", () => {
      selectedAnswers[index] = i;
      let btnvalue = optionBtn.value;
      if (btnvalue == "correct") {
        selectedType[index] = "correct";
        Userscore += 2;
      } else if (btnvalue == "maybe") {
        selectedType[index] = "maybe";
        Userscore += 1;
      } else {
        selectedType[index] = "wrong";
        Userscore += 0;
      }

      document.querySelectorAll(".option").forEach((opt) => {
        opt.classList.remove("click");
      });

      optionBtn.classList.add("click");
    });
    optionsContainer.appendChild(optionBtn);
  });
}

next_btn.addEventListener("click", HandelNext);
prev_btn.addEventListener("click", Handelprev);

function HandelNext() {
  if (currentIndex < questions.length - 1) {
    let option = document.querySelectorAll(".option");

    let isselcted = false;

    option.forEach((opt) => {
      if (opt.classList.contains("click")) {
        isselcted = true;
      }
    });

    if (isselcted) {
      currentIndex += 1;
      currentQ(currentIndex);
    } else {
      //   Alert("");
      myalert.error("Please select one option");
    }
  } else {
    Display();
  }
}

function Handelprev() {
  if (currentIndex > 0) {
    currentIndex--;
    currentQ(currentIndex);
  }
}

let main = document.querySelector(".main");
let display_div = document.querySelector(".display_div");
const Display = () => {
  let msg;
  if (Userscore >= 10 && Userscore <= 14) {
    msg = "Strong aptitude for coding. You can learn coding easily!";
  } else if (Userscore >= 6 && Userscore <= 9) {
    msg =
      "Moderate aptitude. You can learn coding if you stay consistent and work on weak areas.";
  } else {
    msg =
      "Coding may be challenging for you. Consider improving skills like problem-solving and persistence before diving in.";
  }

  main.style.display = "none";

  display_div.style.display = "block";
  let userNameVal = userName.value;
  display_div.innerHTML = `
        <h1>Hello ${userNameVal}</h1>
        <h2> ${msg} </h2>
        <br>

         <div class="contact-container">
      <span
        >Contact Dycoder on <i class="fa-solid fa-hand-point-down"></i
      ></span>

      <div class="socials">
        <a href="tel:09161712483">
          <i class="fa-solid fa-phone"></i>
        </a>
        <a href="https://web.facebook.com/tina.otamere.9">
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://wa.link/pet68v">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>  
  `;
};
