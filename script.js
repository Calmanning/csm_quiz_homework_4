
var buttonEl = document.querySelector("#start-button"); 
var introTextEl = document.querySelector("#intro");
var timerEl = document.querySelector("#timer")
var questEl = document.querySelector("#quest")
var pEl = document.querySelector("#response");
var answersEl = document.querySelector("#answers");

var answerLi = "";
var answerButton = "";
var questionIndex = 0;
var timeLeft = 100;


list = [
    {question: "How many keys does a classic piano have?",
     answers: ["88", "55", "70", "67"],
     correct: "88"
    },
    {question: "What’s the national animal of Australia?",
     answers: ["koala", "wombats", "red kangaroo", "dingo"],
    correct: "red kangaroo"
    },
    {question: "Okay, but who is your favorite Transformer?",
     answers: ["HotRod", "Optimus Prime", "Cup?", "All the dinobots"],
     correct: "All the dinobots"
    },

]

// Function that begins the quiz and progresses the questions after a correct choice has been made.
function buttonClicked () {
    var currentQuestion = list[questionIndex];

    introTextEl.textContent = "";
    buttonEl.style.display = "none";
    questEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    currentQuestion.answers.forEach(function(choice, i) {
        var questionSpace = document.createElement("button");
        questionSpace.setAttribute("class", "answers");
        questionSpace.setAttribute("value", choice);
        questionSpace.textContent = i + 1 + ". " + choice;
        // "doubleCheck" is the function that determines what actions to take depending on the choice values.
        questionSpace.onclick = doubleCheck;
        answersEl.appendChild(questionSpace);

    }); 
    // initializing the timer for the quiz.   
    quizTimer()
} 
// Conditionals to recognize acceptable answers in the choices 
function doubleCheck() {
    if (this.value !== list[questionIndex].correct) {
        timeLeft -= 10;
        console.log("wrogon");
        // put failure notice here. <p>
    } else {
        console.log("that-a right");
        questionIndex++;
        buttonClicked();
    }
} // an attempt to create/insert function that takes user to high score page.
    if (list[questionIndex] >= 2) {
    introTextEl.textContent = "";
    buttonEl.style.display = "none";
    questEl.textContent = "you did it!";
    answersEl.innerHTML = "";
}


function quizTimer() {

var timerInterval = setInterval(function() {
    timerEl.textContent = "Score: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0) {
        timerEl.textContent = "";
        clearInterval(timerInterval);
        introTextEl.textContent = "";
        buttonEl.style.display = "none";
        questEl.textContent = "It's over!";
        answersEl.innerHTML = "";
        
    }

    }, 1000);
}
buttonEl.addEventListener("click", function(event) {
    event.preventDefault
    console.log("uhhh, 'click'");
    buttonClicked();
})
