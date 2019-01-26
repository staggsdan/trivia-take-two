// array of objects for questions
const questions = [{
    question: "Goner Records first release was a title by:",
    options: ["Reigning Sound", "Guitar Wolf", "Jay Reatard", "Coco Coma"],
    answer: 1},
    {question: "Hozac Records was originally a zine called",
    options: ['Honga Zonga','Hot Zesty Action','Horizontal Action','Hog Zed Ace'],
    answer: 2},
    {question: "Sympathy for the Record Industry is an independent record label run by : ",
    options:["Long Gone John", "Strong Stark Ron", "Bold Sizzlin' Tom","Long John Silver"],
    answer: 0 },
    {question: "At the time this quiz was written, Billy Childish's discogs profile features how many album and single appearances?",
    options: ["44", "18", "7", "67"],
    answer: 3},
    {question: "The Mono Men once played a live accompaniment to a striptease at a bowling alley in ",
    options: ["Duboque, IA", "Normal, IL", "Bloomington, IL", "Bloomington, IN"],
    answer: 2}

];

// global variables
var timer;
var correctTally = 0;
var incorrectTally = 0;
var nullAnswerTally = 0;
var displayedQuestion = "";
var userChoice = "";
var questionCounter = 0;

function createGameDivs(){
    
    $('#main-div').append('<div id="question-box"></div>');
    $('#main-div').append('<div id="answer-zone"></div>');
    $('#main-div').append('<div id="score-zone"></div>');
}

function loadQuestions(){
    $('#main-div').prepend('<div id="timer-box"></div>');
    timer = 30;
    setInterval(everySecond, 1000);
    function everySecond() {
        timer--,
        $("#timer-box").html("time remaining " + timer);
      }
    $('#question-box').empty();
    $('#answer-zone').empty();
    
    $('#question-box').html(questions[questionCounter].question + '<br>');
    for (let i = 0; i < questions[questionCounter].options.length; i++){
        $('#answer-zone').append(`<button id="answer-${i}" class="answer-buttons" value=${i}>${questions[questionCounter].options[i]} </button><br> `);
    }
    // if (timer < 1) {
    //     incorrectTally++;
    //     loadQuestions()
    // }
    
}

$("#start-button").click(function(){
    $('#start-button').hide();
    createGameDivs();
    loadQuestions();
});

$(document).on('click','.answer-buttons',function(){
    $('#timer-box').remove();
   if (this.value == questions[questionCounter].answer) {
       alert("nice");
       correctTally++;
   } else {   
       incorrectTally++;
   };
   $('#score-zone').html("current score is " + correctTally + " of 5");
   questionCounter++;
   loadQuestions();
})