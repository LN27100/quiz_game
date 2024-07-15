<?php
// Vérifie si une session est déjà démarrée
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

// Vérifie si l'utilisateur est connecté
$estConnecte = isset($_SESSION['user']);

require_once '../config.php';
require_once '../Models/login.php';
require_once '../Models/Scores.php';

// Définissez le chemin complet de l'image par défaut si nécessaire
$default_img = "avatarDefault.jpg";
$upload_dir = "../assets/uploads/";

// Utilisez l'image par défaut si aucune image n'est définie
if (isset($_SESSION['user']['player_photo']) && !empty($_SESSION['user']['player_photo'])) {
    $img = $_SESSION['user']['player_photo'];
} else {
    $img = $default_img;
}

$img_path = $upload_dir . $img;
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz Game</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/style.css" />
</head>

<body style="padding-top: 56px;">

  <?php
  // Vérifie si l'utilisateur est connecté
  if (!$estConnecte) {
    // Affiche l'alerte si l'utilisateur n'est pas connecté
    echo '<div class="custom-alert" id="alertBox">
          Vous pouvez jouer sans vous inscrire ou inscrivez-vous, connectez-vous et enregistrez vos scores !
          <br>
          <button class="ok-btn" id="okBtn">OK</button>
        </div>';
  }
  ?>

  <header>

  <nav class="navbar navbar-dark fixed-top navbar-expand-md">
      <div class="container-fluid">
        <!-- Menu burger visible uniquement sur les écrans de taille md ou plus petite -->
        <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu classique visible uniquement sur les écrans de taille md ou plus grande -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/controllers/controller-home.php">Accueil</a>
            </li>
          </ul>

          <ul class="navbar-nav">
          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <?php echo $estConnecte ? $pseudo : 'Connexion/Inscription'; ?>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <?php if ($estConnecte) : ?>
                  <li><a class="dropdown-item" href="../controllers/controller-profil.php">Mon Profil</a></li>
                  <li><a class="dropdown-item" href="../controllers/controller-results.php">Mes Résultats</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../controllers/controller-signout.php">Déconnexion</a></li>
                <?php else : ?>
                  <li><a class="dropdown-item" href="../controllers/controller-signin.php">Connexion</a></li>
                <?php endif; ?>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

  <div class="container">
    <h1>Quiz Game</h1>
    <?php echo "<h3>Bienvenue $pseudo</h3>"; ?>
    <div class="container4">
    <img src="<?= $img_path ?>" alt="photo de profil" class="profile-image">
    </div>
  </div>


 <!-- Conteneurs pour le quiz et les boutons -->
<div id="quiz-container" class="hidden">
<span id="question-number"></span>
  <div id="question-text"></div>
  <div id="image-container">
    <img id="flag-image" src="" alt="Drapeau">
  </div>
  <div id="options-container"></div>
  <button id="next-btn" class="hidden">Suivant</button>
  <div id="result-container" class="hidden">
    <p id="score"></p>
    <button id="finish-btn" class="button3">Terminer</button>
  </div>
</div>

<h4>Catégorie Audiovisuelle</h4>
<div class="container grid">
  <button id="theme-dessins" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Dessins animés</button>
  <button id="theme-series" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Séries TV</button>
  <button id="theme-cinema" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Cinéma</button>
  <button id="theme-horreur" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Films d'horreur</button>
  <button id="theme-acteursActrices" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Actrices/Acteurs</button>
  <button id="theme-animes" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Animes</button>
  <button id="theme-comedies" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Comédies</button>
  <button id="theme-telerealite" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Téléréalité</button>
</div>

<h4>Catégorie Sport et loisirs</h4>
<div class="container grid">
  <button id="theme-sport" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Tous sports</button>
  <button id="theme-joueursFoot" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Joueurs de foot</button>
  <button id="theme-jeuxVideo" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Jeux Vidéo</button>
  <button id="theme-activitesPleinAir" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Activités de plein air</button>
  <button id="theme-jeuxDeSociete" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Jeux de société</button>
  <button id="theme-sportsMoteur" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Sports à moteur</button>
  <button id="theme-tennis" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Tennis</button>
  <button id="theme-bricolage" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Bricolage</button>
</div>

<h4>Catégorie Disney</h4>
<div class="container grid">
  <button id="theme-princessesDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Princesses Disney</button>
  <button id="theme-personnagesDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Personnages Disney</button>
  <button id="theme-dessinsAnimesDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Dessins animés Disney</button>
  <button id="theme-musiqueFilmsDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Musique de films Disney</button>
  <button id="theme-mechantsDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Méchants Disney</button>
  <button id="theme-parcDisneyland" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Parc Disneyland Paris</button>
  <button id="theme-animauxDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Animaux Disney</button>
  <button id="theme-filmsPixar" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Films Pixar</button>
</div>

<h4>Catégorie Musicale</h4>
<div class="container grid">
  <button id="theme-chansons" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Chansons</button>
  <button id="theme-bandesOriginalesFilm" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Bandes originales de films</button>
  <button id="theme-annees80" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Années 80</button>
  <button id="theme-instruments" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Instruments de musique</button>
  <button id="theme-popRock" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Pop-Rock</button>
  <button id="theme-instrumentsCordes" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Instruments à cordes</button>
  <button id="theme-starChanson" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Star de la chanson</button>
  <button id="theme-festivalsMusique" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Festivals de musique</button>
</div>

<h4>Catégorie Personnalités et Super-Héros</h4>
<div class="container grid">
  <button id="theme-harry" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Harry Potter</button>
  <button id="theme-spiderman" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Spiderman</button>
  <button id="theme-timBurton" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Tim Burton</button>
  <button id="theme-dragonBall" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Dragon Ball</button>
  <button id="theme-marvel" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Marvel</button>
  <button id="theme-superVilains" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Super-Vilains</button>
  <button id="theme-personnalitesMondiales" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Personnalités mondiales</button>
  <button id="theme-superman" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Superman</button>

</div>

<h4>Catégorie Nature et Animaux</h4>
<div class="container grid">
<button id="theme-animaux" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Animaux en général</button>
<button id="theme-plantesBotanique" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Plantes et Botanique</button>
<button id="theme-animauxDomestiques" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Animaux domestiques</button>
<button id="theme-ecosystemesHabitats" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Ecosystèmes et habitats</button>
<button id="theme-merOceans" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Mers et Océans</button>
<button id="theme-insectes" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Insectes</button>
<button id="theme-animauxDeLaFerme" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Animaux de la ferme</button>
<button id="theme-especesAnimales" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Espèces animales</button>

</div>

<h4>Catégorie Scolaire</h4>
<div class="container grid">
<button id="theme-geographie" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Géographie</button>
<button id="theme-orthographe" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Orthographe</button>
<button id="theme-drapeaux" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Drapeaux</button>
<button id="theme-mathematiques" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Mathématiques</button>
<button id="theme-histoire" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Histoire</button>
<button id="theme-sciences" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Sciences</button>
<button id="theme-litterature" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Littérature</button>
<button id="theme-anglais" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Anglais</button>
</div>

<h4>Catégorie Culture et Médias</h4>
  <div class="container grid">
    <button id="theme-culture" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Culture générale</button>
    <button id="theme-faitsInsolites" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Faits insolites</button>
    <button id="theme-vraiFaux" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Vrai ou Faux ?</button>
    <button id="theme-codeDeLaRoute" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Code de la route</button>
    <button id="theme-bdMangaComics" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> BD/Manga/Comics</button>
    <button id="theme-langageSMS" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Langages SMS</button>
    <button id="theme-marquesLogos" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Marques et Logos</button>
    <button id="theme-cinema" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Cinéma</button>
  </div>

  <h4>Catégorie Alimentation</h4>
  <div class="container grid">
  <button id="theme-cuisine" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Cuisine en général</button>
  <button id="theme-gastronomieMonde" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Gastronomie du Monde</button>
  <button id="theme-boissonsCocktail" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Boissons et Cocktails</button>
  <button id="theme-nutritionSante" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Nutrition et Santé</button>
  <button id="theme-desserts" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Desserts</button>
  <button id="theme-fromages" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Fromages</button>
  <button id="theme-fruitsLegumes" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Fruits et Légumes</button>  
  <button id="theme-viennoiseriesPatisseries" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème <br> Viennoiseries et Pâtisseries</button>
</div>


   <!-- Formulaire pour enregistrer le score -->
   <form id="score-form" style="display: none;">
      <input type="hidden" id="score-input" name="score">
      <input type="hidden" id="player-pseudo-input" name="player_pseudo" value="<?php echo $pseudo; ?>">
      <input type="hidden" id="theme-input" name="theme">
    </form>

  <script>
    // Fermer le menu burger en cliquant en dehors de celui-ci
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('navbarNavDropdown');
      const menuButton = document.querySelector('.navbar-toggler');

      // Si le clic n'est pas sur le menu ou son bouton toggle
      if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('show'); // Ferme le menu
      }
    });

    // alerte
    window.onload = function() {
      document.getElementById('alertBox').style.display = 'block';
    };

    document.getElementById('okBtn').onclick = function() {
      document.getElementById('alertBox').style.display = 'none';
    };
  </script>


  <!-- Charger le fichier JavaScript -->
  <script src="../assets/quiz.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>