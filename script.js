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

ulEl.addEventListener("click", function(event) { 
    event.preventDefault
    console.log("uhhh, 'click'");
    questionTwo();

})