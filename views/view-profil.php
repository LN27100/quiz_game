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

  <?php echo "<h2>Profil de $pseudo</h2>"; ?>


  <!-- Popup confirmation suppression du profil -->
  <div id="deleteProfileConfirm" class="popup-confirm" style="display: none;">
    <div class="popup-content">
      <p id="deleteProfileText">Voulez-vous vraiment supprimer votre profil ?</p>
      <form id="deleteProfileForm" action="../controllers/controller-profil.php" method="POST">
        <button id="confirmDeleteProfile" class="btnYes" type="submit">Oui</button>
        <button id="cancelDeleteProfile" class="btnNo">Non</button>
      </form>
    </div>
  </div>

  <div class="profile-info">
    <p><span class="textProfil">Pseudo:</span> <?= $pseudo ?></p>
    <p><span class="textProfil">Email: </span> <?= $email ?></p>
  </div>

  <div class="container">
    <div class="button-container">
      <button id="editDescriptionBtn">Modifier le profil</button>
      <form method="post" action="../controllers/controller-profil.php"  enctype="multipart/form-data" id="deleteAccountForm">
        <input class="button3" type="submit" name="delete_profile" value="Supprimer le profil" onclick="return confirm('Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est irréversible.')">
      </form>
    </div>

    <!-- Formulaire de modification du profil (masqué par défaut) -->
    <form method="post" action="../controllers/controller-profil.php" class="transparent-form" enctype="multipart/form-data" id="editDescriptionForm" style="display: none;">
      <div>
        <label class="textProfil" for="player_pseudo">Pseudo :</label>
        <input type="text" name="player_pseudo" value="<?php echo htmlspecialchars($pseudo); ?>" />
        <?php if (isset($errors["player_pseudo"])) { ?>
          <span class="error"><?php echo htmlspecialchars($errors["player_pseudo"]); ?></span>
        <?php } ?>
      </div>
      <div>
        <label class="textProfil" for="player_mail">Adresse email :</label>
        <input type="text" name="player_mail" value="<?php echo htmlspecialchars($email); ?>" />
        <?php if (isset($errors["player_mail"])) { ?>
          <span class="error"><?php echo htmlspecialchars($errors["player_mail"]); ?></span>
        <?php } ?>
      </div>
      <div class="profile-info">
        <input class="button3" type="submit" name="save_modification" value="Enregistrer les modifications">
        <button type="button" id="cancelEditBtn">Annuler</button>
      </div>
    </form>


  </div>




  <!-- Charger le fichier JavaScript -->
  <script src="../quiz.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const deleteProfileBtn = document.querySelector('.delete_profile');

      // Afficher le pop-up de confirmation lors du clic sur le bouton de suppression du profil
      deleteProfileBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        document.getElementById('deleteProfileConfirm').style.display = 'block';
      });

      // Cacher le pop-up de confirmation lors du clic sur le bouton "Non"
      document.getElementById('cancelDeleteProfile').addEventListener('click', function() {
        document.getElementById('deleteProfileConfirm').style.display = 'none';
      });

      // Cacher le pop-up de confirmation lors du clic en dehors du pop-up
      window.onclick = function(event) {
        if (event.target == document.getElementById('deleteProfileConfirm')) {
          document.getElementById('deleteProfileConfirm').style.display = "none";
        }
      };
    });



    document.addEventListener("DOMContentLoaded", function() {
      const navbarToggle = document.getElementById("navbar-toggle");
      const navbarNav = document.getElementById("navbar-nav");

      if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener("click", function() {
          navbarNav.classList.toggle("active");
        });
      }

      document.getElementById('editDescriptionBtn').addEventListener('click', function() {
        // Masquer la div avec la classe profile-info
        document.querySelector('.profile-info').style.display = 'none';
        // Afficher le formulaire de modification
        document.getElementById('editDescriptionForm').style.display = 'block';
      });

      // Afficher le formulaire de modification si des erreurs sont présentes
      if (<?= !empty($errors) ? 'true' : 'false' ?>) {
        document.getElementById('editDescriptionForm').style.display = 'block';
        document.querySelector('.profile-info').style.display = 'none';
      }

      document.getElementById('cancelEditBtn').addEventListener('click', function() {
        // Afficher à nouveau la div avec la classe profile-info
        document.querySelector('.profile-info').style.display = 'block';
        // Masquer le formulaire de modification
        document.getElementById('editDescriptionForm').style.display = 'none';
      });
    });
  </script>


</body>

</html>