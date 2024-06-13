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
        options: ["Gustave Flaubert", "Victor Hugo", "Émile Zola", "Alexandre Dumas"],
        answer: "Victor Hugo"
    },
    {
        question: "Quelle est la capitale de l'Argentine ?",
        options: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
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
    {
        question: "Qui a chanté 'La Vie en Rose' ?",
        options: ["Édith Piaf", "Jacques Brel", "Charles Aznavour", "Serge Gainsbourg"],
        answer: "Édith Piaf"
    },
    {
        question: "Quel chanteur a interprété 'Ne me quitte pas' ?",
        options: ["Jacques Brel", "Charles Aznavour", "Serge Gainsbourg", "Johnny Hallyday"],
        answer: "Jacques Brel"
    },
    {
        question: "Quel chanteur a chanté 'Purple Rain' ?",
        options: ["Prince", "Michael Jackson", "David Bowie", "Elton John"],
        answer: "Prince"
    },
    {
        question: "Quel chanteur a interprété 'L'aigle noir' ?",
        options: ["Barbara", "Mylène Farmer", "France Gall", "Michel Berger"],
        answer: "Barbara"
    },
    {
        question: "Qui a chanté 'Sous le vent' en duo avec Garou ?",
        options: ["Céline Dion", "Lara Fabian", "Nolwenn Leroy", "Christophe Maé"],
        answer: "Céline Dion"
    },
    {
        question: "Qui a chanté 'Imagine' ?",
        options: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        answer: "John Lennon"
    },
    {
        question: "Quel groupe a interprété 'J'ai demandé à la lune' ?",
        options: ["Indochine", "Téléphone", "Noir Désir", "Les Rita Mitsouko"],
        answer: "Indochine"
    },
    {
        question: "Qui a chanté 'Billie Jean' ?",
        options: ["Michael Jackson", "Prince", "David Bowie", "Elton John"],
        answer: "Michael Jackson"
    },
    {
        question: "Qui a chanté 'Adieu' ?",
        options: ["Slimane", "Vianney", "Julien Doré", "Jérémy Frérot"],
        answer: "Jérémy Frérot"
    },
    
    {
        question: "Qui a chanté 'My Heart Will Go On' ?",
        options: ["Céline Dion", "Mariah Carey", "Whitney Houston", "Madonna"],
        answer: "Céline Dion"
    },
    {
        question: "Qui a chanté 'À nos souvenirs' ?",
        options: ["Trois Cafés Gourmands", "Claudio Capéo", "Soprano", "Gims"],
        answer: "Trois Cafés Gourmands"
    },
    {
        question: "Qui a chanté 'La même' en duo avec Vianney ?",
        options: ["Maître Gims", "Slimane", "Julien Doré", "Amir"],
        answer: "Maître Gims"
    },
    {
        question: "Qui a chanté 'Tous les mêmes' ?",
        options: ["Stromae", "Maitre Gims", "Soprano", "Julien Doré"],
        answer: "Stromae"
    },
    {
        question: "Qui a chanté 'Ca va ça vient' ?",
        options: ["Vitaa", "Amel Bent", "Léa Castel", "Shy'm"],
        answer: "Vitaa"
    },
    {
        question: "Qui a chanté 'Dance Monkey' ?",
        options: ["Tones and I", "Ava Max", "Billie Eilish", "Dua Lipa"],
        answer: "Tones and I"
    },
    {
        question: "Quelle chanson de Aya Nakamura a été certifiée single de diamant en France ?",
        options: ["Djadja", "Pookie", "Copines", "La Dot"],
        answer: "Djadja"
    },
    {
        question: "Qui a chanté 'Shallow' en duo avec Lady Gaga ?",
        options: ["Bradley Cooper", "Sam Smith", "Shawn Mendes", "Harry Styles"],
        answer: "Bradley Cooper"
    },
    {
        question: "Qui a chanté 'Mon soleil' en 2021 ?",
        options: ["Jérémy Frérot", "Vianney", "Jenifer", "Dadju"],
        answer: "Dadju"
    }

];

const questionsDessinsAnimes = [
    {
        question: "Quel personnage est un célèbre chasseur de fantômes ?",
        options: ["Astérix", "Scooby-Doo", "Gaston Lagaffe", "Tom"],
        answer: "Scooby-Doo"
    },
    {
        question: "Quel est le nom de l'héroïne dans 'Sailor Moon' ?",
        options: ["Makoto", "Rei", "Usagi", "Ami"],
        answer: "Usagi"
    },
    {
        question: "Quel est le nom du lionceau protagoniste du 'Roi Lion' de Disney ?",
        options: ["Simba", "Mufasa", "Nala", "Scar"],
        answer: "Simba"
    },
    {
        question: "Quel est le nom du héros principal dans 'Les Chevaliers du Zodiaque' ?",
        options: ["Shiryu", "Hyoga", "Seiya", "Shun"],
        answer: "Seiya"
    },
    {
        question: "Quel est le nom de la petite sirène dans le dessin animé de Disney ?",
        options: ["Belle", "Blanche-Neige", "Cendrillon", "Ariel"],
        answer: "Ariel"
    },
    {
        question: "Quel est le nom du dessin animé japonais mettant en scène un ninja blond aux yeux bleus ?",
        options: ["One Piece", "Dragon Ball Z", "Naruto", "Bleach"],
        answer: "Naruto"
    },
    {
        question: "Dans quel dessin animé un robot géant nommé Baymax aide-t-il un jeune prodige en robotique ?",
        options: ["Raiponce", "Les Nouveaux Héros", "La Reine des Neiges", "La Belle et la Bête"],
        answer: "Les Nouveaux Héros"
    },
    {
        question: "Quel est le nom du personnage principal dans 'Toy Story' de Pixar, un cow-boy en plastique ?",
        options: ["Buzz", "Woody", "Andy", "Jessie"],
        answer: "Woody"
    },
    {
        question: "Qui a chanté 'Hakuna Matata' dans 'Le Roi Lion' ?",
        options: ["Mufasa et Scar", "Simba et Nala", "Timon et Pumbaa", "Rafiki et Zazu"],
        answer: "Timon et Pumbaa"
    },
    {
        question: "Quel est le nom de l'ours dans 'Le Livre de la Jungle' ?",
        options: ["Kaa", "Bagheera", "Shere Khan", "Baloo"],
        answer: "Baloo"
    },
    {
        question: "Qui est l'ami dragon de Mulan ?",
        options: ["Mushu", "Shang", "Khan", "Cri-Kee"],
        answer: "Mushu"
    },
    {
        question: "Quel est le nom de la voiture de course dans 'Cars' ?",
        options: ["Doc Hudson", "Sally", "Flash McQueen", "Mater"],
        answer: "Flash McQueen"
    },
    {
        question: "Quel est le nom du chien héros dans 'Les 101 Dalmatiens' ?",
        options: ["Patch", "Lucky", "Pongo", "Perdita"],
        answer: "Pongo"
    },
    {
        question: "Quel est le nom du héros principal dans 'Dragon Ball Z' ?",
        options: ["Gohan", "Vegeta", "Piccolo", "Goku"],
        answer: "Goku"
    },
    {
        question: "Quel est le nom des quatre tortues ninja dans 'Les Tortues Ninja' ?",
        options: ["Leonardo, Michelangelo, Donatello, Raphael", "Leonardo, Rocksteady, Donatello, Baxter", "Leonardo, Donatello, Tommy, Jason", "Leonardo, Donatello, Casey, April"],
        answer: "Leonardo, Michelangelo, Donatello, Raphael"
    },
    {
        question: "Quel est le nom du rat cuisinier dans 'Ratatouille' ?",
        options: ["Rémy", "Emile", "Linguini", "Colette"],
        answer: "Rémy"
    },
    {
        question: "Quel est le nom de l'amie indienne de Peter Pan ?",
        options: ["Wendy", "Clochette", "Lily la Tigresse", "Jane"],
        answer: "Lily la Tigresse"
    },
    {
        question: "Quel est le nom du héros principal dans 'Les Mystérieuses Cités d'or' ?",
        options: ["Zia", "Tao", "Esteban", "Mendoza"],
        answer: "Esteban"
    },
    {
        question: "Quel est le nom du petit écureuil dans 'L'Âge de Glace' ?",
        options: ["Manny", "Diego", "Sid", "Scrat"],
        answer: "Scrat"
    },
    {
        question: "Quel est le nom du dessin animé mettant en scène des petits ours multicolores dotés de pouvoirs magiques ?",
        options: ["Les Calinours", "Les Snorky", "Les Bisounours", "Les Popples"],
        answer: "Les Bisounours"
    }
];

const questionsSeries = [
    
];

const questionsCuisine = [
    {
        question: "Quel ingrédient principal compose une sauce béchamel ?",
        options: ["Farine", "Lait", "Beurre", "Crème fraîche"],
        answer: "Lait"
    },
    {
        question: "Quel type de pâtes est souvent utilisé pour préparer le plat italien 'carbonara' ?",
        options: ["Spaghetti", "Tagliatelle", "Penne", "Fettuccine"],
        answer: "Spaghetti"
    },
    {
        question: "Quel aliment est utilisé pour faire du guacamole ?",
        options: ["Tomate", "Avocat", "Poivron", "Piment"],
        answer: "Avocat"
    },
    {
        question: "Quel type de viande est utilisé pour préparer un boeuf bourguignon ?",
        options: ["Filet mignon", "Épaule", "Jarret", "Paleron"],
        answer: "Paleron"
    },
    {
        question: "Quel est l'ingrédient principal dans un risotto ?",
        options: ["Blé", "Riz", "Orge", "Millet"],
        answer: "Riz"
    },
    {
        question: "Quel légume est souvent utilisé dans la salade niçoise ?",
        options: ["Laitue", "Concombre", "Tomate", "Haricot vert"],
        answer: "Haricot vert"
    },
    {
        question: "Quel épice est souvent utilisé dans la cuisine indienne pour donner de la couleur aux plats ?",
        options: ["Cumin", "Curcuma", "Coriandre", "Cannelle"],
        answer: "Curcuma"
    },
    {
        question: "Quel type de poisson est traditionnellement utilisé pour faire du sushi ?",
        options: ["Saumon", "Thon", "Dorade", "Bar"],
        answer: "Thon"
    },
    {
        question: "Quel légume est traditionnellement utilisé dans la paella espagnole ?",
        options: ["Poivron", "Courgette", "Aubergine", "Pois chiche"],
        answer: "Poivron"
    },
    {
        question: "Quel ingrédient est utilisé pour faire une sauce hollandaise ?",
        options: ["Beurre", "Crème fraîche", "Moutarde", "Yaourt"],
        answer: "Beurre"
    },
    {
        question: "Quel fromage italien à pâte filée est utilisé dans la préparation de la pizza margherita ?",
        options: ["Provolone", "Gorgonzola", "Parmesan", "Mozzarella"],
        answer: "Mozzarella"
    },
    {
        question: "Quel mollusque est utilisé dans la cuisine italienne pour préparer les 'spaghetti alle vongole' ?",
        options: ["Moule", "Palourde", "Huître", "Coquille Saint-Jacques"],
        answer: "Palourde"
    },
    {
        question: "Quel légume est utilisé pour faire une sauce pesto ?",
        options: ["Basilic", "Persil", "Coriandre", "Menthe"],
        answer: "Basilic"
    },
    {
        question: "Quel ingrédient est essentiel dans la préparation du tzatziki grec ?",
        options: ["Concombre", "Tomate", "Poivron", "Oignon"],
        answer: "Concombre"
    },
    {
        question: "Quel ingrédient est utilisé pour faire une sauce béarnaise ?",
        options: ["Estragon", "Ciboulette", "Persil", "Coriandre"],
        answer: "Estragon"
    },
    {
        question: "Quel fruit est souvent utilisé pour faire un clafoutis ?",
        options: ["Framboise", "Cerise", "Myrtille", "Fraise"],
        answer: "Cerise"
    },
    {
        question: "Quel légume est utilisé pour faire une salade Caesar ?",
        options: ["Laitue romaine", "Épinard", "Mâche", "Roquette"],
        answer: "Laitue romaine"
    },
    {
        question: "Quel fromage à pâte molle et à croûte fleurie est souvent associé à la gastronomie française et est utilisé dans la préparation du 'brie en croûte' ?",
        options: ["Camembert", "Brie", "Roquefort", "Munster"],
        answer: "Brie"
    },
    {
        question: "Quel fromage de la région française de Normandie est connue pour sa forme typique ?",
        options: ["Pont-l'Évêque", "Neufchâtel", "Livarot", "Camembert"],
        answer: "Neufchâtel"
    },
    {
        question: "Quel crustacé est utilisé pour préparer la célèbre soupe française 'bisque' ?",
        options: ["Homard", "Crevette", "Langouste", "Crabe"],
        answer: "Homard"
    },
];

const questionsHarry = [
        {
            question: "Quel est le nom de l'école de sorcellerie fréquentée par Harry Potter ?",
            options: ["Durmstrang", "Poudlard", "Beauxbâtons", "Ilvermorny"],
            answer: "Poudlard"
        },
        {
            question: "Quel est le prénom des parents de Harry Potter ?",
            options: ["James et Lily", "Charles et Diana", "Henry et Emma", "John et Mary"],
            answer: "James et Lily"
        },
        {
            question: "Quel est le nom du professeur de potions durant les premières années à Poudlard ?",
            options: ["Albus Dumbledore", "Gilderoy Lockhart", "Severus Rogue", "Minerva McGonagall"],
            answer: "Severus Rogue"
        },
        {
            question: "Quel est le nom du prisonnier d'Azkaban qui s'échappe dans le troisième film ?",
            options: ["Peter Pettigrew", "Sirius Black", "Bellatrix Lestrange", "Lucius Malefoy"],
            answer: "Sirius Black"
        },
        {
            question: "Quel est le patronus de Harry Potter ?",
            options: ["Un cerf", "Un phénix", "Un chien", "Un dragon"],
            answer: "Un cerf"
        },
        {
            question: "Quel est le nom de la maison à laquelle appartient Drago Malefoy ?",
            options: ["Serpentard", "Gryffondor", "Serdaigle", "Poufsouffle"],
            answer: "Serpentard"
        },
        {
            question: "Quel est le nom de l'elfe de maison de la famille Malefoy ?",
            options: ["Winky", "Kreacher", "Dobby", "Hokey"],
            answer: "Dobby"
        },
        {
            question: "Quel est le métier de Hermione Granger après avoir quitté Poudlard ?",
            options: ["Magizoologiste", "Auror", "Professeur à Poudlard", "Employée au ministère de la Magie"],
            answer: "Employée au ministère de la Magie"
        },
        {
            question: "Quel est le nom du frère de Ron Weasley qui travaille avec des dragons ?",
            options: ["George", "Percy", "Charlie", "Bill"],
            answer: "Charlie"
        },
        {
            question: "Quel est le nom complet de Voldemort ?",
            options: ["Salazar Serpentard", "Tom Elvis Jedusor", "Regulus Black", "Gellert Grindelwald"],
            answer: "Tom Elvis Jedusor"
        },
        {
            question: "Quel est le nom du sport préféré des sorciers dans l'univers de Harry Potter ?",
            options: ["Quidditch", "Wizard Chess", "Spellcasting", "Broom Racing"],
            answer: "Quidditch"
        },
        {
            question: "Quel est le nom de la banque des sorciers à Londres ?",
            options: ["Gringotts", "Ollivander's", "Flourish and Blotts", "The Leaky Cauldron"],
            answer: "Gringotts"
        },
        {
            question: "Quel est le nom de la potion permettant de changer d'apparence ?",
            options: ["Veritaserum", "Amortentia", "Felix Felicis", "Polynectar"],
            answer: "Polynectar"
        },
        {
            question: "Quel est le nom du professeur de Défense contre les forces du Mal dans la première année de Harry ?",
            options: ["Remus Lupin", "Severus Rogue", "Quirinus Quirrell", "Dolores Ombrage"],
            answer: "Quirinus Quirrell"
        },
        {
            question: "Quel est le nom de la carte magique qui montre tout Poudlard et ses habitants ?",
            options: ["La Carte des Fondateurs", "La Carte du Maraudeur", "La Carte de Poudlard", "La Carte de l'École"],
            answer: "La Carte du Maraudeur"
        },
        {
            question: "Quel est le nom du professeur de divination à Poudlard ?",
            options: ["Aurora Sinistra", "Filius Flitwick", "Pomona Chourave", "Sybille Trelawney"],
            answer: "Sybille Trelawney"
        },
        {
            question: "Quel est le nom du serpent de Voldemort ?",
            options: ["Nagini", "Basilic", "Niffler", "Nagini"],
            answer: "Nagini"
        },
        {
            question: "Quel est le nom du directeur de Poudlard avant Albus Dumbledore ?",
            options: ["Horace Slughorn", "Phineas Nigellus Black", "Armando Dippet", "Dilys Derwent"],
            answer: "Armando Dippet"
        },
        {
            question: "Quel est le nom de l'animal de compagnie de Ron Weasley ?",
            options: ["Pattenrond", "Croûtard", "Hedwige", "Errol"],
            answer: "Croûtard"
        },
        {
            question: "Quel est le nom du groupe de sorciers rebelles dirigé par Harry, Ron et Hermione en cinquième année ?",
            options: ["La Brigade Inquisitoriale", "L'Ordre du Phénix", "L'Armée de Dumbledore", "Les Maraudeurs"],
            answer: "L'Armée de Dumbledore"
        }    
];

// Éléments DOM
const quizContainer = document.getElementById('quiz-container');
const themeCultureBtn = document.getElementById('theme-culture');
const themeChansonsBtn = document.getElementById('theme-chansons');
const themeDessinsBtn = document.getElementById('theme-dessins');
const themeSeriesBtn = document.getElementById('theme-series');
const themeCuisineBtn = document.getElementById('theme-cuisine');
const themeHarryBtn = document.getElementById('theme-harry');
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

themeSeriesBtn.addEventListener('click', () => {
    startQuiz(questionsSeries);
});

themeCuisineBtn.addEventListener('click', () => {
    startQuiz(questionsCuisine);
});

themeHarryBtn.addEventListener('click', () => {
    startQuiz(questionsHarry);
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