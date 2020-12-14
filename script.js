var buttonEl = document.querySelector(".button"); 
var introTextEl = document.querySelector("#intro");
var questEl = document.querySelector("#quest")
var ulEl = document.querySelector("#answers")
var pEl = document.querySelector("#response");

var answerLi = "";
var answerButton = "";


var question1 = "What is an Array";
var answerOne = ["yes","no","sure","maybe?"]
var question2 = "What is JS"
var answerTwo = ["1","2no","3sure","definitely maybe?"]
var question3 = "something" 
var answerThree = ["yes","no","sure","maybe?"]

var questions = [
    { question: 'Does this even work?',
      answers: [
            {text: "I don't know.", correct: false},
            {text: "maybe it does", correct: true},
            {text: "I sure hope so", correct: false}
          ]    
    },
    {
        question: "What is an array?",
        answers: [
            {text: "I don't know anymore", correct: false},
            {text: "An array is a special variable that can hold more than one value", corrrect: true},
            {text: "I don't know... try the answer above me", correct: false},
        
        ]
    },
    {
        question: "We're doing three questions right now.",
        answers: [
            {text: "That's not a question", correct: false},
            {text: "three sounds great", corrrect: false},
            {text: "This is also an answer!", correct: true},
        
        ]
    }
]

function buttonClicked () {
    introTextEl.textContent = ""
    buttonEl.style.display = "none"
    questEl.textContent = question1
    for (var i = 0; i < answerOne.length; i++) {
        var answerOneText = answerOne[i];
        console.log(i);
        console.log(answerOneText);

        var answerLi = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = answerOneText;
        answerLi.appendChild(answerButton);
        ulEl.appendChild(answerLi);        
    }      
}


function questionTwo() {
questEl.textContent = question2
answers.textContent = "";

for (var i = 0; i < answerTwo.length; i++) {
    var answerTwoText = answerTwo[i];
    console.log(i);
    console.log(answerTwoText);

    
    var answerLi = document.createElement("li");
    var answerButton = document.createElement("button");
    answerButton.textContent = answerTwoText;
    answerLi.appendChild(answerButton);
    ulEl.appendChild(answerLi);
    
}      
}

// add target match
if (answerButton === "maybe?") {
questionTwo();
} else {
    // var wrong = document.createElement("p")
    // wrong.textContent = "sorry. Try again, buddy";
    // pEl.append(wrong);
    // // timer subtract
}

function questionThree() {
    questEl.textContent = question3
    answers.textContent = "";
    
    for (var i = 0; i < answerTwo.length; i++) {
        var answerTwoText = answerTwo[i];
        console.log(i);
        console.log(answerTwoText);
    
        
        var answerLi = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = answerTwoText;
        answerLi.appendChild(answerButton);
        ulEl.appendChild(answerLi);
        
    }      
    }

if (answerButton === "2no") {
questionThree();
} else {
    // var wrong = document.createElement("p")
    // wrong.textContent = "sorry. Try again, buddy";
    // pEl.append(wrong);
    // // timer subtract
}
buttonEl.addEventListener("click", function(event) {
    event.preventDefault
    console.log("uhhh, 'click'");
    buttonClicked()
    
})

li.addEventListener("click", function(event) { 
    event.preventDefault
    console.log("uhhh, 'click'");
    questionTwo();

})


// What follows is some code from 'coding demystified", this is the link to their code (https://github.com/WebDevSimplified/JavaScript-Quiz-App) 
//not sure if this will help but it's something to look at and dismantle for my own work.

// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')
// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')

// let shuffledQuestions, currentQuestionIndex

// @@ -17,22 +17,14 @@ function startGame() {
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion(shuffledQuestions, currentQuestionIndex)
//   setNextQuestion()
// }

// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
// @@ -47,12 +39,20 @@ function showQuestion(question) {
//   })
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(child => {
//     setStatusClass(child, child.dataset.correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
// @@ -72,11 +72,18 @@ function setStatusClass(element, correct) {
// }

// function clearStatusClass(element) {
//   element.classList.remove('wrong')
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }