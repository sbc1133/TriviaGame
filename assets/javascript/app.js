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
var incorrectCount =0;

var intervalId;

var chosenAnswer;

var questionObject = [{ question: "I am first Question", answer: "first", choices: ["first", "second", "third"], time: 20 },
{ question: "I am second Question", answer: "second", choices: ["first", "second", "third"], time: 30 },
{ question: "I am third Question", answer: "third", choices: ["first", "second", "third"], time: 40 }
]


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
        timerRunning = false;
    }
    $("#timer").text(number);
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}



function displayQuestion(qo) {
    var correct = qo.answer;
    // display question 
    $("#question").text(qo.question);
    // Dispaly choices
    $("#label-1").text(qo.choices[0]);
    $("#label-2").text(qo.choices[1]);
    $("#label-3").text(qo.choices[2]);
    $("#timer").text(qo.time);
    run();
    return correct;
}

/////--------------------
var index=0;
console.log(questionObject.length)



displayQuestion(questionObject[index]);


// grab the value of selected answer
// compare it to the right answer
$("label").click(function () {
    chosenAnswer = $(this).text();
    console.log(chosenAnswer)

});

$("button").click(function () {
    // console.log(questionObject[i].answer)
    if (chosenAnswer === questionObject[index].answer) {
        console.log("correct answer");
        correctCount++;
        stop();
        index++;
        if ( index>2){
            showResults();
        }
        displayQuestion(questionObject[index]);
        

    }else{
        console.log("Incorrect answer :(");
        incorrectCount++
    }
});




