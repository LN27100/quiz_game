<?php
// Vérifie si une session est déjà démarrée
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

require_once '../config.php';
require_once '../Models/login.php';
require_once '../Models/results.php';

// Récupère le pseudo et l'ID de l'utilisateur
$pseudo = $_SESSION['user']['player_pseudo'] ?? "cher joueur";
$playerId = $_SESSION['user']['player_id'] ?? null;
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz Game</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="/style.css" />
</head>

<body style="padding-top: 56px;">

  <header>
    <nav class="navbar navbar-dark fixed-top">
      <div class="container-fluid">
        <!-- Bouton pour afficher le menu sur les appareils mobiles -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/controllers/controller-home.php">Accueil</a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="../controllers/controller-signin.php">Connexion</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profil
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="../controllers/controller-profil.php">Mon Profil</a></li>
                <li><a class="dropdown-item" href="#">Mes Résultats</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="../controllers/controller-signout.php">Déconnexion</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="container">
    <h1>Quiz Game</h1>
  </div>

  <div class="container4">
    <?php echo "<h3>Bienvenue $pseudo</h3>"; ?>
  </div>

  <!-- Conteneurs pour le quiz et les boutons -->
  <div id="quiz-container" class="hidden">
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
    <button id="theme-culture" data-playerid="<?php echo $player_id; ?>">Thème Culture générale</button>
    <button id="theme-chansons" data-playerid="<?php echo $player_id; ?>">Thème Chansons</button>
    <button id="theme-dessins" data-playerid="<?php echo $player_id; ?>">Thème Dessins animés</button>
    <button id="theme-harry" data-playerid="<?php echo $player_id; ?>">Thème Harry Potter</button>
    <button id="theme-cuisine" data-playerid="<?php echo $player_id; ?>">Thème Cuisine</button>
    <button id="theme-series" data-playerid="<?php echo $player_id; ?>">Thème Séries TV </button>
    <button id="theme-geographie" data-playerid="<?php echo $player_id; ?>">Thème Géographie </button>
    <button id="theme-orthographe" data-playerid="<?php echo $player_id; ?>">Thème Orthographe </button>
    <button id="theme-sport" data-playerid="<?php echo $player_id; ?>">Thème Sport </button>

  </div>


  <!-- Charger le fichier JavaScript -->
  <script src="../quiz.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>