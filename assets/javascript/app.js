$(document).ready(function() {

$(".questionsform").hide();
$(".resultbox").hide();

//60 SECOND TIMER
var win = 0;
var timer;
sec=5;

function countDown() {
    if (sec > 0) {
    sec--;
    $(".timer").html("00:"+sec);
    } else {
        stop();
    }
}


function stop () {
clearInterval(timer);
check();
displayResult();
};

//CLICK THE START BUTTON TO BEGIN TIMER
$(".startbutton").on("click",run);

function run() {
    clearInterval(timer);
    var timer = setInterval(countDown,1000);
    win=0;
    $(".questionsform").show();
    $(".resultbox").hide();
    $(".startbox").hide();
    }

//CHECK ANSWERS
function check() {
    var q1answer = $("input[type=radio][name=q1]:checked").val();
    console.log(q1answer);
    if (q1answer == 4) {
        win++;
    }
    var q2answer = $("input[type=radio][name=q2]:checked").val();
    console.log(q2answer);
    if (q2answer == -1) {
        win++;
    }
    var q3answer = $("input[type=radio][name=q3]:checked").val();
    console.log(q3answer);
    if (q3answer == 5) {
        win++;
    }
    displayResult();
}

function displayResult(){
    $(".result").text("You got " + win + " out of 3 questions right!");
    $(".resultbox").show();
    $(".questionsform").hide();
}

$(".submitbutton").on("click",check);




























/*function game() {
    for (i=0;i<myQuestions.length;i++) {
        $(".questionsform").append("<div class='question'></div>");
        $(".question").text(myQuestions[0]);
    }
}*/


var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
    },
    	{
		question: "What is 20+3?",
		answers: {
			a: '22',
			b: '17',
			c: '23'
		},
		correctAnswer: 'c'
	}
];

    
})



/*Pseudo-code of more challenging game
1) Set Variables
    wins, losses, question#
2) Set Array of Questions and Answers
    each question with 4 choices(a,b,c,d)
3) Set Timer Function
4) Logic:
    1st question displays - time runs - 
        while time is not 0
            if answer is correct
                congrats
                updatewins
                nextquestion
            else 
                sorry, show answer
                updatedloss
                nextquestion
        when time = o
                sorry, show answer
                updatedloss
                nextquestion
5) At the end of game, determine the financial literacy of a person (else if)
        0-2 - read up
        3-5 - novice
        6-7 - you know your stuff
        8-9 - finance guru
        10 - finance sensei*/

//Questions
