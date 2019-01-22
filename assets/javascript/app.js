// array of objects for questions
const questions = [{
    question: "Goner Records first release was a title by:",
    options: ["Reigning Sound", "Guitar Wolf", "Jay Reatard", "Coco Coma"],
    answer: 1},
    {question: "Hozac Records was originally a zine called",
    options: ['Honga Zonga','Hot Zesty Action','Horizontal Action','Hog Zed Ace'],
    answer: 2}
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

function createGameDivs(){
    $('#main-div').append('<div id="question-box"></div>');
    $('#main-div').append('<div id="answer-zone"></div>')
}

function loadQuestions(){
    $('#question-box').empty();
    $('#answer-zone').empty();
    $('#question-box').html(questions[questionCounter].question + '<br>');
    for (let i = 0; i < questions[questionCounter].options.length; i++){
        $('#answer-zone').append(`<button id="answer-${i}" class="answer-buttons" value=${i}>${questions[questionCounter].options[i]} </button><br> `);
    }
}



// function to load the questions. 
// function loadQuestions(){
//     $('#main-div').append('<div id="question-box"></div>')
//     $('#question-box').append(questions[questionCounter].question + '<br>');
//     $('#main-div').append('<div id="answer-zone"></div>')
//     // $('#answer-zone').append(questions[questionCounter].options)
    
//     for (let i = 0; i < questions[questionCounter].options.length; i++) {
//         // $('#answer-zone').append('<p >' + questions[questionCounter].options[i] + '</p>');
//         // $('#answer-zone').append('<id="answer-'i'">'questions[questionCounter].options[i] + '<br>')
//         $('#answer-zone').append(`<button id="answer-${i}" class="answer-buttons" value=${i}>${questions[questionCounter].options[i]} </button><br> `);
//     };
//     var currentAnswer = (questions[questionCounter].answer);
// }

// function to create gameplay divs that leads to function to load questions

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
    createGameDivs();
    loadQuestions();
});

$(document).on('click','.answer-buttons',function(){
   alert("button value is " + this.value);
   alert("answer value is " +questions[questionCounter].answer);

   if (this.value === questions[questionCounter].answer) {
       alert("nice");
       
//    }
//     else if (this.value == 2 && questions[1]) {
//        alert("nice");
       
   } else {
       alert("lame")
   };
   questionCounter++;
   loadQuestions();
})