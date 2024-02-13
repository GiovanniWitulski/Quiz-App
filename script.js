let questions = [
    {
         "question": "frage",
         "answer1": "antwort",
         "answer2": "antwort",
         "answer3": "antwort",
         "answer4": "antwort",
         "right-answer": 1
    },
    {
        "question": "frage",
        "answer1": "antwort",
        "answer2": "antwort",
        "answer3": "antwort",
        "answer4": "antwort",
        "right-answer": 1
   },
   {
        "question": "frage",
        "answer1": "antwort",
        "answer2": "antwort",
        "answer3": "antwort",
        "answer4": "antwort",
        "right-answer": 1
    },
    {
        "question": "frage",
        "answer1": "antwort",
        "answer2": "antwort",
        "answer3": "antwort",
        "answer4": "antwort",
        "right-answer": 1
    },
    {
        "question": "frage",
        "answer1": "antwort",
        "answer2": "antwort",
        "answer3": "antwort",
        "answer4": "antwort",
        "right-answer": 1
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectetAnswer = selection.slice(-1);
    
    if (selectetAnswer == question['right-answer']) {
        console.log('richtige Antwort');
    } else {
        console.log('falsche Antwort');
    }
}