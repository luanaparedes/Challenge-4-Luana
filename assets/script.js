// select all elements

const startButton = document.getElementById("start-button")
const start = document.getElementById("start-page")
const quiz = document.getElementById("quiz-container")
const question = document.getElementById("question")
const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")
const op3 = document.getElementById("op3")
const op4 = document.getElementById("op4")
const timer = document.getElementById("timer")
const option = document.getElementsByClassName("option")
const allDone = document.getElementsByClassName("all-done")
const submitButton = document.getElementsByClassName("score-submit")
const highscores = document.getElementsByClassName("highscores-container")


// questions

let questions = [

    {
        question : "Commonly used data types DO NOT include:",
        op1 : "strings",
        op2 : "booleans",
        op3 : "alerts",
        op4 : "numbers",
        correct : "op3",
    },{
        question : "The condition in an if / else statement is enclosed within ____.",
        op1 : "quotes",
        op2 : "curly brackets",
        op3 : "parentheses",
        op4 : "square braces",
        correct : "op4",
    },{
        question : "Arrays in JavaScript can be used to store _____.",
        op1 : "numbers and strings",
        op2 : "other arrays",
        op3 : "booleans",
        op4 : "all of the above",
        correct : "op4",
    },{
        question : "String values must be enclosed within _____ when being assigned to variables.",
        op1 : "commas",
        op2 : "curly braces",
        op3 : "quotes",
        op4 : "parentheses",
        correct : "op4",
    },{
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        op1 : "for loops",
        op2 : "console log",
        op3 : "JavaScript",
        op4 : "terminal / bash",
        correct : "op2",
    }
];

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

// render a question

function renderQuestion() {
    
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+q.question +"</p>";
    op1.innerHTML = q.op1;
    op2.innerHTML = q.op2;
    op3.innerHTML = q.op3;
    op4.innerHTML = q.op4;

}

startButton.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    startTimer()
    renderQuestion();
    quiz.style.display = "block";
}                                                                                     

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        answerIsCorrect();
    }else{
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion()
    }else{
        scoreRender();
    }
};


function answerIsCorrect(){
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Correct!";
}

function answerIsWrong(){
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Wrong!";
    //timer
}

function scoreRender(){
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("all-done").style.display = "block";
    
    document.getElementById("final-score").innerHTML = timer.textContent
}


function startTimer(){

    var count = 75;
    var interval = setInterval(function() {
        document.getElementById("timer").innerHTML = count;
        count--
    if (count === 0){
            clearInterval(interval);
            document.getElementById('timer').innerHTML='0';
            scoreRender()
        }
    else if (document.getElementById("all-done").style.display === "block") {
        clearInterval(interval);
        document.getElementById('timer').innerHTML= count;
    }
    

    },1000);

}

var uScore = document.getElementById("final-score");
var userInit = document.getElementById("initials");



function saveScore(){

    document.getElementsByClassName('all-done')[0].style.display = "none";
    
    document.getElementsByClassName('highscores-container')[0].style.display = "block";

    
    localStorage.setItem("userInitials", userInit);

    localStorage.setItem("userScore", uScore);

}

backButton = document.getElementsByClassName('go-back')



function restart(){
    
    document.getElementsByClassName('highscores-container')[0].style.display = "none";
    document.getElementById('start-page').style.display = "block";
}
