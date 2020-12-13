// TODO: Create arrays for all question sets that will cycle in on the same page.
var promptArray = ["This would be a sample question promptArray.","And this would be the second one.","which makes this the third prompt."];
var answersArray1 = ["one","two","three","founr...yep"];
var promptArray2 = "";
var answersArray2 = [];
var promptArray3 = "";
var answersArray3 = [];
var promptArray4 = "";
var answersArray4 = [];
var quizEl = document.querySelector("#quiz");
var promptEL = document.querySelector("#prompt");
var answerEl = document.querySelector("#answers");
// TODO: create variables for all dynamic elements present in the HTML
// Button that starts the test.
var startEl = document.querySelector("#start");
    // TODO:function that clears most elements from the page and presents the prompt arrays
    
    // TODO: make use of HTML "data-" tags to switch visability for each question

        // TODO: Things that will need visability toggling: h1 intro header, h2 prompt line, ul "answers"

// TODO: A function that, once the correct answer is "clicked" will clear out the old question set and install the next one.
    // TODO: Will need a for loop to populate each li in the prompt arrays


console.log(promptArray);
console.log(answersArray1);
if (startEl === true) {
    // renderPrompt();
    // renderAnswersArray1();
}

    function renderPrompt(){
// innerHTML clear?

    for (var i = 0; i < promptArray.length; i++) {
        var promptText = promptArray[i];

console.log(`promptArray: ${promptArray[i]}`);
       
        var h2 = document.createElement("h2");
        h2.textContent = promptText;
        quizEl.appendChild(h2);
        }
        
    }
    function renderAnswers(){
        // innerHTML clear?
        
            for (var i = 0; i < answersArray1.length; i++) {
                var answerText = answersArray1[i];
        
        console.log(`answersArray1: ${answersArray1[i]}`);
               
                var li = document.createElement("li");
                var answerButton = document.createElement("button");
                answerButton.textContent = answerText;
                li.appendChild(answerButton);
                answerEl.appendChild(li);
                }
                
    }

  
    

// TODO:function that clears most elements from the page and presents the prompt arrays
startEl.addEventListener("click", function(event) {
    console.log("uhhh, 'click'")
   // TODO: An on page notification that the correct/incorrect answer was selected 
   renderAnswers(); 
   renderPrompt();
})