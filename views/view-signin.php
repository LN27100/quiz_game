<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Connexion - Quiz Game</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../style.css" />
</head>

<body>

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
              <a class="nav-link active" aria-current="page" href="../controllers/controller-home.php">Accueil</a>
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
                <li><a class="dropdown-item" href="#">Mon Profil</a></li>
                <li><a class="dropdown-item" href="#">Mes Résultats</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Déconnexion</a></li>
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
              <input type="password" class="form-control" id="login-password" name="mdp" required autocomplete="current-password">
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

  <!-- Charger le fichier JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>



</body>

</html>