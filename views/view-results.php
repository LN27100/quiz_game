<?php
// Vérifie si une session est déjà démarrée
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

require_once '../config.php';
require_once '../Models/login.php';
require_once '../Models/Scores.php';

// Vérifie si l'utilisateur est connecté
$estConnecte = isset($_SESSION['user']);

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
  <link rel="stylesheet" href="../assets/style.css" />
</head>

<body>

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


  <h2 class="results-heading">Résultats de <?php echo htmlspecialchars($pseudo); ?></h2>

  <div class="container4">


    <?php if (count($scoresByTheme) > 0) : ?>
      <div class="bordered-container">
        <?php foreach ($scoresByTheme as $theme => $scores) : ?>
          <h3><?php echo htmlspecialchars($theme); ?></h3>
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($scores as $score) : ?>
                <tr>
                  <td>
                    <?php
                    $date = new DateTime($score['created_at']);
                    $month = $date->format('F'); // Récupérer le nom complet du mois en anglais
                    $french_month = [
                      'January' => 'janvier',
                      'February' => 'février',
                      'March' => 'mars',
                      'April' => 'avril',
                      'May' => 'mai',
                      'June' => 'juin',
                      'July' => 'juillet',
                      'August' => 'août',
                      'September' => 'septembre',
                      'October' => 'octobre',
                      'November' => 'novembre',
                      'December' => 'décembre'
                    ];
                    $french_month_name = isset($french_month[$month]) ? $french_month[$month] : $month;
                    echo $date->format('d') . ' ' . $french_month_name . ' ' . $date->format('Y');
                    ?>
                  </td>
                  <td><?php echo htmlspecialchars($score['score']); ?></td>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        <?php endforeach; ?>
      </div>
    <?php else : ?>
      <p>Aucun score disponible pour ce joueur.</p>
    <?php endif; ?>
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
  </script>

  <!-- Charger le fichier JavaScript -->
  <script src="../quiz.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>