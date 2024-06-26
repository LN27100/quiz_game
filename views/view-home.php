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
    <div id="options-container"></div>
    <button id="next-btn" class="hidden">Suivant</button>
    <div id="result-container" class="hidden">
      <p id="score"></p>
      <button id="finish-btn" class="button3">Terminer</button>
    </div>
  </div>

  <div class="container grid">
    <!-- boutons de thème -->
    <button id="theme-culture" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Culture générale</button>
    <button id="theme-chansons" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Chansons</button>
    <button id="theme-dessins" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Dessins animés</button>
    <button id="theme-harry" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Harry Potter</button>
    <button id="theme-cuisine" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Cuisine</button>
    <button id="theme-series" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Séries TV</button>
    <button id="theme-geographie" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Géographie</button>
    <button id="theme-orthographe" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Orthographe</button>
    <button id="theme-sport" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Sport</button>
    <button id="theme-animaux" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Animaux</button>
    <button id="theme-cinema" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Cinéma</button>
    <button id="theme-faitsInsolites" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Faits insolites</button>
    <button id="theme-princessesDisney" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Princesses Disney</button>
    <button id="theme-horreur" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Films d'horreur</button>
    <button id="theme-drapeaux" class="theme-button" data-playerPseudo="<?php echo $pseudo; ?>">Thème Drapeaux</button>

    <!-- Formulaire pour enregistrer le score -->
    <form id="score-form" style="display: none;">
      <input type="hidden" id="score-input" name="score">
      <input type="hidden" id="player-pseudo-input" name="player_pseudo" value="<?php echo $pseudo; ?>">
      <input type="hidden" id="theme-input" name="theme">
    </form>
  </div>

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