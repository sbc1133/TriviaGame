/**********************************
@author: Shivali Bhalla
@project: Trivia Game 
**************************************/

//-------------------Global Variables------------------

var questionNo = 0;

var correctCount = 0;
var incorrectCount = 0;

var intervalId;

var chosenAnswer;

var questionObject = [{ question: "What comess befor T ?", answer: "s", choices: ["a", "f", "s"], time: 20 },
{ question: "I am second Question", answer: "second", choices: ["first", "second", "third"], time: 30 },
{ question: "I am third Question", answer: "third", choices: ["first", "second", "third"], time: 40 }
]
var totalQuestion = questionObject.length;


//-------------------------Functions------------------------------------------

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

function decrement() {

    var number = $("#timer").text();
    number--;
    //  Once number hits zero...
    if (number === 0) {
        $("#timer").text(number);
        //  ...run the stop function.
        stop();
    }
    $("#timer").text(number);
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function displayQuestion(qo) {
    // Dispaly Question Number 
    $("#qid").text(index + 1);
    // Display Question 
    $("#question").text(qo.question);
    // Dispaly choices
    $("#label-1").text(qo.choices[0]);
    $("#label-2").text(qo.choices[1]);
    $("#label-3").text(qo.choices[2]);
    $("#timer").text(qo.time);
    $("#message").text("");
    $('input[name="selector"]').prop('checked', false);
    run();
}

function showResults() {
    $(".my-row-2").addClass("invisible");
    $(".my-row-3").addClass("invisible");
    var resultContainer = $("<div>");
    var correctContainer = $("<h2>").text("Correct Answers: ").append($("<span>").text(correctCount));
    var incorrectContainer = $("<h2>").text("Incorrect Answers: ").append($("<span>").text(incorrectCount));
    resultContainer.append(correctContainer).append(incorrectContainer);
    $("#header").append(resultContainer);
}

//-------------------------------------------------------
//------------------------- Script Starts ---------------
//--------------------------------------------------------
var index = 0;
console.log("there are :" + questionObject.length + " questions in quiz");

$("#start-game").click(function () {
    $(".start-page").addClass("invisible");
    $(".my-row-2").removeClass("invisible");
    $(".my-row-3").removeClass("invisible");
    

    // displaying first question
    displayQuestion(questionObject[index]);

   $("input").click(function () {
        $("input[type='radio']:checked").each(function () {
            var idVal = $(this).attr("id");
            chosenAnswer = $("label[for='" + idVal + "']").text();
            console.log("i am chose: ", chosenAnswer);
        });
        if (chosenAnswer === questionObject[index].answer) {
            console.log("correct answer");
            $("#answer").text("Yay! you got it Right"+"\n"+ questionObject[index].answer);
            index = index + 1;
            correctCount++;
            setTimeout(function () { displayQuestion(questionObject[index]) }, 3000);
            $("#message").removeClass("invisible");
            $("#message").attr("class","text-success").text("Correct Answer!")
            stop();
            if (index === totalQuestion) {
                console.log("found last question")
                if (chosenAnswer === questionObject[index-1].answer) {
                    $("#message").removeClass("invisible");
                    $("#message").text("Correct Answer!")
                }
                setTimeout(function(){showResults()},3000);
            }
        } else {           
            $("#message").text("Incorrect Answer!");
            $("#answer").text(questionObject[index].answer);
            index = index+1
            setTimeout(function () { displayQuestion(questionObject[index]) }, 3000);
            console.log("Incorrect answer :(");
            incorrectCount++
            $("#message").removeClass("invisible");
            $("#message").attr("class","text-danger").text("Incorrect Answer!")
            stop();
            if (index === totalQuestion) {
                console.log("found last question")
                if (chosenAnswer === questionObject[index-1].answer) {
                    $("#message").removeClass("invisible");
                    $("#message").text("Correct Answer!")
                }
                setTimeout(function(){showResults()},3000);
            }
        }
    });
});





