// quiz.js

// Tableau des questions
const questionsCultureGenerale = [
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
    {
        question: "Qui a écrit 'Le Petit Prince' ?",
        options: ["Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus", "Franz Kafka"],
        answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Quelle est la capitale du Canada ?",
        options: ["Toronto", "Ottawa", "Montréal", "Québec"],
        answer: "Ottawa"
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        options: ["Mont Everest", "K2", "Mont Kilimandjaro", "Mont McKinley"],
        answer: "Mont Everest"
    },
    {
        question: "Quelle est la monnaie du Japon ?",
        options: ["Yuan", "Yen", "Roupie", "Baht"],
        answer: "Yen"
    },
    {
        question: "Qui a écrit 'Hamlet' ?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"],
        answer: "William Shakespeare"
    },
    {
        question: "Quelle est la plus grande île du monde ?",
        options: ["Australie", "Groenland", "Nouvelle-Guinée", "Borneo"],
        answer: "Groenland"
    },
    {
        question: "Quelle est la langue la plus parlée au monde ?",
        options: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "Quelle est la langue officielle du Brésil ?",
        options: ["Portugais", "Espagnol", "Anglais", "Allemand"],
        answer: "Portugais"
    },
    {
        question: "Quel est le plus grand animal terrestre ?",
        options: ["Éléphant d'Afrique", "Rhinocéros blanc", "Girafe", "Ours polaire"],
        answer: "Éléphant d'Afrique"
    },
    {
        question: "Quel est le pays le plus peuplé du monde ?",
        options: ["Inde", "Chine", "États-Unis", "Brésil"],
        answer: "Chine"
    },
    {
        question: "Qui a écrit 'Les Fleurs du Mal' ?",
        options: ["Charles Baudelaire", "Victor Hugo", "Gustave Flaubert", "Émile Zola"],
        answer: "Charles Baudelaire"
    },
    {
        question: "Quel est le pays le plus petit du monde par superficie ?",
        options: ["Monaco", "Malte", "Nauru", "Vatican"],
        answer: "Vatican"
    },
    {
        question: "Qui a écrit 'Madame Bovary' ?",
        options: ["Gustave Flaubert", "Émile Zola", "Honoré de Balzac", "Guy de Maupassant"],
        answer: "Gustave Flaubert"
    },
    {
        question: "Quelle est la capitale de l'Allemagne ?",
        options: ["Hambourg", "Berlin", "Munich", "Francfort"],
        answer: "Berlin"
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        options: ["Sahara", "Antarctique", "Gobi", "Arabie"],
        answer: "Antarctique"
    },
    {
        question: "Quelle est la devise de l'Union européenne ?",
        options: ["In varietate concordia", "Liberté, Égalité, Fraternité", "United in diversity", "E pluribus unum"],
        answer: "In varietate concordia"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Alexandre Dumas"],
        answer: "Victor Hugo"
    },
    {
        question: "Quelle est la capitale de l'Argentine ?",
        options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
        answer: "Buenos Aires"
    },
    {
        question: "Qui a écrit 'Les Fables' ?",
        options: ["Jean de La Fontaine", "Voltaire", "Molière", "Jean-Jacques Rousseau"],
        answer: "Jean de La Fontaine"
    }
];

const questionsChansons = [
    {
        question: "Qui a chanté 'Bohemian Rhapsody' ?",
        options: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
        answer: "Queen"
    },
    {
        question: "Qui a chanté 'Shape of You' ?",
        options: ["Ed Sheeran", "Justin Bieber", "Taylor Swift", "Adele"],
        answer: "Ed Sheeran"
    },
    // ... autres questions sur les chansons
];

const questionsDessinsAnimes = [
    {
        question: "Quel personnage est un célèbre chasseur de fantômes ?",
        options: ["Scooby-Doo", "Tom", "Astérix", "Gaston Lagaffe"],
        answer: "Scooby-Doo"
    },
    {
        question: "Qui est l'ami de Winnie l'Ourson ?",
        options: ["Porcinet", "Tigrou", "Bourriquet", "Jean-Christophe"],
        answer: "Porcinet"
    },
    // ... autres questions sur les dessins animés
];

// Éléments DOM
const quizContainer = document.getElementById('quiz-container');
const themeCultureBtn = document.getElementById('theme-culture');
const themeChansonsBtn = document.getElementById('theme-chansons');
const themeDessinsBtn = document.getElementById('theme-dessins');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');
const finishButton = document.getElementById('finish-btn');

// Variables du quiz
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Écouter le clic sur les boutons de thème et démarrer le quiz correspondant
themeCultureBtn.addEventListener('click', () => {
    startQuiz(questionsCultureGenerale);
});

themeChansonsBtn.addEventListener('click', () => {
    startQuiz(questionsChansons);
});

themeDessinsBtn.addEventListener('click', () => {
    startQuiz(questionsDessinsAnimes);
});

// Fonction pour démarrer le quiz avec les questions du thème sélectionné
function startQuiz(selectedQuestions) {
    questions = selectedQuestions;
    quizContainer.classList.remove('hidden');
    initializeQuiz();
}

// Fonction pour initialiser le quiz
function initializeQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.classList.add('hidden');
    showQuestion();
    nextButton.addEventListener('click', nextQuestion);
}

// Fonction pour afficher la question courante
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionTextElement = document.getElementById('question-text'); // Récupérer l'élément pour afficher la question

    questionTextElement.textContent = currentQuestion.question; // Utiliser l'élément récupéré pour afficher la question

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(optionElement);
    });
}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    disableOptions();
    showNextButton();
}

// Fonction pour désactiver les options après avoir sélectionné une réponse
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

// Fonction pour afficher le bouton Suivant
function showNextButton() {
    nextButton.classList.remove('hidden');
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetQuiz();
        showQuestion();
    } else {
        showResult();
    }
}

// Fonction pour réinitialiser l'état du quiz pour la prochaine question
function resetQuiz() {
    nextButton.classList.add('hidden');
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });
}

// Fonction pour afficher le score final et le bouton "Terminer"
function showResult() {
    resultContainer.innerHTML = '';
    resultContainer.classList.remove('hidden');

    const scoreTitle = document.createElement('h2');
    scoreTitle.textContent = 'Votre Score';
    resultContainer.appendChild(scoreTitle);

    scoreText.textContent = `Vous avez marqué ${score} sur ${questions.length}`;
    resultContainer.appendChild(scoreText);

    finishButton.classList.remove('hidden');
    finishButton.addEventListener('click', () => {
        resultContainer.classList.add('hidden');
        quizContainer.classList.add('hidden');
    });
}

// Initialisation du quiz (cache par défaut le conteneur de quiz et les boutons de thème visibles)
quizContainer.classList.add('hidden');
themeCultureBtn.classList.remove('hidden');
themeChansonsBtn.classList.remove('hidden');
themeDessinsBtn.classList.remove('hidden');