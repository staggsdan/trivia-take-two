// array of objects for questions
const questions = [{
    question: "Goner Records first release was a title by:",
    options: ["Reigning Sound", "Guitar Wolf", "Jay Reatard", "Coco Coma"],
    answer: "Guitar Wolf"},
    {question: "tk",
    options: ['tk','tk','tk','tk'],
    answer: "tk"}
];

// global variables
var timer = 30000;
var correctTally = 0;
var incorrectTally = 0;
var nullAnswerTally = 0;
var displayedQuestion = "";
var userChoice = "";
var questionCounter = 0;



// function to fill the div with a 'start play' card
// function writeGreeting(){
//     $('#start-button').hide();
//     $('#main-div').append('<div id="instructions-div"></div>');
//     // alert("doin' it");
    
//     // $("#main-div").html("<div   id=instructions-div></div>");
//     $('#instructions-div').text("Do your best to answer all the questions before time runs out!");
//     $('#main-div').append('<button id="new-button">Lets go</button>');
// }

// function to load the questions. 
function loadQuestions(){
    $('#main-div').append('<div id="question-box"></div>')
    $('#question-box').append(questions[questionCounter].question + '<br>');
    $('#main-div').append('<div id="answer-zone"></div>')
    // $('#answer-zone').append(questions[questionCounter].options)
    for (let i = 0; i < questions[questionCounter].options.length; i++) {
        // $('#answer-zone').append('<p >' + questions[questionCounter].options[i] + '</p>');
        // $('#answer-zone').append('<id="answer-'i'">'questions[questionCounter].options[i] + '<br>')
        $('#answer-zone').append(`<button id="answer-${i}" class="answer-buttons">${questions[questionCounter].options[i]} </button><br> <this.match=${i}>`);
        
    }
}


// function to compare user input with correct answer
// function compareInputs(){
//     for (let i = 0; i < array.length; i++) {
//         if (questions[i].answer === userChoice[i]) {
            
//         }
        
//     }
// }


// function to calculate a final scorecard


// function to reset counters and allow for a new game


// event listener for click to start game


// event listener for answer selection
// document.getElementById("button").addEventListener("click", writeGreeting());
// writeGreeting();

// $("#start-button").click(function(){
//     writeGreeting()
// });
// document.getElementsByClassName("answer-buttons").addEventListener("click", alert("clicks"));

// $(".answer-buttons").click(function(){
//     // loadQuestions()
//     alert("pressed it!");
// })
$("#start-button").click(function(){
    $('#start-button').hide();
    loadQuestions()
});

$(document).on('click','.answer-buttons',function(){
   if (this.match === questions[0].answer) {
       alert("nice")
   }
})