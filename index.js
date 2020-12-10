// select these HTML elements
const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const results = document.getElementById("results");
const numberContainer = document.getElementById("number-container");

const Questions = [];

// create Buttons days
for (let i = 1; i <= 31; i++) {
  let button = document.createElement("button");
  button.className = "number btn btn-danger";
  button.innerHTML = i;
  numberContainer.appendChild(button);

  //create click handler
  myClickFunction = () => {
    //redirect to new Page
    // window.location = "./answers.html";

    console.log("number" + i);
    const randomNumber = Math.round(Math.random() * 41);
    console.log(randomNumber);

    fetch("./questions.json")
      .then((res) => res.json())
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

        let submitButton = document.createElement("submit");
        submitButton.className = "btn btn-warning";
        submitButton.innerText = "Submit";
        submit.appendChild(submitButton);
      });
  };

  button.addEventListener("click", myClickFunction);
}
