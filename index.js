// bring available
const quizContainer = document.getElementById("quizContainer");
const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number10 = document.getElementById("number10");
const number11 = document.getElementById("number11");
const number12 = document.getElementById("number12");
const number13 = document.getElementById("number13");
const number14 = document.getElementById("number14");
const number15 = document.getElementById("number15");
const number16 = document.getElementById("number16");
const number17 = document.getElementById("number17");
const number18 = document.getElementById("number18");
const number19 = document.getElementById("number19");
const number20 = document.getElementById("number20");
const number21 = document.getElementById("number21");
const number22 = document.getElementById("number22");
const number23 = document.getElementById("number23");
const number24 = document.getElementById("number24");
const number25 = document.getElementById("number25");
const number26 = document.getElementById("number25");
const number27 = document.getElementById("number27");
const number28 = document.getElementById("number28");
const number29 = document.getElementById("number29");
const number30 = document.getElementById("number30");
const number31 = document.getElementById("number31");
const number32 = document.getElementById("number32");
const number33 = document.getElementById("number33");
const number34 = document.getElementById("number34");
const number35 = document.getElementById("number35");
const number36 = document.getElementById("number36");
const number37 = document.getElementById("number37");
const number38 = document.getElementById("number38");
const number39 = document.getElementById("number39");
const number40 = document.getElementById("number40");
const number41 = document.getElementById("number41");

//events

number1.addEventListener("click", function () {
  console.log("number1");
  const randomNumber1 = Math.round(Math.random() * 41);
  console.log(randomNumber1);
  fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data[randomNumber1].question));

});

number2.addEventListener("click", function () {
  console.log("number2");
  const randomNumber2 = Math.round(Math.random() * 41);
  console.log(randomNumber2);
  fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data[randomNumber2].question));

});

number3.addEventListener("click", function () {
  console.log("number3");
  const randomNumber3 = Math.round(Math.random() * 41);
  console.log(randomNumber3);
  fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data[randomNumber3].question));

});

number4.addEventListener("click", function () {
  console.log("number4");
  const randomNumber4 = Math.round(Math.random() * 41);
  console.log(randomNumber4);
  fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => console.log(data[randomNumber4].question));

});






