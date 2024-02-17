let questions = [
    {
         "question": "Was ist die Hauptstadt von Frankreich?",
         "answer1": "a) Berlin",
         "answer2": "b) Madrid",
         "answer3": "c) Rom",
         "answer4": "d) Paris",
         "right-answer": 4
    },
    {
        "question": "Welches Element hat das chemische Symbol <b>H</b> ?",
        "answer1": "a) Helium",
        "answer2": "b) Wasserstoff",
        "answer3": "c) Stickstoff",
        "answer4": "d) Sauerstoff",
        "right-answer": 2
   },
   {
        "question": "Wer hat das Gemälde <b>Die Mona Lisa</b> gemalt?",
        "answer1": "a) Vincent van Gogh",
        "answer2": "b) Leonardo da Vinc",
        "answer3": "c) Pablo Picasso",
        "answer4": "d) Michelangelo",
        "right-answer": 2
    },
    {
        "question": "Welcher Planet ist der vierte in unserem Sonnensystem?",
        "answer1": "a) Mars",
        "answer2": "b) Jupiter",
        "answer3": "c) Venus",
        "answer4": "d) Saturn",
        "right-answer": 1
    },
    {
        "question": "Welcher berühmte Physiker formulierte die Relativitätstheorie?",
        "answer1": "a) Isaac Newton",
        "answer2": "b) Albert Einstein",
        "answer3": "c) Stephen Hawking",
        "answer4": "d) Galileo Galilei",
        "right-answer": 2
    },
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';

        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;

        document.getElementById('headerImg').src = 'img/trophy.png';
    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBar').innerHTML = `${percent} %`;
        document.getElementById('progressBar').style = `width: ${percent}%`;
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];        
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectetAnswer = selection.slice(-1);
    let idOfRightAnswer = `answer${question['right-answer']}`;
    
    if (selectetAnswer == question['right-answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    resetAnswerBtns();
    showQuestion();
}

function resetAnswerBtns() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer1').parentNode.classList.remove('bg-success')
    document.getElementById('answer2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer2').parentNode.classList.remove('bg-success')
    document.getElementById('answer3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer3').parentNode.classList.remove('bg-success')
    document.getElementById('answer4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer4').parentNode.classList.remove('bg-success')
}