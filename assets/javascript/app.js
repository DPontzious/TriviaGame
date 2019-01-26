$(document).ready(function () {
    var correctAnswerCounter = 0;
    var incorrectAnswerCounter = 6 - correctAnswerCounter;
    var userAnswers = {};
    var correctAnswers = {
        "question1": "$25",
        "question2": "Creed was sprouting mung beans in his desk.",
        "question3": "Gas Station",
        "question4": "www.creedthoughts.gov.www/creedthoughts",
        "question5": "Finer Things Club",
        "question6": "Sprinkles"
    }
    $('#button').on("click", function () {
        $(".container").empty().html('<h2>' + "You got " + correctAnswerCounter + " correct answers!" + '</h2>');
        for (var q in correctAnswers) {
            // console.log('q', q);
            // console.log('correct answer', correctAnswers[q]);
            if (correctAnswers[q] === userAnswers[q]) {
                correctAnswerCounter++;

            }
        }
    });
    $('input[type=radio]').change(function (event) {
        userAnswers[event.target.name] = event.target.value;
    });
    var number = 60;
    var intervalId;
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            $(".container").empty().html('<h1>' + "You got " + correctAnswerCounter + " correct answers!" + '</h1>');
        }
    }
    function stop() {
        clearInterval(intervalId);
    }
    run();
});