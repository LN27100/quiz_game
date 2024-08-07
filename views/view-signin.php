<?php

// Vérifie si l'utilisateur est connecté
$estConnecte = isset($_SESSION['user']);

require_once '../config.php';
require_once '../Models/login.php';

// Vérifie si une session est déjà démarrée
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Connexion - Quiz Game</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
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
                <?php echo $estConnecte ? $estConnecte : 'Connexion/Inscription'; ?>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <?php if ($estConnecte) : ?>
                  <li><a class="dropdown-item" href="../controllers/controller-profil.php">Mon Profil</a></li>
                  <li><a class="dropdown-item" href="../controllers/controller-results.php">Mes Résultats</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
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

    <div class="row justify-content-center">
      <div class="col-md-12">
        <div id="login-form">
          <h1>Connexion</h1>

          <?php if (!empty($errors)) : ?>
            <div class="alert alert-danger">
              <ul>
                <?php foreach ($errors as $error) : ?>
                  <li><?= htmlspecialchars($error) ?></li>
                <?php endforeach; ?>
              </ul>
            </div>
          <?php endif; ?>

          <form method="post" action="controller-signin.php">
            <div class="mb-3">
              <label for="email" class="form-label">Adresse e-mail :</label>
              <input type="email" class="form-control" id="email" name="email" required autocomplete="email" value="<?= isset($email) ? htmlspecialchars($email) : '' ?>">
            </div>

            <div class="mb-3">
              <label for="login-password" class="form-label">Mot de passe</label>
              <div class="password-toggle-wrapper">
                <input type="password" class="form-control password-toggle-input" id="login-password" name="mdp" required autocomplete="current-password">
                <span class="password-toggle-icon" onclick="togglePasswordVisibility()">
                  <i class="bi bi-eye"></i>
                </span>
              </div>
            </div>

            <div class="d-grid">
              <button type="submit" class="button2">Connexion</button>
            </div>
          </form>
          <p class="mt-3">Pas encore inscrit ? <a href="../controllers/controller-signup.php">Inscrivez-vous ici</a></p>
        </div>

      </div>
    </div>
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

    function togglePasswordVisibility() {
      const passwordInput = document.getElementById('login-password');
      const passwordIcon = document.querySelector('.password-toggle-icon i');

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('bi-eye');
        passwordIcon.classList.add('bi-eye-slash');
      } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('bi-eye-slash');
        passwordIcon.classList.add('bi-eye');
      }
    }
  </script>

  <!-- Charger le fichier JavaScript -->
  <script src="../assets/quiz.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>