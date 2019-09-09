/**********************************
@author: Shivali Bhalla
@project: Trivia Game 
**************************************/

//TODO:   Create an object quizQuestion with properties Question, answers , time, correctAnswer
//TODO:     
//TODO:
//TODO:
//TODO:
//TODO:
//TODO:

var questionNo = 0;

var correctCount = 0;
var incorrectCount = 0;

var intervalId;

var chosenAnswer;

var questionObject = [{ question: "I am first Question", answer: "first", choices: ["first", "second", "third"], time: 20 },
{ question: "I am second Question", answer: "second", choices: ["first", "second", "third"], time: 30 },
{ question: "I am third Question", answer: "third", choices: ["first", "second", "third"], time: 40 }
]
var totalQuestion = questionObject.length;


// display first question in html



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
    // var correct = qo.answer;

    // Dispaly questioon number 
    $("#qid").text(index + 1);
    // Display Question 
    $("#question").text(qo.question);
    // Dispaly choices
    $("#label-1").text(qo.choices[0]);
    $("#label-2").text(qo.choices[1]);
    $("#label-3").text(qo.choices[2]);
    $("#timer").text(qo.time);
    $("#message").text("");
    run();
    // return correct;
}
function showResults() {
    $(".my-row-2").addClass("invisible");
    $(".my-row-3").addClass("invisible");
    $(".my-row-4").addClass("invisible");
    var resultContainer = $("<div>");
    resultContainer.append("<h2>")
    $("#header").append(resultContainer);
}

/////--------------------Script starts here ---------------
var index = 0;
console.log("there are :" + questionObject.length + " questions in quiz");

$("#start-game").click(function () {
    $(".start-page").addClass("invisible");
    $(".my-row-2").removeClass("invisible");
    $(".my-row-3").removeClass("invisible");
    $(".my-row-4").removeClass("invisible");
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

            index = index + 1;
            correctCount++;
            setTimeout(function () { displayQuestion(questionObject[index]) }, 2000);
            $("#message").removeClass("invisible");
            $("#message").text("Correct Answer!")
            stop();
            if (index === totalQuestion) {
                console.log("found last question")
                if (chosenAnswer === questionObject[index-1].answer) {
                    $("#message").removeClass("invisible");
                    $("#message").text("Correct Answer!")
                }
                setTimeout(function(){showResults()},2000);
            }
        } else {
            $("#message").text("Incorrect Answer!")
            setTimeout(function () { displayQuestion(questionObject[index]) }, 2000);
            console.log("Incorrect answer :(");
            incorrectCount++
            $("#message").removeClass("invisible");
            $("#message").text("InCorrect Answer!")
            stop();
            if (index === totalQuestion) {
                console.log("found last question")
                if (chosenAnswer === questionObject[index-1].answer) {
                    $("#message").removeClass("invisible");
                    $("#message").text("Correct Answer!")
                }
                setTimeout(function(){showResults()},2000);
            }
        }
    });
});





