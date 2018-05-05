//60 SECOND TIMER
var sec=60;

function countDown() {
    setInterval(function(){
        if(sec>0){
            sec--;
            $(".timer").html("00:"+sec);
    } else {
        clearInterval();
        alert("Time has run out!")
    }},1000);
}

//CLICK THE START BUTTON TO BEGIN TIMER
$(".btn").on("click",run);

function run() {
    countDown();
    game();
    //$(".startbutton").hide();
}

function game() {
    for (i=0;i<myQuestions.length;i++) {
        $(".questionsform").append("<div class='question'></div>");
        $(".question").text(myQuestions[i]);
    }
}


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
