// bring available
const quizContainer = document.getElementById("quizContainer");
const quiz = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const numberContainer = document.getElementById("number-container");

// new code with For Loop
// create Buttons days
for (let i = 1; i < 31; i++) {
  let button = document.createElement("button");
  button.className = "number btn btn-danger";
  button.innerHTML = i;
  numberContainer.appendChild(button);

  button.addEventListener("click", () => {
    console.log("number" + i);
    const randomNumber = Math.round(Math.random() * 41);
    console.log(randomNumber);
    fetch("./questions.json")
      .then((res) => res.json())
      // .then((data) => console.log(data[randomNumber].question));
      .then((data) => {
        const question = data[randomNumber].question;
        quiz.innerHTML = question;
        console.log(question);
        return quiz.appendChild(quiz);
      });
  });
}

// Old code with huge lińes ....  this it will deleted after.

// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");
// const number3 = document.getElementById("number3");
// const number4 = document.getElementById("number4");
// const number5 = document.getElementById("number5");
// const number6 = document.getElementById("number6");
// const number7 = document.getElementById("number7");
// const number8 = document.getElementById("number8");
// const number9 = document.getElementById("number9");
// const number10 = document.getElementById("number10");
// const number11 = document.getElementById("number11");
// const number12 = document.getElementById("number12");
// const number13 = document.getElementById("number13");
// const number14 = document.getElementById("number14");
// const number15 = document.getElementById("number15");
// const number16 = document.getElementById("number16");
// const number17 = document.getElementById("number17");
// const number18 = document.getElementById("number18");
// const number19 = document.getElementById("number19");
// const number20 = document.getElementById("number20");
// const number21 = document.getElementById("number21");
// const number22 = document.getElementById("number22");
// const number23 = document.getElementById("number23");
// const number24 = document.getElementById("number24");
// const number25 = document.getElementById("number25");
// const number26 = document.getElementById("number25");
// const number27 = document.getElementById("number27");
// const number28 = document.getElementById("number28");
// const number29 = document.getElementById("number29");
// const number30 = document.getElementById("number30");
// const number31 = document.getElementById("number31");

// //events

// number1.addEventListener("click", function () {
//   console.log("number1");
//   const randomNumber1 = Math.round(Math.random() * 41);
//   console.log(randomNumber1);
//   fetch("./questions.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data[randomNumber1].question));

// });

// number2.addEventListener("click", function () {
//   console.log("number2");
//   const randomNumber2 = Math.round(Math.random() * 41);
//   console.log(randomNumber2);
//   fetch("./questions.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data[randomNumber2].question));

// });

// number3.addEventListener("click", function () {
//   console.log("number3");
//   const randomNumber3 = Math.round(Math.random() * 41);
//   console.log(randomNumber3);
//   fetch("./questions.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data[randomNumber3].question));

// });

// number4.addEventListener("click", function () {
//   console.log("number4");
//   const randomNumber4 = Math.round(Math.random() * 41);
//   console.log(randomNumber4);
//   fetch("./questions.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data[randomNumber4].question));

// });

// fetching questions from json :

function buildRandomQuiz() {}

function showResults() {}

// display quiz right away
buildRandomQuiz();

// on submit, show results
// submitButton.addEventListener("click", showResults);

// Step 1 Questions :

// fetching questions from json :
fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

const Questions = [];

// Step 2 create functions:
function buildQuiz() {
  // variable to store the HTML output
  const output = [];
}
