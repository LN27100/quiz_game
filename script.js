// Load questions from questions.js
const questions = [
    {
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Quelle planète est connue sous le nom de planète rouge?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: "Mars"
    },
    // Add more questions as needed
];

// DOM elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;

// Function to initialize quiz
function initializeQuiz() {
    showQuestion();
    nextButton.addEventListener('click', nextQuestion);
}

// Function to display current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(optionElement);
    });
}

// Function to check selected answer
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    disableOptions();
    showNextButton();
}

// Function to disable options after selecting an answer
function disableOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === questions[currentQuestionIndex].answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });
}

// Function to show next button
function showNextButton() {
    nextButton.classList.remove('hidden');
}

// Function to move to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetQuiz();
        showQuestion();
    } else {
        showResult();
    }
}

// Function to reset quiz state
function resetQuiz() {
    nextButton.classList.add('hidden');
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });
}

// Function to display final score
function showResult() {
    resultContainer.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

// Initialize quiz when page loads
initializeQuiz();
