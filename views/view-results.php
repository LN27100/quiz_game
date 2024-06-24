<?php
// Vérifie si une session est déjà démarrée
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

require_once '../config.php';
require_once '../Models/login.php';
require_once '../Models/Scores.php';

// Récupère le pseudo et l'ID de l'utilisateur
$pseudo = $_SESSION['user']['player_pseudo'] ?? "cher joueur";
$playerId = $_SESSION['user']['player_id'] ?? null;

// Récupère les scores passés par le contrôleur
$scores = $scores ?? [];
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
        <!-- Menu burger -->
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
  <h2>Résultats de <?php echo htmlspecialchars($pseudo); ?></h2>

  <?php if (count($scoresByTheme) > 0): ?>
    <?php foreach ($scoresByTheme as $theme => $scores): ?>
      <h3><?php echo htmlspecialchars($theme); ?></h3>
      <table class="table">
        <thead>
          <tr>
            <th>Thème</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($scores as $score): ?>
            <tr>
              <td><?php echo htmlspecialchars($score['theme']); ?></td>
              <td><?php echo htmlspecialchars($score['score']); ?></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php endforeach; ?>
  <?php else: ?>
    <p>Aucun score disponible pour ce joueur.</p>
  <?php endif; ?>
</div>

  <!-- Charger le fichier JavaScript -->
  <script src="../quiz.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
