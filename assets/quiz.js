// Fonction de mélange
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Fonction pour mélanger les options de chaque question dans un ensemble de questions
function shuffleQuestionsOptions(questions) {
  questions.forEach((question) => {
    shuffle(question.options);
  });
}

// Tableau des questions
const questionsCultureGenerale = [
  {
    numéro: "1/20",
    question: "Quelle est la capitale de la France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    numéro: "2/20",
    question: "Quelle planète est connue sous le nom de planète rouge?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Mars",
  },
  {
    numéro: "3/20",
    question: "Qui a écrit 'Le Petit Prince' ?",
    options: [
      "Antoine de Saint-Exupéry",
      "Victor Hugo",
      "Albert Camus",
      "Franz Kafka",
    ],
    answer: "Antoine de Saint-Exupéry",
  },
  {
    numéro: "4/20",
    question: "Quelle est la capitale du Canada ?",
    options: ["Toronto", "Ottawa", "Montréal", "Québec"],
    answer: "Ottawa",
  },
  {
    numéro: "5/20",
    question: "Quel est le plus haut sommet du monde ?",
    options: ["Mont Everest", "K2", "Mont Kilimandjaro", "Mont McKinley"],
    answer: "Mont Everest",
  },
  {
    numéro: "6/20",
    question: "Quelle est la monnaie du Japon ?",
    options: ["Yuan", "Yen", "Roupie", "Baht"],
    answer: "Yen",
  },
  {
    numéro: "7/20",
    question: "Quelle est la plus grande île du monde ?",
    options: ["Australie", "Groenland", "Nouvelle-Guinée", "Borneo"],
    answer: "Groenland",
  },
  {
    numéro: "8/20",
    question: "Quelle est la langue la plus parlée au monde ?",
    options: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
    answer: "Mandarin",
  },
  {
    numéro: "9/20",
    question: "Quelle est la langue officielle du Brésil ?",
    options: ["Portugais", "Espagnol", "Anglais", "Allemand"],
    answer: "Portugais",
  },
  {
    numéro: "10/20",
    question: "Quel est le plus grand animal terrestre ?",
    options: [
      "Rhinocéros blanc",
      "Girafe",
      "Éléphant d'Afrique",
      "Ours polaire",
    ],
    answer: "Éléphant d'Afrique",
  },
  {
    numéro: "11/20",
    question: "Quel est le pays le plus peuplé du monde ?",
    options: ["États-Unis", "Brésil", "Inde", "Chine"],
    answer: "Chine",
  },
  {
    numéro: "12/20",
    question: "Qui a écrit 'Les Fleurs du Mal' ?",
    options: [
      "Charles Baudelaire",
      "Victor Hugo",
      "Gustave Flaubert",
      "Émile Zola",
    ],
    answer: "Charles Baudelaire",
  },
  {
    numéro: "13/20",
    question: "Quel est le pays le plus petit du monde par superficie ?",
    options: ["Monaco", "Malte", "Nauru", "Vatican"],
    answer: "Vatican",
  },
  {
    numéro: "14/20",
    question: "Qui a écrit 'Madame Bovary' ?",
    options: [
      "Émile Zola",
      "Gustave Flaubert",
      "Honoré de Balzac",
      "Guy de Maupassant",
    ],
    answer: "Gustave Flaubert",
  },
  {
    numéro: "15/20",
    question: "Quelle est la capitale de l'Allemagne ?",
    options: ["Hambourg", "Berlin", "Munich", "Francfort"],
    answer: "Berlin",
  },
  {
    numéro: "16/20",
    question: "Quel est le plus grand désert du monde ?",
    options: ["Gobi", "Sahara", "Antarctique", "Arabie"],
    answer: "Antarctique",
  },
  {
    numéro: "17/20",
    question: "Quelle est la devise de l'Union européenne ?",
    options: [
      "In varietate concordia",
      "Liberté, Égalité, Fraternité",
      "United in diversity",
      "E pluribus unum",
    ],
    answer: "In varietate concordia",
  },
  {
    numéro: "18/20",
    question: "Qui a écrit 'Les Misérables' ?",
    options: [
      "Gustave Flaubert",
      "Victor Hugo",
      "Émile Zola",
      "Alexandre Dumas",
    ],
    answer: "Victor Hugo",
  },
  {
    numéro: "19/20",
    question: "Quelle est la capitale de l'Argentine ?",
    options: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
    answer: "Buenos Aires",
  },
  {
    numéro: "20/20",
    question: "Qui a écrit 'Les Fables' ?",
    options: [
      "Jean de La Fontaine",
      "Voltaire",
      "Molière",
      "Jean-Jacques Rousseau",
    ],
    answer: "Jean de La Fontaine",
  },
];

const questionsChansons = [
  {
    numéro: "1/20",
    question: "Qui a chanté 'Bohemian Rhapsody' ?",
    options: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
    answer: "Queen",
  },
  {
    numéro: "2/20",
    question: "Qui a chanté 'Shape of You' ?",
    options: ["Ed Sheeran", "Justin Bieber", "Taylor Swift", "Adele"],
    answer: "Ed Sheeran",
  },
  {
    numéro: "3/20",
    question: "Qui a chanté 'La Vie en Rose' ?",
    options: [
      "Édith Piaf",
      "Jacques Brel",
      "Charles Aznavour",
      "Serge Gainsbourg",
    ],
    answer: "Édith Piaf",
  },
  {
    numéro: "4/20",
    question: "Quel chanteur a interprété 'Ne me quitte pas' ?",
    options: [
      "Jacques Brel",
      "Charles Aznavour",
      "Serge Gainsbourg",
      "Johnny Hallyday",
    ],
    answer: "Jacques Brel",
  },
  {
    numéro: "5/20",
    question: "Quel chanteur a chanté 'Purple Rain' ?",
    options: ["Prince", "Michael Jackson", "David Bowie", "Elton John"],
    answer: "Prince",
  },
  {
    numéro: "6/20",
    question: "Quel chanteur a interprété 'L'aigle noir' ?",
    options: ["Barbara", "Mylène Farmer", "France Gall", "Michel Berger"],
    answer: "Barbara",
  },
  {
    numéro: "7/20",
    question: "Qui a chanté 'Sous le vent' en duo avec Garou ?",
    options: ["Céline Dion", "Lara Fabian", "Nolwenn Leroy", "Christophe Maé"],
    answer: "Céline Dion",
  },
  {
    numéro: "8/20",
    question: "Qui a chanté 'Imagine' ?",
    options: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    answer: "John Lennon",
  },
  {
    numéro: "9/20",
    question: "Quel groupe a interprété 'J'ai demandé à la lune' ?",
    options: ["Indochine", "Téléphone", "Noir Désir", "Les Rita Mitsouko"],
    answer: "Indochine",
  },
  {
    numéro: "10/20",
    question: "Qui a chanté 'Billie Jean' ?",
    options: ["Michael Jackson", "Prince", "David Bowie", "Elton John"],
    answer: "Michael Jackson",
  },
  {
    numéro: "11/20",
    question: "Qui a chanté 'Adieu' ?",
    options: ["Slimane", "Vianney", "Julien Doré", "Jérémy Frérot"],
    answer: "Jérémy Frérot",
  },
  {
    numéro: "12/20",
    question: "Qui a chanté 'My Heart Will Go On' ?",
    options: ["Céline Dion", "Mariah Carey", "Whitney Houston", "Madonna"],
    answer: "Céline Dion",
  },
  {
    numéro: "13/20",
    question: "Qui a chanté 'À nos souvenirs' ?",
    options: ["Trois Cafés Gourmands", "Claudio Capéo", "Soprano", "Gims"],
    answer: "Trois Cafés Gourmands",
  },
  {
    numéro: "14/20",
    question: "Qui a chanté 'La même' en duo avec Vianney ?",
    options: ["Maître Gims", "Slimane", "Julien Doré", "Amir"],
    answer: "Maître Gims",
  },
  {
    numéro: "15/20",
    question: "Qui a chanté 'Tous les mêmes' ?",
    options: ["Stromae", "Maitre Gims", "Soprano", "Julien Doré"],
    answer: "Stromae",
  },
  {
    numéro: "16/20",
    question: "Qui a chanté 'Ca va ça vient' ?",
    options: ["Vitaa", "Amel Bent", "Léa Castel", "Shy'm"],
    answer: "Vitaa",
  },
  {
    numéro: "17/20",
    question: "Qui a chanté 'Dance Monkey' ?",
    options: ["Tones and I", "Ava Max", "Billie Eilish", "Dua Lipa"],
    answer: "Tones and I",
  },
  {
    numéro: "18/20",
    question:
      "Quelle chanson de Aya Nakamura a été certifiée single de diamant en France ?",
    options: ["Djadja", "Pookie", "Copines", "La Dot"],
    answer: "Djadja",
  },
  {
    numéro: "19/20",
    question: "Qui a chanté 'Shallow' en duo avec Lady Gaga ?",
    options: ["Bradley Cooper", "Sam Smith", "Shawn Mendes", "Harry Styles"],
    answer: "Bradley Cooper",
  },
  {
    numéro: "20/20",
    question: "Qui a chanté 'Mon soleil' en 2021 ?",
    options: ["Jérémy Frérot", "Vianney", "Jenifer", "Dadju"],
    answer: "Dadju",
  },
];

const questionsDessinsAnimes = [
  {
    numéro: "1/20",
    question: "Quel personnage est un célèbre chasseur de fantômes ?",
    options: ["Astérix", "Scooby-Doo", "Gaston Lagaffe", "Tom"],
    answer: "Scooby-Doo",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom de l'héroïne dans 'Sailor Moon' ?",
    options: ["Makoto", "Rei", "Usagi", "Ami"],
    answer: "Usagi",
  },
  {
    numéro: "3/20",
    question:
      "Quel est le nom du lionceau protagoniste du 'Roi Lion' de Disney ?",
    options: ["Simba", "Mufasa", "Nala", "Scar"],
    answer: "Simba",
  },
  {
    numéro: "4/20",
    question:
      "Quel est le nom du héros principal dans 'Les Chevaliers du Zodiaque' ?",
    options: ["Shiryu", "Hyoga", "Seiya", "Shun"],
    answer: "Seiya",
  },
  {
    numéro: "5/20",
    question:
      "Quel est le nom de la petite sirène dans le dessin animé de Disney ?",
    options: ["Belle", "Blanche-Neige", "Cendrillon", "Ariel"],
    answer: "Ariel",
  },
  {
    numéro: "6/20",
    question:
      "Quel est le nom du dessin animé japonais mettant en scène un ninja blond aux yeux bleus ?",
    options: ["One Piece", "Dragon Ball Z", "Naruto", "Bleach"],
    answer: "Naruto",
  },
  {
    numéro: "7/20",
    question:
      "Dans quel dessin animé un robot géant nommé Baymax aide-t-il un jeune prodige en robotique ?",
    options: [
      "Raiponce",
      "Les Nouveaux Héros",
      "La Reine des Neiges",
      "La Belle et la Bête",
    ],
    answer: "Les Nouveaux Héros",
  },
  {
    numéro: "8/20",
    question:
      "Quel est le nom du personnage principal dans 'Toy Story' de Pixar, un cow-boy en plastique ?",
    options: ["Buzz", "Woody", "Andy", "Jessie"],
    answer: "Woody",
  },
  {
    numéro: "9/20",
    question: "Qui a chanté 'Hakuna Matata' dans 'Le Roi Lion' ?",
    options: [
      "Mufasa et Scar",
      "Simba et Nala",
      "Timon et Pumbaa",
      "Rafiki et Zazu",
    ],
    answer: "Timon et Pumbaa",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom de l'ours dans 'Le Livre de la Jungle' ?",
    options: ["Kaa", "Bagheera", "Shere Khan", "Baloo"],
    answer: "Baloo",
  },
  {
    numéro: "11/20",
    question:
      "Quel est le nom du petit garçon qui devient ami avec un dragon dans 'Peter et Elliott le dragon' ?",
    options: ["Peter", "Elliott", "Jack", "David"],
    answer: "Peter",
  },
  {
    numéro: "12/20",
    question:
      "Dans quel dessin animé des années 90 un groupe de bébés s'évade-t-il régulièrement de leur garderie ?",
    options: [
      "Les Bisounours",
      "Les Razmoket",
      "Les Fruittis",
      "Les Tiny Toons",
    ],
    answer: "Les Razmoket",
  },
  {
    numéro: "13/20",
    question:
      "Quel est le nom du dragon qui accompagne Mulan dans le film Disney éponyme ?",
    options: ["Mushu", "Khan", "Shenzi", "Cri-Kee"],
    answer: "Mushu",
  },
  {
    numéro: "14/20",
    question:
      "Dans quel dessin animé une petite fille appelée Dora part-elle à l'aventure avec son singe et ses amis ?",
    options: [
      "Dora l'Exploratrice",
      "La Maison de Mickey",
      "Paw Patrol",
      "Bob l'éponge",
    ],
    answer: "Dora l'Exploratrice",
  },
  {
    numéro: "15/20",
    question:
      "Quel est le nom du lion de mer ami de Nemo dans 'Le Monde de Nemo' ?",
    options: ["Marlin", "Dory", "Bruce", "Gill"],
    answer: "Gill",
  },
  {
    numéro: "16/20",
    question:
      "Dans quel dessin animé des années 80 une petite fille nommée Candy vit-elle une série d'aventures ?",
    options: ["Bouba", "Candy Candy", "Georgie", "Princesse Sarah"],
    answer: "Candy Candy",
  },
  {
    numéro: "17/20",
    question:
      "Quel est le nom du chien fidèle qui accompagne Sherlock Holmes dans une adaptation en dessin animé ?",
    options: ["Rex", "Milou", "Pluto", "Snoopy"],
    answer: "Milou",
  },
  {
    numéro: "18/20",
    question:
      "Dans quel dessin animé des années 90 un groupe d'enfants voyage-t-il dans le temps à bord d'une machine volante ?",
    options: [
      "Il était une fois... l'Homme",
      "Les Chevaliers du Zodiaque",
      "Inspecteur Gadget",
      "Les Minipouss",
    ],
    answer: "Les Minipouss",
  },
  {
    numéro: "19/20",
    question:
      "Quel est le nom du dinosaure violet ami de Bob dans 'Bob le bricoleur' ?",
    options: ["Rex", "Barney", "Dino", "Bubulle"],
    answer: "Barney",
  },
  {
    numéro: "20/20",
    question:
      "Dans quel dessin animé une petite fille rousse et son chien nommé Toby vivent-ils de nombreuses aventures ?",
    options: [
      "Calimero",
      "Lucile, Amour et Rock'n Roll",
      "Princesse Sarah",
      "Tom-Tom et Nana",
    ],
    answer: "Lucile, Amour et Rock'n Roll",
  },
];

const questionsCuisine = [
  {
    numéro: "1/20",
    question: "Quel ingrédient ne compose pas une sauce béchamel ?",
    options: ["Farine", "Lait", "Beurre", "Crème fraîche"],
    answer: "Crème fraîche",
  },
  {
    numéro: "2/20",
    question:
      "Quel type de pâtes est souvent utilisé pour préparer le plat italien 'carbonara' ?",
    options: ["Spaghetti", "Tagliatelle", "Penne", "Fettuccine"],
    answer: "Spaghetti",
  },
  {
    numéro: "3/20",
    question: "Quel aliment est utilisé pour faire du guacamole ?",
    options: ["Tomate", "Avocat", "Poivron", "Piment"],
    answer: "Avocat",
  },
  {
    numéro: "4/20",
    question:
      "Quel type de viande est utilisé pour préparer un boeuf bourguignon ?",
    options: ["Filet mignon", "Épaule", "Jarret", "Paleron"],
    answer: "Paleron",
  },
  {
    numéro: "5/20",
    question: "Quel est l'ingrédient principal dans un risotto ?",
    options: ["Blé", "Riz", "Orge", "Millet"],
    answer: "Riz",
  },
  {
    numéro: "6/20",
    question: "Quel légume est souvent utilisé dans la salade niçoise ?",
    options: ["Laitue", "Concombre", "Tomate", "Haricot vert"],
    answer: "Haricot vert",
  },
  {
    numéro: "7/20",
    question:
      "Quel épice est souvent utilisé dans la cuisine indienne pour donner de la couleur aux plats ?",
    options: ["Cumin", "Curcuma", "Coriandre", "Cannelle"],
    answer: "Curcuma",
  },
  {
    numéro: "8/20",
    question:
      "Quel type de poisson est traditionnellement utilisé pour faire du sushi ?",
    options: ["Saumon", "Thon", "Dorade", "Bar"],
    answer: "Thon",
  },
  {
    numéro: "9/20",
    question:
      "Quel légume est traditionnellement utilisé dans la paella espagnole ?",
    options: ["Poivron", "Courgette", "Aubergine", "Pois chiche"],
    answer: "Poivron",
  },
  {
    numéro: "10/20",
    question: "Quel ingrédient est utilisé pour faire une sauce hollandaise ?",
    options: ["Beurre", "Crème fraîche", "Moutarde", "Yaourt"],
    answer: "Beurre",
  },
  {
    numéro: "11/20",
    question:
      "Quel fromage italien à pâte filée est utilisé dans la préparation de la pizza margherita ?",
    options: ["Provolone", "Gorgonzola", "Parmesan", "Mozzarella"],
    answer: "Mozzarella",
  },
  {
    numéro: "12/20",
    question:
      "Quel mollusque est utilisé dans la cuisine italienne pour préparer les 'spaghetti alle vongole' ?",
    options: ["Moule", "Palourde", "Huître", "Coquille Saint-Jacques"],
    answer: "Palourde",
  },
  {
    numéro: "13/20",
    question: "Quel légume est utilisé pour faire une sauce pesto ?",
    options: ["Basilic", "Persil", "Coriandre", "Menthe"],
    answer: "Basilic",
  },
  {
    numéro: "14/20",
    question:
      "Quel ingrédient est essentiel dans la préparation du tzatziki grec ?",
    options: ["Concombre", "Tomate", "Poivron", "Oignon"],
    answer: "Concombre",
  },
  {
    numéro: "15/20",
    question: "Quel ingrédient est utilisé pour faire une sauce béarnaise ?",
    options: ["Estragon", "Ciboulette", "Persil", "Coriandre"],
    answer: "Estragon",
  },
  {
    numéro: "16/20",
    question: "Quel fruit est souvent utilisé pour faire un clafoutis ?",
    options: ["Framboise", "Cerise", "Myrtille", "Fraise"],
    answer: "Cerise",
  },
  {
    numéro: "17/20",
    question: "Quel légume est utilisé pour faire une salade Caesar ?",
    options: ["Laitue romaine", "Épinard", "Mâche", "Roquette"],
    answer: "Laitue romaine",
  },
  {
    numéro: "18/20",
    question:
      "Quel fromage à pâte molle et à croûte fleurie est souvent associé à la gastronomie française et est utilisé dans la préparation du 'brie en croûte' ?",
    options: ["Camembert", "Brie", "Roquefort", "Munster"],
    answer: "Brie",
  },
  {
    numéro: "19/20",
    question:
      "Quel fromage de la région française de Normandie est connue pour sa forme typique ?",
    options: ["Pont-l'Évêque", "Neufchâtel", "Livarot", "Camembert"],
    answer: "Neufchâtel",
  },
  {
    numéro: "20/20",
    question:
      "Quel crustacé est utilisé pour préparer la célèbre soupe française 'bisque' ?",
    options: ["Homard", "Crevette", "Langouste", "Crabe"],
    answer: "Homard",
  },
];

const questionsHarry = [
  {
    numéro: "1/20",
    question:
      "Quel est le nom de l'école de sorcellerie fréquentée par Harry Potter ?",
    options: ["Durmstrang", "Poudlard", "Beauxbâtons", "Ilvermorny"],
    answer: "Poudlard",
  },
  {
    numéro: "2/20",
    question: "Quel est le prénom des parents de Harry Potter ?",
    options: [
      "James et Lily",
      "Charles et Diana",
      "Henry et Emma",
      "John et Mary",
    ],
    answer: "James et Lily",
  },
  {
    numéro: "3/20",
    question:
      "Quel est le nom du professeur de potions durant les premières années à Poudlard ?",
    options: [
      "Albus Dumbledore",
      "Gilderoy Lockhart",
      "Severus Rogue",
      "Minerva McGonagall",
    ],
    answer: "Severus Rogue",
  },
  {
    numéro: "4/20",
    question:
      "Quel est le nom du prisonnier d'Azkaban qui s'échappe dans le troisième film ?",
    options: [
      "Peter Pettigrew",
      "Sirius Black",
      "Bellatrix Lestrange",
      "Lucius Malefoy",
    ],
    answer: "Sirius Black",
  },
  {
    numéro: "5/20",
    question: "Quel est le patronus de Harry Potter ?",
    options: ["Un cerf", "Un phénix", "Un chien", "Un dragon"],
    answer: "Un cerf",
  },
  {
    numéro: "6/20",
    question:
      "Quel est le nom de la maison à laquelle appartient Drago Malefoy ?",
    options: ["Serpentard", "Gryffondor", "Serdaigle", "Poufsouffle"],
    answer: "Serpentard",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom de l'elfe de maison de la famille Malefoy ?",
    options: ["Winky", "Kreacher", "Dobby", "Hokey"],
    answer: "Dobby",
  },
  {
    numéro: "8/20",
    question:
      "Quel est le métier de Hermione Granger après avoir quitté Poudlard ?",
    options: [
      "Magizoologiste",
      "Auror",
      "Professeur à Poudlard",
      "Employée au ministère de la Magie",
    ],
    answer: "Employée au ministère de la Magie",
  },
  {
    numéro: "9/20",
    question:
      "Quel est le nom du frère de Ron Weasley qui travaille avec des dragons ?",
    options: ["George", "Percy", "Charlie", "Bill"],
  },
  {
    numéro: "10/20",
    question: "Quel est le nom complet de Voldemort ?",
    options: [
      "Salazar Serpentard",
      "Tom Elvis Jedusor",
      "Regulus Black",
      "Gellert Grindelwald",
    ],
    answer: "Tom Elvis Jedusor",
  },
  {
    numéro: "11/20",
    question:
      "Quel est le nom du sport préféré des sorciers dans l'univers de Harry Potter ?",
    options: ["Quidditch", "Wizard Chess", "Spellcasting", "Broom Racing"],
    answer: "Quidditch",
  },
  {
    numéro: "12/20",
    question: "Quel est le nom de la banque des sorciers à Londres ?",
    options: [
      "Gringotts",
      "Ollivander's",
      "Flourish and Blotts",
      "The Leaky Cauldron",
    ],
    answer: "Gringotts",
  },
  {
    numéro: "13/20",
    question:
      "Quel est le nom de la potion permettant de changer d'apparence ?",
    options: ["Veritaserum", "Amortentia", "Felix Felicis", "Polynectar"],
    answer: "Polynectar",
  },
  {
    numéro: "14/20",
    question:
      "Quel est le nom du professeur de Défense contre les forces du Mal dans la première année de Harry ?",
    options: [
      "Remus Lupin",
      "Severus Rogue",
      "Quirinus Quirrell",
      "Dolores Ombrage",
    ],
    answer: "Quirinus Quirrell",
  },
  {
    numéro: "15/20",
    question:
      "Quel est le nom de la carte magique qui montre tout Poudlard et ses habitants ?",
    options: [
      "La Carte des Fondateurs",
      "La Carte du Maraudeur",
      "La Carte de Poudlard",
      "La Carte de l'École",
    ],
    answer: "La Carte du Maraudeur",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du professeur de divination à Poudlard ?",
    options: [
      "Aurora Sinistra",
      "Filius Flitwick",
      "Pomona Chourave",
      "Sybille Trelawney",
    ],
    answer: "Sybille Trelawney",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom du serpent de Voldemort ?",
    options: ["Nagili", "Basilic", "Niffler", "Nagini"],
    answer: "Nagini",
  },
  {
    numéro: "18/20",
    question:
      "Quel est le nom du directeur de Poudlard avant Albus Dumbledore ?",
    options: [
      "Horace Slughorn",
      "Phineas Nigellus Black",
      "Armando Dippet",
      "Dilys Derwent",
    ],
    answer: "Armando Dippet",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom de l'animal de compagnie de Ron Weasley ?",
    options: ["Pattenrond", "Croûtard", "Hedwige", "Errol"],
    answer: "Croûtard",
  },
  {
    numéro: "20/20",
    question:
      "Quel est le nom du groupe de sorciers rebelles dirigé par Harry, Ron et Hermione en cinquième année ?",
    options: [
      "La Brigade Inquisitoriale",
      "L'Ordre du Phénix",
      "L'Armée de Dumbledore",
      "Les Maraudeurs",
    ],
    answer: "L'Armée de Dumbledore",
  },
];

const questionsSeries = [
  {
    numéro: "1/20",
    question: "Qui tire sur J.R. dans 'Dallas' ?",
    options: [
      "Kristin Shepard",
      "Sue Ellen Ewing",
      "Pamela Barnes",
      "Cliff Barnes",
    ],
    answer: "Kristin Shepard",
  },
  {
    numéro: "2/20",
    question:
      "Quel est le nom du fils de Rick Grimes dans 'The Walking Dead' ?",
    options: ["Carl", "Daryl", "Glenn", "Morgan"],
    answer: "Carl",
  },
  {
    numéro: "3/20",
    question:
      "Qui est l'ami hacker d'Oliver Queen, également membre de l'équipe Arrow ?",
    options: ["Felicity Smoak", "John Diggle", "Roy Harper", "Laurel Lance"],
    answer: "Felicity Smoak",
  },
  {
    numéro: "4/20",
    question: "Quel est le vrai nom de Superman dans 'Smallville' ?",
    options: ["Clark Kent", "Bruce Wayne", "Oliver Queen", "Barry Allen"],
    answer: "Clark Kent",
  },
  {
    numéro: "5/20",
    question: "Quel est le prénom du fils de Ross dans 'Friends' ?",
    options: ["Ben", "Mike", "Jack", "David"],
    answer: "Ben",
  },
  {
    numéro: "6/20",
    question:
      "Quel personnage de DC Comics est le mentor d'Oliver Queen dans la série 'Arrow' ?",
    options: ["Slade Wilson", "Malcolm Merlyn", "John Diggle", "Floyd Lawton"],
    answer: "Slade Wilson",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom complet de KITT dans 'K2000' ?",
    options: [
      "Knight Industries Two Thousand",
      "Knight Intelligent Two Thousand",
      "Knight Internal Two Thousand",
      "Knight International Two Thousand",
    ],
    answer: "Knight Industries Two Thousand",
  },
  {
    numéro: "8/20",
    question: "Qui joue le rôle de C.J. Parker dans 'Alerte à Malibu' ?",
    options: [
      "Pamela Anderson",
      "Yasmine Bleeth",
      "Erika Eleniak",
      "Carmen Electra",
    ],
    answer: "Pamela Anderson",
  },
  {
    numéro: "9/20",
    question: "Dans quelle ville fictive se déroule 'The Flash' ?",
    options: ["Central City", "Star City", "Gotham City", "Metropolis"],
    answer: "Central City",
  },
  {
    numéro: "10/20",
    question:
      "Quel est le véritable nom du super-héros connu sous le nom d'Arrow ?",
    options: ["Oliver Queen", "Bruce Wayne", "Clark Kent", "Barry Allen"],
    answer: "Oliver Queen",
  },
  {
    numéro: "11/20",
    question: "Quelle famille est au centre de la série 'Santa Barbara' ?",
    options: ["Capwell", "Carrington", "Ewing", "Channing"],
    answer: "Capwell",
  },
  {
    numéro: "12/20",
    question:
      "Quel est le nom de l'ennemi juré de Clark Kent dans 'Smallville' ?",
    options: ["Lex Luthor", "General Zod", "Darkseid", "Brainiac"],
    answer: "Lex Luthor",
  },
  {
    numéro: "13/20",
    question:
      "Quel est l'objet emblématique que MacGyver utilise souvent pour se sortir de situations dangereuses ?",
    options: ["Couteau suisse", "Téléphone", "Pistolet", "Briquet"],
    answer: "Couteau suisse",
  },
  {
    numéro: "14/20",
    question:
      "Quel membre de l'Agence tous risques est connu pour son déguisement et ses plans élaborés ?",
    options: ["Hannibal", "Faceman", "Murdock", "B.A. Baracus"],
    answer: "Hannibal",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom du voisin religieux de la famille Simpson ?",
    options: [
      "Ned Flanders",
      "Moe Szyslak",
      "Chief Wiggum",
      "Apu Nahasapeemapetilon",
    ],
    answer: "Ned Flanders",
  },
  {
    numéro: "16/20",
    question:
      "Dans 'The Big Bang Theory', quel est le nom du colocataire de Sheldon ?",
    options: ["Leonard", "Howard", "Raj", "Stuart"],
    answer: "Leonard",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom de la femme de Bobby Ewing dans 'Dallas' ?",
    options: ["Pamela", "Sue Ellen", "Lucy", "Jenna"],
    answer: "Pamela",
  },
  {
    numéro: "18/20",
    question:
      "Quel est le nom de l'équipe de scientifiques qui aide Barry Allen dans 'The Flash' ?",
    options: ["S.T.A.R. Labs", "A.R.G.U.S.", "Wayne Enterprises", "LexCorp"],
    answer: "S.T.A.R. Labs",
  },
  {
    numéro: "19/20",
    question:
      "Quelle est la capacité la plus souvent utilisée par Jonathan Chase dans 'Manimal' ?",
    options: [
      "Se transformer en panthère noire",
      "Se transformer en aigle",
      "Se transformer en serpent",
      "Se transformer en ours",
    ],
    answer: "Se transformer en panthère noire",
  },
  {
    numéro: "20/20",
    question:
      "Quel est le nom de l'ennemi juré de Rick Grimes, connu pour utiliser une batte de baseball couverte de fil barbelé ?",
    options: ["Negan", "Governor", "Shane", "Merle"],
    answer: "Negan",
  },
];

const questionsGeographie = [
  {
    numéro: "1/20",
    question: "Quel est le plus grand pays du monde par superficie ?",
    options: ["Russie", "Canada", "Chine", "États-Unis"],
    answer: "Russie",
  },
  {
    numéro: "2/20",
    question: "Où se trouve le mont Everest, le plus haut sommet du monde ?",
    options: ["Népal", "Inde", "Chine", "Bhoutan"],
    answer: "Népal",
  },
  {
    numéro: "3/20",
    question: "Quel est le fleuve le plus long du monde ?",
    options: ["Nil", "Amazone", "Yangzi Jiang", "Mississippi"],
    answer: "Amazone",
  },
  {
    numéro: "4/20",
    question:
      "Quel est le point le plus bas de la Terre, situé à environ 430 mètres sous le niveau de la mer ?",
    options: [
      "Mer Morte",
      "Vallée de la Mort",
      "Lac Assal",
      "Fosse des Mariannes",
    ],
    answer: "Mer Morte",
  },
  {
    numéro: "5/20",
    question: "Quel pays est le plus grand producteur mondial de café ?",
    options: ["Brésil", "Colombie", "Vietnam", "Indonésie"],
    answer: "Brésil",
  },
  {
    numéro: "6/20",
    question: "Quel est le plus grand archipel du monde en nombre d'îles ?",
    options: ["Indonésie", "Philippines", "Japon", "Maldives"],
    answer: "Indonésie",
  },
  {
    numéro: "7/20",
    question: "Quel est le pays le plus peuplé d'Afrique ?",
    options: [
      "Nigeria",
      "Égypte",
      "Éthiopie",
      "République Démocratique du Congo",
    ],
    answer: "Nigeria",
  },
  {
    numéro: "8/20",
    question: "Quelle est la plus haute montagne d'Afrique ?",
    options: ["Mont Kilimandjaro", "Mont Kenya", "Mont Stanley", "Mont Elgon"],
    answer: "Mont Kilimandjaro",
  },
  {
    numéro: "9/20",
    question: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
    options: ["Brésil", "Argentine", "Colombie", "Pérou"],
    answer: "Brésil",
  },
  {
    numéro: "10/20",
    question: "Quel est le plus grand lac d'eau douce en volume du monde ?",
    options: ["lac Baïkal", "lac Supérieur", "lac Tanganyika", "lac Victoria"],
    answer: "lac Baïkal",
  },
  {
    numéro: "11/20",
    question: "Quel pays a le plus grand nombre de langues officielles ?",
    options: ["Afrique du Sud", "Inde", "Suisse", "Nouvelle-Zélande"],
    answer: "Afrique du Sud",
  },
  {
    numéro: "12/20",
    question: "Dans quel océan se trouve l'île de Madagascar ?",
    options: [
      "Océan Indien",
      "Océan Atlantique",
      "Océan Pacifique",
      "Océan Arctique",
    ],
    answer: "Océan Indien",
  },
  {
    numéro: "13/20",
    question: "Quelle est la capitale du Pérou ?",
    options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
    answer: "Lima",
  },
  {
    numéro: "14/20",
    question: "Quelle est la plus haute cascade du monde ?",
    options: [
      "Salto Angel (Venezuela)",
      "Niagara (États-Unis/Canada)",
      "Victoria (Zimbabwe/Zambie)",
      "Tugela (Afrique du Sud)",
    ],
    answer: "Salto Angel (Venezuela)",
  },
  {
    numéro: "15/20",
    question: "Quelle est la ville la plus peuplée d'Europe ?",
    options: ["Moscou", "Londres", "Paris", "Berlin"],
    answer: "Moscou",
  },
  {
    numéro: "16/20",
    question: "Quel est le plus grand désert chaud du monde ?",
    options: ["Sahara", "Kalahari", "Arabie", "Gobi"],
    answer: "Sahara",
  },
  {
    numéro: "17/20",
    question:
      "Quel est le pays le plus grand exportateur de pétrole au monde ?",
    options: ["Arabie Saoudite", "États-Unis", "Russie", "Canada"],
    answer: "Arabie Saoudite",
  },
  {
    numéro: "18/20",
    question: "Quelle est la capitale de la Suède ?",
    options: ["Stockholm", "Oslo", "Copenhague", "Helsinki"],
    answer: "Stockholm",
  },
  {
    numéro: "19/20",
    question: "Dans quel pays se trouve la ville de Dubaï ?",
    options: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït"],
    answer: "Émirats Arabes Unis",
  },
  {
    numéro: "20/20",
    question:
      "Quel est le plus long fleuve de France, s'étendant sur environ 1,012 kilomètres ?",
    options: ["Loire", "Rhône", "Seine", "Garonne"],
    answer: "Loire",
  },
];

const questionsOrthographe = [
  {
    numéro: "1/20",
    question:
      "Comment s'écrit le mot désignant l'action de se débarrasser de quelque chose ?",
    options: ["Jetter", "Jeté", "Jeter", "Je tais"],
    answer: "Jeter",
  },
  {
    numéro: "2/20",
    question: "Quel est le féminin de 'acteur' ?",
    options: ["Actrice", "Acteuse", "Acteure", "Actrisse"],
    answer: "Actrice",
  },
  {
    numéro: "3/20",
    question:
      "Comment s'écrit le mot désignant une énigme difficile, un problème insoluble ?",
    options: ["Querelle", "Querelleur", "Querele", "Querrelle"],
    answer: "Querelle",
  },
  {
    numéro: "4/20",
    question: "Quel est le mot désignant un petit lac ou une mare ?",
    options: ["Marette", "Mare", "Maret", "Marre"],
    answer: "Mare",
  },
  {
    numéro: "5/20",
    question: "Quel est le pluriel de 'monsieur' ?",
    options: ["Monsieurs", "Monsieures", "Monsieur", "Messieurs"],
    answer: "Messieurs",
  },
  {
    numéro: "6/20",
    question:
      "Comment s'écrit le mot désignant un ensemble de règles ou de lois ?",
    options: ["Règles", "Règle", "Règlement", "Règlements"],
    answer: "Règlement",
  },
  {
    numéro: "7/20",
    question: "Quel est le féminin de 'professeur' ?",
    options: ["Professeuse", "Professeure", "Professeur", "Professeuress"],
    answer: "Professeure",
  },
  {
    numéro: "8/20",
    question:
      "Quel est l'ancien terme pour désigner un poète musicien de la Renaissance ?",
    options: ["Bachique", "Vagant", "Troubadour", "Luthier"],
    answer: "Troubadour",
  },
  {
    numéro: "9/20",
    question:
      "Comment s'écrit le mot désignant la conversion d'une substance solide en gaz sans passer par l'état liquide ?",
    options: [
      "Sublimation",
      "Substantiation ",
      "Substitution",
      "Subtilisation",
    ],
    answer: "Sublimation",
  },
  {
    numéro: "10/20",
    question: "Quel est le féminin de 'ministre' ?",
    options: ["Ministère", "Ministesse", "Ministre", "Ministresse"],
    answer: "Ministre",
  },
  {
    numéro: "11/20",
    question:
      "Comment s'écrit le mot désignant une plante grimpante souvent utilisée comme décoration ?",
    options: ["Lièvre", "Lierre", "Lières", "Lyère"],
    answer: "Lierre",
  },
  {
    numéro: "12/20",
    question: "Quel est l'ancien terme pour désigner un alchimiste ?",
    options: ["Sorcellier", "Alchimiste", "Philosophe", "Nigromant"],
    answer: "Nigromant",
  },
  {
    numéro: "13/20",
    question: "Comment s'écrit le mot désignant une pierre précieuse bleue ?",
    options: ["Saphire", "Saphyr", "Saphir", "Safir"],
    answer: "Saphir",
  },
  {
    numéro: "14/20",
    question:
      "Comment s'écrit le mot désignant une personne qui s'occupe des enfants ?",
    options: ["Nourrice", "Nourrisse", "Nourice", "Nourisse"],
    answer: "Nourrice",
  },
  {
    numéro: "15/20",
    question:
      "Comment s'écrit le mot désignant un vieux gréement à trois mâts ?",
    options: ["Trois-mâts", "Tri-mât", "Très-mât", "Tri-mas"],
    answer: "Trois-mâts",
  },
  {
    numéro: "16/20",
    question:
      "Quel est le mot désignant une marque laissée par la rouille sur le métal ?",
    options: ["Ferrugine", "Ferrugineuse", "Ferruginé", "Ferruginée"],
    answer: "Ferrugine",
  },
  {
    numéro: "17/20",
    question:
      "Comment s'écrit le mot désignant un courant d'eau rapide et tourbillonnant ?",
    options: ["Mouillard", "Moulinet", "Mouillon", "Mouille"],
    answer: "Mouillon",
  },
  {
    numéro: "18/20",
    question:
      "Comment s'écrit le mot désignant une personne atteinte de gigantisme ?",
    options: ["Gigantesque", "Géantisme", "Gigantée", "Gigantiste"],
    answer: "Géantisme",
  },
  {
    numéro: "19/20",
    question:
      "Quel est le mot désignant une inflammation aiguë de la muqueuse intestinale ?",
    options: ["Entérite", "Entéritique", "Entéritée", "Entérine"],
    answer: "Entérite",
  },
  {
    numéro: "20/20",
    question:
      "Quel est l'ancien terme pour désigner un ensemble de règles édictées par un seigneur au Moyen Âge ?",
    options: ["Charte", "Ordonnance", "Fief", "Édit"],
    answer: "Ordonnance",
  },
];

const questionsSport = [
  {
    numéro: "1/20",
    question:
      "Quel est le nom du joueur de football brésilien surnommé 'O Fenômeno' ?",
    options: ["Ronaldo", "Pelé", "Zidane", "Messi"],
    answer: "Ronaldo",
  },
  {
    numéro: "2/20",
    question:
      "Dans quel sport l'expression 'Grand Chelem' désigne-t-elle la victoire dans les quatre tournois majeurs la même année ?",
    options: ["Tennis", "Golf", "Football", "Basketball"],
    answer: "Tennis",
  },
  {
    numéro: "3/20",
    question:
      "Quel est le nom du plus grand événement sportif international regroupant des athlètes de plus de 200 pays différents, se déroulant tous les quatre ans ?",
    options: [
      "Jeux Olympiques",
      "Coupe du Monde",
      "Championnat du Monde",
      "Euro",
    ],
    answer: "Jeux Olympiques",
  },
  {
    numéro: "4/20",
    question:
      "Quel sport utilise une raquette pour frapper une balle contre un mur dans un court fermé avec des lignes marquant les limites du jeu ?",
    options: ["Squash", "Tennis", "Paddle", "Ping-pong"],
    answer: "Squash",
  },
  {
    numéro: "5/20",
    question:
      "Quel joueur de basket-ball américain a remporté six titres NBA avec les Chicago Bulls dans les années 1990 ?",
    options: ["Michael Jordan", "Magic Johnson", "Larry Bird", "Kobe Bryant"],
    answer: "Michael Jordan",
  },
  {
    numéro: "6/20",
    question:
      "Quel golfeur américain a remporté 15 titres du Grand Chelem, dont cinq Masters et quatre US Open ?",
    options: [
      "Tiger Woods",
      "Jack Nicklaus",
      "Arnold Palmer",
      "Phil Mickelson",
    ],
    answer: "Tiger Woods",
  },
  {
    numéro: "7/20",
    question:
      "Quel est le nom du championnat annuel de rugby où s'affrontent des équipes européennes ?",
    options: [
      "Tournoi des Six Nations",
      "Coupe du Monde de Rugby",
      "Championnat de France",
      "Rugby Championship",
    ],
    answer: "Tournoi des Six Nations",
  },
  {
    numéro: "8/20",
    question:
      "Dans quel sport les participants descendent une pente enneigée à l'aide de skis, en slalomant entre des portes ou d'autres obstacles ?",
    options: ["Ski alpin", "Snowboard", "Ski de fond", "Biathlon"],
    answer: "Ski alpin",
  },
  {
    numéro: "9/20",
    question:
      "Quel est le nom du sport qui se pratique sur une piste de glace où les concurrents descendent la pente à grande vitesse, en se couchant sur un traîneau ?",
    options: ["Luge", "Bobsleigh", "Skeleton", "Patinage de vitesse"],
    answer: "Luge",
  },
  {
    numéro: "10/20",
    question:
      "Quel footballeur argentin a remporté cinq Ballons d'Or et joue pour le FC Barcelone depuis le début de sa carrière professionnelle en 2000 ?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "Neymar"],
    answer: "Lionel Messi",
  },
  {
    numéro: "11/20",
    question:
      "Quel joueur de tennis suisse a remporté 20 titres du Grand Chelem, dont huit Wimbledon et cinq US Open ?",
    options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"],
    answer: "Roger Federer",
  },
  {
    numéro: "12/20",
    question: "Quelle est la distance officielle d'un marathon en kilomètres ?",
    options: ["42,195 km", "40,195 km", "45 km", "50 km"],
    answer: "42,195 km",
  },
  {
    numéro: "13/20",
    question: "Dans quel sport le joueur peut-il marquer un 'touchdown' ?",
    options: [
      "Football américain",
      "Basket-ball",
      "Baseball",
      "Hockey sur glace",
    ],
    answer: "Football américain",
  },
  {
    numéro: "14/20",
    question: "Quel est le sport principal du Tour de France ?",
    options: [
      "Cyclisme sur route",
      "Course à pied",
      "Cyclisme sur piste",
      "Ski alpin",
    ],
    answer: "Cyclisme sur route",
  },
  {
    numéro: "15/20",
    question:
      "Quel joueur de football brésilien a remporté deux Coupes du Monde de la FIFA avec le Brésil en 1958 et 1962 ?",
    options: ["Pelé", "Ronaldinho", "Ronaldo", "Romário"],
    answer: "Pelé",
  },
  {
    numéro: "16/20",
    question:
      "Quelle est la distance d'une piste d'athlétisme standard utilisée pour les courses sur longue distance, comme le 10 000 mètres ?",
    options: ["400 mètres", "800 mètres", "200 mètres", "1000 mètres"],
    answer: "400 mètres",
  },
  {
    numéro: "17/20",
    question:
      "Quel est le nom donné à la méthode utilisée pour marquer un point en rugby, où le joueur pose le ballon derrière la ligne de but de l'adversaire ?",
    options: ["Essai", "Pénalité", "Drop", "Conversion"],
    answer: "Essai",
  },
  {
    numéro: "18/20",
    question:
      "Quel joueur de tennis espagnol a remporté un record de 13 titres à Roland-Garros, dominant sur terre battue ?",
    options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Andy Murray"],
    answer: "Rafael Nadal",
  },
  {
    numéro: "19/20",
    question:
      "Quel est le nom de la compétition internationale de football la plus prestigieuse pour les équipes nationales, remportée par la France en 2018 ?",
    options: [
      "Coupe du Monde de la FIFA",
      "Ligue des Champions",
      "Copa America",
      "Euro",
    ],
    answer: "Coupe du Monde de la FIFA",
  },
  {
    numéro: "20/20",
    question:
      "Quel joueur français a remporté la Coupe du Monde de la FIFA en 1998 en tant que capitaine de l'équipe nationale et est désormais entraîneur de l'équipe nationale française ?",
    options: [
      "Zinédine Zidane",
      "Didier Deschamps",
      "Thierry Henry",
      "Marcel Desailly",
    ],
    answer: "Didier Deschamps",
  },
];

const questionsAnimaux = [
  {
    numéro: "1/20",
    question: "Quel oiseau ne vole pas ?",
    options: ["Autruche", "Aigle", "Moineau", "Colibri"],
    answer: "Autruche",
  },
  {
    numéro: "2/20",
    question: "Quel est le plus grand reptile du monde ?",
    options: ["Crocodile", "Serpent boa", "Tortue géante", "Lézard Komodo"],
    answer: "Crocodile",
  },
  {
    numéro: "3/20",
    question: "Quel est l'animal terrestre le plus rapide ?",
    options: ["Guépard", "Antilope", "Lion", "Zèbre"],
    answer: "Guépard",
  },
  {
    numéro: "4/20",
    question: "Quel est le plus grand poisson du monde ?",
    options: ["Requin-baleine", "Requin marteau", "Raie manta", "Thon"],
    answer: "Requin-baleine",
  },
  {
    numéro: "5/20",
    question: "Quel est le plus petit mammifère au monde ?",
    options: ["Musaraigne", "Souris", "Chauve-souris", "Mulot"],
    answer: "Musaraigne",
  },
  {
    numéro: "6/20",
    question:
      "Quel insecte peut soulever des objets jusqu'à 50 fois son poids ?",
    options: ["Fourmi", "Scarabée", "Papillon", "Abeille"],
    answer: "Fourmi",
  },
  {
    numéro: "7/20",
    question: "Quel animal hiberne pendant tout l'hiver ?",
    options: ["Ours", "Écureuil", "Marmotte", "Renard"],
    answer: "Marmotte",
  },
  {
    numéro: "8/20",
    question: "Quel est l'animal national de l'Australie ?",
    options: ["Kangourou", "Koala", "Emu", "Wombat"],
    answer: "Kangourou",
  },
  {
    numéro: "9/20",
    question: "Quel est l'oiseau symbole des États-Unis ?",
    options: ["Aigle", "Hibou", "Pigeon", "Faucon"],
    answer: "Aigle",
  },
  {
    numéro: "10/20",
    question: "Quel est l'animal qui dort le moins ?",
    options: ["Girafe", "Dauphin", "Chauve-souris", "Éléphant"],
    answer: "Dauphin",
  },
  {
    numéro: "11/20",
    question: "Quel est l'oiseau le plus rapide au monde ?",
    options: ["Colibri", "Faucon pèlerin", "Aigle", "Autruche"],
    answer: "Faucon pèlerin",
  },
  {
    numéro: "12/20",
    question: "Quel est le plus grand animal marin ?",
    options: ["Baleine bleue", "Requin blanc", "Orque", "Méduse géante"],
    answer: "Baleine bleue",
  },
  {
    numéro: "13/20",
    question: "Quel est le serpent le plus venimeux au monde ?",
    options: ["Cobra", "Vipère", "Mamba noir", "Taïpan"],
    answer: "Mamba noir",
  },
  {
    numéro: "14/20",
    question:
      "Quel animal a le plus grand cerveau en proportion de sa taille ?",
    options: ["Éléphant", "Dauphin", "Chimpanzé", "Humain"],
    answer: "Dauphin",
  },
  {
    numéro: "15/20",
    question: "Quel est l'animal le plus lent du monde ?",
    options: ["Limace", "Tortue", "Koala", "Paresseux"],
    answer: "Limace",
  },
  {
    numéro: "16/20",
    question: "Quel est le plus grand rongeur du monde ?",
    options: ["Castor", "Rat", "Chinchilla", "Capybara"],
    answer: "Capybara",
  },
  {
    numéro: "17/20",
    question: "Quel est l'oiseau qui peut courir le plus vite ?",
    options: ["Autruche", "Émeu", "Kiwi", "Pingouin"],
    answer: "Autruche",
  },
  {
    numéro: "18/20",
    question:
      "Quel est l'animal qui peut survivre sans eau le plus longtemps ?",
    options: ["Chameau", "Kangourou", "Souris du désert", "Éléphant"],
    answer: "Souris du désert",
  },
  {
    numéro: "19/20",
    question: "Quel est le poisson le plus venimeux au monde ?",
    options: [
      "Poisson-pierre",
      "Poisson-scie",
      "Poisson-globe",
      "Raie pastenague",
    ],
    answer: "Poisson-pierre",
  },
  {
    numéro: "20/20",
    question:
      "Quel animal a le plus petit cerveau en proportion de sa taille ?",
    options: ["Souris", "Poulet", "Grenouille", "Poisson"],
    answer: "Poisson",
  },
];

const questionsFaitsInsolites = [
  {
    numéro: "1/20",
    question: "Quel pays consomme le plus de chocolat par habitant ?",
    options: ["Suisse", "Belgique", "Allemagne", "États-Unis"],
    answer: "Suisse",
  },
  {
    numéro: "2/20",
    question:
      "Quel est le record de la personne ayant le plus de piercings au corps ?",
    options: ["567", "746", "901", "1027"],
    answer: "1027",
  },
  {
    numéro: "3/20",
    question:
      "Quel est le nombre de chutes de cheveux quotidien moyen pour une personne ?",
    options: ["100", "200", "50", "150"],
    answer: "100",
  },
  {
    numéro: "4/20",
    question: "Quel est l'objet le plus souvent volé dans le monde ?",
    options: ["Voiture", "Portefeuille", "Téléphone portable", "Stylo"],
    answer: "Stylo",
  },
  {
    numéro: "5/20",
    question:
      "Quel est le nombre moyen de mots prononcés par une personne chaque jour ?",
    options: ["2 000 mots", "5 000 mots", "7 000 mots", "10 000 mots"],
    answer: "7 000 mots",
  },
  {
    numéro: "6/20",
    question:
      "Quel est le record du monde pour le nombre de hamburgers mangés en 10 minutes ?",
    options: ["12", "22", "32", "42"],
    answer: "32",
  },
  {
    numéro: "7/20",
    question: "Quel est le poids du plus gros hamburger jamais réalisé ?",
    options: ["250 kg", "500 kg", "750 kg", "1 000 kg"],
    answer: "1 000 kg",
  },
  {
    numéro: "8/20",
    question:
      "Quelle est la quantité de papier toilette utilisée en moyenne par personne par an ?",
    options: ["5 kg", "10 kg", "15 kg", "20 kg"],
    answer: "20 kg",
  },
  {
    numéro: "9/20",
    question:
      "Quelle est la durée la plus longue qu'une personne a passée sans dormir ?",
    options: ["3 jours", "7 jours", "11 jours", "15 jours"],
    answer: "11 jours",
  },
  {
    numéro: "10/20",
    question: "Quel est le nombre de selfies pris chaque jour dans le monde ?",
    options: ["1 million", "5 millions", "10 millions", "25 millions"],
    answer: "25 millions",
  },
  {
    numéro: "11/20",
    question: "Quelle est la vitesse moyenne d'un pet humain ?",
    options: ["6 km/h", "10 km/h", "14 km/h", "18 km/h"],
    answer: "14 km/h",
  },
  {
    numéro: "12/20",
    question:
      "Quel est le record du monde pour le nombre de mots tapés en une minute sur un clavier ?",
    options: ["150 mots", "200 mots", "256 mots", "212 mots"],
    answer: "212 mots",
  },
  {
    numéro: "13/20",
    question:
      "Quelle est la distance la plus longue jamais parcourue à la nage sans s'arrêter ?",
    options: ["100 km", "225 km", "300 km", "400 km"],
    answer: "225 km",
  },
  {
    numéro: "14/20",
    question: "Combien de fois le cœur humain bat-il en moyenne par jour ?",
    options: ["10 000 fois", "25 000 fois", "100 000 fois", "56 000 fois"],
    answer: "100 000 fois",
  },
  {
    numéro: "15/20",
    question:
      "Quelle est la quantité de chocolat consommée par habitant en Suisse par an ?",
    options: ["5 kg", "10 kg", "15 kg", "20 kg"],
    answer: "10 kg",
  },
  {
    numéro: "16/20",
    question:
      "Quelle est la température la plus basse jamais enregistrée sur Terre ?",
    options: ["-60,2 °C", "-83,6 °C", "-100 °C", "-128,6 °C"],
    answer: "-128,6 °C",
  },
  {
    numéro: "17/20",
    question:
      "Quelle est la longueur du plus long cheveu humain jamais enregistré ?",
    options: ["50 cm", "75 cm", "100 cm", "150 cm"],
    answer: "150 cm",
  },
  {
    numéro: "18/20",
    question: "Quel est le nombre de pattes qu'un escargot possède ?",
    options: ["0", "1", "4", "6"],
    answer: "1",
  },
  {
    numéro: "19/20",
    question:
      "Quel est le nombre de fois qu'un colibri bat des ailes en une seconde ?",
    options: ["20 fois", "40 fois", "60 fois", "80 fois"],
    answer: "80 fois",
  },
  {
    numéro: "20/20",
    question:
      "Quel est le nombre moyen de pas qu'une personne fait dans sa vie ?",
    options: ["100 millions", "200 millions", "300 millions", "400 millions"],
    answer: "200 millions",
  },
];

const questionsCinema = [
  {
    numéro: "1/20",
    question: "Quel acteur joue le rôle principal dans le film 'Inception' ?",
    options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"],
    answer: "Leonardo DiCaprio",
  },
  {
    numéro: "2/20",
    question:
      "Quel film d'animation de 2022 réalisé par Domee Shi raconte l'histoire d'une adolescente qui se transforme en panda roux géant lorsqu'elle est stressée ?",
    options: ["Alerte Rouge", "Luca", "Soul", "Encanto"],
    answer: "Alerte Rouge",
  },
  {
    numéro: "3/20",
    question:
      "Quel film est connu pour la réplique 'Je suis le maître du monde' ?",
    options: ["Gladiator", "Titanic", "Avatar", "Le Seigneur des Anneaux"],
    answer: "Titanic",
  },
  {
    numéro: "4/20",
    question:
      "Quel est le titre du premier film de la saga 'Star Wars' sorti en 1977 ?",
    options: [
      "L'Empire contre-attaque",
      "Le Retour du Jedi",
      "Un nouvel espoir",
      "La Menace fantôme",
    ],
    answer: "Un nouvel espoir",
  },
  {
    numéro: "5/20",
    question: "Qui a réalisé le film 'Avatar' sorti en 2009 ?",
    options: [
      "James Cameron",
      "Steven Spielberg",
      "Peter Jackson",
      "Ridley Scott",
    ],
    answer: "James Cameron",
  },
  {
    numéro: "6/20",
    question:
      "Quel est le nom du personnage joué par Johnny Depp dans 'Pirates des Caraïbes' ?",
    options: ["Will Turner", "Jack Sparrow", "Davy Jones", "Hector Barbossa"],
    answer: "Jack Sparrow",
  },
  {
    numéro: "7/20",
    question:
      "Quel film de 1985 réalisé par Robert Zemeckis met en scène un scientifique nommé Doc Brown ?",
    options: ["Les Goonies", "E.T.", "Retour vers le futur", "S.O.S. Fantômes"],
    answer: "Retour vers le futur",
  },
  {
    numéro: "8/20",
    question:
      "Quel film de 1979 réalisé par Ridley Scott met en scène un vaisseau spatial nommé Nostromo ?",
    options: [
      "Blade Runner",
      "Star Wars",
      "2001 : L'Odyssée de l'espace",
      "Alien : Le Huitième Passager",
    ],
    answer: "Alien : Le Huitième Passager",
  },
  {
    numéro: "9/20",
    question:
      "Quel film d'animation de 2022 réalisé par Angus MacLane explore les origines du personnage cosmonaute en uniforme blanc et vert ?",
    options: [
      "Buzz l'Éclair",
      "Toy Story 4",
      "Raya et le Dernier Dragon",
      "En avant",
    ],
    answer: "Buzz l'Éclair",
  },
  {
    numéro: "10/20",
    question:
      "Quel film de 1980 réalisé par Stanley Kubrick est une adaptation d'un roman de Stephen King mettant en scène un hôtel hanté ?",
    options: ["Carrie", "Shining", "Misery", "Ça"],
    answer: "Shining",
  },
  {
    numéro: "11/20",
    question:
      "Quel film d'animation Pixar de 2015 explore les émotions humaines à travers les yeux d'une jeune fille nommée Riley ?",
    options: ["Vice-versa", "Coco", "Le Monde de Dory", "Le Voyage d'Arlo"],
    answer: "Vice-versa",
  },
  {
    numéro: "12/20",
    question:
      "Quel film de 1986 réalisé par Tony Scott met en scène Tom Cruise en tant que pilote de chasse ?",
    options: ["Days of Thunder", "Top Gun", "Mission: Impossible", "Rain Man"],
    answer: "Top Gun",
  },
  {
    numéro: "13/20",
    question:
      "Quel film de 2011 réalisé par Michel Hazanavicius a remporté l'Oscar du meilleur film ?",
    options: ["Hugo", "The Artist", "Minuit à Paris", "The Descendants"],
    answer: "The Artist",
  },
  {
    numéro: "14/20",
    question:
      "Quel film d'animation de 2016 réalisé par Byron Howard et Rich Moore se déroule dans une ville où cohabitent des animaux anthropomorphes ?",
    options: [
      "Zootopie",
      "Tous en scène",
      "Comme des bêtes",
      "Kung Fu Panda 3",
    ],
    answer: "Zootopie",
  },
  {
    numéro: "15/20",
    question:
      "Quel film de 2023 réalisé par Greta Gerwig est une adaptation moderne de la célèbre poupée de Mattel ?",
    options: [
      "Barbie",
      "Oppenheimer",
      "Dune : Deuxième Partie",
      "La Petite Sirène",
    ],
    answer: "Barbie",
  },
  {
    numéro: "16/20",
    question:
      "Quel film de 2023 réalisé par James Gunn est le troisième et dernier volet de la série sur une équipe de héros intergalactiques ?",
    options: [
      "Les Gardiens de la Galaxie Vol. 3",
      "Thor : Love and Thunder",
      "Les Éternels",
      "Doctor Strange in the Multiverse of Madness",
    ],
    answer: "Les Gardiens de la Galaxie Vol. 3",
  },
  {
    numéro: "17/20",
    question:
      "Quel film de 2019 réalisé par Todd Phillips raconte l'histoire de l'ennemi juré de Batman, centré sur l'origine du personnage ?",
    options: [
      "Joker",
      "Birds of Prey",
      "Suicide Squad",
      "Harley Quinn: Birds of Prey",
    ],
    answer: "Joker",
  },
  {
    numéro: "18/20",
    question:
      "Quel film de 2011 réalisé par Rupert Wyatt est un reboot de la franchise où James Franco joue un scientifique étudiant des chimpanzés intelligents ?",
    options: [
      "La Planète des Singes : Les Origines",
      "La Planète des Singes : Suprématie",
      "La Planète des Singes : L'Affrontement",
      "La Planète des Singes",
    ],
    answer: "La Planète des Singes : Les Origines",
  },
  {
    numéro: "19/20",
    question:
      "Quel film de 2018 réalisé par Bradley Cooper met en vedette Lady Gaga dans le rôle d'une chanteuse en herbe qui tombe amoureuse d'une star du rock ?",
    options: ["A Star Is Born", "Bohemian Rhapsody", "La La Land", "Rocketman"],
    answer: "A Star Is Born",
  },
  {
    numéro: "20/20",
    question:
      "Quel film de 2011 réalisé par David Yates est une adaptation finale de la saga Harry Potter, où Harry affronte Voldemort ?",
    options: [
      "Harry Potter et les Reliques de la Mort - Partie 2",
      "Harry Potter et les Reliques de la Mort - Partie 1",
      "Harry Potter et le Prince de Sang-Mêlé",
      "Harry Potter et l'Ordre du Phénix",
    ],
    answer: "Harry Potter et les Reliques de la Mort - Partie 2",
  },
];

const questionsPrincessesDisney = [
  {
    numéro: "1/20",
    question:
      "Quel est le nom de la princesse qui vit dans un château de glace ?",
    options: ["Cendrillon", "Belle", "Elsa", "Ariel"],
    answer: "Elsa",
  },
  {
    numéro: "2/20",
    question: "Quelle princesse Disney chante 'Partir là-bas' ?",
    options: ["Jasmine", "Ariel", "Elsa", "Cendrillon"],
    answer: "Ariel",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom du prince dans 'La Belle et la Bête' ?",
    options: ["Eric", "Charmant", "Adam", "Philippe"],
    answer: "Adam",
  },
  {
    numéro: "4/20",
    question: "Quelle princesse est endormie pendant presque tout le film ?",
    options: ["Tiana", "Blanche-Neige", "Aurore", "Cendrillon"],
    answer: "Aurore",
  },
  {
    numéro: "5/20",
    question: "Quelle princesse Disney a un tigre comme compagnon ?",
    options: ["Mulan", "Jasmine", "Pocahontas", "Ariel"],
    answer: "Jasmine",
  },
  {
    numéro: "6/20",
    question: "Quelle princesse Disney est connue pour sa chevelure magique ?",
    options: ["Merida", "Raiponce", "Cendrillon", "Aurore"],
    answer: "Raiponce",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom du père de la princesse vivant sous l'eau ?",
    options: ["Triton", "Eric", "Sébastien", "Polochon"],
    answer: "Triton",
  },
  {
    numéro: "8/20",
    question: "Quelle princesse Disney a une marraine fée ?",
    options: ["Cendrillon", "Belle", "Raiponce", "Tiana"],
    answer: "Cendrillon",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom de la princesse guerrière chinoise ?",
    options: ["Pocahontas", "Mulan", "Jasmine", "Belle"],
    answer: "Mulan",
  },
  {
    numéro: "10/20",
    question: "Quelle princesse Disney a une grenouille comme compagnon ?",
    options: ["Tiana", "Aurore", "Merida", "Elsa"],
    answer: "Tiana",
  },
  {
    numéro: "11/20",
    question: "Quelle princesse Disney parle aux animaux de la forêt ?",
    options: ["Blanche-Neige", "Jasmine", "Tiana", "Raiponce"],
    answer: "Blanche-Neige",
  },
  {
    numéro: "12/20",
    question:
      "Quel est le nom de la princesse qui veut découvrir un monde nouveau en Amérique ?",
    options: ["Ariel", "Pocahontas", "Merida", "Belle"],
    answer: "Pocahontas",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom de la sœur d'Elsa dans 'La Reine des Neiges' ?",
    options: ["Anna", "Belle", "Jasmine", "Tiana"],
    answer: "Anna",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom du prince de Cendrillon ?",
    options: ["Eric", "Charmant", "Philippe", "Aladdin"],
    answer: "Charmant",
  },
  {
    numéro: "15/20",
    question:
      "Quelle princesse Disney est connue pour sa chevelure rousse et son talent au tir à l'arc ?",
    options: ["Ariel", "Merida", "Elsa", "Blanche-Neige"],
    answer: "Merida",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du dragon qui accompagne Mulan ?",
    options: ["Pascal", "Raja", "Mushu", "Olaf"],
    answer: "Mushu",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom de la méchante sorcière dans 'Blanche-Neige' ?",
    options: ["Maléfique", "Ursula", "Grimhilde", "Gothel"],
    answer: "Grimhilde",
  },
  {
    numéro: "18/20",
    question:
      "Quel est le prénom du père de Belle dans 'La Belle et la Bête' ?",
    options: ["Maurice", "Henry", "John", "Eric"],
    answer: "Maurice",
  },
  {
    numéro: "19/20",
    question:
      "Quel est le nom de la princesse de l'île de Motunui dans 'Vaiana' ?",
    options: ["Moana", "Tiana", "Merida", "Ariel"],
    answer: "Moana",
  },
  {
    numéro: "20/20",
    question:
      "Quelle princesse Disney rêve de devenir une grande cuisinière à la Nouvelle-Orléans ?",
    options: ["Tiana", "Ariel", "Mulan", "Belle"],
    answer: "Tiana",
  },
];

const questionsHorreur = [
  {
    numéro: "1/20",
    question:
      "Quel film de 1973 est centré sur une jeune fille possédée par un démon et un prêtre tentant de l'exorciser ?",
    options: ["L'Exorciste", "Halloween", "Le Shining", "Psychose"],
    answer: "L'Exorciste",
  },
  {
    numéro: "2/20",
    question:
      "Quel film de 1980 réalisé par Stanley Kubrick se déroule dans l'hôtel Overlook ?",
    options: ["Shining", "Vendredi 13", "Poltergeist", "L'Exorciste"],
    answer: "Shining",
  },
  {
    numéro: "3/20",
    question:
      "Quel film de 1996 réalisé par Wes Craven met en scène un tueur masqué appelé Ghostface ?",
    options: ["Scream", "Halloween", "Vendredi 13", "Les Griffes de la Nuit"],
    answer: "Scream",
  },
  {
    numéro: "4/20",
    question:
      "Quel film de 1978 suit le tueur Michael Myers qui terrorise la ville de Haddonfield ?",
    options: ["Halloween", "Psychose", "Carrie", "L'Exorciste"],
    answer: "Halloween",
  },
  {
    numéro: "5/20",
    question:
      "Dans 'Ça', quel est le nom du clown maléfique qui terrorise les enfants de Derry ?",
    options: ["Pennywise", "Jigsaw", "Annabelle", "Leatherface"],
    answer: "Pennywise",
  },
  {
    numéro: "6/20",
    question:
      "Quel film de 1999 réalisé par M. Night Shyamalan met en scène un garçon capable de voir les morts ?",
    options: ["Sixième Sens", "Le Cercle", "Paranormal Activity", "Les Autres"],
    answer: "Sixième Sens",
  },
  {
    numéro: "7/20",
    question:
      "Dans quel film de 2018 des parents découvrent une poupée diabolique qui terrorise leur famille ?",
    options: [
      "Annabelle : La Maison du Mal",
      "Conjuring",
      "La Dame Blanche",
      "Chucky",
    ],
    answer: "Annabelle : La Maison du Mal",
  },
  {
    numéro: "8/20",
    question:
      "Quel film de 2017 met en scène un groupe d'amis qui échappent à la mort grâce à une vision prémonitoire d'un accident de montagne russe ?",
    options: [
      "Destination Finale 3",
      "Conjuring",
      "La Dame Blanche",
      "American Nightmare",
    ],
    answer: "Destination Finale 3",
  },
  {
    numéro: "9/20",
    question:
      "Quel film de 1974 réalisé par Tobe Hooper met en scène un groupe d'amis attaqué par une famille de cannibales au Texas ?",
    options: [
      "Massacre à la tronçonneuse",
      "Vendredi 13",
      "Halloween",
      "Les Griffes de la Nuit",
    ],
    answer: "Massacre à la tronçonneuse",
  },
  {
    numéro: "10/20",
    question:
      "Quel film de 2002 réalisé par Gore Verbinski met en scène une cassette vidéo maudite qui tue quiconque la regarde en sept jours ?",
    options: ["Le Cercle", "The Grudge", "Paranormal Activity", "Sinister"],
    answer: "Le Cercle",
  },
  {
    numéro: "11/20",
    question:
      "Quel film de 1980 réalisé par Sean S. Cunningham se déroule autour du camp de Crystal Lake ?",
    options: ["Vendredi 13", "Halloween", "Shining", "Chucky"],
    answer: "Vendredi 13",
  },
  {
    numéro: "12/20",
    question:
      "Quel film dystopique dépeint une nuit où tous les crimes sont légaux, y compris le meurtre ?",
    options: ["American Nightmare", "Vendredi 13", "La Plateforme", "Circle"],
    answer: "American Nightmare",
  },
  {
    numéro: "13/20",
    question:
      "Quel film de 2019 est centré sur une légende mexicaine d'une femme pleurant ses enfants disparus ?",
    options: ["La Dame Blanche", "Conjuring", "The Grudge", "Annabelle"],
    answer: "La Dame Blanche",
  },
  {
    numéro: "14/20",
    question:
      "Quel film de 1960 réalisé par Alfred Hitchcock met en scène un motel dirigé par un homme avec des troubles psychologiques ?",
    options: ["Psychose", "Les Oiseaux", "Fenêtre sur Cour", "Sueurs froides"],
    answer: "Psychose",
  },
  {
    numéro: "15/20",
    question:
      "Quel film suit un tueur en série nommé John Kramer qui piège ses victimes dans des situations de vie ou de mort ?",
    options: ["Saw", "Da Vinci Code", "Scream", "Hannibal"],
    answer: "Saw",
  },
  {
    numéro: "16/20",
    question:
      "Quel film de 2013 met en scène les enquêteurs paranormaux Ed et Lorraine Warren ?",
    options: ["Conjuring", "Annabelle", "Sinister", "La Dame Blanche"],
    answer: "Conjuring",
  },
  {
    numéro: "17/20",
    question:
      "Quel film suit un groupe de participants qui doivent échapper à une série de pièges mortels dans une pièce hexagonale ?",
    options: ["Circle", "Cube", "Escape Room", "Saw"],
    answer: "Cube",
  },
  {
    numéro: "18/20",
    question:
      "Quel film de 2001 suit un cannibale évadé poursuivi par une agente du FBI ?",
    options: [
      "Hannibal",
      "Le Silence des Agneaux",
      "American Nightmare",
      "Conjuring",
    ],
    answer: "Hannibal",
  },
  {
    numéro: "19/20",
    question:
      "Quel film de 2018 réalisé par John Krasinski met en scène une famille qui doit vivre en silence pour éviter des créatures aveugles mais avec une ouïe surdéveloppée ?",
    options: ["Sans un bruit", "Bird Box", "Get Out", "The Witch"],
    answer: "Sans un bruit",
  },
  {
    numéro: "20/20",
    question:
      "Quel film de 1990 réalisé par Rob Reiner est basé sur un roman de Stephen King et met en scène un écrivain séquestré par une admiratrice ?",
    options: ["Misery", "Carrie", "Ça", "Le Fléau"],
    answer: "Misery",
  },
];

const questionsDrapeaux = [
  {
    numéro: "1/20",
    question: "Quel pays est représenté par ce drapeau ?",
    image: "../assets/img/france.png",
    options: ["France", "Allemagne", "Espagne", "Italie"],
    answer: "France",
  },
  {
    numéro: "2/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/republique_tcheque.png",
    options: ["Norvège", "République Tchèque", "Autriche", "Pologne"],
    answer: "République Tchèque",
  },
  {
    numéro: "3/20",
    question: "A quel pays appartient ce drapeau ?",
    image: "../assets/img/afrique_du_sud.png",
    options: ["Afrique du Nord", "Afrique du Sud", "Vietnam", "Corée du Sud"],
    answer: "Afrique du Sud",
  },
  {
    numéro: "4/20",
    question:
      "Ce drapeau est celui de quel pays européen qui comporte trois bandes verticales de couleurs rouge, blanche et rouge ?",
    image: "../assets/img/autriche.png",
    options: ["Autriche", "Hongrie", "Pays-Bas", "Belgique"],
    answer: "Autriche",
  },
  {
    numéro: "5/20",
    question:
      "Quel pays d'Afrique est représenté par ce drapeau avec une étoile jaune sur fond vert, rouge et noir ?",
    image: "../assets/img/ghana.png",
    options: ["Afrique du Sud", "Nigeria", "Éthiopie", "Ghana"],
    answer: "Ghana",
  },
  {
    numéro: "6/20",
    question:
      "À quel pays appartient ce drapeau avec une étoile blanche à cinq branches sur fond bleu ?",
    image: "../assets/img/etats_unis.png",
    options: ["États-Unis", "Australie", "Nouvelle-Zélande", "Brésil"],
    answer: "États-Unis",
  },
  {
    numéro: "7/20",
    question:
      "Ce drapeau avec une croix rouge sur fond blanc est celui de quel pays européen ?",
    image: "../assets/img/danemark.png",
    options: ["Suisse", "Norvège", "Danemark", "Suède"],
    answer: "Danemark",
  },
  {
    numéro: "8/20",
    question:
      "Quel pays asiatique est représenté par ce drapeau avec une lune et une étoile blanche sur fond vert ?",
    image: "../assets/img/pakistan.jpg",
    options: ["Malaisie", "Pakistan", "Indonésie", "Bangladesh"],
    answer: "Pakistan",
  },
  {
    numéro: "9/20",
    question: "A quels pays appartient ce drapeau ?",
    image: "../assets/img/coree_du_sud.png",
    options: ["Mexique", "Corée du Sud", "Argentine", "Pérou"],
    answer: "Corée du Sud",
  },
  {
    numéro: "10/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/botswana.png",
    options: ["Botswana", "Gabon", "Argentine", "Estonie"],
    answer: "Botswana",
  },
  {
    numéro: "11/20",
    question:
      "Quel est le nom du pays représenté par ce drapeau bleu avec une croix rouge et quatre croix blanches ?",
    image: "../assets/img/finlande.png",
    options: ["Suède", "Norvège", "Danemark", "Finlande"],
    answer: "Finlande",
  },
  {
    numéro: "12/20",
    question:
      "Ce drapeau avec une étoile jaune sur fond vert, rouge, jaune et noir est celui de quel pays africain ?",
    image: "../assets/img/egypte.png",
    options: ["Nigeria", "Afrique du Sud", "Égypte", "Zimbabwe"],
    answer: "Égypte",
  },
  {
    numéro: "13/20",
    question:
      "À quel pays appartient ce drapeau tricolore vertical avec des bandes vertes, blanches et rouges ?",
    image: "../assets/img/hongrie.png",
    options: ["Italie", "Hongrie", "Russie", "Bulgarie"],
    answer: "Hongrie",
  },
  {
    numéro: "14/20",
    question:
      "Ce drapeau avec une étoile rouge à cinq branches sur fond vert est celui de quel pays d'Asie du Sud-Est ?",
    image: "../assets/img/vietnam.png",
    options: ["Vietnam", "Laos", "Cambodge", "Thaïlande"],
    answer: "Vietnam",
  },
  {
    numéro: "15/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/albanie.png",
    options: ["Albanie", "Arabie Saoudite", "Bahamas", "Bangladesh"],
    answer: "Albanie",
  },
  {
    numéro: "16/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/sri_lanka.png",
    options: ["Sri Lanka", "Bénin", "Bhoutan", "Birmanie"],
    answer: "Sri Lanka",
  },
  {
    numéro: "17/20",
    question:
      "Ce drapeau avec une lune et une étoile rouge sur fond blanc est celui de quel pays du Moyen-Orient ?",
    image: "../assets/img/turquie.png",
    options: ["Arabie Saoudite", "Iran", "Turquie", "Émirats Arabes Unis"],
    answer: "Turquie",
  },
  {
    numéro: "18/20",
    question:
      "Quel pays d'Amérique du Sud est représenté par ce drapeau tricolore horizontal avec des bandes jaune, bleu et rouge ?",
    image: "../assets/img/colombie.png",
    options: ["Colombie", "Pérou", "Équateur", "Venezuela"],
    answer: "Colombie",
  },
  {
    numéro: "19/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/mexique.png",
    options: ["Brésil", "Cameroun", "Cambodge", "Mexique"],
    answer: "Mexique",
  },
  {
    numéro: "20/20",
    question: "À quel pays appartient ce drapeau ?",
    image: "../assets/img/laos.png",
    options: ["Chine", "Vietnam", "Corée du Nord", "Laos"],
    answer: "Laos",
  },
];

const questionsSpiderman = [
  {
    numéro: "1/20",
    question:
      "Quel acteur incarne Spider-Man dans le film de 2002 réalisé par Sam Raimi ?",
    options: [
      "Tobey Maguire",
      "Andrew Garfield",
      "Tom Holland",
      "Jake Gyllenhaal",
    ],
    answer: "Tobey Maguire",
  },
  {
    numéro: "2/20",
    question: "Dans quel film Spider-Man affronte-t-il le Docteur Octopus ?",
    options: [
      "Spider-Man",
      "Spider-Man 2",
      "Spider-Man 3",
      "The Amazing Spider-Man",
    ],
    answer: "Spider-Man 2",
  },
  {
    numéro: "3/20",
    question:
      "Quel acteur joue le rôle de l'ennemi principal, le Bouffon Vert, dans le film de 2002 ?",
    options: [
      "James Franco",
      "Willem Dafoe",
      "Alfred Molina",
      "Thomas Haden Church",
    ],
    answer: "Willem Dafoe",
  },
  {
    numéro: "4/20",
    question:
      "Quel est le nom de la petite amie de Peter Parker dans 'The Amazing Spider-Man' ?",
    options: ["Mary Jane Watson", "Gwen Stacy", "Betty Brant", "Felicia Hardy"],
    answer: "Gwen Stacy",
  },
  {
    numéro: "5/20",
    question: "Qui a réalisé le film 'Spider-Man: Homecoming' ?",
    options: ["Jon Watts", "Sam Raimi", "Marc Webb", "Jon Favreau"],
    answer: "Jon Watts",
  },
  {
    numéro: "6/20",
    question:
      "Quel acteur joue le rôle de Spider-Man dans le film 'Spider-Man: Homecoming' ?",
    options: [
      "Tobey Maguire",
      "Andrew Garfield",
      "Tom Holland",
      "Miles Morales",
    ],
    answer: "Tom Holland",
  },
  {
    numéro: "7/20",
    question:
      "Quel méchant apparaît dans le film 'Spider-Man: Far From Home' ?",
    options: ["Le Vautour", "Mysterio", "Le Bouffon Vert", "L'Homme-Sable"],
    answer: "Mysterio",
  },
  {
    numéro: "8/20",
    question:
      "Dans 'Spider-Man: New Generation', quel personnage devient Spider-Man dans un univers parallèle ?",
    options: ["Peter Parker", "Miles Morales", "Gwen Stacy", "Miguel O'Hara"],
    answer: "Miles Morales",
  },
  {
    numéro: "9/20",
    question:
      "Quel est le vrai nom du Vautour, ennemi principal de 'Spider-Man: Homecoming' ?",
    options: ["Norman Osborn", "Adrian Toomes", "Flint Marko", "Curt Connors"],
    answer: "Adrian Toomes",
  },
  {
    numéro: "10/20",
    question:
      "Dans 'Spider-Man 3', quel symbiote extraterrestre fusionne avec Peter Parker ?",
    options: ["Venom", "Carnage", "Riot", "Toxin"],
    answer: "Venom",
  },
  {
    numéro: "11/20",
    question:
      "Dans quel film Spider-Man affronte-t-il Electro pour la première fois ?",
    options: [
      "Spider-Man",
      "Spider-Man 2",
      "The Amazing Spider-Man 2",
      "Spider-Man: Far From Home",
    ],
    answer: "The Amazing Spider-Man 2",
  },
  {
    numéro: "12/20",
    question:
      "Dans 'The Amazing Spider-Man', quel scientifique devient le Lézard ?",
    options: [
      "Dr. Otto Octavius",
      "Dr. Curt Connors",
      "Dr. Norman Osborn",
      "Dr. Miles Warren",
    ],
    answer: "Dr. Curt Connors",
  },
  {
    numéro: "13/20",
    question:
      "Dans quel film Spider-Man se joint-il à Iron Man pour combattre Captain America ?",
    options: [
      "Avengers",
      "Captain America: Civil War",
      "Spider-Man: Homecoming",
      "Avengers: Endgame",
    ],
    answer: "Captain America: Civil War",
  },
  {
    numéro: "14/20",
    question:
      "Quel est le véritable nom de l'Homme-Sable dans 'Spider-Man 3' ?",
    options: ["Flint Marko", "Eddie Brock", "Curt Connors", "Max Dillon"],
    answer: "Flint Marko",
  },
  {
    numéro: "15/20",
    question:
      "Quel film de Spider-Man met en scène trois générations d'acteurs ayant joué Spider-Man ?",
    options: [
      "Spider-Man 2",
      "Spider-Man: Homecoming",
      "Spider-Man: No Way Home",
      "The Amazing Spider-Man 2",
    ],
    answer: "Spider-Man: No Way Home",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du journal pour lequel travaille Peter Parker ?",
    options: [
      "Le Daily Planet",
      "Le Daily Bugle",
      "Le New York Times",
      "Le Gotham Gazette",
    ],
    answer: "Le Daily Bugle",
  },
  {
    numéro: "17/20",
    question:
      "Dans 'Spider-Man: Far From Home', quelle ville européenne Peter Parker visite-t-il en premier ?",
    options: ["Paris", "Berlin", "Venise", "Londres"],
    answer: "Venise",
  },
  {
    numéro: "18/20",
    question:
      "Quel méchant se révèle être le père de Liz Allan dans 'Spider-Man: Homecoming' ?",
    options: ["Le Bouffon Vert", "Mysterio", "Le Vautour", "Le Scorpion"],
    answer: "Le Vautour",
  },
  {
    numéro: "19/20",
    question:
      "Quel personnage mentor de Peter Parker apparaît dans les films de l'univers cinématographique Marvel ?",
    options: ["Nick Fury", "Tony Stark", "Steve Rogers", "Bruce Banner"],
    answer: "Tony Stark",
  },
  {
    numéro: "20/20",
    question:
      "Quel est le nom de l'oncle de Peter Parker qui meurt dans le premier film 'Spider-Man' ?",
    options: ["Oncle Ben", "Oncle Jack", "Oncle Tom", "Oncle Harry"],
    answer: "Oncle Ben",
  },
];

const questionsVraiFaux = [
  {
    numéro: "1/20",
    question: "Les chauves-souris sont aveugles.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "2/20",
    question: "Le mont Everest est la plus haute montagne du monde.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "3/20",
    question: "Les dauphins sont des mammifères.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "4/20",
    question: "Le Nil est le fleuve le plus long du monde.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "5/20",
    question: "Les koalas sont des ours.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "6/20",
    question: "L'eau bout à 90 degrés Celsius.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "7/20",
    question: "Le piment Carolina Reaper était le piment le plus fort du monde de 2013 à 2023.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "8/20",
    question: "La Grande Muraille de Chine est visible depuis l'espace.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "9/20",
    question: "Le cœur humain a quatre chambres.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "10/20",
    question: "Les éléphants sont les seuls animaux à posséder un menton.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "11/20",
    question: "Les étoiles de mer ont deux cœurs.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "12/20",
    question:
      "L'hippopotomonstrosesquipedaliophobie est la peur des longs mots.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "13/20",
    question: "Le plus petit os du corps humain est dans l'oreille.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "14/20",
    question: "Le chocolat est toxique pour les chiens.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "15/20",
    question:
      "Les girafes ont le même nombre de vertèbres cervicales que les humains.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "16/20",
    question: "Les tomates sont des légumes.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
  {
    numéro: "17/20",
    question: "Le drapeau de la France est composé de trois bandes verticales.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "18/20",
    question: "Le kangourou est le symbole national de l'Australie.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "19/20",
    question: "Les renards sont des animaux monogames.",
    options: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  {
    numéro: "20/20",
    question:
      "Le cerveau humain est le plus grand cerveau de tous les animaux.",
    options: ["Vrai", "Faux"],
    answer: "Faux",
  },
];

const questionsTimBurton = [
  {
    numéro: "1/20",
    question: "Quel acteur a joué le rôle principal dans le film 'Edward aux mains d'argent' de Tim Burton ?",
    options: ["Johnny Depp", "Michael Keaton", "Ewan McGregor", "Leonardo DiCaprio"],
    answer: "Johnny Depp",
  },
  {
    numéro: "2/20",
    question: "Dans quel film de Tim Burton apparaît le personnage de Jack Skellington, le roi des citrouilles ?",
    options: ["The Nightmare Before Christmas", "Frankenweenie", "Alice au pays des merveilles", "Sweeney Todd"],
    answer: "The Nightmare Before Christmas",
  },
  {
    numéro: "3/20",
    question: "Dans quel film de Tim Burton un homme découvre-t-il un arbre magique qui peut prédire l'avenir de manière ambiguë ?",
    options: ["Big Fish", "Edward aux mains d'argent", "Sweeney Todd", "Charlie et la chocolaterie"],
    answer: "Big Fish",
  },
  {
    numéro: "4/20",
    question: "Quelle actrice a joué le rôle de Catwoman dans 'Batman Returns', réalisé par Tim Burton ?",
    options: ["Michelle Pfeiffer", "Winona Ryder", "Helena Bonham Carter", "Anne Hathaway"],
    answer: "Michelle Pfeiffer",
  },
  {
    numéro: "5/20",
    question: "Dans quel film de Tim Burton une jeune femme est-elle transportée dans un monde parallèle rempli de créatures étranges et de magie ?",
    options: ["Alice au pays des merveilles", "Miss Peregrine et les enfants particuliers", "Charlie et la chocolaterie", "Big Fish"],
    answer: "Alice au pays des merveilles",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom de la maman de Dumbo dans le film ?",
    options: ["Delilah", "Mme. Dumbo", "Mme. Jumbo", "Ella"],
    answer: "Mme. Jumbo",
  },
  {
    numéro: "7/20",
    question: "Dans quel film de Tim Burton un jeune garçon découvre-t-il une porte vers un monde fantastique où des créatures étranges résident ?",
    options: ["Charlie et la chocolaterie", "Alice au pays des merveilles", "Big Fish", "Miss Peregrine et les enfants particuliers"],
    answer: "Miss Peregrine et les enfants particuliers",
  },
  {
    numéro: "8/20",
    question: "Dans 'Beetlejuice', comment les Maitland meurent-ils ?",
    options: ["Ils se noient", "Ils ont un accident de voiture", "Ils tombent d'une falaise", "Ils sont frappés par la foudre"],
    answer: "Ils ont un accident de voiture",
  },
  {
    numéro: "9/20",
    question: "Quel célèbre acteur a joué le rôle de Joker dans 'Batman' de Tim Burton ?",
    options: ["Jack Nicholson", "Heath Ledger", "Joaquin Phoenix", "Jared Leto"],
    answer: "Jack Nicholson",
  },
  {
    numéro: "10/20",
    question: "Dans 'Alice au pays des merveilles' (2010), quel personnage aide Alice à se préparer pour la bataille finale ?",
    options: ["Le Lapin Blanc", "Le Chapelier Fou", "Le Chat du Cheshire", "Le Loir"],
    answer: "Le Lapin Blanc",
  },
  {
    numéro: "11/20",
    question: "Dans quel film de Tim Burton un homme retourne-t-il dans sa ville natale pour découvrir qu'elle est devenue un parc d'attractions gothique ?",
    options: ["Big Fish", "Dark Shadows", "Mars Attacks!", "Ed Wood"],
    answer: "Dark Shadows",
  },
  {
    numéro: "12/20",
    question: "Quel est le nom de l'usine de chocolat dans 'Charlie et la chocolaterie' ?",
    options: ["Wonka Chocolate Factory", "Sweet's chocolate", "Sweet Tooth Factory", "Golden Ticket Factory"],
    answer: "Wonka Chocolate Factory",
  },
  {
    numéro: "13/20",
    question: "Dans 'Beetlejuice', comment Lydia Deetz communique-t-elle avec les Maitland après leur mort ?",
    options: ["Avec un médium", "En utilisant un tableau Ouija", "Par télépathie", "À travers un miroir magique"],
    answer: "À travers un miroir magique",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de la sorcière qui jette un sort à Edward dans 'Edward aux mains d'argent' ?",
    options: ["Peg Boggs", "Kim Boggs", "Joyce", "Esmeralda"],
    answer: "Esmeralda",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom du personnage principal féminin dans 'Les Noces Funèbres' de Tim Burton ?",
    options: ["Emily", "Victoria", "Sally", "Elsa"],
    answer: "Emily",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du chien fantôme dans 'Frankenweenie' de Tim Burton ?",
    options: ["Sparky", "Zero", "Scud", "Spike"],
    answer: "Sparky",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom du cirque où se déroule une grande partie de l'action dans le film 'Dumbo' de Tim Burton ?",
    options: ["Cirque Wonders", "Cirque Dreamland", "Cirque Fantasia", "Cirque Stardust"],
    answer: "Cirque Dreamland",
  },
  {
    numéro: "18/20",
    question: "Quelle actrice a joué le rôle principal dans le film 'Miss Peregrine et les enfants particuliers' de Tim Burton ?",
    options: ["Eva Green", "Helena Bonham Carter", "Winona Ryder", "Anne Hathaway"],
    answer: "Eva Green",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom complet du personnage principal de 'Batman' dans le film de Tim Burton ?",
    options: ["Bruce Wayne", "Peter Parker", "Clark Kent", "Tony Stark"],
    answer: "Bruce Wayne",
  },
  {
    numéro: "20/20",
    question: "Quel acteur a joué le rôle de Beetlejuice dans le film éponyme de Tim Burton ?",
    options: ["Michael Keaton", "Johnny Depp", "Christopher Walken", "Jack Nicholson"],
    answer: "Michael Keaton",
  },
];

const questionsJoueursFoot = [
  {
    numéro: "1/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/adrien_rabiot.jpg",
    options: ["Adrien Rabiot", "Lionel Messi", "Paul Pogba", "Neymar Jr"],
    answer: "Adrien Rabiot",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/didier_deschamps.jpg",
    options: ["Didier Deschamps", "Cristiano Ronaldo", "Zlatan Ibrahimovic", "Sergio Ramos"],
    answer: "Didier Deschamps",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/erling_haaland.jpg",
    options: ["Erling Haaland", "Robert Lewandowski", "Kylian Mbappé", "Harry Kane"],
    answer: "Erling Haaland",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/ethan_mbappé.jpg",
    options: ["Ethan Mbappé", "Karim Benzema", "Luka Modric", "Kevin De Bruyne"],
    answer: "Ethan Mbappé",
  },
  {
    numéro: "5/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/gareth_bale.JPG",
    options: ["Gareth Bale", "Antoine Griezmann", "Eden Hazard", "Raheem Sterling"],
    answer: "Gareth Bale",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/jonathan_bamba.jpg",
    options: ["Jonathan Bamba", "Thomas Müller", "Gerard Piqué", "Thiago Silva"],
    answer: "Jonathan Bamba",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/samuel_gigot.jpg",
    options: ["Samuel Gigot", "Andrés Iniesta", "Sadio Mané", "Mohamed Salah"],
    answer: "Samuel Gigot",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/vincieus_junior.jpg",
    options: ["Vincieus Junior", "Philippe Coutinho", "Marcelo Vieira", "Casemiro"],
    answer: "Vincieus Junior",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/jude_bellingham.jpg",
    options: ["Jude Bellingham", "Toni Kroos", "Fabinho", "Jorginho"],
    answer: "Jude Bellingham",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/christiano_ronaldo.jpg",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Luis Suárez", "Romelu Lukaku"],
    answer: "Cristiano Ronaldo",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/zinedine_zidane.jpg",
    options: ["Zinedine Zidane", "David Beckham", "Andrea Pirlo", "Clarence Seedorf"],
    answer: "Zinedine Zidane",
  },
  {
    numéro: "12/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/karim_benzema.jpg",
    options: ["Karim Benzema", "Fernando Torres", "Gonzalo Higuain", "Diego Costa"],
    answer: "Karim Benzema",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/kyllian_mbappe.jpg",
    options: ["Kyllian Mbappé", "Pierre-Emerick Aubameyang", "Alexis Sánchez", "Gabriel Jesus"],
    answer: "Kyllian Mbappé",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/marcus_thuram.jpg",
    options: ["Marcus Thuram", "N'Golo Kanté", "Franck Ribéry", "Kingsley Coman"],
    answer: "Marcus Thuram",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/khéphren_thuram.jpg",
    options: ["Khéphren Thuram", "Paul Pogba", "Adrien Rabiot", "Blaise Matuidi"],
    answer: "Khéphren Thuram",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/matteo_guendouzi.jpg",
    options: ["Matteo Guendouzi", "Marco Verratti", "Sergio Busquets", "Rodri"],
    answer: "Matteo Guendouzi",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/neymar.jpg",
    options: ["Neymar da Silva Santos", "Roberto Firmino", "Gabriel Barbosa", "Richarlison"],
    answer: "Neymar da Silva Santos",
  },
  {
    numéro: "18/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/ngolo_kanté.jpg",
    options: ["N'golo Kanté", "Luka Modric", "Thiago Alcantara", "Ivan Rakitic"],
    answer: "N'golo Kanté",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/pelé.jpg",
    options: ["Pelé", "Diego Maradona", "Johan Cruyff", "Franz Beckenbauer"],
    answer: "Pelé",
  },
  {
    numéro: "20/20",
    question: "Quel est le nom de ce joueur ?",
    image: "../assets/img/robin_le_normand.jpg",
    options: ["Robin Le Normand", "Raphaël Varane", "Samuel Umtiti", "Aymeric Laporte"],
    answer: "Robin Le Normand",
  },
];



const questionsCodeDeLaRoute = [
  {
    numéro: "1/20",
    question: "Quelle est la signification de ce panneau ?",
    image: "../assets/img/cédez_passage.jpg",
    options: ["Intersection", "Cédez le passage", "Priorité à droite", "Stop"],
    answer: "Cédez le passage",
  },
  {
    numéro: "2/20",
    question: "Que signifie ce panneau ?",
    image: "../assets/img/sens_interdit.jpg",
    options: ["Sens interdit", "Route barrée", "Fin d'interdiction", "Allée réservée"],
    answer: "Sens interdit",
  },
  {
    numéro: "3/20",
    question: "À quoi ce panneau vous oblige-t-il à faire attention ?",
    image: "../assets/img/animaux_sauvages.jpg",
    options: ["Risque de chutes de pierres", "Risque d'animaux sauvages", "Risque de verglas", "Risque de brouillard"],
    answer: "Risque d'animaux sauvages",
  },
  {
    numéro: "4/20",
    uestion: "Que signifie ce panneau ?",
    image: "../assets/img/fin_zone_piétonne.jpg",
    options: ["Fin de zone piétonne", "Fin de surveillance", "Fin de zone d'école", "Fin de voie verte"],
    answer: "Fin de zone piétonne",
  },
  {
    numéro: "5/20",
    question: "Que signifie ce panneau sous un feu tricolor ?",
    image: "../assets/img/autorisation_cycle.png",
    options: ["Autorisation de franchissement pour vélos", "Cédez le passage pour vélos", "Priorité aux vélos", "Vélos interdits dans la direction indiquée"],
    answer: "Autorisation de franchissement pour vélos",
  },
  {
    numéro: "6/20",
    question: "Quelle est la signification de ce panneau triangulaire ?",
    image: "../assets/img/panneau_danger.png",
    options: ["Danger", "Cédez le passage", "Arrêt obligatoire", "Fin de limitation de vitesse"],
    answer: "Danger",
  },
  {
    numéro: "7/20",
    question: "Que signifie ce panneau avec un cercle rouge ?",
    image: "../assets/img/zone_zfe.jpg",
    options: ["Zone à faibles émissions", "Circulation interdite", "Zone à risque", "Route réservée"],
    answer: "Zone à faibles émissions",
  },
  {
    numéro: "8/20",
    question: "Quelle est la signification de ce panneau rectangulaire ?",
    image: "../assets/img/vitesse_maximum_autorisée.JPG",
    options: ["Limite de vitesse", "Vitesse conseillée", "Vitesse autorisée", "Limite minimum de vitesse"],
    answer: "Limite de vitesse",
  },
  {
    numéro: "9/20",
    question: "À quoi ce panneau vous oblige-t-il à faire attention ?",
    image: "../assets/img/passage_à_niveau.jpg",
    options: ["Présence de passages à niveau", "Passage à niveau non protégé", "Risque de rétrécissement de chaussée", "Risque de piétons"],
    answer: "Présence de passages à niveau",
  },
  {
    numéro: "10/20",
    question: "Quelle est la signification de ce panneau ?",
    image: "../assets/img/priorité_à_droite.jpg",
    options: ["Début de zone résidentielle", "Priorité à droite", "Cédez le passage", "Fin d'interdiction"],
    answer: "Priorité à droite",
  },
  {
    numéro: "11/20",
    question: "Que signifie ce panneau jaune ?",
    image: "../assets/img/danger_piéton.JPG",
    options: ["Danger piétons", "Piétons interdit", "Passage piétons", "Piétons fréquent"],
    answer: "Danger piétons",
  },
  {
    numéro: "12/20",
    question: "À quoi ce panneau vous oblige-t-il à faire attention ?",
    image: "../assets/img/vent_latéral.jpg",
    options: ["Risque de vent latéral", "Risque de vent violent", "Risque de passage à niveau", "Risque de brouillard"],
    answer: "Risque de vent latéral",
  },
  {
    numéro: "13/20",
    question: "Quelle est la signification de ce panneau ?",
    image: "../assets/img/fin_route_prioritaire.jpg",
    options: ["Fin de route prioritaire", "Fin de limitation de vitesse", "Fin d'interdiction", "Fin de zone piétonne"],
    answer: "Fin de route prioritaire",
  },
  {
    numéro: "14/20",
    question: "Que signifie ce panneau vert ?",
    image: "../assets/img/point_rassemblement.png",
    options: ["Point de rassemblement", "Zone de covoiturage", "Ecole", "Evacuation d'urgence"],
    answer: "Point de rassemblement",
  },
  {
    numéro: "15/20",
    question: "Quelle est la signification de ce panneau ?",
    image: "../assets/img/inter_file.jpeg",
    options: ["Règles circulation interfiles", "Priorité aux motos", "Fin de zone de dépassement", "Fin de limitation de vitesse"],
    answer: "Règles circulation interfiles",
  },
  {
    numéro: "16/20",
    question: "Quelle est la signification de ce panneau avec un losange blanc ?",
    image: "../assets/img/covoiturage.JPG",
    options: ["Voie réservée au covoiturage", "Aire de chaînage", "Chemin pour piétons", "Route à sens unique"],
    answer: "Voie réservée au covoiturage",
  },
  {
    numéro: "17/20",
    question: "Que signifie ce panneau provisoir ?",
    image: "../assets/img/danger_brouillard_fumee.jpg",
    options: ["Danger nappe de brouillard ou fumée épaisse", "Danger mur en fin de route", "Travaux, passage interdit", "Travaux, ralentir"],
    answer: "Danger nappe de brouillard ou fumée épaisse",
  },
  {
    numéro: "18/20",
    question: "À quoi ce panneau vous oblige-t-il à faire attention ?",
    image: "../assets/img/risque_verglas.jpg",
    options: ["Risque de brouillard", "Risque de traversée d'animaux sauvages", "Risque de chaussée déformée", "Risque de verglas"],
    answer: "Risque de verglas",
  },
  {
    numéro: "19/20",
    question: "Quelle est la signification de ce panneau avec une barre diagonale noire ?",
    image: "../assets/img/fin_interdiction.jpg",
    options: ["Fin de route prioritaire", "Fin de limitation de vitesse", "Fin d'interdiction", "Fin de zone piétonne"],
    answer: "Fin d'interdiction",
  },
  {
    numéro: "20/20",
    question: "Que signifie ce panneau avec un fond bleu et un symbole blanc ?",
    image: "../assets/img/aire_chainage.jpeg",
    options: ["Indique une aire de chaînage", "Indique une voie de bus", "Indique une autoroute", "Indique une route à double sens"],
    answer: "Indique une aire de chaînage",
  },
];

const questionsActeursActrices = [
  {
    numéro: "1/20",
    question: "Quel acteur incarne Iron Man dans le Marvel Cinematic Universe ?",
    options: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    numéro: "2/20",
    question: "Quelle actrice joue le rôle de Katniss Everdeen dans 'The Hunger Games' ?",
    options: ["Shailene Woodley", "Jennifer Lawrence", "Emma Watson", "Kristen Stewart"],
    answer: "Jennifer Lawrence",
  },
  {
    numéro: "3/20",
    question: "Quel acteur est célèbre pour son rôle de Jack Dawson dans 'Titanic' ?",
    options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"],
    answer: "Leonardo DiCaprio",
  },
  {
    numéro: "4/20",
    question: "Quelle actrice a joué le rôle de Hermione Granger dans la saga 'Harry Potter' ?",
    options: ["Emma Stone", "Emma Watson", "Natalie Portman", "Keira Knightley"],
    answer: "Emma Watson",
  },
  {
    numéro: "5/20",
    question: "Quelle actrice a incarné le personnage de Clarice Starling dans 'Le Silence des agneaux' ?",
    options: ["Jodie Foster", "Gillian Anderson", "Meryl Streep", "Nicole Kidman"],
    answer: "Jodie Foster",
  },
  {
    numéro: "6/20",
    question: "Quelle actrice a incarné le rôle de Rachel Green dans la série 'Friends' ?",
    options: ["Courteney Cox", "Jennifer Aniston", "Lisa Kudrow", "Sarah Jessica Parker"],
    answer: "Jennifer Aniston",
  },
  {
    numéro: "7/20",
    question: "Quel acteur est connu pour son rôle de Neo dans la trilogie 'Matrix' ?",
    options: ["Brad Pitt", "Keanu Reeves", "Tom Cruise", "Will Smith"],
    answer: "Keanu Reeves",
  },
  {
    numéro: "8/20",
    question: "Quel acteur a incarné le personnage de Ethan Hunt dans la série de films 'Mission Impossible' ?",
    options: ["Tom Cruise", "Matt Damon", "Keanu Reeves", "Brad Pitt"],
    answer: "Tom Cruise",
  },
  {
    numéro: "9/20",
    question: "Quel acteur a incarné le personnage de Walter White dans la série 'Breaking Bad' ?",
    options: ["Aaron Paul", "Bryan Cranston", "Jon Hamm", "Matthew McConaughey"],
    answer: "Bryan Cranston",
  },
  {
    numéro: "10/20",
    question: "Quelle actrice a interprété la reine Elizabeth II dans la série 'The Crown' ?",
    options: ["Claire Foy", "Olivia Colman", "Helen Mirren", "Emily Blunt"],
    answer: "Claire Foy",
  },
  {
    numéro: "11/20",
    question: "Quel acteur a incarné le rôle de Indiana Jones ?",
    options: ["Harrison Ford", "Tom Selleck", "Mark Hamill", "Michael Douglas"],
    answer: "Harrison Ford",
  },
  {
    numéro: "12/20",
    question: "Quelle actrice a incarné Mary Poppins dans le film 'Mary Poppins Returns' ?",
    options: ["Emily Blunt", "Anne Hathaway", "Amy Adams", "Rachel McAdams"],
    answer: "Emily Blunt",
  },
  {
    numéro: "13/20",
    question: "Quel acteur a joué le rôle de Captain Jack Sparrow dans 'Pirates des Caraïbes' ?",
    options: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Javier Bardem"],
    answer: "Johnny Depp",
  },
  {
    numéro: "14/20",
    question: "Quelle actrice a joué le rôle principal dans le film 'Wonder Woman' ?",
    options: ["Gal Gadot", "Scarlett Johansson", "Brie Larson", "Margot Robbie"],
    answer: "Gal Gadot",
  },
  {
    numéro: "15/20",
    question: "Quel acteur est célèbre pour son rôle de Wolverine dans les films 'X-Men' ?",
    options: ["Hugh Jackman", "Chris Hemsworth", "Ryan Reynolds", "Chris Evans"],
    answer: "Hugh Jackman",
  },
  {
    numéro: "16/20",
    question: "Quelle actrice a remporté l'Oscar de la meilleure actrice pour son rôle dans 'La La Land' ?",
    options: ["Amy Adams", "Natalie Portman", "Emma Stone", "Jessica Chastain"],
    answer: "Emma Stone",
  },
  {
    numéro: "17/20",
    question: "Quel acteur a joué le rôle de Tony Montana dans le film 'Scarface' ?",
    options: ["Robert De Niro", "Al Pacino", "Joe Pesci", "Marlon Brando"],
    answer: "Al Pacino",
  },
  {
    numéro: "18/20",
    question: "Quelle actrice a joué le rôle de Black Widow dans les films Marvel ?",
    options: ["Scarlett Johansson", "Natalie Portman", "Brie Larson", "Elizabeth Olsen"],
    answer: "Scarlett Johansson",
  },
  {
    numéro: "19/20",
    question: "Quel acteur a joué le rôle de Forrest Gump ?",
    options: ["Tom Hanks", "Robin Williams", "Johnny Depp", "Dustin Hoffman"],
    answer: "Tom Hanks",
  },
  {
    numéro: "20/20",
    question: "Quelle actrice a incarné Mia Wallace dans le film 'Pulp Fiction' ?",
    options: ["Uma Thurman", "Winona Ryder", "Jodie Foster", "Meg Ryan"],
    answer: "Uma Thurman",
  },
];

const questionsJeuxVideo = [
  {
    numéro: "1/20",
    question: "Quel personnage emblématique de Nintendo porte une salopette rouge et une casquette avec un M ?",
    options: ["Link", "Mario", "Kirby", "Donkey Kong"],
    answer: "Mario",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom de l'héroïne principale de la série 'Tomb Raider' ?",
    options: ["Lara Croft", "Samus Aran", "Zelda", "Cortana"],
    answer: "Lara Croft",
  },
  {
    numéro: "3/20",
    question: "Quel jeu vidéo de 2017 se déroule dans l'univers de Hyrule et met en scène Link ?",
    options: ["The Elder Scrolls V: Skyrim", "Dark Souls III", "The Legend of Zelda: Breath of the Wild", "Horizon Zero Dawn"],
    answer: "The Legend of Zelda: Breath of the Wild",
  },
  {
    numéro: "4/20",
    question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
    options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Super Mario Bros."],
    answer: "Minecraft",
  },
  {
    numéro: "5/20",
    question: "Quelle est la forme géométrique de base des blocs dans le jeu Tetris ?",
    options: ["Carré", "Triangle", "Cercle", "Losange"],
    answer: "Carré",
  },
  {
    numéro: "6/20",
    question: "Quel personnage de jeu vidéo est connu pour sa vitesse et ses chaussures rouges ?",
    options: ["Mega Man", "Crash Bandicoot", "Sonic the Hedgehog", "Pac-Man"],
    answer: "Sonic the Hedgehog",
  },
  {
    numéro: "7/20",
    question: "Quel jeu de combat de 1992 met en scène des personnages comme Ryu, Ken et Chun-Li ?",
    options: ["Tekken", "Street Fighter II", "Mortal Kombat", "King of Fighters"],
    answer: "Street Fighter II",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom de la ville fictive inspirée de Las Vegas dans GTA San Andreas ?",
    options: ["Liberty City", "Vice City", "Las Venturas", "San Fierro"],
    answer: "Las Venturas",
  },
  {
    numéro: "9/20",
    question: "Quel jeu vidéo multijoueur en ligne a popularisé le genre 'battle royale' en 2017 ?",
    options: ["Apex Legends", "PlayerUnknown's Battlegrounds (PUBG)", "Fortnite", "Call of Duty: Warzone"],
    answer: "Fortnite",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom du plombier vert, frère de Mario ?",
    options: ["Luigi", "Wario", "Toad", "Bowser"],
    answer: "Luigi",
  },
  {
    numéro: "11/20",
    question: "Quel jeu vidéo développé par Mojang permet de construire et explorer des mondes en blocs ?",
    options: ["Terraria", "Roblox", "Minecraft", "LEGO Worlds"],
    answer: "Minecraft",
  },
  {
    numéro: "12/20",
    question: "Dans quel jeu incarne-t-on un assassin membre de la confrérie des Assassins ?",
    options: ["Hitman", "Assassin's Creed", "Dishonored", "Thief"],
    answer: "Assassin's Creed",
  },
  {
    numéro: "13/20",
    question: "Dans 'Wii Sports Resort', quel sport utilise principalement le Wii MotionPlus pour une précision accrue ?",
    options: ["Tennis de table", "Golf", "Natation", "Basket-ball"],
    answer: "Tennis de table",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de la princesse que Mario doit souvent sauver dans les jeux 'Super Mario' ?",
    options: ["Princesse Daisy", "Princesse Peach", "Princesse Zelda", "Princesse Rosalina"],
    answer: "Princesse Peach",
  },
  {
    numéro: "15/20",
    question: "Quel personnage principal de GTA est surnommé 'The Joker' dans l'un des opus de la série ?",
    options: ["Claude", "Tommy Vercetti", "Niko Bellic", "CJ"],
    answer: "Tommy Vercetti",
  },
  {
    numéro: "16/20",
    question: "Dans quel jeu de simulation de vie les joueurs peuvent construire des maisons, créer des familles et gérer des personnages virtuels ?",
    options: ["Animal Crossing", "The Sims", "Harvest Moon", "Stardew Valley"],
    answer: "The Sims",
  },
  {
    numéro: "17/20",
    question: "Quel personnage de jeux vidéo est connu pour son apparence sans bras ni jambes ?",
    options: ["Rayman", "Globox", "Murphy", "Ly"],
    answer: "Rayman",
  },
  {
    numéro: "18/20",
    question: "Quel jeu vidéo d'action-aventure met en scène un héros nommé Nathan Drake ?",
    options: ["Tomb Raider", "Uncharted", "The Last of Us", "Red Dead Redemption"],
    answer: "Uncharted",
  },
  {
    numéro: "19/20",
    question: "Quel jeu de combat de 1995 a popularisé les 'Fatalities' et les 'Brutalities' ?",
    options: ["Tekken", "SoulCalibur", "Mortal Kombat", "Dead or Alive"],
    answer: "Mortal Kombat",
  },
  {
    numéro: "20/20",
    question: "Quel jeu vidéo de 2013 développé par Naughty Dog suit les aventures de Joel et Ellie dans un monde post-apocalyptique ?",
    options: ["The Last of Us", "Days Gone", "Fallout 4", "Horizon Zero Dawn"],
    answer: "The Last of Us",
  },
];

const questionsActivitesPleinAir = [
  {
    numéro: "1/20",
    question: "Quelle activité de plein air consiste à voler avec une aile fixée à un cadre en aluminium ?",
    options: ["Deltaplane", "Parapente", "Parachutisme", "Kitesurf"],
    answer: "Deltaplane",
  },
  {
    numéro: "2/20",
    question: "Quel sport de plein air utilise un frisbee et consiste à marquer des points en le lançant dans des cibles spécifiques ?",
    options: ["Ultimate frisbee", "Disc golf", "Frisbee freestyle", "Frisbee golf"],
    answer: "Disc golf",
  },
  {
    numéro: "3/20",
    question: "Quel équipement est essentiel pour faire de l'escalade ?",
    options: ["Corde", "Parapente", "Elastique", "Raquettes"],
    answer: "Corde",
  },
  {
    numéro: "4/20",
    question: "Quelle activité de plein air consiste à naviguer sur l'eau dans une petite embarcation à pagaie ?",
    options: ["Canoë-kayak", "Surf", "Planche à voile", "Zodiac"],
    answer: "Canoë-kayak",
  },
  {
    numéro: "5/20",
    question: "Quel sport de plein air utilise une balle et des clubs pour frapper la balle dans des trous sur un parcours ?",
    options: ["Golf", "Croquet", "Baseball", "Polo"],
    answer: "Golf",
  },
  {
    numéro: "6/20",
    question: "Quel jeu de plein air implique de marcher avec des longues tiges munies de plateforme ?",
    options: ["Course en sac", "L'épervier", "Marche sur les mains", "Les échasses"],
    answer: "Les échasses",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom de ce jeu de plein air qui nécessite une raquette et une balle attachée à un élastique fixé à un poteau ?",
    options: ["Tennis de table", "Paddle-ball", "Jokari Tennis", "Tetherball"],
    answer: "Jokari Tennis",
  },
  {
    numéro: "8/20",
    question: "Quelle activité de plein air consiste à explorer des sentiers à pied, souvent en milieu naturel ?",
    options: ["Randonnée", "VTT", "Spéléologie", "Course à pieds"],
    answer: "Randonnée",
  },
  {
    numéro: "9/20",
    question: "Quel sport de plein air se pratique sur une planche à roulettes et consiste à effectuer des figures ?",
    options: ["Skateboard", "Roller", "BMX", "Trottinette"],
    answer: "Skateboard",
  },
  {
    numéro: "10/20",
    question: "Quelle activité de plein air consiste à glisser sur une pente enneigée avec une paire de skis ?",
    options: ["Ski alpin", "Snowboard", "Luge", "Ski de fond"],
    answer: "Ski alpin",
  },
  {
    numéro: "11/20",
    question: "Quel activité de plein air se pratique en lançant des boules sur un terrain de sable ?",
    options: ["Pétanque", "Bocce", "Cricket", "Jeu de billes"],
    answer: "Pétanque",
  },
  {
    numéro: "12/20",
    question: "Quelle activité de plein air consiste à voler en parachute derrière un bateau à moteur ?",
    options: ["Parachute ascensionnel", "Kitesurf", "Parapente", "Parachute"],
    answer: "Parachute ascensionnel",
  },
  {
    numéro: "13/20",
    question: "Quel sport de plein air se pratique sur une planche, en se déplaçant sur les vagues de l'océan ?",
    options: ["Surf", "Kitesurf", "Planche à voile", "Paddle"],
    answer: "Surf",
  },
  {
    numéro: "14/20",
    question: "Quelle activité de plein air consiste à grimper dans des arbres avec un harnais et des cordes ?",
    options: ["Accrobranche", "Randonnée", "Escalade", "Alpinisme"],
    answer: "Accrobranche",
  },
  {
    numéro: "15/20",
    question: "Quel est l'objectif principal du jeu de l'épervier ?",
    options: [
      "Attraper un objet au centre du terrain",
      "Traverser le terrain sans se faire toucher",
      "Se cacher sans se faire attraper",
      "Construire un abri dans la forêt"
    ],
    answer: "Traverser le terrain sans se faire toucher",
  },
  {
    numéro: "16/20",
    question: "Quelle activité de plein air consiste à voler librement à l'aide d'un parachute ?",
    options: ["Parapente", "Parachutisme", "Parachute ascensionnel", "Montgolfière"],
    answer: "Parapente",
  },
  {
    numéro: "17/20",
    question: "Dans quelle activité de plein air les participants doivent-ils conserver un aliment sur une cuillère tout en courant vers la ligne d'arrivée ?",
    options: ["Course en sac", "Course à l'œuf", "Relais de l'œuf", "Course en trio"],
    answer: "Course à l'œuf",
  },
  {
    numéro: "18/20",
    question: "Quelle activité de plein air consiste à dormir dans la nature sous une tente ?",
    options: ["Camping", "Randonnée", "Escalade", "Nuit à la belle étoile"],
    answer: "Camping",
  },
  {
    numéro: "19/20",
    question: "Quel sport de plein air consiste à tirer des flèches avec un arc ?",
    options: ["Tir à l'arc", "Paintball", "Airsoft", "Tir au pistolet"],
    answer: "Tir à l'arc",
  },
  {
    numéro: "20/20",
    question: "Quelle est la principale difficulté de la course en sac ?",
    options: ["Équilibrer l'oeuf", "Sauter sans tomber", "Courir les pieds attachés", "Courir en portant un sac lourd"],
    answer: "Sauter sans tomber",
  }
];

const questionsJeuxDeSociete = [
  {
    numéro: "1/20",
    question: "Quel jeu de société demande aux joueurs de dessiner et de deviner des mots tout en respectant un sablier ?",
    options: ["Pandemic", "Time's Up", "Pictionary", "La Bonne Paye"],
    answer: "Pictionary",
  },
  {
    numéro: "2/20",
    question: "Dans le Scrabble, combien de lettres y a-t-il en tout ?",
    options: ["100", "120", "140", "160"],
    answer: "100",
  },
  {
    numéro: "3/20",
    question: "Quel jeu de société utilise un plateau circulaire divisé en cases de couleur où les joueurs se déplacent avec des pions en forme de camemberts ?",
    options: ["Trivial Pursuit", "Risk", "Puissance 4", "Taboo"],
    answer: "Trivial Pursuit",
  },
  {
    numéro: "4/20",
    question: "Quel jeu de plateau à pour but l'achat de propriétés?",
    options: ["Carcassonne", "La bonne paye", "Monopoly", "Pandemic"],
    answer: "Monopoly",
  },
  {
    numéro: "5/20",
    question: "Dans le jeu 'Puissance 4', combien de jetons de chaque couleur reçoit chaque joueur au début de la partie ?",
    options: ["18", "19", "20", "21"],
    answer: "21",
  },
  {
    numéro: "6/20",
    question: "Dans quel jeu de société les joueurs doivent-ils deviner qui est l'Assassin parmi eux sans se faire démasquer ?",
    options: ["Les Loups-Garous de Thiercelieux", "Codenames", "Time's Up", "Secret Hitler"],
    answer: "Les Loups-Garous de Thiercelieux",
  },
  {
    numéro: "7/20",
    question: "Combien de dés utilise-t-on dans une partie de 'Yahtzee' (Yams) ?",
    options: ["3 dés", "4 dés", "5 dés", "6 dés"],
    answer: "5 dés",
  },
  {
    numéro: "8/20",
    question: "Dans le jeu 'Trivial Pursuit', quelle couleur de camembert correspond aux questions de géographie ?",
    options: ["Bleu", "Jaune", "Vert", "Rose"],
    answer: "Bleu",
  },
  {
    numéro: "9/20",
    question: "Dans le jeu Cluedo, qui est le coupable du meurtre dans la version classique du jeu ?",
    options: ["Mademoiselle Rose", "Colonel Moutarde", "Docteur Lenoir", "Monsieur Olive"],
    answer: "Colonel Moutarde",
  },
  {
    numéro: "10/20",
    question: "Dans le jeu 6 qui prend, combien de cartes maximum peut-on avoir en main à la fin d'une des manches ?",
    options: ["4 cartes", "6 cartes", "10 cartes", "Aucune limite"],
    answer: "10 cartes",
  },
  {
    numéro: "11/20",
    question: "Dans 'Puissance 4', combien de jetons doit-on aligner pour gagner la partie ?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    numéro: "12/20",
    question: "Quel jeu de société nécessite que les joueurs devinent des mots à partir d'illustrations énigmatiques ?",
    options: ["Dixit", "Codenames", "Time's Up", "Taboo"],
    answer: "Dixit",
  },
  {
    numéro: "13/20",
    question: "Dans quel jeu de société les joueurs doivent-ils collaborer pour sauver l'humanité d'une pandémie ?",
    options: ["Pandemic", "Puissance 4", "Risk", "Les Aventuriers du Rail"],
    answer: "Pandemic",
  },
  {
    numéro: "14/20",
    question: "Dans 'Time's Up', quels types de cartes sont utilisés pour faire deviner des célébrités ?",
    options: ["Mots", "Images", "Objets", "Sons"],
    answer: "Mots",
  },
  {
    numéro: "15/20",
    question: "Dans 'Codenames', quel est le rôle du maître-espion ?",
    options: ["Faire deviner les mots", "Donner des indices", "Déchiffrer les codes", "Contrer les adversaires"],
    answer: "Faire deviner les mots",
  },
  {
    numéro: "16/20",
    question: "Dans le jeu Rummikub, combien de jetons faut-il poser pour avoir une combinaison de tuiles correcte au premier tour ?",
    options: ["3 jetons minimum", "5 jetons minimum", "7 jetons minimum", "9 jetons minimum"],
    answer: "3 jetons minimum",
  },
  {
    numéro: "17/20",
    question: "Dans le jeu Uno, quelle carte permet de forcer le joueur suivant à piocher des cartes et à passer son tour ?",
    options: ["Carte +2", "Carte Joker", "Carte Inversion", "Carte 2"],
    answer: "Carte +2",
  },
  {
    numéro: "18/20",
    question: "Dans le jeu Uno Flip, quelle est la particularité de la carte Flip ?",
    options: [
      "Elle oblige à utiliser l'autre côté des cartes en main",
      "Elle oblige à retourner les cartes joker",
      "Elle est blanche",
      "Elle a un carré dessiné au milieu "
    ],
    answer: "Elle oblige à utiliser l'autre côté des cartes en main",
  },
  {
    numéro: "19/20",
    question: "Dans le jeu Crack List, comment gagne-t-on une manche ?",
    options: [
      "En posant sa dernière carte",
      "En collectant le plus de points",
      "En complétant une liste entière",
      "En battant tous les autres joueurs dans un duel"
    ],
    answer: "En posant sa dernière carte",
  },
  {
    numéro: "20/20",
    question: "Quel jeu d'adresse demande aux joueurs d'empiler des pièces en bois sans faire tomber la tour ?",
    options: ["Tac Tik", "Jenga", "Jungle speed", "Goki Solitaire"],
    answer: "Jenga",
  }
];

const questionsSportsMoteur = [
  {
    numéro: "1/20",
    question: "Dans quelle discipline de sport à moteur les pilotes utilisent-ils des voitures spécialement conçues pour rouler sur des circuits ovales, comme celui d'Indianapolis 500 ?",
    options: ["Formule 1", "NASCAR", "Rallye", "Endurance"],
    answer: "NASCAR",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom du circuit qui accueille le Grand Prix de Monaco de Formule 1 chaque année ?",
    options: ["Monza", "Spa-Francorchamps", "Monte Carlo", "Suzuka"],
    answer: "Monte Carlo",
  },
  {
    numéro: "3/20",
    question: "Quelle épreuve légendaire de course d'endurance se déroule chaque année en France sur un circuit de 13,6 kilomètres comprenant des portions de route publique ?",
    options: ["24 Heures du Mans", "12 Heures de Sebring", "6 Heures de Spa", "24 Heures de Daytona"],
    answer: "24 Heures du Mans",
  },
  {
    numéro: "4/20",
    question: "Quel pilote de Formule 1 brésilien, surnommé 'Magic Senna', a remporté trois championnats du monde avant son décès tragique lors du Grand Prix de Saint-Marin en 1994 ?",
    options: ["Emerson Fittipaldi", "Ayrton Senna", "Nelson Piquet", "Rubens Barrichello"],
    answer: "Ayrton Senna",
  },
  {
    numéro: "5/20",
    question: "Quel est le nom de la compétition de bateaux à moteur qui se déroule sur des eaux agitées et comporte des courses de vitesse sur des circuits définis ?",
    options: ["Course Offshore", "Régate de voiliers", "Formule 1 nautique", "Key West Powerboat Race"],
    answer: "Course Offshore",
  },
  {
    numéro: "6/20",
    question: "Quelle est la catégorie de courses de moto qui se déroule sur des circuits fermés et inclut des épreuves comme le TT de l'île de Man ?",
    options: ["MotoGP", "Motocross", "Enduro", "Trial"],
    answer: "MotoGP",
  },
  {
    numéro: "7/20",
    question: "Dans quelle discipline de sport à moteur les pilotes conduisent-ils des véhicules à 4 roues sur des parcours variés comprenant des chemins boueux, des collines escarpées et des obstacles naturels ?",
    options: ["Rallye tout-terrain", "Motocross", "Enduro", "Baja 1000"],
    answer: "Rallye tout-terrain",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom de la compétition où les participants conduisent des véhicules tout-terrain sur des parcours variés comprenant des chemins boueux, des collines escarpées et des obstacles naturels ?",
    options: ["Rallye", "Enduro", "Motocross", "Baja 1000"],
    answer: "Enduro",
  },
  {
    "numéro": "10/20",
    "question": "Quelle est la compétition internationale de rallye la plus prestigieuse, où les pilotes s'affrontent sur des surfaces variées allant de la terre à la neige en passant par l'asphalte ?",
    "options": ["NASCAR", "Formule 1", "IndyCar", "World Rally Championship (WRC)"],
    "answer": "World Rally Championship (WRC)"
  },
  {
    numéro: "10/20",
    question: "Quel est le nom du célèbre pilote de Formule 1 britannique qui a remporté sept titres mondiaux, égalant le record de Michael Schumacher ?",
    options: ["Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel", "Fernando Alonso"],
    answer: "Lewis Hamilton",
  },
  {
    numéro: "11/20",
    question: "Quelle est la catégorie de courses de voitures qui se déroule principalement sur des circuits urbains temporaires, mettant en avant la vitesse et l'agilité des voitures de sport ?",
    options: ["Formule E", "IndyCar", "Formule 1", "NASCAR"],
    answer: "Formule E",
  },
  {
    numéro: "12/20",
    question: "Quelle est la discipline de sport à moteur qui se pratique sur des circuits tout-terrain, souvent dans des conditions de saleté, de boue ou de sable ?",
    options: ["Rallye", "Motocross", "Trial", "Enduro"],
    answer: "Motocross",
  },
  {
    numéro: "13/20",
    question: "Dans quelle compétition de course automobile les voitures sont-elles évaluées sur leur vitesse maximale sur une ligne droite d'un mile ?",
    options: ["Formula E", "Drag Racing", "Rallycross", "Touring Car Racing"],
    answer: "Drag Racing",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de la compétition de moto-cross annuelle qui se déroule sur une piste artificielle, où les pilotes doivent naviguer à travers des sauts et des virages serrés ?",
    options: ["Supercross", "Endurocross", "Motocross des Nations", "X Games Moto-X"],
    answer: "Supercross",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom de la célèbre course de voitures de sport qui se déroule chaque année en Floride, où les participants courent sur un circuit routier urbain ?",
    options: ["24 Heures de Daytona", "12 Heures de Sebring", "Grand Prix de Miami", "Rolex Sports Car Series"],
    answer: "24 Heures de Daytona",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom de la compétition de voiliers en solitaire, sans escale et sans assistance, considérée comme l'une des courses les plus difficiles au monde, se déroulant tous les quatre ans ?",
    options: ["Transat Jacques Vabre", "Route du Rhum", "Vendée Globe", "Sydney to Hobart Yacht Race"],
    answer: "Vendée Globe",
  },
  {
    numéro: "17/20",
    question: "Dans quelle discipline de sport à moteur les pilotes conduisent-ils des véhicules tout-terrain sur de longues distances, traversant différents types de terrains comme le sable, les rochers et les déserts ?",
    options: ["Baja 1000", "Rallye tout-terrain", "Rally Dakar", "Enduro"],
    answer: "Rally Dakar",
  },
  {
    numéro: "18/20",
    question: "Quel est le nom du célèbre pilote de moto espagnol, multiple champion du monde dans la catégorie MotoGP ?",
    options: ["Valentino Rossi", "Casey Stoner", "Jorge Lorenzo", "Marc Márquez"],
    answer: "Marc Márquez",
  },
  {
    numéro: "19/20",
    question: "Dans quelle compétition de course de voitures de sport les pilotes doivent-ils rouler pendant 24 heures consécutives sur un circuit mixte comprenant des portions de route et de piste ?",
    options: ["24 Heures du Mans", "24 Heures de Spa-Francorchamps", "Rolex 24 at Daytona", "12 Heures de Sebring"],
    answer: "24 Heures du Mans",
  },
  {
    numéro: "20/20",
    question: "Quel est le nom du célèbre pilote français qui a remporté quatre championnats du monde de Formule 1 dans les années 1990 et 2000 ?",
    options: ["Alain Prost", "Jean Alesi", "Jacques Villeneuve", "Fernando Alonso"],
    answer: "Alain Prost",
  },
];


const questionsMusiqueFilmsDisney = [
  {
    numéro: "1/20",
    question: "Quelle chanson du film 'Le Roi Lion' remporta l'Oscar de la meilleure chanson originale en 1995 ?",
    options: ["Hakuna Matata", "Can You Feel the Love Tonight", "Circle of Life", "I Just Can't Wait to Be King"],
    answer: "Can You Feel the Love Tonight",
  },
  {
    numéro: "2/20",
    question: "Quelle chanson du film 'La Reine des Neiges' a connu un grand succès et a été traduite dans de nombreuses langues ?",
    options: ["Let It Go", "Do You Want to Build a Snowman?", "For the First Time in Forever", "Love Is an Open Door"],
    answer: "Let It Go",
  },
  {
    "numéro": "3/20",
    "question": "Quelle chanson du film 'Aladdin' est chantée par le personnage du Génie et est souvent associée à ses pouvoirs magiques ?",
    "options": ["Prince Ali", "Ce Rêve Bleu", "Je Suis Ton Meilleur Ami", "Nuits d'Arabie"],
    "answer": "Je Suis Ton Meilleur Ami"
  },
  {
    "numéro": "4/20",
    "question": "Quelle chanson du film 'La Belle et la Bête' est chantée par Lumière, Big Ben et les autres personnages pour accueillir Belle au château ?",
    "options": ["Beauty and the Beast", "C'est la fête", "Something There", "Belle"],
    "answer": "C'est la fête"
},
{
    "numéro": "5/20",
    "question": "Quelle chanson du film 'Pocahontas' a remporté l'Oscar de la meilleure chanson originale en 1996 ?",
    "options": ["Just Around the Riverbend", "Colors of the Wind", "Steady as the Beating Drum", "Savages"],
    "answer": "Colors of the Wind"
},
{
    "numéro": "6/20",
    "question": "Quelle chanson du film 'Mary Poppins' a remporté l'Oscar de la meilleure chanson originale en 1965 ?",
    "options": ["Supercalifragilisticexpialidocious", "A Spoonful of Sugar", "Chim Chim Cher-ee", "Let's Go Fly a Kite"],
    "answer": "Chim Chim Cher-ee"
},
{
    "numéro": "7/20",
    "question": "Quelle chanson du film 'Mulan' est chantée par Mulan lorsqu'elle décide de se déguiser en homme et de partir à la guerre à la place de son père ?",
    "options": ["Reflection", "Comme un homme", "Honor to Us All", "A Girl Worth Fighting For"],
    "answer": "Reflection"
},
{
    "numéro": "8/20",
    "question": "Quelle chanson du film 'Coco' a remporté l'Oscar de la meilleure chanson originale en 2018 ?",
    "options": ["Un Poco Loco", "Remember Me", "The World Es Mi Familia", "La Llorona"],
    "answer": "Remember Me"
},
{
    "numéro": "9/20",
    "question": "Quelle chanson du film 'Hercule' est chantée par les Muses pour raconter les exploits du héros ?",
    "options": ["Go the Distance", "De Zéro en Héros", "I Won't Say (I'm in Love)", "The Gospel Truth"],
    "answer": "De Zéro en Héros"
},
{
    "numéro": "10/20",
    "question": "Quelle chanson du film 'La Petite Sirène' est chantée par Ariel pour exprimer son désir de découvrir le monde des humains ?",
    "options": ["Sous l'océan", "Embrasse-la", "Partir là-bas", "Les Poissons"],
    "answer": "Partir là-bas"
},
{
    "numéro": "11/20",
    "question": "Quelle chanson du film 'Tarzan' est chantée par Phil Collins et a été nominée pour l'Oscar de la meilleure chanson originale en 2000 ?",
    "options": ["You'll Be in My Heart", "Strangers Like Me", "Son of Man", "Two Worlds"],
    "answer": "You'll Be in My Heart"
},
{
    "numéro": "12/20",
    "question": "Quelle chanson du film 'La Belle au Bois Dormant' est chantée par Maléfique lorsqu'elle jette un sort à la princesse Aurore ?",
    "options": ["Once Upon a Dream", "I Wonder", "Skumps", "A Dream Is a Wish Your Heart Makes"],
    "answer": "Once Upon a Dream"
},
{
    "numéro": "13/20",
    "question": "Quelle chanson du film 'Les Aristochats' est chantée par la célèbre Duchesse et ses chatons ?",
    "options": ["Tout le monde veut devenir un cat", "The Aristocats", "Scales and Arpeggios", "Thomas O'Malley Cat"],
    "answer": "Tout le monde veut devenir un cat"
},
{
    "numéro": "14/20",
    "question": "Quelle chanson du film 'Le Livre de la Jungle' est chantée par Baloo pour enseigner la philosophie de la vie à Mowgli ?",
    "options": ["Colonel Hathi's March", "Je voudrais être comme vous", "Il en faut peu pour être heureux", "Aie Confiance"],
    "answer": "Il en faut peu pour être heureux"
},
{
    "numéro": "15/20",
    "question": "Quelle chanson du film 'La Princesse et la Grenouille' est chantée par le personnage de Ray, la luciole ?",
    "options": ["Almost There", "Down in New Orleans", "Friends on the Other Side", "Ma Belle Evangeline"],
    "answer": "Ma Belle Evangeline"
},
{
    "numéro": "16/20",
    "question": "Quelle chanson du film 'Raiponce' est chantée par Raiponce lorsqu'elle exprime son désir de voir les lanternes flottantes ?",
    "options": ["Quand est-ce que ma vie commence ?", "Mother Knows Best", "Je veux y croire", "Healing Incantation"],
    "answer": "Je veux y croire"
},
{
    "numéro": "17/20",
    "question": "Quelle chanson du film 'Mulan' est chantée par les soldats chinois pour exprimer leur détermination à défendre leur pays ?",
    "options": ["Reflection", "Honor to Us All", "Comme un homme", "A Girl Worth Fighting For"],
    "answer": "Comme un homme"
},
{
    "numéro": "18/20",
    "question": "Quelle chanson du film 'La Reine des Neiges' est chantée par Elsa lorsque ses pouvoirs de glace sont révélés au royaume d'Arendelle ?",
    "options": ["Le Renouveau", "Libérée, délivrée", "L'Amour est un cadeau", "Do You Want to Build a Snowman?"],
    "answer": "Libérée, délivrée"
},
{
    "numéro": "19/20",
    "question": "Quelle chanson du film 'Vaiana' est chantée par le personnage de Maui, le demi-dieu, pour vanter ses exploits ?",
    "options": ["On connaît la chanson", "Le Bleu Lumière", "You're Welcome", "I Am Moana (Song of the Ancestors)"],
    "answer": "You're Welcome"
},
{
    "numéro": "20/20",
    "question": "Quelle chanson du film 'Toy Story' est chantée par Randy Newman et a été nominée pour l'Oscar de la meilleure chanson originale en 1996 ?",
    "options": ["Strange Things", "Je suis ton ami", "When She Loved Me", "We Belong Together"],
    "answer": "Je suis ton ami"
}
];


const questionsDessinsAnimesDisney = [
  {
    numéro: "1/20",
    question: "Quel est le premier long métrage d'animation réalisé par les studios Disney, sorti en 1937 ?",
    options: ["Pinocchio", "Cendrillon", "Blanche-Neige et les Sept Nains", "La Belle et la Bête"],
    answer: "Blanche-Neige et les Sept Nains",
  },
  {
    numéro: "2/20",
    question: "Dans quel film Disney les personnages principaux s'aventurent-ils dans une jungle indienne et rencontrent des animaux comme Baloo et Shere Khan ?",
    options: ["La Belle et le Clochard", "Le Livre de la Jungle", "Les Aristochats", "La Petite Sirène"],
    answer: "Le Livre de la Jungle",
  },
  {
    numéro: "3/20",
    question: "Quel est le titre du film Disney où une jeune fille courageuse part à la recherche de son père disparu avec l'aide d'un poisson et d'un crustacé ?",
    options: ["La Reine des Neiges", "La Petite Sirène", "Raiponce", "La Belle et la Bête"],
    answer: "La Petite Sirène",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom du personnage principal du film Disney qui souhaite devenir un vrai garçon grâce à l'aide de Jiminy Cricket ?",
    options: ["Bambi", "Dumbo", "Pinocchio", "Peter Pan"],
    answer: "Pinocchio",
  },
  {
    numéro: "5/20",
    question: "Dans quel film Disney des jouets prennent-ils vie lorsque les humains ne sont pas présents ?",
    options: ["Toy Story", "Monstres et Cie", "Les Indestructibles", "La Reine des Neiges"],
    answer: "Toy Story",
  },
  {
    numéro: "6/20",
    question: "Quel est le titre du film Disney où des animaux de la savane africaine sont représentés dans une histoire épique de trahison et de courage ?",
    options: ["Le Roi Lion", "Bambi", "Madagascar", "Robin des Bois"],
    answer: "Le Roi Lion",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom du film Disney où un jeune prince trouve une lampe magique contenant un puissant génie capable d'accorder des souhaits ?",
    options: ["Aladdin", "Charmant", "Hercule", "Tarzan"],
    answer: "Aladdin",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom du film Disney où une jeune fille intrépide et un renard rusé se lient d'amitié malgré les différences entre leurs espèces ?",
    options: ["Pocahontas", "La Belle et le Clochard", "Robin des Bois", "Les Aristochats"],
    answer: "Robin des Bois",
  },
  {
    numéro: "9/20",
    question: "Quel est le titre du film Disney où une jeune princesse, malédiction oblige, se retrouve piégée dans un château en compagnie d'une Bête terrifiante ?",
    options: ["La Belle au Bois Dormant", "La Belle et la Bête", "Blanche-Neige et les Sept Nains", "Cendrillon"],
    answer: "La Belle et la Bête",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom du film Disney où une jeune femme courageuse part à la recherche de sa sœur gelée et apprend à maîtriser ses pouvoirs de glace ?",
    options: ["La Reine des Neiges", "Vaiana, la Légende du Bout du Monde", "La Princesse et la Grenouille", "Mulan"],
    answer: "La Reine des Neiges",
  },
  {
    numéro: "11/20",
    question: "Quel est le titre du film Disney où une jeune princesse hawaïenne part à l'aventure pour restaurer le cœur d'une déesse et sauver son île ?",
    options: ["Wish", "Vaiana, la Légende du Bout du Monde", "Lilo & Stitch", "Encanto"],
    answer: "Vaiana, la Légende du Bout du Monde",
  },
  {
    numéro: "12/20",
    question: "Dans quel film Disney des jouets d'une chambre d'enfant partent-ils à la recherche de Buzz l'Éclair, leur nouveau camarade de jeu ?",
    options: ["Toy Story 2", "Toy Story 3", "Toy Story 4", "Toy Story"],
    answer: "Toy Story 2",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom du film Disney où un jeune Indien, avide de vengeance, se lance à la poursuite d'un grizzly qui a tué son frère ?",
    options: ["Tarzan", "Bernard et Bianca au pays des kangourous", "Frère des ours", "Le Monde de Nemo"],
    answer: "Frère des ours",
  },
  {
    numéro: "14/20",
    question: " Dans quel film d'animation de Disney, une jeune femme passionnée de cuisine rêve-t-elle d'ouvrir son propre restaurant et travaille-t-elle dur pour atteindre son objectif malgré les obstacles ?",
    options: ["Atlantide, l'empire perdu", "La Princesse et la Grenouille", "Enchanted", "Mulan"],
    answer: "La Princesse et la Grenouille",
  },
  {
    numéro: "15/20",
    question: "Dans quel film Disney les personnages principaux vivent-ils une aventure musicale dans les rues de Paris ?",
    options: ["Oliver et Compagnie", "Rox et Rouky", "Les Aventures de Bernard et Bianca", "Le Bossu de Notre-Dame"],
    answer: "Le Bossu de Notre-Dame",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du film Disney où un jeune lion doit affronter son destin pour devenir le roi de la savane après la mort de son père ?",
    options: ["Le Roi Lion", "Bambi", "Dumbo", "Tarzan"],
    answer: "Le Roi Lion",
  },
  {
    numéro: "17/20",
    question: "Quel est le titre du film Disney où une jeune fille, en quête de justice, devient guerrière pour défendre son peuple contre les envahisseurs hun ?",
    options: ["Pocahontas", "Mulan", "Vaiana, la Légende du Bout du Monde", "La Reine des Neiges"],
    answer: "Mulan",
  },
  {
    numéro: "18/20",
    question: "Dans quel film Disney un jeune garçon est élevé par des loups après avoir été abandonné par ses parents ?",
    options: ["Lilo & Stitch", "Tarzan", "Le Livre de la Jungle", "Peter Pan"],
    answer: "Le Livre de la Jungle",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom du film Disney où un jeune garçon vit des aventures magiques dans un monde souterrain rempli de créatures étranges ?",
    options: ["Les Mondes de Ralph", "Atlantide, l'empire perdu", "La Planète au trésor", "Le Voyage d'Arlo"],
    answer: "Atlantide, l'empire perdu",
  },
  {
    numéro: "20/20",
    question: "Dans quel film Disney une petite fille se retrouve coincée dans un monde peuplé de monstres ?",
    options: ["Monstres et Cie", "Toy Story", "Les Indestructibles", "Monstres Academy"],
    answer: "Monstres et Cie",
  },
];

const questionsPersonnagesDisney = [
  {
    numéro: "1/20",
    question: "Quel est le nom du célèbre souriceau intrépide et optimiste, créé par Walt Disney en 1928 ?",
    options: ["Dingo", "Mickey Mouse", "Donald Duck", "Pluto"],
    answer: "Mickey Mouse",
  },
  {
    numéro: "2/20",
    question: "Quelle princesse Disney, inspirée d'un conte de fées danois, a le pouvoir de geler les objets et les personnes ?",
    options: ["Aurore", "Cendrillon", "Elsa", "Blanche-Neige"],
    answer: "Elsa",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom du père du poisson clown courageux et aventureux ?",
    options: ["Marin", "Nemo", "Dory", "Crush"],
    answer: "Marin",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom de la princesse qui est forcée de travailler comme servante avant de retrouver sa véritable identité grâce à une pantoufle de verre ?",
    options: ["Aurore", "Cendrillon", "Ariel", "Belle"],
    answer: "Cendrillon",
  },
  {
    numéro: "5/20",
    question: "Quel est le nom du célèbre génie bleu qui vit dans une lampe magique et peut exaucer des vœux dans le film 'Aladdin' ?",
    options: ["Abu", "Jafar", "Iago", "Génie"],
    answer: "Génie",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom du lionceau qui devient roi de la savane dans le film 'Le Roi Lion' ?",
    options: ["Simba", "Mufasa", "Timon", "Pumbaa"],
    answer: "Simba",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom du protagoniste du film 'En Avant', un jeune elfe passionné de magie et d'aventure ?",
    options: ["Barley", "Laurel", "Corey", "Wilden"],
    answer: "Barley",
  },
  {
    numéro: "8/20",
    question: "Dans le film 'Encanto', quel est le nom de l'aînée de la famille Madrigal, qui a le pouvoir de contrôler les plantes ?",
    options: ["Isabela", "Mirabel", "Abuela Alma", "Antonio"],
    answer: "Isabela",
  },
  {
    numéro: "9/20",
    question: "Dans le film 'Luca', quel est le nom du meilleur ami de Luca, un jeune monstre marin audacieux ?",
    options: ["Alberto", "Massimo", "Giulia", "Daniela"],
    answer: "Alberto",
  },
  {
    numéro: "10/20",
    question: "Quelle est la couleur du personnage Envie dans Vice-Versa 2?",
    options: ["Turquoise", "Bleu", "Vert", "Rose"],
    answer: "Turquoise",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom du vaillant guerrier chinois qui se déguise en homme pour combattre à la place de son père malade dans le film 'Mulan' ?",
    options: ["Mulan", "Shang", "Cri-Kee", "Mushu"],
    answer: "Mulan",
  },
  {
    numéro: "12/20",
    question: "Quel est le nom du célèbre chien de chasse rusé qui aide les renards dans le film 'Rox et Rouky' ?",
    options: ["Rox", "Rouky", "Copper", "Tod"],
    answer: "Copper",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom du méchant, souvent accompagné de son fidèle corbeau, dans le film 'La Belle au Bois Dormant' ?",
    options: ["Jafar", "Gaston", "Maléfique", "Hades"],
    answer: "Maléfique",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de la célèbre petite souris verte qui est la meilleure amie de Cendrillon ?",
    options: ["Gus", "Suzy", "Perla", "Jac"],
    answer: "Jac",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom du célèbre capitaine pirate qui poursuit Peter Pan dans le Pays Imaginaire ?",
    options: ["Capitaine Crochet", "Capitaine Barbossa", "Capitaine Jack Sparrow", "Capitaine Hector"],
    answer: "Capitaine Crochet",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom du général chinois respecté qui prend Mulan sous son aile malgré son identité secrète de femme ?",
    options: ["Shang", "Chi-Fu", "Ling", "Yao"],
    answer: "Shang",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom de la gentille fée marraine qui aide Cendrillon à se rendre au bal dans un carrosse magique ?",
    options: ["Flora", "Pimprenelle", "Marraine la Bonne Fée", "Lucifer"],
    answer: "Marraine la Bonne Fée",
  },
  {
    numéro: "18/20",
    question: "Quel est le nom du célèbre lion majestueux, père de Simba, dans le film 'Le Roi Lion' ?",
    options: ["Mufasa", "Scar", "Rafiki", "Zazu"],
    answer: "Mufasa",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom du célèbre ours en peluche qui est le meilleur ami de Christopher Robin ?",
    options: ["Tigrou", "Porcinet", "Bourriquet", "Winnie"],
    answer: "Winnie",
  },
  {
    numéro: "20/20",
    question: "Quel est le nom du célèbre chat roux de la princesse Aurore dans le film 'La Belle au Bois Dormant' ?",
    options: ["Lucifer", "Figaro", "Cheshire", "Tom"],
    answer: "Figaro",
  },
];


const questionsBandesOriginalesFilms = [
  {
    numéro: "1/20",
    question: "Quelle chanson de film, écrite par Elton John et Tim Rice, a remporté l'Oscar de la meilleure chanson originale en 1995 pour le film 'Le Roi Lion' ?",
    options: ["Can You Feel the Love Tonight", "Circle of Life", "Hakuna Matata", "I Just Can't Wait to Be King"],
    answer: "Can You Feel the Love Tonight",
  },
  {
    numéro: "2/20",
    question: "Quelle chanson de Whitney Houston, issue du film 'The Bodyguard', est devenue un énorme succès en 1992 ?",
    options: ["Greatest Love of All", "I Have Nothing", "I Will Always Love You", "Run to You"],
    answer: "I Will Always Love You",
  },
  {
    numéro: "3/20",
    question: "Quelle chanson de Céline Dion, pour le film 'Titanic', a remporté l'Oscar de la meilleure chanson originale en 1998 ?",
    options: ["My Heart Will Go On", "Near, Far, Wherever You Are", "Every Night in My Dreams", "Titanic Anthem"],
    answer: "My Heart Will Go On",
  },
  {
    numéro: "4/20",
    question: "Quelle chanson de film, interprétée par Anaïs Delva, est devenue un phénomène mondial grâce au film 'La Reine des Neiges' en 2013 ?",
    options: ["L'amour est un cadeau", "Le renouveau", "Libérée, délivrée", "Je voudrais un bonhomme de neige ?"],
    answer: "Libérée, Délivrée",
  },
  {
    numéro: "5/20",
    question: "Quelle chanson de film, chantée par Julie Andrews, est devenue emblématique dans le film 'Mary Poppins' sorti en 1964 ?",
    options: ["A Spoonful of Sugar", "Chim Chim Cher-ee", "Feed the Birds", "Supercalifragilisticexpialidocious"],
    answer: "Supercalifragilisticexpialidocious",
  },
  {
    numéro: "6/20",
    question: "Quelle chanson de film, interprétée par Irene Cara, a remporté l'Oscar de la meilleure chanson originale en 1984 pour le film 'Flashdance' ?",
    options: ["What a Feeling", "Maniac", "Fame", "Flashdance"],
    answer: "What a Feeling",
  },
  {
    numéro: "7/20",
    question: "Quelle chanson de film, chantée par Judy Garland, est devenue un symbole d'espoir dans le film 'Le Magicien d'Oz' sorti en 1939 ?",
    options: ["Ding-Dong! The Witch Is Dead", "We're Off to See the Wizard", "Somewhere Over the Rainbow", "Follow the Yellow Brick Road"],
    answer: "Somewhere Over the Rainbow",
  },
  {
    numéro: "8/20",
    question: "Quelle chanson de film, interprétée par Bill Medley et Jennifer Warnes, est devenue un succès phénoménal grâce au film 'Dirty Dancing' en 1987 ?",
    options: ["(I've Had) The Time of My Life", "Hungry Eyes", "She's Like the Wind", "Do You Love Me"],
    answer: "(I've Had) The Time of My Life",
  },
  {
    numéro: "9/20",
    question: "Quelle chanson de film, écrite par Howard Shore et interprétée par Enya, a été utilisée dans la trilogie 'Le Seigneur des Anneaux' ?",
    options: ["Concerning Hobbits", "May It Be", "The Breaking of the Fellowship", "Into the West"],
    answer: "May It Be",
  },
  {
    numéro: "10/20",
    question: "Pour quel film John Williams n'a t'il pas composé la BO?",
    options: ["Jurrasic Park", "E.T", "Top Gun", "Star Wars"],
    answer: "Top Gun",
  },
  {
    numéro: "11/20",
    question: "Quelle chanson de film, interprétée par Phil Collins, a été utilisée comme thème musical principal du film 'Tarzan' de Disney en 1999 ?",
    options: ["Son of Man", "Strangers Like Me", "You'll Be in My Heart", "Two Worlds"],
    answer: "You'll Be in My Heart",
  },
  {
    numéro: "12/20",
    question: "Quelle chanson de film, interprétée par Whitney Houston et Mariah Carey, est devenue un succès grâce au film 'Le Prince d'Egypte' en 1998 ?",
    options: ["Exhale (Shoop Shoop)", "My Love Is Your Love", "When You Believe", "I Will Always Love You"],
    answer: "When You Believe",
  },
  {
    numéro: "13/20",
    question: "Quelle chanson de film, interprétée par Adele, a remporté l'Oscar de la meilleure chanson originale en 2013 pour le film 'Skyfall' ?",
    options: ["Skyfall", "Writing's on the Wall", "No Time to Die", "All the Stars"],
    answer: "Skyfall",
  },
  {
    numéro: "14/20",
    question: "Quelle chanson de film, interprétée par Eminem, a remporté l'Oscar de la meilleure chanson originale en 2003 pour le film '8 Mile' ?",
    options: ["Without Me", "Lose Yourself", "Mockingbird", "Stan"],
    answer: "Lose Yourself",
  },
  {
    numéro: "15/20",
    question: "Quelle chanson de film, interprétée par Bruce Springsteen, a remporté l'Oscar de la meilleure chanson originale en 1994 pour le film 'Philadelphia' ?",
    options: ["The Streets of Philadelphia", "Streets of Fire", "Born in the USA", "Dancing in the Dark"],
    answer: "The Streets of Philadelphia",
  },
  {
    numéro: "16/20",
    question: "Quelle chanson de la bande originale du film 'Léon' est interprétée par Sting et a également été un succès en dehors du film ?",
    options: ["Angel", "Fields of Gold", "Shape of my Heart", "Englishman in New York"],
    answer: "Shape of my Heart",
  },
  {
    numéro: "17/20",
    question: "Quelle chanson de film, interprétée par Phil Collins, est devenue un succès mondial grâce au film d'animation 'Tarzan' en 1999 ?",
    options: ["Two Worlds", "Strangers Like Me", "Son of Man", "You'll Be in My Heart"],
    answer: "Strangers Like Me",
  },
  {
    numéro: "18/20",
    question: "Quelle chanson de film, interprétée par Huey Lewis and the News, a été utilisée comme thème musical principal du film 'Retour vers le futur' en 1985 ?",
    options: ["Back in Time", "The Power of Love", "Hip to Be Square", "Heart and Soul"],
    answer: "The Power of Love",
  },
  {
    numéro: "19/20",
    question: "Quelle chanson de la bande originale du film 'Léon' est interprétée par Massive Attack ?",
    options: ["Angel", "Teardrop", "Two Ways Out", "Protection"],
    answer: "Two Ways Out",
  },
  {
    numéro: "20/20",
    question: "Quelle chanson de film, interprétée par Survivor, est devenue célèbre comme thème musical principal du film 'Rocky III' en 1982 ?",
    options: ["Eye of the Tiger", "Gonna Fly Now", "Burning Heart", "No Easy Way Out"],
    answer: "Eye of the Tiger",
  },
];


const questionsDragonBall = [
  {
    numéro: "1/20",
    question: "Qui est le personnage principal de Dragon Ball Z ?",
    options: ["Son Goku", "Vegeta", "Piccolo", "Son Gohan"],
    answer: "Son Goku",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom du premier ennemi de Son Goku dans Dragon Ball ?",
    options: ["Raditz", "Nappa", "Freezer", "Cell"],
    answer: "Raditz",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom du créateur de Dragon Ball ?",
    options: ["Akira Toriyama", "Hayao Miyazaki", "Osamu Tezuka", "Masashi Kishimoto"],
    answer: "Akira Toriyama",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom de la transformation où les cheveux de Son Goku deviennent blonds et ses yeux verts ?",
    options: ["Super Saiyan", "Kaioken", "Ultra Instinct", "Super Saiyan God"],
    answer: "Super Saiyan",
  },
  {
    numéro: "5/20",
    question: "De quel ennemi vient à bout Gohan avec l'aide de son père de l'au-delà dans Dragon Ball Z ?",
    options: ["Cell", "Freezer", "Buu", "Raditz"],
    answer: "Cell",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom du premier fils de Goku et de Chi-Chi ?",
    options: ["Gohan", "Goten", "Trunks", "Krillin"],
    answer: "Gohan",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom du meilleur ami de Goku, qui se marie plus tard à un cyborg ?",
    options: ["Vegeta", "Piccolo", "Krilin", "Yamcha"],
    answer: "Krilin",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom de naissance de Goku ?",
    options: ["Kakarotto", "Korin", "Goku", "Kami"],
    answer: "Kakarotto",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom de la technique spéciale de Goku qui lui permet de se déplacer instantanément ?",
    options: ["Le Kaioken", "Le Kaikai", "Le Solar Flare", "Le Kamehameha"],
    answer: "Le Kaikai",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom de la planète d'origine des Saiyans ?",
    options: ["Vegeta", "Namek", "Yardrat", "Vampa"],
    answer: "Vegeta",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom du robot créé initialement par le Dr. Gero pour éliminer Goku ?",
    options: ["C17", "C18", "C16", "C19"],
    answer: "C16",
  },
  {
    numéro: "12/20",
    question: "Quel est le nom de l'attaque signature de Vegeta, où il rassemble de l'énergie dans ses mains et la tire vers son adversaire ?",
    options: ["Final Flash", "Galick Gun", "Big Bang Attack", "Spirit Bomb"],
    answer: "Final Flash",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom de la transformation de Gohan dans Dragon Ball Super Héros ?",
    options: ["Gohan Beast", "Gohan SSJ2", "Ultimate Gohan", "Gohan guerrier intergalactique"],
    answer: "Gohan Beast",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de l'ennemi rose dans Dragon Ball Z ?",
    options: ["Buu", "Freezer", "Cell", "Raditz"],
    answer: "Buu",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom de la technique de Son Gohan qui combine une puissante vague d'énergie avec un coup de poing ?",
    options: ["Masenko", "Kamehameha", "Gekiretsu Madan", "Father-Son Kamehameha"],
    answer: "Masenko",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom de l'entreprise du Dr Brief, père de Bulma ?",
    options: ["Red Ribbon", "Capsule Corp", "Frieza Force", "Ginyu Corp"],
    answer: "Capsule Corp",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom du père de Son Goku ?",
    options: ["Bardock", "Broly", "Paragus", "King Vegeta"],
    answer: "Bardock",
  },
  {
    numéro: "18/20",
    question: "Quel est le nom de la fusion entre Son Goku et Vegeta, souvent utilisée pour affronter des ennemis très puissants ?",
    options: ["Gogeta", "Gotenks", "Vegito", "Kefla"],
    answer: "Gogeta",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom du tournoi d'arts martiaux où Son Goku et ses amis se battent pour prouver leur force ?",
    options: ["Tenkaichi Budokai", "Cell Games", "World Martial Arts Tournament", "King of Fighters"],
    answer: "Tenkaichi Budokai",
  },
  {
    numéro: "20/20",
    question: "Quel est le nom de la fils de Gohan et Videl ?",
    options: ["Pan", "Kale", "Marron", "Bra"],
    answer: "Pan",
  },
];


const questionsPlantesBotanique = [
  {
    numéro: "1/20",
    question: "Pourquoi offre-t-on traditionnellement du muguet à la fête du travail ?",
    options: [
      "Pour célébrer le début du printemps",
      "En signe de bonheur et de prospérité",
      "Pour marquer la solidarité ou l'amitié",
      "Pour honorer les travailleurs et leurs droits"
    ],
    answer: "Pour honorer les travailleurs et leurs droits",
  },
  {
    numéro: "2/20",
    question: "Quelle est la partie de la plante qui absorbe l'eau et les nutriments du sol ?",
    options: ["Racine", "Tige", "Feuille", "Fleur"],
    answer: "Racine",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom du processus par lequel les plantes produisent leur propre nourriture en utilisant la lumière du soleil, le dioxyde de carbone et l'eau ?",
    options: ["Photosynthèse", "Respiration", "Transpiration", "Germination"],
    answer: "Photosynthèse",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom de la partie de la fleur qui contient le pollen ?",
    options: ["Étamines", "Pistil", "Sépales", "Pétales"],
    answer: "Étamines",
  },
  {
    numéro: "5/20",
    question: "Quel est le nom de la partie de la plante qui soutient les feuilles, les fleurs et les fruits, et transporte l'eau et les nutriments ?",
    options: ["Tige", "Racine", "Feuille", "Écorce"],
    answer: "Tige",
  },
  {
    numéro: "6/20",
    question: "Quelle est la substance verte présente dans les feuilles des plantes qui capture la lumière du soleil pour la photosynthèse ?",
    options: ["Chlorophylle", "Cellulose", "Amidon", "Fibre"],
    answer: "Chlorophylle",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom de l'organe reproducteur femelle des plantes à fleurs ?",
    options: ["Pistil", "Étamines", "Stigmate", "Ovaire"],
    answer: "Pistil",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom du processus par lequel les graines germent et commencent à pousser ?",
    options: ["Germination", "Pollinisation", "Fertilisation", "Photosynthèse"],
    answer: "Germination",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom de la partie de la fleur qui protège le bourgeon floral avant qu'il ne s'ouvre ?",
    options: ["Sépales", "Pétales", "Étamines", "Pistil"],
    answer: "Sépales",
  },
  {
    numéro: "10/20",
    question: "Quelle est cette fleur qui est souvent associée au deuil et à la commémoration ?",
    options: ["Chrysanthème", "Lisianthus", "Anémone", "Renoncule"],
    answer: "Chrysanthème",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom de la partie de la plante qui produit les spores pour la reproduction ?",
    options: ["Sporanges", "Rhizome", "Bulbe", "Stolon"],
    answer: "Sporanges",
  },
  {
    numéro: "12/20",
    question: "Quelle fleur est souvent associée à la gratitude, en particulier lorsqu'elle est donnée comme bouquet ?",
    options: ["Tulipe", "Gerbera", "Lilas", "Muguet"],
    answer: "Tulipe",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom de la partie de la plante qui stocke les réserves nutritives et d'où une nouvelle plante peut se développer ?",
    options: ["Graine", "Bulbe", "Rhizome", "Tubercule"],
    answer: "Tubercule",
  },
  {
    numéro: "14/20",
    question: "Quel est le nom de la couche externe protectrice de la racine, responsable de l'absorption de l'eau et des nutriments ?",
    options: ["Épiderme", "Cortex", "Endoderme", "Xylème"],
    answer: "Épiderme",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom de la partie de la plante qui produit des hormones de croissance et où poussent les nouvelles feuilles et fleurs ?",
    options: ["Méristème", "Stigmate", "Pistil", "Nœud"],
    answer: "Méristème",
  },
  {
    numéro: "16/20",
    question: "Quel est le nom de cette fleur en forme d'étoile souvent utilisée comme décoration de Noël ?",
    options: ["Poinsettia", "Hortensia", "Bégonia", "Glaïeul"],
    answer: "Poinsettia",
  },
  {
    numéro: "17/20",
    question: "Quelle est cette fleur célèbre pour ses grandes têtes de fleurs colorées qui ressemblent à des soleils miniatures ?",
    options: ["Tournesol", "Marguerite", "Dahlia", "Gazania"],
    answer: "Tournesol",
  },
  {
    numéro: "18/20",
    question: "Quel est le nom de la couche protectrice interne de la racine qui régule le passage de l'eau et des nutriments vers le xylème ?",
    options: ["Endoderme", "Cortex", "Épiderme", "Phloème"],
    answer: "Endoderme",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom du phénomène où les plantes perdent de l'eau par évaporation à travers les stomates de leurs feuilles ?",
    options: ["Transpiration", "Photosynthèse", "Respiration", "Germination"],
    answer: "Transpiration",
  },
  {
    numéro: "20/20",
    question: "Quelle fleur est souvent utilisée pour symboliser la pureté et l'innocence ?",
    options: ["Lys", "Pivoine", "Chrysanthème", "Iris"],
    answer: "Lys",
  },
];

const questionsAnimauxDomestiques = [
  {
    numéro: "1/20",
    question: "Quel est le nom de l'animal domestique qui est souvent décrit comme le meilleur ami de l'homme ?",
    options: ["Chat", "Chien", "Poisson", "Hamster"],
    answer: "Chien",
  },
  {
    numéro: "2/20",
    question: "Quelle est la durée de vie moyenne d'un chat domestique en bonne santé ?",
    options: ["8-10 ans", "12-15 ans", "18-20 ans", "25-30 ans"],
    answer: "12-15 ans",
  },
  {
    numéro: "3/20",
    question: "Quel est le nom de l'oiseau domestique connu pour sa capacité à imiter les sons humains et autres bruits environnants ?",
    options: ["Perruche", "Canari", "Perroquet", "Colombe"],
    answer: "Perroquet",
  },
  {
    numéro: "4/20",
    question: "Quelle est la race de chat domestique la plus commune dans de nombreux foyers à travers le monde ?",
    options: ["Siamois", "Maine Coon", "Persan", "Chat domestique commun"],
    answer: "Chat domestique commun",
  },
  {
    numéro: "5/20",
    question: "Quel est le nom de l'animal domestique souvent gardé pour sa capacité à chasser les rongeurs dans les maisons et les fermes ?",
    options: ["Chat", "Chien", "Furet", "Hérisson"],
    answer: "Chat",
  },
  {
    numéro: "6/20",
    question: "Quelle est la race de chien domestique la plus populaire aux États-Unis et dans de nombreux autres pays ?",
    options: ["Labrador Retriever", "Berger Allemand", "Golden Retriever", "Bulldog français"],
    answer: "Labrador Retriever",
  },
  {
    numéro: "7/20",
    question: "Quel est le nom de l'animal domestique connu pour sa capacité à tourner la tête presque à 180 degrés ?",
    options: ["Chien", "Chat", "Hibou", "Chinchilla"],
    answer: "Chat",
  },
  {
    numéro: "8/20",
    question: "Quelle est la race de chien domestique originaire d'Écosse, connue pour ses petites pattes courtes et son corps trapu ?",
    options: ["Teckel", "Bichon frisé", "Shih Tzu", "Pékinois"],
    answer: "Teckel",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom de l'animal domestique souvent associé à la royauté et aux palais, en raison de sa grâce et de son élégance ?",
    options: ["Poisson rouge", "Chat siamois", "Chien de berger", "Perroquet"],
    answer: "Chat siamois",
  },
  {
    numéro: "10/20",
    question: "Quelle est la race de chien domestique originaire de Russie, caractérisée par son pelage dense et double et ses oreilles pointues ?",
    options: ["Husky sibérien", "Borzoi", "Terrier noir russe", "Samoyède"],
    answer: "Terrier noir russe",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom de l'animal domestique qui est souvent utilisé pour des compétitions d'agilité et de dressage ?",
    options: ["Cheval", "Chien", "Lapin", "Furet"],
    answer: "Chien",
  },
  {
    numéro: "12/20",
    question: "Quelle est la race de chat domestique caractérisée par ses grandes oreilles et sa robe sans poils ?",
    options: ["Sphynx", "Bengal", "Maine Coon", "Scottish Fold"],
    answer: "Sphynx",
  },
  {
    numéro: "13/20",
    question: "Quel est le nom de l'animal domestique qui est souvent utilisé pour sa laine fine et douce ?",
    options: ["Mouton", "Chèvre", "Alpaga", "Lama"],
    answer: "Alpaga",
  },
  {
    numéro: "14/20",
    question: "Quelle est la race de chien domestique originaire du Japon, caractérisée par sa queue bouclée et ses petites oreilles triangulaires ?",
    options: ["Akita Inu", "Shiba Inu", "Hokkaido", "Kishu"],
    answer: "Shiba Inu",
  },
  {
    numéro: "15/20",
    question: "Quel est le nom de l'animal domestique qui est souvent utilisé pour aider les personnes malvoyantes à se déplacer en toute sécurité ?",
    options: ["Chat", "Chien", "Cheval", "Perroquet"],
    answer: "Chien",
  },
  {
    numéro: "16/20",
    question: "Quelle est la race de chat domestique originaire de Thaïlande, connue pour ses grandes oreilles et son miaulement distinctif ?",
    options: ["Siamois", "Burmese", "Ragdoll", "Birman"],
    answer: "Siamois",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom de l'animal domestique souvent utilisé pour sa capacité à détecter les tremblements de terre imminents ?",
    options: ["Chat", "Chien", "Poisson", "Pigeon"],
    answer: "Chat",
  },
  {
    numéro: "18/20",
    question: "Quelle est la race de chien domestique originaire d'Australie, connue pour sa queue frisée et son intelligence élevée ?",
    options: ["Border Collie", "Australian Shepherd", "Cattle Dog", "Dingo"],
    answer: "Australian Shepherd",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom de l'animal domestique souvent élevé pour sa viande et sa laine ?",
    options: ["Vache", "Poule", "Mouton", "Cochon"],
    answer: "Mouton",
  },
  {
    numéro: "20/20",
    question: "Quelle est la race de chat domestique originaire de Birmanie, caractérisée par ses pattes blanches et ses grands yeux bleus ?",
    options: ["Birman", "Persan", "Norvégien", "Sibérien"],
    answer: "Birman",
  },
];


const questionsEcosystemesHabitats = [
  {
    numéro: "1/20",
    question: "Quel écosystème est principalement constitué d'arbres qui perdent leurs feuilles chaque automne ?",
    options: ["Forêt tropicale", "Taïga", "Forêt tempérée", "Désert"],
    answer: "Forêt tempérée",
  },
  {
    numéro: "2/20",
    question: "Dans quel type d'habitat les pingouins vivent-ils principalement ?",
    options: ["Désert", "Toundra", "Forêt tropicale", "Pôle Sud"],
    answer: "Pôle Sud",
  },
  {
    numéro: "3/20",
    question: "Quel est le principal habitat des koalas en Australie ?",
    options: ["Désert", "Forêt tropicale", "Forêt de pins", "Forêt d'eucalyptus"],
    answer: "Forêt d'eucalyptus",
  },
  {
    numéro: "4/20",
    question: "Dans quel écosystème trouve-t-on le plus grand nombre de différentes espèces de plantes et d'animaux ?",
    options: ["Toundra", "Forêt tropicale", "Désert", "Savane"],
    answer: "Forêt tropicale",
  },
  {
    numéro: "5/20",
    question: "Quel type d'écosystème est caractérisé par de longues périodes de gel et des sols gelés en permanence ?",
    options: ["Savane", "Toundra", "Forêt tempérée", "Désert"],
    answer: "Toundra",
  },
  {
    numéro: "6/20",
    question: "Dans quel écosystème habite principalement le lion ?",
    options: ["Forêt tropicale", "Désert", "Savane", "Toundra"],
    answer: "Savane",
  },
  {
    numéro: "7/20",
    question: "Quel est le principal habitat des pandas géants en Chine ?",
    options: ["Forêt d'eucalyptus", "Forêt de conifères", "Forêt de bambous", "Toundra"],
    answer: "Forêt de bambous",
  },
  {
    numéro: "8/20",
    question: "Dans quel habitat vivent les ours bruns ?",
    options: ["Banquise", "Forêt tempérée", "Désert", "Montagne"],
    answer: "Forêt tempérée",
  },
  {
    numéro: "9/20",
    question: "Quel est l'habitat principal des léopards des neiges ?",
    options: ["Banquise", "Forêt tropicale", "Montagne", "Désert"],
    answer: "Montagne",
  },
  {
    numéro: "10/20",
    question: "Quel écosystème est caractérisé par des températures extrêmement froides, des vents violents et une végétation limitée ?",
    options: ["Désert", "Taïga", "Toundra", "Forêt tropicale"],
    answer: "Toundra",
  },
  {
    numéro: "11/20",
    question: "Dans quel écosystème vivent principalement les éléphants d'Afrique ?",
    options: ["Savane", "Forêt de conifères", "Forêt tropicale", "Toundra"],
    answer: "Savane",
  },
  {
    numéro: "12/20",
    question: "Quel est l'habitat naturel des orangs-outans en Indonésie et en Malaisie ?",
    options: ["Forêt tropicale", "Désert", "Savane", "Toundra"],
    answer: "Forêt tropicale",
  },
  {
    numéro: "13/20",
    question: "Où habitent principalement les crocodiles ?",
    options: ["Rivière", "Océan", "Marais", "Désert"],
    answer: "Marais",
  },
  {
    numéro: "14/20",
    question: "Dans quel écosystème se trouvent les cactus et autres plantes adaptées à des conditions arides ?",
    options: ["Forêt tropicale", "Désert", "Savane", "Forêt tempérée"],
    answer: "Désert",
  },
  {
    numéro: "15/20",
    question: "Où trouve-t-on les iguanes ?",
    options: ["Désert", "Jungle", "Montagne", "Îles rocheuses"],
    answer: "Îles rocheuses",
  },
  {
    numéro: "16/20",
    question: "Dans quel écosystème se trouvent principalement les dauphins et les baleines ?",
    options: ["Récif corallien", "Océan profond", "Estuaire", "Banquise"],
    answer: "Océan profond",
  },
  {
    numéro: "17/20",
    question: "Quel est l'habitat principal des manchots en Antarctique ?",
    options: ["Banquise", "Forêt de bambous", "Lac", "Toundra"],
    answer: "Banquise",
  },
  {
    numéro: "18/20",
    question: "Quel est l'habitat naturel des hippopotames ?",
    options: ["Savane", "Forêt tropicale", "Désert", "Rivière et lac"],
    answer: "Rivière et lac",
  },
  {
    numéro: "19/20",
    question: "Où vivent généralement les pandas roux ?",
    options: ["Forêt tropicale", "Toundra", "Montagnes boisées", "Désert"],
    answer: "Montagnes boisées",
  },
  {
    numéro: "20/20",
    question: "Quel est l'habitat principal des chameaux dans les régions arides d'Afrique et d'Asie ?",
    options: ["Toundra", "Savane", "Désert", "Taïga"],
    answer: "Désert",
  },
];


const questionsMathematiques = [
  {
    numéro: "1/20",
    question: "Quel est le résultat de l'addition suivante : 125 + 367 ?",
    options: ["482", "492", "502", "512"],
    answer: "492",
  },
  {
    numéro: "2/20",
    question: "Résolvez l'équation suivante pour x : 3x - 7 = 14.",
    options: ["x = 5", "x = 7", "x = 9", "x = 11"],
    answer: "x = 7",
  },
  {
    numéro: "3/20",
    question: "Quel est le résultat de la multiplication : 24 × 13 ?",
    options: ["312", "324", "336", "348"],
    answer: "312",
  },
  {
    numéro: "4/20",
    question: "Quel est le quotient de la division : 144 ÷ 12 ?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    numéro: "5/20",
    question: "Simplifiez la fraction : 18/24.",
    options: ["3/4", "2/3", "3/2", "4/3"],
    answer: "3/4",
  },
  {
    numéro: "6/20",
    question: "Quel est le périmètre d'un rectangle de longueur 8 cm et de largeur 5 cm ?",
    options: ["13 cm", "26 cm", "40 cm", "56 cm"],
    answer: "26 cm",
  },
  {
    numéro: "7/20",
    question: "Quelle est la surface d'un carré dont le côté mesure 12 cm ?",
    options: ["48 cm²", "96 cm²", "144 cm²", "192 cm²"],
    answer: "144 cm²",
  },
  {
    numéro: "8/20",
    question: "Résolvez pour x : 2x + 5 = 17.",
    options: ["x = 6", "x = 7", "x = 8", "x = 9"],
    answer: "x = 6",
  },
  {
    numéro: "9/20",
    question: "Quelle est la valeur de π (pi) arrondie à deux décimales ?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: "3.14",
  },
  {
    numéro: "10/20",
    question: "Quelle est la racine carrée de 81 ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
  {
    numéro: "11/20",
    question: "Quel est le volume d'un cube dont chaque côté mesure 4 cm ?",
    options: ["16 cm³", "32 cm³", "48 cm³", "64 cm³"],
    answer: "64 cm³",
  },
  {
    numéro: "12/20",
    question: "Quel est le nombre entier suivant 34 567 ?",
    options: ["34 568", "34 569", "34 570", "34 571"],
    answer: "34 568",
  },
  {
    numéro: "13/20",
    question: "Combien de côtés a un octogone ?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    numéro: "14/20",
    question: "Quel est le résultat de l'addition suivante : 456 + 789 ?",
    options: ["1 145", "1 245", "1 345", "1 445"],
    answer: "1 245",
  },
  {
    numéro: "15/20",
    question: "Quelle est la somme des angles d'un triangle ?",
    options: ["90 degrés", "180 degrés", "270 degrés", "360 degrés"],
    answer: "180 degrés",
  },
  {
    numéro: "16/20",
    question: "Si un cercle a un rayon de 5 cm, quelle est son aire ?",
    options: ["25π cm²", "50π cm²", "75π cm²", "100π cm²"],
    answer: "25π cm²",
  },
  {
    numéro: "17/20",
    question: "Quel est le nombre premier entre 30 et 40 ?",
    options: ["31", "32", "33", "34"],
    answer: "31",
  },
  {
    numéro: "18/20",
    question: "Quelle est la différence entre 456 et 198 ?",
    options: ["238", "258", "278", "298"],
    answer: "258",
  },
  {
    numéro: "19/20",
    question: "Combien de degrés y a-t-il dans un cercle complet ?",
    options: ["180 degrés", "270 degrés", "360 degrés", "450 degrés"],
    answer: "360 degrés",
  },
  {
    numéro: "20/20",
    question: "Si un triangle a une base de 12 cm et une hauteur de 8 cm, quelle est sa surface ?",
    options: ["48 cm²", "60 cm²", "72 cm²", "84 cm²"],
    answer: "48 cm²",
  },
];


const questionsHistoire = [
  {
    numéro: "1/20",
    question: "Quel roi de France a été surnommé 'le Roi-Soleil' ?",
    options: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"],
    answer: "Louis XIV",
  },
  {
    numéro: "2/20",
    question: "Quelle bataille célèbre a eu lieu en 1066 ?",
    options: ["Bataille de Hastings", "Bataille de Poitiers", "Bataille d'Azincourt", "Bataille de Marignan"],
    answer: "Bataille de Hastings",
  },
  {
    numéro: "3/20",
    question: "Quel événement marquant de la Révolution française a eu lieu le 14 juillet 1789 ?",
    options: ["La prise de la Bastille", "L'exécution de Louis XVI", "La déclaration des droits de l'homme", "La fin de la monarchie"],
    answer: "La prise de la Bastille",
  },
  {
    numéro: "4/20",
    question: "Qui était le chef de la Résistance française pendant la Seconde Guerre mondiale ?",
    options: ["Charles de Gaulle", "Jean Moulin", "Philippe Pétain", "André Malraux"],
    answer: "Charles de Gaulle",
  },
  {
    numéro: "5/20",
    question: "Quel traité a mis fin à la Première Guerre mondiale en 1919 ?",
    options: ["Traité de Versailles", "Traité de Trianon", "Traité de Brest-Litovsk", "Traité de Saint-Germain"],
    answer: "Traité de Versailles",
  },
  {
    numéro: "6/20",
    question: "Quel empereur français a été exilé sur l'île de Sainte-Hélène ?",
    options: ["Napoléon Ier", "Louis-Napoléon", "Charles X", "Henri IV"],
    answer: "Napoléon Ier",
  },
  {
    numéro: "7/20",
    question: "En quelle année Jeanne d'Arc a-t-elle été brûlée sur le bûcher ?",
    options: ["1431", "1429", "1440", "1415"],
    answer: "1431",
  },
  {
    numéro: "8/20",
    question: "Quel roi de France a été guillotiné pendant la Révolution française ?",
    options: ["Louis XV", "Louis XVI", "Charles IX", "Henri III"],
    answer: "Louis XVI",
  },
  {
    numéro: "9/20",
    question: "Quelle célèbre bataille de la Première Guerre mondiale a eu lieu en 1916 ?",
    options: ["Bataille de Verdun", "Bataille de la Somme", "Bataille de Tannenberg", "Bataille de Gallipoli"],
    answer: "Bataille de Verdun",
  },
  {
    numéro: "10/20",
    question: "Qui était le premier président de la Cinquième République française ?",
    options: ["Charles de Gaulle", "François Mitterrand", "Georges Pompidou", "Valéry Giscard d'Estaing"],
    answer: "Charles de Gaulle",
  },
  {
    numéro: "11/20",
    question: "En quelle année a eu lieu la Révolution de Juillet, qui a renversé Charles X ?",
    options: ["1830", "1789", "1848", "1871"],
    answer: "1830",
  },
  {
    numéro: "12/20",
    question: "Quelle région française a été annexée par l'Allemagne après la guerre franco-prussienne de 1870 ?",
    options: ["Alsace-Lorraine", "Normandie", "Bretagne", "Aquitaine"],
    answer: "Alsace-Lorraine",
  },
  {
    numéro: "13/20",
    question: "Quel traité a mis fin à la guerre de Cent Ans ?",
    options: ["Traité de Paris", "Traité de Troyes", "Traité de Versailles", "Traité de Brétigny"],
    answer: "Traité de Troyes",
  },
  {
    numéro: "14/20",
    question: "Quel roi de France a signé l'Édit de Nantes en 1598, garantissant la liberté de culte aux protestants ?",
    options: ["Henri IV", "Louis XIII", "François Ier", "Charles IX"],
    answer: "Henri IV",
  },
  {
    numéro: "15/20",
    question: "Quelle bataille navale décisive a eu lieu en 1805, où Napoléon a été vaincu par l'amiral Nelson ?",
    options: ["Bataille de Trafalgar", "Bataille d'Austerlitz", "Bataille de Leipzig", "Bataille de Waterloo"],
    answer: "Bataille de Trafalgar",
  },
  {
    numéro: "16/20",
    question: "Quel roi de France a été surnommé 'le Bien-Aimé' ?",
    options: ["Louis XV", "Louis XIV", "Louis XVI", "François Ier"],
    answer: "Louis XV",
  },
  {
    numéro: "17/20",
    question: "Quel célèbre général français est devenu empereur des Français en 1804 ?",
    options: ["Napoléon Bonaparte", "Charles de Gaulle", "Jean Moulin", "Philippe Pétain"],
    answer: "Napoléon Bonaparte",
  },
  {
    numéro: "18/20",
    question: "Quelle guerre a opposé la France à la Prusse en 1870-1871 ?",
    options: ["Guerre franco-prussienne", "Guerre de Cent Ans", "Guerre des Deux Roses", "Guerre de Sept Ans"],
    answer: "Guerre franco-prussienne",
  },
  {
    numéro: "19/20",
    question: "Quel roi a fondé la dynastie des Capétiens en 987 ?",
    options: ["Hugues Capet", "Philippe Auguste", "Louis IX", "Charles Martel"],
    answer: "Hugues Capet",
  },
  {
    numéro: "20/20",
    question: "Quel traité a mis fin à la guerre de Sept Ans en 1763, marquant la perte de la Nouvelle-France pour la France ?",
    options: ["Traité de Paris", "Traité de Versailles", "Traité de Brétigny", "Traité de Troyes"],
    answer: "Traité de Paris",
  },
];


const questionsBdMangaComics = [
  {
    numéro: "1/20",
    question: "Quel est le nom du créateur de la série de bandes dessinées 'Astérix le Gaulois' ?",
    options: ["René Goscinny", "Hergé", "Albert Uderzo", "André Franquin"],
    answer: "René Goscinny",
  },
  {
    numéro: "2/20",
    question: "Quel est le nom du héros principal de la série manga 'Naruto' ?",
    options: ["Sasuke", "Naruto", "Itachi", "Kakashi"],
    answer: "Naruto",
  },
  {
    numéro: "3/20",
    question: "Quel super-héros de DC Comics est connu comme étant 'le Chevalier Noir' ?",
    options: ["Superman", "Wonder Woman", "Batman", "Flash"],
    answer: "Batman",
  },
  {
    numéro: "4/20",
    question: "Dans 'Lucky Luke', quel est le nom du cheval de Lucky Luke ?",
    options: ["Tornado", "Jolly Jumper", "Silver", "Pegasus"],
    answer: "Jolly Jumper",
  },
  {
    numéro: "5/20",
    question: "Qui est l'auteur de la série de mangas 'One Piece' ?",
    options: ["Akira Toriyama", "Eiichiro Oda", "Masashi Kishimoto", "Tite Kubo"],
    answer: "Eiichiro Oda",
  },
  {
    numéro: "6/20",
    question: "Quel super-héros de Marvel Comics est également connu sous le nom de 'Peter Parker' ?",
    options: ["Iron Man", "Hulk", "Spider-Man", "Thor"],
    answer: "Spider-Man",
  },
  {
    numéro: "7/20",
    question: "Quel personnage de bande dessinée est célèbre pour ses aventures avec son chien Milou ?",
    options: ["Astérix", "Tintin", "Lucky Luke", "Gaston Lagaffe"],
    answer: "Tintin",
  },
  {
    numéro: "8/20",
    question: "Quel est le nom du village où vivent les Schtroumpfs ?",
    options: ["Schtroumpf Village", "Schtroumpfbourg", "Schtroumpfville", "Schtroumpfheim"],
    answer: "Schtroumpf Village",
  },
  {
    numéro: "9/20",
    question: "Quel est le nom du créateur des personnages de Marvel Comics comme Spider-Man, les X-Men et Iron Man ?",
    options: ["Stan Lee", "Jack Kirby", "Steve Ditko", "Joe Simon"],
    answer: "Stan Lee",
  },
  {
    numéro: "10/20",
    question: "Quel est le nom du super-héros arachnéen dans les comics ?",
    options: ["Superman", "Batman", "Spider-Man", "Iron Man"],
    answer: "Spider-Man",
  },
  {
    numéro: "11/20",
    question: "Quel est le nom du vaisseau spatial dans la série de bandes dessinées 'Valérian et Laureline' ?",
    options: ["Millennium Falcon", "USS Enterprise", "Intruder", "Astroship"],
    answer: "Intruder",
  },
  {
    numéro: "12/20",
    question: "Dans 'Lucky Luke', quel est le nom des frères bandits récurrents ?",
    options: ["Les Frères Dalton", "Les Frères Marx", "Les Frères Coen", "Les Frères Grimm"],
    answer: "Les Frères Dalton",
  },
  {
    numéro: "13/20",
    question: "Quel héros de comics est surnommé 'l'Homme d'Acier' ?",
    options: ["Iron Man", "Captain America", "Superman", "Thor"],
    answer: "Superman",
  },
  {
    numéro: "14/20",
    question: "Quel manga suit l'histoire d'un garçon appelé Gon à la recherche de son père ?",
    options: ["Naruto", "One Piece", "Hunter x Hunter", "Bleach"],
    answer: "Hunter x Hunter",
  },
  {
    numéro: "15/20",
    question: "Dans 'One Piece', quel est le nom du capitaine de l'équipage au chapeau de paille ?",
    options: ["Zoro", "Sanji", "Luffy", "Usopp"],
    answer: "Luffy",
  },
  {
    numéro: "16/20",
    question: "Quel super-héros de Marvel Comics est aveugle mais possède des sens ultra-développés ?",
    options: ["Daredevil", "Hawkeye", "Wolverine", "Cyclope"],
    answer: "Daredevil",
  },
  {
    numéro: "17/20",
    question: "Quel est le nom du créateur du manga 'Dragon Ball' ?",
    options: ["Eiichiro Oda", "Masashi Kishimoto", "Akira Toriyama", "Tite Kubo"],
    answer: "Akira Toriyama",
  },
  {
    numéro: "18/20",
    question: "Quel personnage de bande dessinée est un cow-boy solitaire qui tire plus vite que son ombre ?",
    options: ["Tintin", "Lucky Luke", "Astérix", "Blueberry"],
    answer: "Lucky Luke",
  },
  {
    numéro: "19/20",
    question: "Quel est le nom du détective belge créé par Hergé ?",
    options: ["Tintin", "Dupont", "Milou", "Haddock"],
    answer: "Tintin",
  },
  {
    numéro: "20/20",
    question: "Quel est le nom du groupe de super-héros dans lequel on retrouve Cyclope, Wolverine et Storm ?",
    options: ["Les Vengeurs", "Les Quatre Fantastiques", "Les X-Men", "La Justice League"],
    answer: "Les X-Men",
  },
];


const questionsLangageSMS = [
  {
    numéro: "1/20",
    question: "Que signifie 'lol' dans le langage SMS ?",
    options: ["Lots of Love", "Laughing Out Loud", "Look Over Here", "Last One Left"],
    answer: "Laughing Out Loud",
  },
  {
    numéro: "2/20",
    question: "Que signifie 'Yolo' ?",
    options: ["You only live once", "You only love once", "You only look once", "You only laugh once"],
    answer: "You only live once",
  },
  {
    numéro: "3/20",
    question: "Que signifie 'asap' dans le langage SMS ?",
    options: ["As Simple As Possible", "As Soon As Possible", "As Safe As Possible", "As Short As Possible"],
    answer: "As Soon As Possible",
  },
  {
    numéro: "4/20",
    question: "Que signifie 'brb' dans le langage SMS ?",
    options: ["Be Right Back", "Bring Right Back", "Be Really Busy", "Bye Right Back"],
    answer: "Be Right Back",
  },
  {
    numéro: "5/20",
    question: "Que signifie 'svp' en français ?",
    options: ["Salut Vous Pouvez", "S'il Vous Plaît", "Sauveur Voiture Poste", "Surveillez Vos Propos"],
    answer: "S'il Vous Plaît",
  },
  {
    numéro: "6/20",
    question: "Que signifie 'omg' dans le langage SMS ?",
    options: ["Oh My Goodness", "On My Game", "Oh My God", "On My Go"],
    answer: "Oh My God",
  },
  {
    numéro: "7/20",
    question: "Que signifie 'ptdr' en français ?",
    options: ["Plié Ton Dos Rigide", "Pète Ta Drôle Réponse", "Plié De Rire", "Perdu Ton Dossier Reçu"],
    answer: "Plié De Rire",
  },
  {
    numéro: "8/20",
    question: "Que signifie 'pov' dans le langage SMS français ?",
    options: ["Pas Oublier Vite", "Pas Oui Vraiment", "Pourquoi Oui Voilà", "Point Of View"],
    answer: "Point Of View",
  },
  {
    numéro: "9/20",
    question: "Que signifie 'askip' dans le langage SMS français ?",
    options: ["À Suivre Kipling", "Assez Kiffant, Parfois", "À Ce Qu'il Paraît", "Arrête, S'il Te Plaît"],
    answer: "À Ce Qu'il Paraît",
  },
  {
    numéro: "10/20",
    question: "Que signifie 'nrv' en français ?",
    options: ["Nervous", "Nervuré", "Énervé", "Nerveux"],
    answer: "Énervé",
  },
  {
    numéro: "11/20",
    question: "Que signifie 'bff' dans le langage SMS ?",
    options: ["Best Friend Forever", "Be Funny Forever", "Best Foe Forever", "Be Fast Friend"],
    answer: "Best Friend Forever",
  },
  {
    numéro: "12/20",
    question: "Que signifie 'dsl' en français ?",
    options: ["Désolé", "Désole", "Désolé Sincèrement Loin", "Désolé Sérieusement"],
    answer: "Désolé",
  },
  {
    numéro: "13/20",
    question: "Que signifie 'thx' dans le langage SMS ?",
    options: ["Thanks", "That's Cool", "Thanks A Lot", "Thanks Anyway"],
    answer: "Thanks",
  },
  {
    numéro: "14/20",
    question: "Que signifie 'g2g' dans le langage SMS ?",
    options: ["Got To Go", "Good To Go", "Get To Go", "Got To Get"],
    answer: "Got To Go",
  },
  {
    numéro: "15/20",
    question: "Que signifie 'cpg' en français ?",
    options: ["C'est Pas Grave", "Ça Peut Gérer", "C'est Pas Génial", "Ça Peut Générer"],
    answer: "C'est Pas Grave",
  },
  {
    numéro: "16/20",
    question: "Que signifie 'tqt' en français ?",
    options: ["Tais-toi", "Trop Québécois", "T'inquiète", "Toujours Quête"],
    answer: "T'inquiète",
  },
  {
    numéro: "17/20",
    question: "Que signifie 'jtm' en français ?",
    options: ["Je Te Manque", "Je T'aime", "J'ai Trop Mangé", "Je Te Moque"],
    answer: "Je T'aime",
  },
  {
    numéro: "18/20",
    question: "Que signifie 'vdr' dans le langage SMS français ?",
    options: ["Vraiment De Rêve", "Vivre De Rien", "Vas-y De Rire", "Vraiment Drôle"],
    answer: "Vas-y De Rire",
  },
  {
    numéro: "19/20",
    question: "Que signifie 'jpp' en français ?",
    options: ["J'en Peux Plus", "Je Pense Pas", "Je Peu Pas", "Je Pense Plus"],
    answer: "J'en Peux Plus",
  },
  {
    numéro: "20/20",
    question: "Que signifie 'oklm' dans le langage SMS français ?",
    options: ["Au Calme", "Ok Le Matin", "Ouais Comme La Mer", "On Kiffe La Musique"],
    answer: "Au Calme",
  },
];

const questionsGastronomieDuMonde = [
  {
    numéro: "1/20",
    question: "Quel plat italien est composé de pâtes, fromage pecorino romano, poivre noir et eau de cuisson des pâtes ?",
    options: ["Carbonara", "Paella", "Sushi", "Ceviche"],
    answer: "Carbonara",
  },
  {
    numéro: "2/20",
    question: "Quel est l'ingrédient principal du plat mexicain 'guacamole' ?",
    options: ["Avocat", "Riz", "Haricots", "Maïs"],
    answer: "Avocat",
  },
  {
    numéro: "3/20",
    question: "Quel plat traditionnel français est composé de viande de bœuf mijotée lentement dans du vin rouge avec des légumes et des herbes ?",
    options: ["Coq au vin", "Ratatouille", "Bœuf bourguignon", "Escargots"],
    answer: "Bœuf bourguignon",
  },
  {
    numéro: "4/20",
    question: "Quel est le nom du plat japonais composé de riz vinaigré garni de poisson cru, d'œufs de poisson, de légumes et d'autres ingrédients ?",
    options: ["Sushi", "Pad thaï", "Kimchi", "Pho"],
    answer: "Sushi",
  },
  {
    numéro: "5/20",
    question: "Quelle est la spécialité de la cuisine marocaine qui consiste en un plat de couscous servi avec de la viande, des légumes et une sauce épicée ?",
    options: ["Tajine", "Couscous", "Falafel", "Hummus"],
    answer: "Couscous",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom du plat national de l'Inde, composé de poulet mariné dans du yaourt et des épices, puis cuit au four ou grillé ?",
    options: ["Tandoori", "Vindaloo", "Samosa", "Naan"],
    answer: "Tandoori",
  },
  {
    numéro: "7/20",
    question: "Quelle est la boisson nationale de la Russie, faite à partir de pommes de terre fermentées ?",
    options: ["Vodka", "Raki", "Sake", "Tequila"],
    answer: "Vodka",
  },
  {
    numéro: "8/20",
    question: "Quel est le plat traditionnel espagnol à base de riz, souvent mélangé à du poisson, des fruits de mer, du poulet et/ou de la viande, typique de la région de Valence ?",
    options: ["Paella", "Tapas", "Gazpacho", "Churros"],
    answer: "Paella",
  },
  {
    numéro: "9/20",
    question: "Quel plat mexicain traditionnel est composé de tortillas garnies de viande (souvent de bœuf), de haricots, de fromage et de salsa ?",
    options: ["Tacos", "Burritos", "Enchiladas", "Quesadillas"],
    answer: "Tacos",
  },
  {
    numéro: "10/20",
    question: "Quelle est la pâtisserie traditionnelle française composée de couches fines de pâte feuilletée, alternées avec une crème pâtissière ou une ganache ?",
    options: ["Mille-feuille", "Éclair", "Macaron", "Tarte Tatin"],
    answer: "Mille-feuille",
  },
  {
    numéro: "11/20",
    question: "Quelle est la spécialité de la cuisine chinoise, composée de pâtes longues et fines, généralement servies avec des légumes et de la viande ou des fruits de mer ?",
    options: ["Ramen", "Dim sum", "Hot pot", "Peking duck"],
    answer: "Ramen",
  },
  {
    numéro: "12/20",
    question: "Quelle est la spécialité italienne de pâtes longues et fines, souvent servies avec une sauce tomate ou une sauce à la viande ?",
    options: ["Spaghetti", "Fettuccine", "Tagliatelle", "Ravioli"],
    answer: "Spaghetti",
  },
  {
    numéro: "13/20",
    question: "Quel est le plat national du Maroc, un plat de viande ou de poisson, cuit lentement avec des légumes et des fruits secs, servi avec de la semoule de blé dur ?",
    options: ["Tajine", "Couscous", "Pastilla", "Harira"],
    answer: "Tajine",
  },
  {
    numéro: "14/20",
    question: "Quelle est la spécialité de la cuisine argentine, une pâte fourrée de viande, de fromage ou d'autres ingrédients, puis cuite au four ?",
    options: ["Empanadas", "Asado", "Milanesa", "Choripán"],
    answer: "Empanadas",
  },
  {
    numéro: "15/20",
    question: "Quelle est la spécialité de la cuisine américaine, composée de bœuf haché, de fromage, de laitue, de tomate, d'oignon et de sauce, servie dans un pain rond ?",
    options: ["Hamburger", "Hot dog", "Pulled pork", "Barbecue ribs"],
    answer: "Hamburger",
  },
  {
    numéro: "16/20",
    question: "Quelle est la spécialité de la cuisine turque, composée de fines couches de pâte et de noix, arrosée de sirop de sucre ?",
    options: ["Baklava", "Kebab", "Pide", "Manti"],
    answer: "Baklava",
  },
  {
    numéro: "17/20",
    question: "Quelle est l'origine du plat 'Chili con carne' ?",
    options: ["Mexicaine", "Texane", "Espagnole", "Italienne"],
    answer: "Texane",
  },
  {
    numéro: "18/20",
    question: "Quelle est la spécialité de la cuisine indienne, composée de poulet cuit dans une sauce au curry crémeuse et épicée ?",
    options: ["Butter chicken", "Biryani", "Tikka masala", "Vindaloo"],
    answer: "Butter chicken",
  },
  {
    numéro: "19/20",
    question: "Quel est le plat national de l'Inde, un mélange épicé de légumes cuits lentement avec des épices, souvent servi avec du riz basmati ou du pain naan ?",
    options: ["Tandoori", "Biryani", "Saag paneer", "Curry"],
    answer: "Curry",
  },
  {
    numéro: "20/20",
    question: "Quel plat italien est composé de fines tranches de veau panées et frites, souvent servies avec du citron et accompagnées de spaghetti à la sauce tomate ?",
    options: ["Pizza", "Lasagnes", "Osso buco", "Carbonara"],
    answer: "Osso buco",
  },
];


const questionsBoissonsCocktail = [
  {
    numéro: "1/20",
    question: "Quel sirop est souvent utilisé pour aromatiser les boissons chaudes comme le café et le chocolat chaud ?",
    options: ["Sirop de menthe", "Sirop de caramel", "Sirop de vanille", "Sirop d'érable"],
    answer: "Sirop de vanille",
  },
  {
    numéro: "2/20",
    question: "Quelle est la boisson emblématique de Cuba, composée de rhum, de menthe, de sucre et de soda ?",
    options: ["Margarita", "Piña colada", "Mojito", "Daiquiri"],
    answer: "Mojito",
  },
  {
    numéro: "3/20",
    question: "Quel est le cocktail à base de gin, de vermouth sec et d'olive, souvent associé à James Bond ?",
    options: ["Bloody Mary", "Martini", "Negroni", "Caipirinha"],
    answer: "Martini",
  },
  {
    numéro: "4/20",
    question: "Quelle boisson est préparée à partir de tequila, de jus de citron vert et de liqueur d'orange ?",
    options: ["Margarita", "Caipirinha", "Mai Tai", "Daiquiri"],
    answer: "Margarita",
  },
  {
    numéro: "5/20",
    question: "Quel est le cocktail à base de vodka, de jus de cranberry et de jus de citron vert ?",
    options: ["Mojito", "Cosmopolitan", "Piña colada", "Bloody Mary"],
    answer: "Cosmopolitan",
  },
  {
    numéro: "6/20",
    question: "Quel est le nom de la boisson gazeuse au citron vert et à la limette produite par The Coca-Cola Company ?",
    options: ["Badoit", "Sprite", "Seven up", "Perrier"],
    answer: "Sprite",
  },
  {
    numéro: "7/20",
    question: "Quelle boisson énergisante est populaire pour sa teneur en caféine et sa canette bleue et argentée ?",
    options: ["Monster", "Rockstar", "Red Bull", "Burn"],
    answer: "Red Bull",
  },
  {
    numéro: "8/20",
    question: "Quelle est la boisson traditionnelle mexicaine à base d'agave fermenté ?",
    options: ["Tequila sunrise", "Margarita", "Mojito", "Michelada"],
    answer: "Tequila sunrise",
  },
  {
    numéro: "9/20",
    question: "Quelle boisson alcoolisée est brassée à partir de grains d'orge fermentés et souvent servie dans des pubs ?",
    options: ["L'alccol de microbrasseries", "Lager", "Stout", "Bières"],
    answer: "Bières",
  },
  {
    numéro: "10/20",
    question: "Quelle boisson est composée de vodka, de jus de tomate, de jus de citron, de sauce Worcestershire et de sauce Tabasco ?",
    options: ["Bloody Mary", "Moscow Mule", "Screwdriver", "Long Island Iced Tea"],
    answer: "Bloody Mary",
  },
  {
    numéro: "11/20",
    question: "Quel est le cocktail à base de rhum, de jus d'ananas et de lait de coco ?",
    options: ["Piña colada", "Margarita", "Mojito", "Daiquiri"],
    answer: "Piña colada",
  },
  {
    numéro: "12/20",
    question: "Quelle boisson est préparée avec du whisky, du vermouth doux et une cerise comme garniture ?",
    options: ["Manhattan", "Old Fashioned", "Sazerac", "Whisky sour"],
    answer: "Manhattan",
  },
  {
    numéro: "13/20",
    question: "Quel cocktail est fait à partir de vodka, de jus de cranberry et d'un quartier de lime ?",
    options: ["Cosmopolitan", "Screwdriver", "Gin fizz", "Tequila sunrise"],
    answer: "Cosmopolitan",
  },
  {
    numéro: "14/20",
    question: "Quelle est la boisson traditionnelle brésilienne à base de cachaça, de sucre et de citron vert ?",
    options: ["Piña colada", "Mojito", "Daiquiri", "Caipirinha"],
    answer: "Caipirinha",
  },
  {
    numéro: "15/20",
    question: "Quelle boisson sans alcool est fabriquée à partir de feuilles, souvent sucrée et parfois aromatisée ?",
    options: ["Jus de pomme", "Soda au gingembre", "Thé glacé", "Limonade"],
    answer: "Thé glacé",
  },
  {
    numéro: "16/20",
    question: "Quelle boisson sans alcool est faite à partir de grains torréfiés ?",
    options: ["Thé glacé", "Café", "Soda au gingembre", "Eau minérale"],
    answer: "Café",
  },
  {
    numéro: "17/20",
    question: "Quelle boisson alcoolisée est fabriquée à partir de la distillation de la canne à sucre fermentée ?",
    options: ["Cachaça", "Pisco", "Rhum", "Tequila"],
    answer: "Rhum",
  },
  {
    numéro: "18/20",
    question: "Quelle boisson est composée de vin rouge, de fruits frais et de brandy ?",
    options: ["Mimosa", "Bellini", "Sangria", "Mai Tai"],
    answer: "Sangria",
  },
  {
    numéro: "19/20",
    question: "Quelle boisson rafraîchissante est composée de jus de citron vert, de feuilles de menthe, de sucre et d'eau gazeuse, sans alcool ?",
    options: ["Virgin Mojito", "Faux Caipirinha", "Mocktail Mojito", "Mint Fizz sans alcool"],
    answer: "Virgin Mojito",
  },
  {
    numéro: "20/20",
    question: "Quelle boisson est composée de vodka, de jus de tomate, de jus de citron vert et de sauce Worcestershire ?",
    options: ["Bloody Mary", "Moscow Mule", "Screwdriver", "Tequila sunrise"],
    answer: "Bloody Mary",
  },
];

const questionsAnnees80 = [
  {
    numéro: "1/20",
    question: "Quel artiste français a chanté 'Pour que tu m'aimes encore' en 1987, devenu un succès international ?",
    options: ["Jean-Jacques Goldman", "Johnny Hallyday", "Céline Dion", "Francis Cabrel"],
    answer: "Céline Dion",
  },
  {
    numéro: "2/20",
    question: "Quelle chanson de Jeanne Mas est sortie en 1985, marquant son début dans la musique pop française ?",
    options: ["En rouge et noir", "Toute première fois", "Johnny, Johnny", "Femmes d'aujourd'hui"],
    answer: "Toute première fois",
  },
  {
    numéro: "3/20",
    question: "Quel artiste a sorti l'album 'Thriller' en 1982, devenu l'album le plus vendu de tous les temps ?",
    options: ["Prince", "Michael Jackson", "Madonna", "Bruce Springsteen"],
    answer: "Michael Jackson",
  },
  {
    numéro: "4/20",
    question: "Quel groupe a sorti 'Nuit de folie' en 1988, un tube de la musique dance française ?",
    options: ["Jean-Pierre Mader", "Jean-Luc Lahaye", "Début de Soirée", "Gérard Blanc"],
    answer: "Début de Soirée",
  },
  {
    numéro: "5/20",
    question: "Quelle chanson de Mylène Farmer est sortie en 1986, marquant le début de sa carrière solo ?",
    options: ["Désenchantée", "Libertine", "Sans contrefaçon", "Maman a tort"],
    answer: "Libertine",
  },
  {
    numéro: "6/20",
    question: "Quelle chanson de Michael Jackson est sortie en 1982, marquant le début de l'ère 'Thriller' ?",
    options: ["Beat It", "Billie Jean", "Thriller", "Bad"],
    answer: "Billie Jean",
  },
  {
    numéro: "7/20",
    question: "Quel groupe a sorti la chanson 'Africa', devenue un hit mondial en 1982 ?",
    options: ["Toto", "Boston", "Journey", "Foreigner"],
    answer: "Toto",
  },
  {
    numéro: "8/20",
    question: "Quel artiste a sorti l'album 'Purple Rain' en 1984, accompagné du film du même nom ?",
    options: ["Prince", "David Bowie", "George Michael", "Elton John"],
    answer: "Prince",
  },
  {
    numéro: "9/20",
    question: "Quel groupe français a chanté 'Marcia Baila', une chanson devenue emblématique des années 80 ?",
    options: ["Indochine", "Les Rita Mitsouko", "Téléphone", "Trust"],
    answer: "Les Rita Mitsouko",
  },
  {
    numéro: "10/20",
    question: "Quelle chanson de Jean-Jacques Goldman est sortie en 1985, un des nombreux succès de sa carrière ?",
    options: ["Quand la musique est bonne", "Au bout de mes rêves", "Je te promets", "Envole-moi"],
    answer: "Quand la musique est bonne",
  },
  {
    numéro: "11/20",
    question: "Quelle chanson de Madonna est devenue un tube en 1984, propulsant sa carrière musicale ?",
    options: ["Like a Virgin", "Material Girl", "Into the Groove", "Papa Don't Preach"],
    answer: "Like a Virgin",
  },
  {
    numéro: "12/20",
    question: "Quelle chanson de Michel Berger a été popularisée en 1980, issue de la comédie musicale 'Starmania' ?",
    options: ["Chanter pour ceux qui sont loin de chez eux", "Quelque chose de Tennessee", "La groupie du pianiste", "Les uns contre les autres"],
    answer: "La groupie du pianiste",
  },
  {
    numéro: "13/20",
    question: "Quelle chanteuse a sorti 'Girls Just Want to Have Fun' en 1983, un hymne des années 80 ?",
    options: ["Cyndi Lauper", "Madonna", "Whitney Houston", "Tina Turner"],
    answer: "Cyndi Lauper",
  },
  {
    numéro: "14/20",
    question: "Quelle chanson de Jeanne Mas est sortie en 1985, marquant son début dans la musique pop française ?",
    options: ["En rouge et noir", "Toute première fois", "Johnny, Johnny", "Femmes d'aujourd'hui"],
    answer: "Toute première fois",
  },
  {
    numéro: "15/20",
    question: "Quelle chanson du groupe U2 est sortie en 1987, devenant l'une de leurs plus grandes réussites ?",
    options: ["Sunday Bloody Sunday", "With or Without You", "Pride (In the Name of Love)", "Where the Streets Have No Name"],
    answer: "With or Without You",
  },
  {
    numéro: "16/20",
    question: "Quel artiste français est connu pour la chanson 'Papa chanteur' sortie en 1982 ?",
    options: ["Jean-Pierre Mader", "Jean-Luc Lahaye", "Patrick Hernandez", "Gérard Blanc"],
    answer: "Jean-Luc Lahaye",
  },
  {
    numéro: "17/20",
    question: "Quelle chanson de Mylène Farmer est sortie en 1987, marquant le début de sa carrière solo ?",
    options: ["Désenchantée", "Libertine", "Sans contrefaçon", "Maman a tort"],
    answer: "Sans contrefaçon",
  },
  {
    numéro: "18/20",
    question: "Quel duo français a chanté 'Les Démons de minuit', une chanson très populaire en 1986 ?",
    options: ["Elsa et Glenn Medeiros", "Images", "Gold", "Cookie Dingler"],
    answer: "Images",
  },
  {
    numéro: "19/20",
    question: "Quel artiste français a sorti 'Joe le taxi' en 1987, une chanson qui l'a propulsé sur la scène internationale ?",
    options: ["Vanessa Paradis", "Patricia Kaas", "Lio", "Indra"],
    answer: "Vanessa Paradis",
  },
  {
    numéro: "20/20",
    question: "Quelle chanson de Daniel Balavoine est sortie en 1983, peu de temps avant sa disparition tragique ?",
    options: ["Mon fils, ma bataille", "Sauver l'amour", "L'Aziza", "Vivre ou survivre"],
    answer: "L'Aziza",
  },
];


const questionsInstruments = [
  {
    numéro: "1/20",
    question: "Quel instrument de musique est souvent associé à la musique classique indienne et se joue avec un archet ?",
    options: ["Sitar", "Tabla", "Sarod", "Violon"],
    answer: "Violon",
  },
  {
    numéro: "2/20",
    question: "Quel est l'instrument de musique à cordes pincées le plus ancien, ayant des origines datant de plus de 3 000 ans en Perse ?",
    options: ["Sitar", "Oud", "Luth", "Guitare"],
    answer: "Luth",
  },
  {
    numéro: "3/20",
    question: "À quelle famille d'instruments de musique appartient le saxophone ?",
    options: ["Cordes", "Cuivres", "Bois", "Percussions"],
    answer: "Cuivres",
  },
  {
    numéro: "4/20",
    question: "Quel instrument de percussion africain est joué avec les mains et est traditionnellement fabriqué à partir d'un tronc d'arbre creusé et d'une peau de chèvre tendue ?",
    options: ["Bongo", "Conga", "Djembé", "Timbales"],
    answer: "Djembé",
  },
  {
    numéro: "5/20",
    question: "Quel instrument a popularisé Jimi Hendrix, connu pour ses performances électriques et sa virtuosité ?",
    options: ["Basse", "Batterie", "Guitare électrique", "Clarinette"],
    answer: "Guitare électrique",
  },
  {
    numéro: "6/20",
    question: "Quel instrument à vent est souvent utilisé dans les fanfares et est connu pour sa forme incurvée distinctive ?",
    options: ["Saxophone", "Trompette", "Cor d'harmonie", "Tuba"],
    answer: "Tuba",
  },
  {
    numéro: "7/20",
    question: "Quel instrument à vent utilise un embout buccal et des clés pour produire des sons ?",
    options: ["Trompette", "Saxophone", "Flûte traversière", "Clarinette"],
    answer: "Clarinette",
  },
  {
    numéro: "8/20",
    question: "Quel instrument à cordes pincées est originaire d'Hawaï et est souvent associé à la musique de l'île ?",
    options: ["Ukulélé", "Banjo", "Mandoline", "Guitare"],
    answer: "Ukulélé",
  },
  {
    numéro: "9/20",
    question: "Quel instrument à cordes est couramment utilisé dans le bluegrass et possède quatre cordes accordées en quintes ?",
    options: ["Violoncelle", "Mandoline", "Violon", "Banjo"],
    answer: "Banjo",
  },
  {
    numéro: "10/20",
    question: "Quel instrument électronique utilise un clavier et produit des sons synthétisés ?",
    options: ["Synthétiseur", "Theremin", "Mellotron", "Orgue électrique"],
    answer: "Synthétiseur",
  },
  {
    numéro: "11/20",
    question: "Quel instrument de percussion est constitué de deux plaques métalliques qui s'entrechoquent pour produire des sons ?",
    options: ["Glockenspiel", "Cymbales", "Xylophone", "Tambourin"],
    answer: "Cymbales",
  },
  {
    numéro: "12/20",
    question: "Quel instrument à clavier a été inventé au XVIIIe siècle par Bartolomeo Cristofori à Florence, en Italie ?",
    options: ["Clavecin", "Piano", "Orgue", "Accordéon"],
    answer: "Piano",
  },
  {
    numéro: "13/20",
    question: "Quel instrument à vent utilise une anche simple et est souvent associé à la musique classique et au jazz ?",
    options: ["Flûte traversière", "Hautbois", "Clarinet", "Basson"],
    answer: "Hautbois",
  },
  {
    numéro: "14/20",
    question: "Quel instrument à cordes frottées est plus grand que le violon et plus petit que la contrebasse, souvent utilisé en musique classique pour jouer des lignes mélodiques et des parties d'accompagnement ?",
    options: ["Violoncelle", "Alto", "Contrebasse", "Violon"],
    answer: "Violoncelle",
  },
  {
    numéro: "15/20",
    question: "Quel instrument à vent est souvent associé au jazz et se joue en utilisant une anche simple ou double ?",
    options: ["Saxophone", "Trombone", "Trompette", "Cor"],
    answer: "Saxophone",
  },
  {
    numéro: "16/20",
    question: "Quel instrument à cordes est traditionnellement utilisé dans la musique flamenco et a un corps en forme de poire ?",
    options: ["Guitare", "Mandoline", "Charango", "Laúd"],
    answer: "Guitare",
  },
  {
    numéro: "17/20",
    question: "Quel instrument de percussion peut être joué en frappant avec des baguettes, en utilisant des balais ou même avec les mains ?",
    options: ["Marimba", "Tambour", "Cajón", "Batterie"],
    answer: "Batterie",
  },
  {
    numéro: "18/20",
    question: "Quel instrument à vent en bambou est populaire dans la musique traditionnelle japonaise ?",
    options: ["Shakuhachi", "Erhu", "Dizi", "Didgeridoo"],
    answer: "Shakuhachi",
  },
  {
    numéro: "19/20",
    question: "Quel instrument à vent est souvent utilisé dans les orchestres symphoniques et utilise une embouchure et des pistons ?",
    options: ["Trompette", "Tuba", "Cor d'harmonie", "Bugle"],
    answer: "Trompette",
  },
  {
    numéro: "20/20",
    question: "Quel instrument de percussion brésilien est souvent associé à la samba et est joué avec des maillets ?",
    options: ["Pandeiro", "Agogô", "Cuíca", "Surdo"],
    answer: "Surdo",
  },
];


const questionsNutritionSante = [
  {
    numéro: "1/20",
    question: "Qu'est-ce qu'un antioxydant et comment peut-il bénéficier à la santé ?",
    options: [
      "Il protège les cellules du corps contre les dommages causés par les radicaux libres.",
      "Il augmente la production de vitamine D dans le corps.",
      "Il aide à renforcer les os et les dents.",
      "Il stimule le système immunitaire."
    ],
    answer: "Il protège les cellules du corps contre les dommages causés par les radicaux libres."
  },
  {
    numéro: "2/20",
    question: "Quel est l'apport quotidien recommandé en fibres alimentaires pour un adulte moyen ?",
    options: ["5-10 grammes", "10-15 grammes", "15-25 grammes", "25-30 grammes"],
    answer: "25-30 grammes"
  },
  {
    numéro: "3/20",
    question: "Quel est l'effet bénéfique des acides gras oméga-3 sur la santé ?",
    options: [
      "Ils peuvent réduire le risque de maladies cardiaques.",
      "Ils favorisent la croissance musculaire.",
      "Ils améliorent la vision nocturne.",
      "Ils renforcent le système immunitaire."
    ],
    answer: "Ils peuvent réduire le risque de maladies cardiaques."
  },
  {
    numéro: "4/20",
    question: "Quelle vitamine est essentielle pour la santé des os et est souvent synthétisée par l'exposition au soleil ?",
    options: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine E"],
    answer: "Vitamine D"
  },
  {
    numéro: "5/20",
    question: "Quel est l'effet d'une consommation excessive de sodium sur la santé ?",
    options: [
      "Elle peut augmenter la pression artérielle.",
      "Elle peut améliorer la digestion.",
      "Elle peut favoriser la perte de poids.",
      "Elle peut augmenter le taux de cholestérol."
    ],
    answer: "Elle peut augmenter la pression artérielle."
  },
  {
    numéro: "6/20",
    question: "Quel est le principal avantage des aliments riches en probiotiques ?",
    options: [
      "Ils favorisent une digestion saine en renforçant les bonnes bactéries intestinales.",
      "Ils améliorent la qualité du sommeil.",
      "Ils réduisent le risque de maladies cardiovasculaires.",
      "Ils augmentent la capacité de concentration."
    ],
    answer: "Ils favorisent une digestion saine en renforçant les bonnes bactéries intestinales."
  },
  {
    numéro: "7/20",
    question: "Quelle est la principale source alimentaire de vitamine C ?",
    options: ["Lait", "Poisson", "Fruits et légumes", "Viande rouge"],
    answer: "Fruits et légumes"
  },
  {
    numéro: "8/20",
    question: "Qu'est-ce que l'indice glycémique d'un aliment mesure principalement ?",
    options: [
      "Sa capacité à augmenter la glycémie dans le sang après sa consommation.",
      "Son contenu en protéines par portion.",
      "Sa teneur en graisses saturées.",
      "Son effet sur le métabolisme des lipides."
    ],
    answer: "Sa capacité à augmenter la glycémie dans le sang après sa consommation."
  },
  {
    numéro: "9/20",
    question: "Quel est l'effet bénéfique des flavonoïdes présents dans certains aliments ?",
    options: [
      "Ils ont des propriétés antioxydantes et anti-inflammatoires.",
      "Ils augmentent la teneur en fibres des aliments.",
      "Ils renforcent les os et les dents.",
      "Ils améliorent la fonction cognitive."
    ],
    answer: "Ils ont des propriétés antioxydantes et anti-inflammatoires."
  },
  {
    numéro: "10/20",
    question: "Quel nutriment est essentiel pour maintenir une bonne santé cardiovasculaire et est abondant dans les poissons gras comme le saumon et le maquereau ?",
    options: ["Fer", "Calcium", "Vitamine B12", "Acides gras oméga-3"],
    answer: "Acides gras oméga-3"
  },
  {
    numéro: "11/20",
    question: "Quelle est la principale différence entre les graisses saturées et les graisses insaturées en termes d'impact sur la santé ?",
    options: [
      "Les graisses saturées peuvent augmenter le taux de cholestérol LDL, tandis que les graisses insaturées peuvent le réduire.",
      "Les graisses saturées sont plus efficaces pour augmenter l'énergie, tandis que les graisses insaturées sont mieux pour la régulation du sommeil.",
      "Les graisses saturées sont meilleures pour la digestion, tandis que les graisses insaturées sont plus nutritives.",
      "Les graisses saturées sont plus adaptées à la construction musculaire, tandis que les graisses insaturées sont meilleures pour la récupération après l'exercice."
    ],
    answer: "Les graisses saturées peuvent augmenter le taux de cholestérol LDL, tandis que les graisses insaturées peuvent le réduire."
  },
  {
    numéro: "12/20",
    question: "Quel est l'importance de la vitamine B12 pour le corps humain ?",
    options: [
      "Elle est essentielle pour la production de globules rouges et le bon fonctionnement du système nerveux.",
      "Elle aide à prévenir les maladies infectieuses.",
      "Elle améliore la mémoire et la concentration.",
      "Elle aide à réguler le métabolisme des lipides."
    ],
    answer: "Elle est essentielle pour la production de globules rouges et le bon fonctionnement du système nerveux."
  },
  {
    numéro: "13/20",
    question: "Quel est l'effet bénéfique des fibres alimentaires sur la santé digestive ?",
    options: [
      "Elles favorisent le transit intestinal en augmentant le volume des selles.",
      "Elles augmentent l'absorption des nutriments dans le tractus gastro-intestinal.",
      "Elles réduisent la production d'enzymes digestives.",
      "Elles améliorent l'hydratation du côlon."
    ],
    answer: "Elles favorisent le transit intestinal en augmentant le volume des selles."
  },
  {
    numéro: "14/20",
    question: "Quel est l'effet d'une consommation excessive de sucre sur la santé ?",
    options: [
      "Elle peut contribuer à l'obésité et à l'augmentation du risque de diabète de type 2.",
      "Elle améliore la concentration et la mémoire à court terme.",
      "Elle renforce le système immunitaire.",
      "Elle favorise la régulation de l'humeur."
    ],
    answer: "Elle peut contribuer à l'obésité et à l'augmentation du risque de diabète de type 2."
  },
  {
    numéro: "15/20",
    question: "Quel est l'effet bénéfique des acides aminés essentiels sur la santé ?",
    options: [
      "Ils favorisent la croissance musculaire et la réparation des tissus.",
      "Ils augmentent la résistance aux infections virales.",
      "Ils améliorent l'absorption des minéraux essentiels.",
      "Ils aident à réguler la pression artérielle."
    ],
    answer: "Ils favorisent la croissance musculaire et la réparation des tissus."
  },
  {
    numéro: "16/20",
    question: "Quel est l'importance des minéraux comme le calcium et le magnésium pour la santé des os ?",
    options: [
      "Ils renforcent les dents et les gencives.",
      "Ils améliorent la digestion des protéines.",
      "Ils favorisent la coagulation sanguine.",
      "Ils contribuent à maintenir la densité osseuse et à prévenir l'ostéoporose."
    ],
    answer: "Ils contribuent à maintenir la densité osseuse et à prévenir l'ostéoporose."
  },
  {
    numéro: "17/20",
    question: "Quel est l'effet bénéfique des légumes verts comme les épinards et le brocoli sur la santé ?",
    options: [
      "Ils sont riches en antioxydants et en vitamines, aidant ainsi à prévenir les maladies chroniques.",
      "Ils augmentent le taux de cholestérol HDL (bon cholestérol).",
      "Ils favorisent la synthèse des protéines musculaires.",
      "Ils améliorent la mémoire à long terme."
    ],
    answer: "Ils sont riches en antioxydants et en vitamines, aidant ainsi à prévenir les maladies chroniques."
  },
  {
    numéro: "18/20",
    question: "Quel est l'effet bénéfique des aliments riches en vitamine A, comme les carottes et les patates douces, sur la santé ?",
    options: [
      "Ils améliorent la vision nocturne et la santé des yeux.",
      "Ils favorisent la croissance des cheveux et des ongles.",
      "Ils augmentent la production de collagène dans la peau.",
      "Ils réduisent les risques de maladies cardiaques."
    ],
    answer: "Ils améliorent la vision nocturne et la santé des yeux."
  },
  {
    numéro: "19/20",
    question: "Qu'est-ce que l'indice de masse corporelle (IMC) mesure principalement ?",
    options: [
      "Le rapport entre le poids et la taille d'une personne.",
      "La force musculaire et l'endurance.",
      "La capacité respiratoire et la santé pulmonaire.",
      "Le taux de cholestérol et de lipides dans le sang."
    ],
    answer: "Le rapport entre le poids et la taille d'une personne."
  },
  {
    numéro: "20/20",
    question: "Quel est l'effet bénéfique des fruits rouges comme les fraises et les framboises sur la santé ?",
    options: [
      "Ils sont riches en antioxydants qui peuvent aider à protéger contre les maladies cardiaques et le cancer.",
      "Ils augmentent la production d'insuline dans le pancréas.",
      "Ils stimulent le métabolisme des graisses dans le foie.",
      "Ils favorisent la rétention d'eau dans le corps."
    ],
    answer: "Ils sont riches en antioxydants qui peuvent aider à protéger contre les maladies cardiaques et le cancer."
  }
];


const questionsMarquesLogos = [
  {
    numéro: "1/20",
    question: "Quelle marque de voiture utilise le logo de trois losanges entrelacés ?",
    image: "../assets/img/marque_renault.jpg", 
    options: ["Renault", "Peugeot", "Citroën", "Ford"],
    answer: "Renault"
  },
  {
    numéro: "2/20",
    question: "Quelle marque utilise le logo d'une pomme croquée ?",
    image: "../assets/img/marque_apple.png", 
    options: ["Microsoft", "Apple", "Samsung", "Google"],
    answer: "Apple"
  },
  {
    numéro: "3/20",
    question: "Quelle marque utilise le logo d'un swoosh (virgule) ?",
    image: "../assets/img/marque_nike.jpg", 
    options: ["Adidas", "Nike", "Puma", "Reebok"],
    answer: "Nike"
  },
  {
    numéro: "4/20",
    question: "Quelle marque utilise le logo d'un lion rugissant ?",
    image: "../assets/img/marque_peugeot.png", 
    options: ["Lacoste", "Peugeot", "Ferrari", "Jaguar"],
    answer: "Peugeot"
  },
  {
    numéro: "5/20",
    question: "Quelle marque utilise le logo d'un M jaune sur fond vert ?",
    image: "../assets/img/marque_mcdonalds.png", 
    options: ["McDonald's", "Burger King", "KFC", "Subway"],
    answer: "McDonald's"
  },
  {
    numéro: "6/20",
    question: "Quelle marque utilise le logo d'une étoile à trois branches ?",
    image: "../assets/img/marque_mercedes.jpg", 
    options: ["Mercedes-Benz", "BMW", "Audi", "Volvo"],
    answer: "Mercedes-Benz"
  },
  {
    numéro: "7/20",
    question: "Quelle marque utilise le logo d'un cheval cabré ?",
    image: "../assets/img/marque_ferrari.png", 
    options: ["Ferrari", "Maserati", "Lamborghini", "Bugatti"],
    answer: "Ferrari"
  },
  {
    numéro: "8/20",
    question: "Quelle marque utilise le logo d'un taureau ?",
    image: "../assets/img/marque_redbull.jpg", 
    options: ["Red Bull", "Monster Energy", "Rockstar", "5-hour Energy"],
    answer: "Red Bull"
  },
  {
    numéro: "9/20",
    question: "Quelle marque utilise le logo d'un oiseau bleu ?",
    image: "../assets/img/marque_twitter.jpg", 
    options: ["Twitter", "Facebook", "Instagram", "LinkedIn"],
    answer: "Twitter"
  },
  {
    numéro: "10/20",
    question: "Quelle marque utilise le logo d'une étoile et de trois bandes parallèles ?",
    image: "../assets/img/marque_adidas.png", 
    options: ["Nike", "Adidas", "Puma", "Reebok"],
    answer: "Adidas"
  },
  {
    numéro: "11/20",
    question: "Quelle marque utilise ce logo ?",
    image: "../assets/img/marque_reddit.jpg", 
    options: ["YouTube", "Twitch", "Reddit", "Spotify"],
    answer: "Reddit"
  },
  {
    numéro: "12/20",
    question: "Quelle marque utilise le logo d'une couronne dorée ?",
    image: "../assets/img/marque_rolex.png", 
    options: ["Rolex", "Patek Philippe", "Audemars Piguet", "Omega"],
    answer: "Rolex"
  },
  {
    numéro: "13/20",
    question: "Quelle marque utilise le logo d'un crocodile ?",
    image: "../assets/img/marque_lacoste.jpg", 
    options: ["Lacoste", "Burberry", "Ralph Lauren", "Tommy Hilfiger"],
    answer: "Lacoste"
  },
  {
    numéro: "14/20",
    question: "Quelle marque utilise ce logo ?",
    image: "../assets/img/marque_chanel.jpg", 
    options: ["Chanel", "Louis Vuitton", "Gucci", "Saint Laurent"],
    answer: "Chanel"
  },
  {
    numéro: "15/20",
    question: "Quelle marque utilise un logo représentant un tigre bondissant ?",
    image: "../assets/img/marque_frostedFlakes.jpg", 
    options: ["Kellogg's", "Frosted Flakes", "Tony the Tiger", "Cheetos"],
    answer: "Frosted Flakes"
  },
  {
    numéro: "16/20",
    question: "Quelle marque représente ce logo ?",
    image: "../assets/img/marque_playstation.JPG", 
    options: ["PlayStation", "Xbox", "Nintendo", "Sega"],
    answer: "PlayStation"
  },
  {
    numéro: "17/20",
    question: "Quelle marque utilise le logo rouge ?",
    image: "../assets/img/marque_huawei.JPG", 
    options: ["Huawei", "Ariel", "Vodafone", "Ducati"],
    answer: "Huawei"
  },
  {
    numéro: "18/20",
    question: "Quelle marque utilise un logo en forme de T ?",
    image: "../assets/img/marque_tesla.JPG", 
    options: ["Tesla", "Talbot", "Texas Instrument", "Troller"],
    answer: "Tesla"
  },
  {
    numéro: "19/20",
    question: "Quelle est cette marque ?",
    image: "../assets/img/marque_cadillac.jpg", 
    options: ["Cadillac", "Chevrolet", "Buick", "Ford"],
    answer: "Cadillac"
  },
  {
    numéro: "20/20",
    question: "À quelle marque appartient ce logo vert ?",
    image: "../assets/img/marque_crocs.jpg", 
    options: ["Crocs", "Cetelem", "Android", "Skoda"],
    answer: "Crocs"
  }
];



// Mélanger les options pour chaque thème de questions

shuffleQuestionsOptions(questionsActeursActrices);
shuffleQuestionsOptions(questionsTimBurton);
shuffleQuestionsOptions(questionsSportsMoteur);
shuffleQuestionsOptions(questionsJeuxVideo);
shuffleQuestionsOptions(questionsActivitesPleinAir);
shuffleQuestionsOptions(questionsJoueursFoot);
shuffleQuestionsOptions(questionsCodeDeLaRoute);
shuffleQuestionsOptions(questionsDrapeaux);
shuffleQuestionsOptions(questionsVraiFaux);
shuffleQuestionsOptions(questionsSpiderman);
shuffleQuestionsOptions(questionsHorreur);
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
shuffleQuestionsOptions(questionsJeuxDeSociete);
shuffleQuestionsOptions(questionsPrincessesDisney);
shuffleQuestionsOptions(questionsMusiqueFilmsDisney);
shuffleQuestionsOptions(questionsPersonnagesDisney);
shuffleQuestionsOptions(questionsBandesOriginalesFilms);
shuffleQuestionsOptions(questionsAnnees80);
shuffleQuestionsOptions(questionsInstruments);
shuffleQuestionsOptions(questionsNutritionSante);
shuffleQuestionsOptions(questionsBoissonsCocktail);
shuffleQuestionsOptions(questionsGastronomieDuMonde);
shuffleQuestionsOptions(questionsMarquesLogos);
shuffleQuestionsOptions(questionsLangageSMS);
shuffleQuestionsOptions(questionsBdMangaComics);
shuffleQuestionsOptions(questionsHistoire);
shuffleQuestionsOptions(questionsMathematiques);
shuffleQuestionsOptions(questionsEcosystemesHabitats);
shuffleQuestionsOptions(questionsAnimauxDomestiques);
shuffleQuestionsOptions(questionsPlantesBotanique);
shuffleQuestionsOptions(questionsDragonBall);
shuffleQuestionsOptions(questionsDessinsAnimesDisney);


// Éléments DOM
const premièreQuestion = questionsCultureGenerale[0];
const quizContainer = document.getElementById("quiz-container");
const themeTimBurtonBtn = document.getElementById("theme-timBurton");
const themeCodeDeLaRouteBtn = document.getElementById("theme-codeDeLaRoute");
const themeActeursActricesBtn = document.getElementById("theme-acteursActrices");
const themeActivitesPleinAirBtn = document.getElementById("theme-activitesPleinAir");
const themeJeuxVideoBtn = document.getElementById("theme-jeuxVideo");
const themeJoueursFootBtn = document.getElementById("theme-joueursFoot");
const themeHorreurBtn = document.getElementById("theme-horreur");
const themeSportsMoteurBtn = document.getElementById("theme-sportsMoteur");
const themePersonnagesDisneyBtn = document.getElementById("theme-personnagesDisney");
const themeDessinsAnimesDisneyBtn = document.getElementById("theme-dessinsAnimesDisney");
const themeMusiqueFilmsDisneyBtn = document.getElementById("theme-musiqueFilmsDisney");
const themeBandesOriginalesFilmBtn = document.getElementById("theme-bandesOriginalesFilm");
const themeAnnees80Btn = document.getElementById("theme-annees80");
const themeInstrumentsBtn = document.getElementById("theme-instruments");
const themeDragonBallBtn = document.getElementById("theme-dragonBall");
const themePlantesBotaniqueBtn = document.getElementById("theme-plantesBotanique");
const themeAnimauxDomestiquesBtn = document.getElementById("theme-animauxDomestiques");
const themeEcosystemesHabitatsBtn = document.getElementById("theme-ecosystemesHabitats");
const themeMathematiquesBtn = document.getElementById("theme-mathematiques");
const themeHistoireBtn = document.getElementById("theme-histoire");
const themeBdMangaComicsBtn = document.getElementById("theme-bdMangaComics");
const themeLangageSMSBtn = document.getElementById("theme-langageSMS");
const themeMarquesLogosBtn = document.getElementById("theme-marquesLogos");
const themeGastronomieDuMondeBtn = document.getElementById("theme-gastronomieMonde");
const themeBoissonsCocktailBtn = document.getElementById("theme-boissonsCocktail");
const themeNutritionSanteBtn = document.getElementById("theme-nutritionSante");
const themeVraiFauxBtn = document.getElementById("theme-vraiFaux");
const themeSpidermanBtn = document.getElementById("theme-spiderman");
const themeDrapeauxBtn = document.getElementById("theme-drapeaux");
const themeAnimauxBtn = document.getElementById("theme-animaux");
const themeFaitsInsolitesBtn = document.getElementById("theme-faitsInsolites");
const themeCinemaBtn = document.getElementById("theme-cinema");
const themeCultureBtn = document.getElementById("theme-culture");
const themeChansonsBtn = document.getElementById("theme-chansons");
const themeDessinsBtn = document.getElementById("theme-dessins");
const themeSeriesBtn = document.getElementById("theme-series");
const themeCuisineBtn = document.getElementById("theme-cuisine");
const themeHarryBtn = document.getElementById("theme-harry");
const themeJeuxDeSocieteBtn = document.getElementById("theme-jeuxDeSociete");
const themeGeographieBtn = document.getElementById("theme-geographie");
const themeOrthographeBtn = document.getElementById("theme-orthographe");
const themePrincessesDisneyBtn = document.getElementById("theme-princessesDisney");
const themeSportBtn = document.getElementById("theme-sport");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const finishButton = document.getElementById("finish-btn");

// Variables du quiz
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedTheme = "";

// Cacher le conteneur de quiz et le résultat au début
quizContainer.classList.add("hidden");
resultContainer.classList.add("hidden");

// Afficher tous les boutons de thème
const themeButtons = document.querySelectorAll(".container.grid button");
themeButtons.forEach((button) => button.classList.remove("hidden"));

// Fonction pour récupérer le thème sélectionné
function getSelectedTheme() {
  return selectedTheme;
}



// Écouter le clic sur les boutons de thème et démarrer le quiz correspondant

themePersonnagesDisneyBtn.addEventListener("click", () => {
  selectedTheme = "Personnages Disney";
  startQuiz(questionsPersonnagesDisney);
});

themeMusiqueFilmsDisneyBtn.addEventListener("click", () => {
  selectedTheme = "Musique de flms Disney";
  startQuiz(questionsMusiqueFilmsDisney);
});

themeBandesOriginalesFilmBtn.addEventListener("click", () => {
  selectedTheme = "Bandes originales de films";
  startQuiz(questionsBandesOriginalesFilms);
});

themeAnnees80Btn.addEventListener("click", () => {
  selectedTheme = "Années 80";
  startQuiz(questionsAnnees80);
});

themeInstrumentsBtn.addEventListener("click", () => {
  selectedTheme = "Instruments de musique";
  startQuiz(questionsInstruments);
});

themeDragonBallBtn.addEventListener("click", () => {
  selectedTheme = "Dragon Ball";
  startQuiz(questionsDragonBall);
});

themePlantesBotaniqueBtn.addEventListener("click", () => {
  selectedTheme = "Plantes et Botanique";
  startQuiz(questionsPlantesBotanique);
});

themeAnimauxDomestiquesBtn.addEventListener("click", () => {
  selectedTheme = "Animaux domestiques";
  startQuiz(questionsAnimauxDomestiques);
});

themeEcosystemesHabitatsBtn.addEventListener("click", () => {
  selectedTheme = "Ecosystèmes et habitats";
  startQuiz(questionsEcosystemesHabitats);
});

themeMathematiquesBtn.addEventListener("click", () => {
  selectedTheme = "Mathématiques";
  startQuiz(questionsMathematiques);
});

themeHistoireBtn.addEventListener("click", () => {
  selectedTheme = "Histoire";
  startQuiz(questionsHistoire);
});

themeBdMangaComicsBtn.addEventListener("click", () => {
  selectedTheme = "BD/Manga/Comics";
  startQuiz(questionsBdMangaComics);
});

themeLangageSMSBtn.addEventListener("click", () => {
  selectedTheme = "Langages SMS";
  startQuiz(questionsLangageSMS);
});

themeMarquesLogosBtn.addEventListener("click", () => {
  selectedTheme = "Marques et Logos";
  startQuiz(questionsMarquesLogos);
});

themeGastronomieDuMondeBtn.addEventListener("click", () => {
  selectedTheme = "Gastronomie du Monde";
  startQuiz(questionsGastronomieDuMonde);
});

themeBoissonsCocktailBtn.addEventListener("click", () => {
  selectedTheme = "Boissons et Cocktails";
  startQuiz(questionsBoissonsCocktail);
});

themeNutritionSanteBtn.addEventListener("click", () => {
  selectedTheme = "Nutrition et Santé";
  startQuiz(questionsNutritionSante);
});

themeCultureBtn.addEventListener("click", () => {
  selectedTheme = "Culture générale";
  startQuiz(questionsCultureGenerale);
});

themeActeursActricesBtn.addEventListener("click", () => {
  selectedTheme = "Actrices/Acteurs";
  startQuiz(questionsActeursActrices);
});

themeJeuxDeSocieteBtn.addEventListener("click", () => {
  selectedTheme = "Jeux de société";
  startQuiz(questionsJeuxDeSociete);
});

themeSportsMoteurBtn.addEventListener("click", () => {
  selectedTheme = "Sports à moteur";
  startQuiz(questionsSportsMoteur);
});

themeActivitesPleinAirBtn.addEventListener("click", () => {
  selectedTheme = "Activités de plein air";
  startQuiz(questionsActivitesPleinAir);
});

themeTimBurtonBtn.addEventListener("click", () => {
  selectedTheme = "Tim Burton";
  startQuiz(questionsTimBurton);
});

themeJeuxVideoBtn.addEventListener("click", () => {
  selectedTheme = "Jeux Vidéo";
  startQuiz(questionsJeuxVideo);
});

themeHorreurBtn.addEventListener("click", () => {
  selectedTheme = "Films d'horreur";
  startQuiz(questionsHorreur);
});

themeJoueursFootBtn.addEventListener("click", () => {
  selectedTheme = "Joueurs de foot";
  startQuiz(questionsJoueursFoot);
});

themeVraiFauxBtn.addEventListener("click", () => {
  selectedTheme = "Vrai ou Faux ?";
  startQuiz(questionsVraiFaux);
});

themeCodeDeLaRouteBtn.addEventListener("click", () => {
  selectedTheme = "Code de la route";
  startQuiz(questionsCodeDeLaRoute);
});

themeDrapeauxBtn.addEventListener("click", () => {
  selectedTheme = "Drapeaux";
  startQuiz(questionsDrapeaux);
});

themePrincessesDisneyBtn.addEventListener("click", () => {
  selectedTheme = "Princesses Disney";
  startQuiz(questionsPrincessesDisney);
});

themeDessinsAnimesDisneyBtn.addEventListener("click", () => {
  selectedTheme = "Dessins animés Disney";
  startQuiz(questionsDessinsAnimesDisney);
});

themeFaitsInsolitesBtn.addEventListener("click", () => {
  selectedTheme = "Faits insolites";
  startQuiz(questionsFaitsInsolites);
});

themeAnimauxBtn.addEventListener("click", () => {
  selectedTheme = "Animaux";
  startQuiz(questionsAnimaux);
});

themeChansonsBtn.addEventListener("click", () => {
  selectedTheme = "Chansons";
  startQuiz(questionsChansons);
});

themeDessinsBtn.addEventListener("click", () => {
  selectedTheme = "Dessins animés";
  startQuiz(questionsDessinsAnimes);
});

themeSeriesBtn.addEventListener("click", () => {
  selectedTheme = "Séries TV";
  startQuiz(questionsSeries);
});

themeCuisineBtn.addEventListener("click", () => {
  selectedTheme = "Cuisine";
  startQuiz(questionsCuisine);
});

themeHarryBtn.addEventListener("click", () => {
  selectedTheme = "Harry Potter";
  startQuiz(questionsHarry);
});

themeGeographieBtn.addEventListener("click", () => {
  selectedTheme = "Géographie";
  startQuiz(questionsGeographie);
});

themeOrthographeBtn.addEventListener("click", () => {
  selectedTheme = "Orthographe";
  startQuiz(questionsOrthographe);
});

themeSportBtn.addEventListener("click", () => {
  selectedTheme = "Tous sports";
  startQuiz(questionsSport);
});

themeCinemaBtn.addEventListener("click", () => {
  selectedTheme = "Cinéma";
  startQuiz(questionsCinema);
});

themeSpidermanBtn.addEventListener("click", () => {
  selectedTheme = "Spiderman";
  startQuiz(questionsSpiderman);
});

// Fonction pour démarrer le quiz avec les questions du thème sélectionné
function startQuiz(selectedQuestions) {
  // Réinitialiser l'état du quiz
  questions = selectedQuestions;
  if (questions.length === 0) {
    alert("Aucune question disponible pour ce thème.");
    return;
  }
  score = 0;
  currentQuestionIndex = 0;
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  nextButton.classList.add("hidden");
  showQuestion();
}

// Fonction pour initialiser le quiz
function initializeQuiz() {
  nextButton.removeEventListener("click", nextQuestion);
  nextButton.addEventListener("click", nextQuestion);
}

// Fonction pour afficher la question courante
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumberElement = document.getElementById("question-number");
  const questionTextElement = document.getElementById("question-text");
  const flagImageElement = document.getElementById("flag-image");

  // Affiche le numéro de la question
  questionNumberElement.textContent = currentQuestion.numéro;

  // Affiche le texte de la question
  questionTextElement.textContent = currentQuestion.question;

   // Défini les thèmes qui nécessitent une image
   const themesWithImages = ["Drapeaux", "Code de la route", "Joueurs de foot", "Marques et Logos"];

   // Affiche l'image si le thème sélectionné est dans les thèmes avec images
   if (themesWithImages.includes(selectedTheme)) {
     flagImageElement.src = currentQuestion.image;
     document.getElementById("image-container").style.display = "block";
   } else {
     flagImageElement.src = "";
     document.getElementById("image-container").style.display = "none";
   }
 

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.classList.add("option-btn");
    optionElement.addEventListener("click", () =>
      checkAnswer(option, currentQuestion.answer)
    );
    optionsContainer.appendChild(optionElement);
  });
}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  }
  disableOptions(selectedOption, correctAnswer); // Passer les arguments ici
  showNextButton();
}

// Fonction pour désactiver les options après avoir sélectionné une réponse
function disableOptions(selectedOption, correctAnswer) {
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (
      button.textContent === selectedOption &&
      selectedOption !== correctAnswer
    ) {
      button.classList.add("incorrect");
    }
  });
}

// Fonction pour afficher le bouton Suivant
function showNextButton() {
  nextButton.classList.remove("hidden");
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
  nextButton.classList.add("hidden");
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
}

// Fonction pour afficher le score final et le bouton "Terminer"
function showResult() {
  resultContainer.classList.remove("hidden");

  const scoreTitle = document.createElement("h2");
  scoreTitle.textContent = "Votre Score";
  resultContainer.appendChild(scoreTitle);

  scoreText.textContent = `Vous avez marqué ${score} sur ${questions.length}`;
  document.getElementById("score-input").value = score;
  resultContainer.appendChild(scoreText);

  finishButton.classList.remove("hidden");
}

// Ajouter l'écouteur d'événements pour le bouton "Terminer" une seule fois
finishButton.addEventListener("click", () => {
  const theme = getSelectedTheme(); // Obtenir le thème sélectionné
  document.getElementById("theme-input").value = theme;

  // Créer l'objet de données à envoyer
  const formData = new FormData(document.getElementById("score-form"));

  // Envoyer les données avec fetch
  fetch("/controllers/controller-home.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Score enregistré avec succès!");
      } else {
        alert("Erreur lors de l'enregistrement du score.");
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Erreur lors de l'enregistrement du score.");
    })
    .finally(() => {
      // Recharger la page après l'enregistrement du score
      window.location.reload();
    });

  resultContainer.classList.add("hidden");
  quizContainer.classList.add("hidden");
});

// Initialiser le quiz au chargement de la page
initializeQuiz();
