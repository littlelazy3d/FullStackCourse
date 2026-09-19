const startscreen = document.getElementById("start-screen");
const quizscreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");

const progress = document.getElementById("progress");


const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },

    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "O2", "H2O", "NaCl"],
        answer: "H2O"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },

    {
        question: "How many days are there in a leap year?",
        options: ["365", "366", "364", "360"],
        answer: "366"
    },

    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    }

];
    
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const countdown = document.getElementById("timer");

//TIMER COUNTDOWN
const startingMinutes = 10;
let time = startingMinutes * 60;                 //10 seconds * 60 = 600 seconds

setInterval(updateCountdown, 1000);             //update the countdown every second

function updateCountdown() {
    const minutes = Math.floor(time / 60);       //take seconds and convert to minutes
    let seconds = time % 60;                     //take the remainder of seconds after converting to minutes
    if (seconds <10) {
        seconds = "0" + seconds;
    }
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";              //because at the end of the quiz it will change to restart (change the text content of it)
    showQuestion();                             //calling the function to show the questions
    prevButton.style.display = "none";          //hide the previous button on the first question
}                                               //calling before creating it => hoisting


function showQuestion() {
    answerButton.innerHTML = "";             // remove old buttons
    //or resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //changing text content of choose to question number

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(option === currentQuestion.answer) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });

    if(currentQuestionIndex === 0) {
        prevButton.style.display = "none";        //hide the previous button on the first question
    } else {
        prevButton.style.display = "block";
    }                                             //show the previous button on the other questions

    progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`
}

function selectAnswer(e) {                         //e is an event
    const selectedbtn = e.target;                  //target is the button that was clicked
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect) {                                         //if iscorrect is true
        score++;
        selectedbtn.classList.add("correct");
    } else {
        selectedbtn.classList.add("wrong");
    }

    //Disable buttons after clicking
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
    prevButton.style.display = "block";    //show buttons after selecting an answer
}


function showScore() {
    answerButton.innerHTML = "";             // remove old buttons
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Retake the quiz"; 
    nextButton.style.display = "block"; 
    prevButton.style.display = "block";
}

// To show the score at the end of the quiz if all questions are answered 
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

prevButton.addEventListener("click", () => {
    if(currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        nextButton.style.display = "block";                 // Show the next button when going back to a previous question
    }
});

startBtn.addEventListener("click", () => {
    startscreen.style.display = "none";          //hide the start screen
    quizscreen.style.display = "block";          //show the quiz screen

    startQuiz();                                        //call the function to start the quiz   
                                   //call the function to start the timer
})

/*  function resetState() {
        nextButton.style.display = "none";
        while (answerButton.removeChild(answerButton.firstChild));
        }
} */



//login part
        const form = document.getElementById('form');
        const firstname = document.getElementById('fname');
        const email = document.getElementById('email');
        const lastname = document.getElementById('lname');
        const password = document.getElementById('password');
        const confirmPass = document.getElementById('confirmPass');

        form.addEventListener("submit", function(event) {
            let error = [];
            if(firstname.value === '' || firstname === null){
                error.push('field required')
            }

            if(password.value.length < 8){
                error.push('password must be atleast 8 characters')
            }
            if(password.value !== confirmPass.value){
                error.push('passwords do not match');
            }

            if(error.length > 0){
            event.preventDefault();
            alert(error.join('\n'));
            
            } else {
            event.preventDefault();

            console.log("Login successful");

            document.querySelector(".container").style.display = "none";
            document.querySelector(".app").style.display = "block";
            }
                
            });