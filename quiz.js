
// Fonction de mélange
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fonction pour mélanger les options de chaque question dans un ensemble de questions
function shuffleQuestionsOptions(questions) {
    questions.forEach(question => {
        shuffle(question.options);
    });
}

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
        options: ["Rhinocéros blanc", "Girafe","Éléphant d'Afrique", "Ours polaire"],
        answer: "Éléphant d'Afrique"
    },
    {
        question: "Quel est le pays le plus peuplé du monde ?",
        options: ["États-Unis", "Brésil","Inde", "Chine"],
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
        options: [ "Émile Zola","Gustave Flaubert","Honoré de Balzac", "Guy de Maupassant"],
        answer: "Gustave Flaubert"
    },
    {
        question: "Quelle est la capitale de l'Allemagne ?",
        options: ["Hambourg", "Berlin", "Munich", "Francfort"],
        answer: "Berlin"
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        options: ["Gobi", "Sahara", "Antarctique", "Arabie"],
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
    {
        question: "Quel est le nom du café où les personnages de 'Friends' passent beaucoup de temps ?",
        options: ["Central Perk", "Monica's", "Starbucks", "Cafe Nervosa"],
        answer: "Central Perk"
    },
    {
        question: "Qui tire sur J.R. dans 'Dallas' ?",
        options: ["Kristin Shepard", "Sue Ellen Ewing", "Pamela Barnes", "Cliff Barnes"],
        answer: "Kristin Shepard"
    },
    {
        question: "Quel est le nom du fils de Rick Grimes dans 'The Walking Dead' ?",
        options: ["Carl", "Daryl", "Glenn", "Morgan"],
        answer: "Carl"
    },
    {
        question: "Quel est le prénom de la fille aînée de la famille Ingalls ?",
        options: ["Mary", "Laura", "Carrie", "Grace"],
        answer: "Mary"
    },
    {
        question: "Qui est l'ami hacker d'Oliver Queen, également membre de l'équipe Arrow ?",
        options: ["Felicity Smoak", "John Diggle", "Roy Harper", "Laurel Lance"],
        answer: "Felicity Smoak"
    },
    {
        question: "Quel est le prénom du père de Malcolm ?",
        options: ["Hal", "Lois", "Craig", "Otto"],
        answer: "Hal"
    },
    {
        question: "Quel est le vrai nom de Superman dans 'Smallville' ?",
        options: ["Clark Kent", "Bruce Wayne", "Oliver Queen", "Barry Allen"],
        answer: "Clark Kent"
    },
    {
        question: "Quel est le prénom du fils de Ross dans 'Friends' ?",
        options: ["Ben", "Mike", "Jack", "David"],
        answer: "Ben"
    },
    {
        question: "Quel personnage de DC Comics est le mentor d'Oliver Queen dans la série 'Arrow' ?",
        options: ["Slade Wilson", "Malcolm Merlyn", "John Diggle", "Floyd Lawton"],
        answer: "Slade Wilson"
    },
    {
        question: "Quel est le nom de la voiture parlante dans 'K2000' ?",
        options: ["KITT", "Herbie", "Batmobile", "General Lee"],
        answer: "KITT"
    },
    {
        question: "Quel est le nom complet de KITT dans 'K2000' ?",
        options: ["Knight Industries Two Thousand", "Knight Intelligent Two Thousand", "Knight Internal Two Thousand", "Knight International Two Thousand"],
        answer: "Knight Industries Two Thousand"
    },
    {
        question: "Qui joue le rôle de C.J. Parker dans 'Alerte à Malibu' ?",
        options: ["Pamela Anderson", "Yasmine Bleeth", "Erika Eleniak", "Carmen Electra"],
        answer: "Pamela Anderson"
    },
    {
        question: "Dans quelle ville fictive se déroule 'The Flash' ?",
        options: ["Central City", "Star City", "Gotham City", "Metropolis"],
        answer: "Central City"
    },
    {
        question: "Quel est le véritable nom du super-héros connu sous le nom d'Arrow ?",
        options: ["Oliver Queen", "Bruce Wayne", "Clark Kent", "Barry Allen"],
        answer: "Oliver Queen"
    },
    {
        question: "Quelle famille est au centre de la série 'Santa Barbara' ?",
        options: ["Capwell", "Carrington", "Ewing", "Channing"],
        answer: "Capwell"
    },
    {
        question: "Quel est le nom de l'ennemi juré de Clark Kent dans 'Smallville' ?",
        options: ["Lex Luthor", "General Zod", "Darkseid", "Brainiac"],
        answer: "Lex Luthor"
    },
    {
        question: "Quelle est la profession de Charles Ingalls ?",
        options: ["Fermier", "Forgeron", "Docteur", "Avocat"],
        answer: "Fermier"
    },
    {
        question: "Quel est l'objet emblématique que MacGyver utilise souvent pour se sortir de situations dangereuses ?",
        options: ["Couteau suisse", "Téléphone", "Pistolet", "Briquet"],
        answer: "Couteau suisse"
    },
    {
        question: "Quel membre de l'Agence tous risques est connu pour son déguisement et ses plans élaborés ?",
        options: ["Hannibal", "Faceman", "Murdock", "B.A. Baracus"],
        answer: "Hannibal"
    },
    {
        question: "Quel est le nom du voisin religieux de la famille Simpson ?",
        options: ["Ned Flanders", "Moe Szyslak", "Chief Wiggum", "Apu Nahasapeemapetilon"],
        answer: "Ned Flanders"
    },
    {
        question: "Qui est le père de Luke Skywalker dans 'Star Wars' ?",
        options: ["Anakin Skywalker", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
        answer: "Anakin Skywalker"
    },
    {
        question: "Dans 'The Big Bang Theory', quel est le nom du colocataire de Sheldon ?",
        options: ["Leonard", "Howard", "Raj", "Stuart"],
        answer: "Leonard"
    },
    {
        question: "Quel est le nom de la femme de Bobby Ewing dans 'Dallas' ?",
        options: ["Pamela", "Sue Ellen", "Lucy", "Jenna"],
        answer: "Pamela"
    },
    {
        question: "Dans 'Friends', quel est le métier de Ross Geller ?",
        options: ["Paléontologue", "Acteur", "Chef cuisinier", "Banquier"],
        answer: "Paléontologue"
    },
    {
        question: "Quel est le nom de l'équipe de scientifiques qui aide Barry Allen dans 'The Flash' ?",
        options: ["S.T.A.R. Labs", "A.R.G.U.S.", "Wayne Enterprises", "LexCorp"],
        answer: "S.T.A.R. Labs"
    },
    {
        question: "Quelle est la planète d'origine de Chewbacca dans 'Star Wars' ?",
        options: ["Kashyyyk", "Tatooine", "Endor", "Naboo"],
        answer: "Kashyyyk"
    },
    {
        question: "Quelle est la capacité la plus souvent utilisée par Jonathan Chase dans 'Manimal' ?",
        options: ["Se transformer en panthère noire", "Se transformer en aigle", "Se transformer en serpent", "Se transformer en ours"],
        answer: "Se transformer en panthère noire"
    },
    {
        question: "Quel est le nom du groupe de survivants dirigé par Rick Grimes dans 'The Walking Dead' ?",
        options: ["Alexandria", "The Saviors", "The Whisperers", "The Wolves"],
        answer: "Alexandria"
    },
    {
        question: "Quel est le nom de l'ennemi juré de Rick Grimes, connu pour utiliser une batte de baseball couverte de fil barbelé ?",
        options: ["Negan", "Governor", "Shane", "Merle"],
        answer: "Negan"
    },
    {
        question: "Quel est le vrai nom de Daredevil dans la série éponyme ?",
        options: ["Matt Murdock", "Frank Castle", "Wilson Fisk", "Foggy Nelson"],
        answer: "Matt Murdock"
    }
];


const questionsCuisine = [
    {
        question: "Quel ingrédient ne compose pas une sauce béchamel ?",
        options: ["Farine", "Lait", "Beurre", "Crème fraîche"],
        answer: "Crème fraîche"
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
    }
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
            options: ["Nagili", "Basilic", "Niffler", "Nagini"],
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

const questionsGeographie = [
    {
        question: "Quel est le plus grand pays du monde par superficie ?",
        options: ["Russie", "Canada", "Chine", "États-Unis"],
        answer: "Russie"
    },
    {
        question: "Où se trouve le mont Everest, le plus haut sommet du monde ?",
        options: ["Népal", "Inde", "Chine", "Bhoutan"],
        answer: "Népal"
    },
    {
        question: "Quel est le fleuve le plus long du monde ?",
        options: ["Nil", "Amazone", "Yangzi Jiang", "Mississippi"],
        answer: "Amazone"
    },
    {
        question: "Quel est le point le plus bas de la Terre, situé à environ 430 mètres sous le niveau de la mer ?",
        options: ["Mer Morte", "Vallée de la Mort", "Lac Assal", "Fosse des Mariannes"],
        answer: "Mer Morte"
    },
    {
        question: "Quel pays est le plus grand producteur mondial de café ?",
        options: ["Brésil", "Colombie", "Vietnam", "Indonésie"],
        answer: "Brésil"
    },
    {
        question: "Quel est le plus grand archipel du monde en nombre d'îles ?",
        options: ["Indonésie", "Philippines", "Japon", "Maldives"],
        answer: "Indonésie"
    },
    {
        question: "Quel est le pays le plus peuplé d'Afrique ?",
        options: ["Nigeria", "Égypte", "Éthiopie", "République Démocratique du Congo"],
        answer: "Nigeria"
    },
    {
        question: "Quelle est la plus haute montagne d'Afrique ?",
        options: ["Mont Kilimandjaro", "Mont Kenya", "Mont Stanley", "Mont Elgon"],
        answer: "Mont Kilimandjaro"
    },
    {
        question: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
        options: ["Brésil", "Argentine", "Colombie", "Pérou"],
        answer: "Brésil"
    },
    {
        question: "Quel est le plus grand lac d'eau douce en volume du monde ?",
        options: ["lac Baïkal", "lac Supérieur", "lac Tanganyika", "lac Victoria"],
        answer: "lac Baïkal"
    },
    {
        question: "Quel pays a le plus grand nombre de langues officielles ?",
        options: ["Afrique du Sud", "Inde", "Suisse", "Nouvelle-Zélande"],
        answer: "Afrique du Sud"
    },
    {
        question: "Dans quel océan se trouve l'île de Madagascar ?",
        options: ["Océan Indien", "Océan Atlantique", "Océan Pacifique", "Océan Arctique"],
        answer: "Océan Indien"
    },
    {
        question: "Quelle est la capitale du Pérou ?",
        options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
        answer: "Lima"
    },
    {
        question: "Quelle est la plus haute cascade du monde ?",
        options: ["Salto Angel (Venezuela)", "Niagara (États-Unis/Canada)", "Victoria (Zimbabwe/Zambie)", "Tugela (Afrique du Sud)"],
        answer: "Salto Angel (Venezuela)"
    },
    {
        question: "Quelle est la ville la plus peuplée d'Europe ?",
        options: ["Moscou", "Londres", "Paris", "Berlin"],
        answer: "Moscou"
    },
    {
        question: "Quel est le plus grand désert chaud du monde ?",
        options: ["Sahara", "Kalahari", "Arabie", "Gobi"],
        answer: "Sahara"
    },
    {
        question: "Quel est le pays le plus grand exportateur de pétrole au monde ?",
        options: ["Arabie Saoudite", "États-Unis", "Russie", "Canada"],
        answer: "Arabie Saoudite"
    },
    {
        question: "Quelle est la capitale de la Suède ?",
        options: ["Stockholm", "Oslo", "Copenhague", "Helsinki"],
        answer: "Stockholm"
    },
    {
        question: "Dans quel pays se trouve la ville de Dubaï ?",
        options: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït"],
        answer: "Émirats Arabes Unis"
    },
    {
        question: "Quelle est le plus long fleuve de France, s'étendant sur environ 1,012 kilomètres ?",
        options: ["Loire", "Rhône", "Seine", "Garonne"],
        answer: "Loire"
    }
];

const questionsOrthographe = [
    {
        question: "Comment s'écrit le mot désignant l'action de se débarrasser de quelque chose ?",
        options: ["Jetter", "Jeté", "Jeter", "Je tais"],
        answer: "Jeter"
    },
    {
        question: "Quel est le féminin de 'acteur' ?",
        options: ["Actrice", "Acteuse", "Acteure", "Actrisse"],
        answer: "Actrice"
    },
    {
        question: "Comment s'écrit le mot désignant une énigme difficile, un problème insoluble ?",
        options: ["Querelle", "Querelleur", "Querele", "Querrelle"],
        answer: "Querelle"
    },
    {
        question: "Quel est le mot désignant un petit lac ou une mare ?",
        options: ["Marette", "Mare", "Maret", "Marre"],
        answer: "Mare"
    },
    {
        question: "Quel est le pluriel de 'monsieur' ?",
        options: ["Monsieurs", "Monsieures", "Monsieur", "Messieurs"],
        answer: "Messieurs"
    },
    {
        question: "Comment s'écrit le mot désignant un ensemble de règles ou de lois ?",
        options: ["Règles", "Règle", "Règlement", "Règlements"],
        answer: "Règlement"
    },
    {
        question: "Quel est le féminin de 'professeur' ?",
        options: ["Professeuse", "Professeure", "Professeur", "Professeuress"],
        answer: "Professeure"
    },
    {
        question: "Quel est l'ancien terme pour désigner un poète musicien de la Renaissance ?",
        options: ["Bachique", "Vagant", "Troubadour", "Luthier"],
        answer: "Troubadour"
    },
    {
        question: "Comment s'écrit le mot désignant la conversion d'une substance solide en gaz sans passer par l'état liquide ?",
        options: ["Sublimation", "Sublimée", "Sublimée", "Sublimée"],
        answer: "Sublimation"
    },
    {
        question: "Quel est le féminin de 'ministre' ?",
        options: ["Ministère", "Ministesse", "Ministre", "Ministresse"],
        answer: "Ministre"
    },
    {
        question: "Comment s'écrit le mot désignant une plante grimpante souvent utilisée comme décoration ?",
        options: ["Lièvre", "Lierre", "Lières", "Lyère"],
        answer: "Lierre"
    },
    {
        question: "Quel est l'ancien terme pour désigner un alchimiste ?",
        options: ["Sorcellier", "Alchimiste", "Philosophe", "Nigromant"],
        answer: "Nigromant"
    },
    {
        question: "Comment s'écrit le mot désignant une pierre précieuse bleue ?",
        options: ["Saphire", "Saphyr", "Saphir", "Safir"],
        answer: "Saphir"
    },
    {
        question: "Comment s'écrit le mot désignant une personne qui s'occupe des enfants ?",
        options: ["Nourrice", "Nourrisse", "Nourice", "Nourisse"],
        answer: "Nourrice"
    },
    {
        question: "Comment s'écrit le mot désignant un vieux gréement à trois mâts ?",
        options: ["Trois-mâts", "Tri-mât", "Très-mât", "Tri-mas"],
        answer: "Trois-mâts"
    },
    {
        question: "Quel est le mot désignant une marque laissée par la rouille sur le métal ?",
        options: ["Ferrugine", "Ferrugineuse", "Ferruginé", "Ferruginée"],
        answer: "Ferrugine"
    },
    {
        question: "Comment s'écrit le mot désignant un courant d'eau rapide et tourbillonnant ?",
        options: ["Mouillard", "Moulinet", "Mouillon", "Mouille"],
        answer: "Mouillon"
    },
    {
        question: "Comment s'écrit le mot désignant une personne atteinte de gigantisme ?",
        options: ["Gigantesque", "Géantisme", "Gigantée", "Gigantiste"],
        answer: "Géantisme"
    },
    {
        question: "Quel est le mot désignant une inflammation aiguë de la muqueuse intestinale ?",
        options: ["Entérite", "Entéritique", "Entéritée", "Entérine"],
        answer: "Entérite"
    },

    {
        question: "Quel est l'ancien terme pour désigner un ensemble de règles édictées par un seigneur au Moyen Âge ?",
        options: ["Charte", "Ordonnance", "Fief", "Charte"],
        answer: "Ordonnance"
    }
];

const questionsSport = [
    {
        question: "Quel est le nom du joueur de football brésilien surnommé 'O Fenômeno' ?",
        options: ["Ronaldo", "Pelé", "Zidane", "Messi"],
        answer: "Ronaldo"
    },
    {
        question: "Dans quel sport l'expression 'Grand Chelem' désigne-t-elle la victoire dans les quatre tournois majeurs la même année ?",
        options: ["Tennis", "Golf", "Football", "Basketball"],
        answer: "Tennis"
    },
    {
        question: "Quel est le nom du plus grand événement sportif international regroupant des athlètes de plus de 200 pays différents, se déroulant tous les quatre ans ?",
        options: ["Jeux Olympiques", "Coupe du Monde", "Championnat du Monde", "Euro"],
        answer: "Jeux Olympiques"
    },
    {
        question: "Quel sport utilise une raquette pour frapper une balle contre un mur dans un court fermé avec des lignes marquant les limites du jeu ?",
        options: ["Squash", "Tennis", "Paddle", "Ping-pong"],
        answer: "Squash"
    },
    {
        question: "Quel joueur de basket-ball américain a remporté six titres NBA avec les Chicago Bulls dans les années 1990 ?",
        options: ["Michael Jordan", "Magic Johnson", "Larry Bird", "Kobe Bryant"],
        answer: "Michael Jordan"
    },
    {
        question: "Quel golfeur américain a remporté 15 titres du Grand Chelem, dont cinq Masters et quatre US Open ?",
        options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
        answer: "Tiger Woods"
    },
    {
        question: "Quel est le nom du championnat annuel de rugby où s'affrontent des équipes européennes ?",
        options: ["Tournoi des Six Nations", "Coupe du Monde de Rugby", "Championnat de France", "Rugby Championship"],
        answer: "Tournoi des Six Nations"
    },
    {
        question: "Dans quel sport les participants descendent une pente enneigée à l'aide de skis, en slalomant entre des portes ou d'autres obstacles ?",
        options: ["Ski alpin", "Snowboard", "Ski de fond", "Biathlon"],
        answer: "Ski alpin"
    },
    {
        question: "Quel est le nom du sport qui se pratique sur une piste de glace où les concurrents descendent la pente à grande vitesse, en se couchant sur un traîneau ?",
        options: ["Luge", "Bobsleigh", "Skeleton", "Patinage de vitesse"],
        answer: "Luge"
    },
    {
        question: "Quel footballeur argentin a remporté cinq Ballons d'Or et joue pour le FC Barcelone depuis le début de sa carrière professionnelle en 2000 ?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Neymar"],
        answer: "Lionel Messi"
    },
    {
        question: "Quel joueur de tennis suisse a remporté 20 titres du Grand Chelem, dont huit Wimbledon et cinq US Open ?",
        options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"],
        answer: "Roger Federer"
    },
    {
        question: "Quelle est la distance officielle d'un marathon en kilomètres ?",
        options: ["42,195 km", "40,195 km", "45 km", "50 km"],
        answer: "42,195 km"
    },
    {
        question: "Dans quel sport le joueur peut-il marquer un 'touchdown' ?",
        options: ["Football américain", "Basket-ball", "Baseball", "Hockey sur glace"],
        answer: "Football américain"
    },
    {
        question: "Quel est le sport principal du Tour de France ?",
        options: ["Cyclisme sur route", "Course à pied", "Cyclisme sur piste", "Ski alpin"],
        answer: "Cyclisme sur route"
    },
    {
        question: "Quel joueur de football brésilien a remporté deux Coupes du Monde de la FIFA avec le Brésil en 1958 et 1962 ?",
        options: ["Pelé", "Ronaldinho", "Ronaldo", "Romário"],
        answer: "Pelé"
    },
    {
        question: "Quelle est la distance d'une piste d'athlétisme standard utilisée pour les courses sur longue distance, comme le 10 000 mètres ?",
        options: ["400 mètres", "800 mètres", "200 mètres", "1000 mètres"],
        answer: "400 mètres"
    },
    {
        question: "Quel est le nom donné à la méthode utilisée pour marquer un point en rugby, où le joueur pose le ballon derrière la ligne de but de l'adversaire ?",
        options: ["Essai", "Pénalité", "Drop", "Conversion"],
        answer: "Essai"
    },
    {
        question: "Quel joueur de tennis espagnol a remporté un record de 13 titres à Roland-Garros, dominant sur terre battue ?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Andy Murray"],
        answer: "Rafael Nadal"
    },
    {
        question: "Quel est le nom de la compétition internationale de football la plus prestigieuse pour les équipes nationales, remportée par la France en 2018 ?",
        options: ["Coupe du Monde de la FIFA", "Ligue des Champions", "Copa America", "Euro"],
        answer: "Coupe du Monde de la FIFA"
    },
    {
        question: "Quel joueur français a remporté la Coupe du Monde de la FIFA en 1998 en tant que capitaine de l'équipe nationale et est désormais entraîneur de l'équipe nationale française ?",
        options: ["Zinédine Zidane", "Didier Deschamps", "Thierry Henry", "Marcel Desailly"],
        answer: "Didier Deschamps"
    }
];

const questionsAnimaux = [
    {
        question: "Quel oiseau ne vole pas ?",
        options: ["Autruche", "Aigle", "Moineau", "Colibri"],
        answer: "Autruche"
    },
    {
        question: "Quel est le plus grand reptile du monde ?",
        options: ["Crocodile", "Serpent boa", "Tortue géante", "Lézard Komodo"],
        answer: "Crocodile"
    },
    {
        question: "Quel est l'animal terrestre le plus rapide ?",
        options: ["Guépard", "Antilope", "Lion", "Zèbre"],
        answer: "Guépard"
    },
    {
        question: "Quel est le plus grand poisson du monde ?",
        options: ["Requin-baleine", "Requin marteau", "Raie manta", "Thon"],
        answer: "Requin-baleine"
    },
    {
        question: "Quel est le plus petit mammifère au monde ?",
        options: ["Musaraigne", "Souris", "Chauve-souris", "Mulot"],
        answer: "Musaraigne"
    },
    {
        question: "Quel insecte peut soulever des objets jusqu'à 50 fois son poids ?",
        options: ["Fourmi", "Scarabée", "Papillon", "Abeille"],
        answer: "Fourmi"
    },
    {
        question: "Quel animal hiberne pendant tout l'hiver ?",
        options: ["Ours", "Écureuil", "Marmotte", "Renard"],
        answer: "Marmotte"
    },
    {
        question: "Quel est l'animal national de l'Australie ?",
        options: ["Kangourou", "Koala", "Emu", "Wombat"],
        answer: "Kangourou"
    },
    {
        question: "Quel est l'oiseau symbole des États-Unis ?",
        options: ["Aigle", "Hibou", "Pigeon", "Faucon"],
        answer: "Aigle"
    },
    {
        question: "Quel est l'animal qui dort le moins ?",
        options: ["Girafe", "Dauphin", "Chauve-souris", "Éléphant"],
        answer: "Dauphin"
    },
    {
        question: "Quel est l'oiseau le plus rapide au monde ?",
        options: ["Colibri", "Faucon pèlerin", "Aigle", "Autruche"],
        answer: "Faucon pèlerin"
    },
    {
        question: "Quel est le plus grand animal marin ?",
        options: ["Baleine bleue", "Requin blanc", "Orque", "Méduse géante"],
        answer: "Baleine bleue"
    },
    {
        question: "Quel est le serpent le plus venimeux au monde ?",
        options: ["Cobra", "Vipère", "Mamba noir", "Taïpan"],
        answer: "Mamba noir"
    },
    {
        question: "Quel animal a le plus grand cerveau en proportion de sa taille ?",
        options: ["Éléphant", "Dauphin", "Chimpanzé", "Humain"],
        answer: "Dauphin"
    },
    {
        question: "Quel est l'animal le plus lent du monde ?",
        options: ["Limace", "Tortue", "Koala", "Sloth"],
        answer: "Limace"
    },
    {
        question: "Quel est le plus grand rongeur du monde ?",
        options: ["Castor", "Rat", "Chinchilla", "Capybara"],
        answer: "Capybara"
    },
    {
        question: "Quel est l'oiseau qui peut courir le plus vite ?",
        options: ["Autruche", "Émeu", "Kiwi", "Pingouin"],
        answer: "Autruche"
    },
    {
        question: "Quel est l'animal qui peut survivre sans eau le plus longtemps ?",
        options: ["Chameau", "Kangourou", "Souris du désert", "Éléphant"],
        answer: "Souris du désert"
    },
    {
        question: "Quel est le poisson le plus venimeux au monde ?",
        options: ["Poisson-pierre", "Poisson-scie", "Poisson-globe", "Raie pastenague"],
        answer: "Poisson-pierre"
    }
];

const questionsFaitsInsolites = [
    {
        question: "Quel pays consomme le plus de chocolat par habitant ?",
        options: ["Suisse", "Belgique", "Allemagne", "États-Unis"],
        answer: "Suisse"
    },
    {
        question: "Quel est le record de la personne ayant le plus de piercings au corps ?",
        options: ["567", "746", "901", "1027"],
        answer: "1027"
    },
    {
        question: "Quel est le nombre de chutes de cheveux quotidien moyen pour une personne ?",
        options: ["100", "200", "50", "150"],
        answer: "100"
    },
    {
        question: "Quel est l'objet le plus souvent volé dans le monde ?",
        options: ["Voiture", "Portefeuille", "Téléphone portable", "Stylo"],
        answer: "Stylo"
    },
    {
        question: "Quel est le nombre moyen de mots prononcés par une personne chaque jour ?",
        options: ["2 000 mots", "5 000 mots", "7 000 mots", "10 000 mots"],
        answer: "7 000 mots"
    },
    {
        question: "Quel est le record du monde pour le nombre de hamburgers mangés en 10 minutes ?",
        options: ["12", "22", "32", "42"],
        answer: "32"
    },
    {
        question: "Quel est le poids du plus gros hamburger jamais réalisé ?",
        options: ["250 kg", "500 kg", "750 kg", "1 000 kg"],
        answer: "1 000 kg"
    },
    {
        question: "Quelle est la quantité de papier toilette utilisée en moyenne par personne par an ?",
        options: ["5 kg", "10 kg", "15 kg", "20 kg"],
        answer: "20 kg"
    },
    {
        question: "Quelle est la durée la plus longue qu'une personne a passée sans dormir ?",
        options: ["3 jours", "7 jours", "11 jours", "15 jours"],
        answer: "11 jours"
    },
    {
        question: "Quel est le nombre de selfies pris chaque jour dans le monde ?",
        options: ["1 million", "5 millions", "10 millions", "25 millions"],
        answer: "25 millions"
    },
    {
        question: "Quelle est la vitesse moyenne d'un pet humain ?",
        options: ["6 km/h", "10 km/h", "14 km/h", "18 km/h"],
        answer: "14 km/h"
    },
    {
        question: "Quel est le record du monde pour le nombre de mots tapés en une minute sur un clavier ?",
        options: ["150 mots", "200 mots", "256 mots", "212 mots"],
        answer: "212 mots"
    },
    {
        question: "Quelle est la distance la plus longue jamais parcourue à la nage sans s'arrêter ?",
        options: ["100 km", "225 km", "300 km", "400 km"],
        answer: "225 km"
    },
    {
        question: "Combien de fois le cœur humain bat-il en moyenne par jour ?",
        options: ["10 000 fois", "25 000 fois", "100 000 fois", "56 000 fois"],
        answer: "100 000 fois"
    },
    {
        question: "Quelle est la quantité de chocolat consommée par habitant en Suisse par an ?",
        options: ["5 kg", "10 kg", "15 kg", "20 kg"],
        answer: "10 kg"
    },
    {
        question: "Quelle est la température la plus basse jamais enregistrée sur Terre ?",
        options: ["-60,2 °C", "-83,6 °C", "-100 °C", "-128,6 °C"],
        answer: "-128,6 °C"
    },
    {
        question: "Quelle est la longueur du plus long cheveu humain jamais enregistré ?",
        options: ["50 cm", "75 cm", "100 cm", "150 cm"],
        answer: "150 cm"
    },
    {
        question: "Quel est le nombre de pattes qu'un escargot possède ?",
        options: ["0", "1", "4", "6"],
        answer: "1"
    },
    {
        question: "Quel est le nombre de fois qu'un colibri bat des ailes en une seconde ?",
        options: ["20 fois", "40 fois", "60 fois", "80 fois"],
        answer: "80 fois"
    },
    {
        question: "Quel est le nombre moyen de pas qu'une personne fait dans sa vie ?",
        options: ["100 millions", "200 millions", "300 millions", "400 millions"],
        answer: "200 millions"
    }
];

const questionsCinema = [
    {
        question: "Quel acteur joue le rôle principal dans le film 'Inception' ?",
        options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"],
        answer: "Leonardo DiCaprio"
    },
    {
        question: "Quel film d'animation de 2022 réalisé par Domee Shi raconte l'histoire d'une adolescente qui se transforme en panda roux géant lorsqu'elle est stressée ?",
        options: ["Alerte Rouge", "Luca", "Soul", "Encanto"],
        answer: "Alerte Rouge"
    },
    {
        question: "Quel film est connu pour la réplique 'Je suis le maître du monde' ?",
        options: ["Gladiator", "Titanic", "Avatar", "Le Seigneur des Anneaux"],
        answer: "Titanic"
    },
    {
        question: "Quel est le titre du premier film de la saga 'Star Wars' sorti en 1977 ?",
        options: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "The Phantom Menace"],
        answer: "A New Hope"
    },
    {
        question: "Qui a réalisé le film 'Avatar' sorti en 2009 ?",
        options: ["James Cameron", "Steven Spielberg", "Peter Jackson", "Ridley Scott"],
        answer: "James Cameron"
    },
    {
        question: "Quel est le nom du personnage joué par Johnny Depp dans 'Pirates des Caraïbes' ?",
        options: ["Will Turner", "Jack Sparrow", "Davy Jones", "Hector Barbossa"],
        answer: "Jack Sparrow"
    },
    {
        question: "Quel film de 1985 réalisé par Robert Zemeckis met en scène un scientifique nommé Doc Brown ?",
        options: ["The Goonies", "E.T.", "Back to the Future", "Ghostbusters"],
        answer: "Back to the Future"
    },
    {
        question: "Quel film de 1979 réalisé par Ridley Scott met en scène un vaisseau spatial nommé Nostromo ?",
        options: ["Blade Runner", "Star Wars", "2001: A Space Odyssey", "Alien"],
        answer: "Alien"
    },
    {
        question: "Quel film d'animation de 2022 réalisé par Angus MacLane explore les origines du personnage Buzz l'Éclair ?",
        options: ["Buzz l'Éclair", "Toy Story 4", "Raya et le Dernier Dragon", "En avant"],
        answer: "Buzz l'Éclair"
    },
    {
        question: "Quel film de 1980 réalisé par Stanley Kubrick est une adaptation du roman de Stephen King 'The Shining' ?",
        options: ["Carrie", "The Shining", "Misery", "It"],
        answer: "The Shining"
    },
    {
        question: "Quel film d'animation Pixar de 2015 explore les émotions humaines à travers les yeux d'une jeune fille nommée Riley ?",
        options: ["Vice-versa", "Coco", "Le Monde de Dory", "Le Voyage d'Arlo"],
        answer: "Vice-versa"
    },
    {
        question: "Quel film de 1986 réalisé par Tony Scott met en scène Tom Cruise en tant que pilote de chasse ?",
        options: ["Days of Thunder", "Top Gun", "Mission: Impossible", "Rain Man"],
        answer: "Top Gun"
    },
    {
        question: "Quel film de 2011 réalisé par Michel Hazanavicius a remporté l'Oscar du meilleur film ?",
        options: ["Hugo", "The Artist", "Midnight in Paris", "The Descendants"],
        answer: "The Artist"
    },
    {
        question: "Quel film d'animation de 2016 réalisé par Byron Howard et Rich Moore se déroule dans une ville où cohabitent des animaux anthropomorphes ?",
        options: ["Zootopia", "Sing", "The Secret Life of Pets", "Kung Fu Panda 3"],
        answer: "Zootopia"
    },
    {
        question: "Quel film de 2023 réalisé par Greta Gerwig est une adaptation moderne de la célèbre poupée de Mattel ?",
        options: ["Barbie", "Oppenheimer", "Dune: Part Two", "The Little Mermaid"],
        answer: "Barbie"
    },
    {
        question: "Quel film de 2023 réalisé par James Gunn est le troisième et dernier volet de la série sur une équipe de héros intergalactiques ?",
        options: ["Les Gardiens de la Galaxie Vol. 3", "Thor 3: Love and Thunder", "Eternals", "Doctor Strange in the Multiverse of Madness"],
        answer: "Les Gardiens de la Galaxie Vol. 3"
    },
    {
        question: "Quel film de 2019 réalisé par Todd Phillips raconte l'histoire de l'ennemi juré de Batman, centré sur l'origine du personnage ?",
        options: ["Joker", "Birds of Prey", "Suicide Squad", "Harley Quinn: Birds of Prey"],
        answer: "Joker"
    },
    {
        question: "Quel film de 2011 réalisé par Rupert Wyatt est un reboot de la franchise où James Franco joue un scientifique étudiant des chimpanzés intelligents ?",
        options: ["La Planète des Singes : Les Origines", "La Planète des Singes : Suprématie", "La Planète des Singes : L'Affrontement", "La Planète des Singes"],
        answer: "La Planète des Singes : Les Origines"
    },
    {
        question: "Quel film de 2018 réalisé par Bradley Cooper met en vedette Lady Gaga dans le rôle d'une chanteuse en herbe qui tombe amoureuse d'une star du rock ?",
        options: ["A Star Is Born", "Bohemian Rhapsody", "La La Land", "Rocketman"],
        answer: "A Star Is Born"
    },
    {
        question: "Quel film de 2011 réalisé par David Yates est une adaptation finale de la saga Harry Potter, où Harry affronte Voldemort ?",
        options: ["Harry Potter et les Reliques de la Mort - Partie 2", "Harry Potter et les Reliques de la Mort - Partie 1", "Harry Potter et le Prince de Sang-Mêlé", "Harry Potter et l'Ordre du Phénix"],
        answer: "Harry Potter et les Reliques de la Mort - Partie 2"
    }
];
   



// Mélanger les options pour chaque thème de questions
shuffleQuestionsOptions(questionsAnimaux);
shuffleQuestionsOptions(questionsCultureGenerale);
shuffleQuestionsOptions(questionsFaitsInsolites);
shuffleQuestionsOptions(questionsChansons);
shuffleQuestionsOptions(questionsDessinsAnimes);
shuffleQuestionsOptions(questionsSeries);
shuffleQuestionsOptions(questionsHarry);
shuffleQuestionsOptions(questionsCuisine);
shuffleQuestionsOptions(questionsGeographie);
shuffleQuestionsOptions(questionsOrthographe);
shuffleQuestionsOptions(questionsSport);
shuffleQuestionsOptions(questionsCinema);


// Éléments DOM
const quizContainer = document.getElementById('quiz-container');
const themeAnimauxBtn = document.getElementById('theme-animaux');
const themeFaitsInsolitesBtn = document.getElementById('theme-faitsInsolites');
const themeCinemaBtn = document.getElementById('theme-cinema');
const themeCultureBtn = document.getElementById('theme-culture');
const themeChansonsBtn = document.getElementById('theme-chansons');
const themeDessinsBtn = document.getElementById('theme-dessins');
const themeSeriesBtn = document.getElementById('theme-series');
const themeCuisineBtn = document.getElementById('theme-cuisine');
const themeHarryBtn = document.getElementById('theme-harry');
const themeGeographieBtn = document.getElementById('theme-geographie');
const themeOrthographeBtn = document.getElementById('theme-orthographe');
const themeSportBtn = document.getElementById('theme-sport');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');
const finishButton = document.getElementById('finish-btn');

// Variables du quiz
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedTheme = '';

// Cacher le conteneur de quiz et le résultat au début
quizContainer.classList.add('hidden');
resultContainer.classList.add('hidden');

// Afficher tous les boutons de thème
const themeButtons = document.querySelectorAll('.container.grid button');
themeButtons.forEach(button => button.classList.remove('hidden'));

// Fonction pour récupérer le thème sélectionné
function getSelectedTheme() {
    return selectedTheme;
}

// Écouter le clic sur les boutons de thème et démarrer le quiz correspondant
themeCultureBtn.addEventListener('click', () => {
    selectedTheme = 'Culture générale';
    startQuiz(questionsCultureGenerale);
});

themeFaitsInsolitesBtn.addEventListener('click', () => {
    selectedTheme = 'Faits insolites';
    startQuiz(questionsFaitsInsolites);
});

themeAnimauxBtn.addEventListener('click', () => {
    selectedTheme = 'Animaux';
    startQuiz(questionsAnimaux);
});

themeChansonsBtn.addEventListener('click', () => {
    selectedTheme = 'Chansons';
    startQuiz(questionsChansons);
});

themeDessinsBtn.addEventListener('click', () => {
    selectedTheme = 'Dessins animés';
    startQuiz(questionsDessinsAnimes);
});

themeSeriesBtn.addEventListener('click', () => {
    selectedTheme = 'Séries TV';
    startQuiz(questionsSeries);
});

themeCuisineBtn.addEventListener('click', () => {
    selectedTheme = 'Cuisine';
    startQuiz(questionsCuisine);
});

themeHarryBtn.addEventListener('click', () => {
    selectedTheme = 'Harry Potter';
    startQuiz(questionsHarry);
});

themeGeographieBtn.addEventListener('click', () => {
    selectedTheme = 'Géographie';
    startQuiz(questionsGeographie);
});

themeOrthographeBtn.addEventListener('click', () => {
    selectedTheme = 'Orthographe';
    startQuiz(questionsOrthographe);
});

themeSportBtn.addEventListener('click', () => {
    selectedTheme = 'Sport';
    startQuiz(questionsSport);
});

themeCinemaBtn.addEventListener('click', () => {
    selectedTheme = 'Cinéma';
    startQuiz(questionsCinema);
});

// Fonction pour démarrer le quiz avec les questions du thème sélectionné
function startQuiz(selectedQuestions) {
    // Réinitialiser l'état du quiz
    questions = selectedQuestions;
    if (questions.length === 0) {
        alert('Aucune question disponible pour ce thème.');
        return;
    }
    score = 0;
    currentQuestionIndex = 0;
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    showQuestion();
}

// Fonction pour initialiser le quiz
function initializeQuiz() {
    nextButton.removeEventListener('click', nextQuestion);
    nextButton.addEventListener('click', nextQuestion);
}

// Fonction pour afficher la question courante
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const questionTextElement = document.getElementById('question-text');

    questionTextElement.textContent = currentQuestion.question;

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
    resultContainer.classList.remove('hidden');

    const scoreTitle = document.createElement('h2');
    scoreTitle.textContent = 'Votre Score';
    resultContainer.appendChild(scoreTitle);

    scoreText.textContent = `Vous avez marqué ${score} sur ${questions.length}`;
    document.getElementById('score-input').value = score;
    resultContainer.appendChild(scoreText);

    finishButton.classList.remove('hidden');
}

// Ajouter l'écouteur d'événements pour le bouton "Terminer" une seule fois
finishButton.addEventListener('click', () => {
    const theme = getSelectedTheme(); // Obtenir le thème sélectionné
    document.getElementById('theme-input').value = theme;

    // Créer l'objet de données à envoyer
    const formData = new FormData(document.getElementById('score-form'));

    // Envoyer les données avec fetch
    fetch('/controllers/controller-home.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Score enregistré avec succès!');
        } else {
            alert('Erreur lors de l\'enregistrement du score.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'enregistrement du score.');
    });

    resultContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
});

// Initialiser le quiz au chargement de la page
initializeQuiz();

 