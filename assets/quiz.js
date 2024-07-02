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
    question: "Quel acteur a remporté l'Oscar du meilleur acteur pour son rôle dans 'The Revenant' ?",
    options: ["Tom Hardy", "Leonardo DiCaprio", "Matt Damon", "Michael Fassbender"],
    answer: "Leonardo DiCaprio",
  },
  {
    numéro: "6/20",
    question: "Quelle actrice a joué le rôle principal dans le film 'La La Land' ?",
    options: ["Emma Stone", "Amy Adams", "Jessica Chastain", "Anne Hathaway"],
    answer: "Emma Stone",
  },
  {
    numéro: "7/20",
    question: "Quel acteur est connu pour son rôle de Neo dans la trilogie 'Matrix' ?",
    options: ["Brad Pitt", "Keanu Reeves", "Tom Cruise", "Will Smith"],
    answer: "Keanu Reeves",
  },
  {
    numéro: "8/20",
    question: "Quelle actrice a joué le rôle de Lara Croft dans 'Tomb Raider' (2018) ?",
    options: ["Angelina Jolie", "Alicia Vikander", "Scarlett Johansson", "Charlize Theron"],
    answer: "Alicia Vikander",
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
    question: "Quel acteur a joué le rôle de Joker dans le film 'The Dark Knight' ?",
    options: ["Joaquin Phoenix", "Jared Leto", "Jack Nicholson", "Heath Ledger"],
    answer: "Heath Ledger",
  },
  {
    numéro: "12/20",
    question: "Quelle actrice a incarné Mary Poppins dans le film 'Mary Poppins Returns' ?",
    options: ["Emily Blunt", "Anne Hathaway", "Amy Adams", "Rachel McAdams"],
    answer: "Emily Blunt",
  },
  {
    numéro: "13/20",
    question: "Quel acteur a interprété le rôle de James Bond dans 'Casino Royale' ?",
    options: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"],
    answer: "Daniel Craig",
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




// Mélanger les options pour chaque thème de questions

shuffleQuestionsOptions(questionsActeursActrices);
shuffleQuestionsOptions(questionsTimBurton);
shuffleQuestionsOptions(questionsJeuxVideo);
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
shuffleQuestionsOptions(questionsPrincessesDisney);

// Éléments DOM
const premièreQuestion = questionsCultureGenerale[0];
const quizContainer = document.getElementById("quiz-container");
const themeTimBurtonBtn = document.getElementById("theme-timBurton");
const themeCodeDeLaRouteBtn = document.getElementById("theme-codeDeLaRoute");
const themeActeursActricesBtn = document.getElementById("theme-acteursActrices");
const themeJeuxVideoBtn = document.getElementById("theme-jeuxVideo");
const themeJoueursFootBtn = document.getElementById("theme-joueursFoot");
const themeHorreurBtn = document.getElementById("theme-horreur");
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
themeCultureBtn.addEventListener("click", () => {
  selectedTheme = "Culture générale";
  startQuiz(questionsCultureGenerale);
});

themeActeursActricesBtn.addEventListener("click", () => {
  selectedTheme = "Actrices/Acteurs";
  startQuiz(questionsActeursActrices);
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
   const themesWithImages = ["Drapeaux", "Code de la route", "Joueurs de foot"];

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
