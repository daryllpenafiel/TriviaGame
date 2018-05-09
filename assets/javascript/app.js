$(document).ready(function() {
$(".questionsform").hide();
$(".resultbox").hide();

//60 SECOND TIMER
var win = 0;
var timer;
var sec=60;

function countDown() {
    console.log(sec);
    if (sec > 0) {
        sec--;
        if (sec>9){
            $(".timer").html("Time remaining: 00:"+sec);
        } else {
            $(".timer").html("Time remaining: 00:0"+sec);
        }   
    } else {
        console.log("stop");
        stop();
    }
}

//CLICK THE START BUTTON TO BEGIN TIMER
$(".startbutton").on("click",run);

function run() {
    clearInterval(timer);
    timer = setInterval(countDown,1000);
    win=0;
    $(".questionsform").show();
    $(".resultbox").hide();
    $(".startbox").hide();
    }

function stop () {
        clearInterval(timer);
        check();
        displayResult();
    };

//CHECK ANSWERS
function check() {
    win=0;
    var q1answer = $("input[type=radio][name=q1]:checked").val();
    if (q1answer == "correct") {
        win++;
    }
    var q2answer = $("input[type=radio][name=q2]:checked").val();
    if (q2answer == "correct") {
        win++;
    }
    var q3answer = $("input[type=radio][name=q3]:checked").val();
    if (q3answer == "correct") {
        win++;
    }
    var q4answer = $("input[type=radio][name=q4]:checked").val();
    if (q4answer == "correct") {
        win++;
    }
    var q5answer = $("input[type=radio][name=q5]:checked").val();
    if (q5answer == "correct") {
        win++;
    }
    var q6answer = $("input[type=radio][name=q6]:checked").val();
    if (q6answer == "correct") {
        win++;
    }
    var q7answer = $("input[type=radio][name=q7]:checked").val();
    if (q7answer == "correct") {
        win++;
    }
    var q8answer = $("input[type=radio][name=q8]:checked").val();
    if (q8answer == "correct") {
        win++;
    }
    var q9answer = $("input[type=radio][name=q9]:checked").val();
    if (q9answer == "correct") {
        win++;
    }
    var q10answer = $("input[type=radio][name=q10]:checked").val();
    if (q10answer == "correct") {
        win++;
    }
}

function displayResult(){
    if (win > 7) {
        $(".level").text("Romantic Level: Soldier of Love");
    } else if (win >3 && win <8) {
        $(".level").text("Romantic Level: Casual Romantic");
    } else {
        $(".level").text("Romantic Level: Probably Single");
    };
    $(".result").text("You got " + win + " out of 10 questions right!");
    $(".resultbox").show();
    $(".questionsform").hide();
}

function clearSelection(){
    $("input[type=radio]:checked").each(function(){
        this.checked = false;
    })    
};

function reset() {
    clearSelection();
    clearInterval(timer);
    $(".timer").html("Time remaining: 00:60");
    sec = 60;
    timer = setInterval(countDown,1000);
    $(".questionsform").show();
    $(".resultbox").hide();
    $(".startbox").hide();
    }

$(".submitbutton").on("click",stop);
$(".resetbutton").on("click",reset);

});
