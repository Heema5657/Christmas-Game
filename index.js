// bring available
const quizContainer = document.getElementById("quizContainer");
const quiz = document.getElementById("quiz");
const answers = document.getElementById("answers");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const results = document.getElementById("results");
const numberContainer = document.getElementById("number-container");

const Questions = [];

// new code with For Loop
// create Buttons days
for (let i = 1; i <= 31; i++) {
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
        Questions.push(data);
        console.log(Questions);
        const question = Questions[0][randomNumber].question;
        quiz.innerHTML = question;

        const answer1 = Questions[0][randomNumber].answers.a;
        const answer2 = Questions[0][randomNumber].answers.b;
        const answer3 = Questions[0][randomNumber].answers.c;
        let buttonA = document.createElement("button");
        let buttonB = document.createElement("button");
        let buttonC = document.createElement("button");
        buttonA.className = " btn btn-secondary";
        buttonB.className = " btn btn-secondary";
        buttonC.className = " btn btn-secondary";

        buttonA.innerHTML = answer1;
        buttonB.innerHTML = answer2;
        buttonC.innerHTML = answer3;

        // quiz.appendChild(quiz);
        answerA.appendChild(buttonA);
        answerB.appendChild(buttonB);
        answerC.appendChild(buttonC);
      });
  });
}

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
  .then((data) => {
    console.log(data);

    console.log(Questions);
    // Questions.push(data);
    console.log(Questions);
  });

// Step 2 create functions:
function buildQuiz() {
  // variable to store the HTML output
  const output = [];
}
