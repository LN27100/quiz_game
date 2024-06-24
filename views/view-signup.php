<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Connexion - Quiz Game</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../style.css" />
</head>

<body>

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

    <?php if ($showform) : ?>
        <h1>Inscription</h1>
    <?php endif; ?>

    <div class="container">
        <?php
        if ($showform) {
        ?>
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div id="login-form">
                        <form method="post" action="controller-signup.php">
                            <div class="mb-3">
                                <label for="validationServer03" class="form-label">Pseudo: </label>
                                <input type="text" class="form-control <?php if (isset($errors['pseudo'])) echo 'is-invalid'; ?>" id="validationServer03" name="pseudo" pattern="^[a-zA-ZÀ-ÿ\d]*$" placeholder="ex.LNwarrior" value="<?= isset($_POST['pseudo']) ? htmlspecialchars($_POST['pseudo']) : '' ?>" required>
                                <div class="invalid-feedback">
                                    <?php if (isset($errors['pseudo'])) echo $errors['pseudo']; ?>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email: </label>
                                <input type="email" class="form-control <?php if (isset($errors['email'])) echo 'is-invalid'; ?>" id="email" name="email" placeholder="adresse email" value="<?= isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '' ?>" required>
                                <div class="invalid-feedback">
                                    <?php if (isset($errors['email'])) echo $errors['email']; ?>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password-input" class="form-label">Mot de passe: </label>
                                <input type="password" class="form-control <?php if (isset($errors['mdp'])) echo 'is-invalid'; ?>" name="mdp" placeholder="Votre mot de passe" id="password-input" required>
                                <div class="invalid-feedback">
                                    <?php if (isset($errors['mdp'])) echo $errors['mdp']; ?>
                                </div>
                            </div>

                            <div class="conditionPassword col-6 mt-4 mt-xxl-0 w-auto h-auto">
                                <div class="alert px-4 py-3 mb-0 d-none" role="alert" data-mdb-color="warning" id="password-alert">
                                    <ul class="list-unstyled mb-0">
                                        <div class="requirements leng">
                                            <i class="bi bi-check text-success me-2 d-none"></i>
                                            <i class="bi bi-x text-danger me-3"></i>
                                            Votre mot de passe doit contenir au moins 8 caractères.
                                        </div>
                                        <div class="requirements big-letter">
                                            <i class="bi bi-check text-success me-2 d-none"></i>
                                            <i class="bi bi-x text-danger me-3"></i>
                                            Votre mot de passe doit contenir une lettre majuscule.
                                        </div>
                                        <div class="requirements num">
                                            <i class="bi bi-check text-success me-2 d-none"></i>
                                            <i class="bi bi-x text-danger me-3"></i>
                                            Votre mot de passe doit contenir un chiffre.
                                        </div>
                                        <div class="requirements special-char">
                                            <i class="bi bi-check text-success me-2 d-none"></i>
                                            <i class="bi bi-x text-danger me-3"></i>
                                            Votre mot de passe doit contenir un caractère spécial.
                                        </div>
                                    </ul>
                                </div>
                            </div>


                            <div class="mb-3">
                                <label for="confirm-password-input" class="form-label">Confirmer Mot de passe:</label>
                                <input type="password" class="form-control <?php if (isset($errors['conf_mot_de_passe'])) echo 'is-invalid'; ?>" name="conf_mot_de_passe" placeholder="Confirmez votre mot de passe" id="confirm-password-input" required>
                                <div class="invalid-feedback">
                                    <?php if (isset($errors['conf_mot_de_passe'])) echo $errors['conf_mot_de_passe']; ?>
                                </div>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="on" id="cgu" name="cgu" required>
                                <label class="form-check-label" for="cgu">
                                    J'accepte les conditions d'utilisation
                                </label>
                                <div class="invalid-feedback">
                                    <?php if (isset($errors['cgu'])) echo $errors['cgu']; ?>
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary" type="submit">S'inscrire</button>
                            </div>
                            <p class="mt-3">Déjà inscrit ? <a href="controller-signin.php">Connectez-vous ici</a></p>

                        </form>

                    <?php } else { ?>
                        <div class="d-flex justify-content-center align-items-center vh-100">
                            <div class="container">
                                <h2>Inscription réussie</h2>
                                <p class="textSuccess">Vous pouvez maintenant vous connecter.</p>
                                <a href="../controllers/controller-signin.php" class="button2">Connexion</a>
                            </div>
                            </div>
                        <?php } ?>

                    </div>
                </div>
            </div>
            </div>


            <!-- Charger le fichier JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    console.log("Le DOM est chargé. Le script fonctionne.");
                    const password = document.getElementById("password-input");
                    const confirmPassword = document.getElementById("confirm-password-input");
                    const passwordAlert = document.getElementById("password-alert");
                    const requirements = document.querySelectorAll(".requirements");
                    const leng = document.querySelector(".leng");
                    const bigLetter = document.querySelector(".big-letter");
                    const num = document.querySelector(".num");
                    const specialChar = document.querySelector(".special-char");
                    requirements.forEach((element) => element.classList.add("wrong"));
                    password.addEventListener("focus", () => {
                        passwordAlert.classList.remove("d-none");
                        if (!password.classList.contains("is-valid")) {
                            password.classList.add("is-invalid");
                        }
                    });
                    password.addEventListener("input", () => {
                        const value = password.value;
                        const isLengthValid = value.length >= 8;
                        const hasUpperCase = /[A-Z]/.test(value);
                        const hasNumber = /\d/.test(value);
                        const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);
                        leng.querySelector(".bi-x").classList.toggle("d-none", isLengthValid);
                        leng.querySelector(".bi-check").classList.toggle("d-none", !isLengthValid);
                        bigLetter.querySelector(".bi-x").classList.toggle("d-none", hasUpperCase);
                        bigLetter.querySelector(".bi-check").classList.toggle("d-none", !hasUpperCase);
                        num.querySelector(".bi-x").classList.toggle("d-none", hasNumber);
                        num.querySelector(".bi-check").classList.toggle("d-none", !hasNumber);
                        specialChar.querySelector(".bi-x").classList.toggle("d-none", hasSpecialChar);
                        specialChar.querySelector(".bi-check").classList.toggle("d-none", !hasSpecialChar);
                        const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar;
                        const isPasswordMatching = password.value === confirmPassword.value;
                        if (confirmPassword.value.length > 0) {
                            if (isPasswordMatching) {
                                confirmPassword.classList.remove("is-invalid");
                                confirmPassword.classList.add("is-valid");
                                confirmPassword.nextElementSibling.classList.remove("invalid-feedback");
                                confirmPassword.nextElementSibling.classList.add("valid-feedback");
                            } else {
                                confirmPassword.classList.remove("is-valid");
                                confirmPassword.classList.add("is-invalid");
                                confirmPassword.nextElementSibling.classList.remove("valid-feedback");
                                confirmPassword.nextElementSibling.classList.add("invalid-feedback");
                            }
                        }
                        if (isPasswordValid) {
                            password.classList.remove("is-invalid");
                            password.classList.add("is-valid");
                            requirements.forEach((element) => {
                                element.classList.add("good");
                            });
                            passwordAlert.classList.remove("alert-warning");
                            passwordAlert.classList.add("alert-success");
                        } else {
                            password.classList.remove("is-valid");
                            password.classList.add("is-invalid");
                            passwordAlert.classList.add("alert-warning");
                            passwordAlert.classList.remove("alert-success");
                        }
                    });
                    confirmPassword.addEventListener("input", () => {
                        const isPasswordMatching = password.value === confirmPassword.value;
                        if (confirmPassword.value.length > 0) {
                            if (isPasswordMatching) {
                                confirmPassword.classList.remove("is-invalid");
                                confirmPassword.classList.add("is-valid");
                                confirmPassword.nextElementSibling.innerText = "Les mots de passe sont identiques";
                                confirmPassword.nextElementSibling.classList.remove("invalid-feedback");
                                confirmPassword.nextElementSibling.classList.add("valid-feedback");
                            } else {
                                confirmPassword.classList.remove("is-valid");
                                confirmPassword.classList.add("is-invalid");
                                confirmPassword.nextElementSibling.innerText = "Les mots de passe ne sont pas identiques";
                                confirmPassword.nextElementSibling.classList.remove("valid-feedback");
                                confirmPassword.nextElementSibling.classList.add("invalid-feedback");
                            }
                        }
                    });
                    password.addEventListener("blur", () => {
                        passwordAlert.classList.add("d-none");
                    });
                    const nomInput = document.getElementById("validationServer01");
                    const prenomInput = document.getElementById("validationServer02");
                    const pseudoInput = document.getElementById("validationServer03");
                    const emailInput = document.getElementById("email");
                    const dateInput = document.getElementById("start");
                    const nomFeedback = document.getElementById("nomValidationFeedback");
                    const prenomFeedback = document.getElementById("prenomValidationFeedback");
                    const pseudoFeedback = document.getElementById("pseudoValidationFeedback");
                    const emailFeedback = document.getElementById("emailValidationFeedback");
                    const dateFeedback = document.getElementById("dateValidationFeedback");
                    const entrepriseSelect = document.getElementById("entreprise");
                    const entrepriseFeedback = document.getElementById("entrepriseValidationFeedback");
                    entrepriseSelect.addEventListener("input", function() {
                        toggleValidity(entrepriseSelect, entrepriseFeedback);
                    });
                    nomInput.addEventListener("input", function() {
                        toggleValidity(nomInput, nomFeedback, /^[a-zA-ZÀ-ÿ -]*$/, "Seules les lettres, les espaces et les tirets sont autorisés dans le champ Nom");
                    });
                    prenomInput.addEventListener("input", function() {
                        toggleValidity(prenomInput, prenomFeedback, /^[a-zA-ZÀ-ÿ -]*$/, "Seules les lettres, les espaces et les tirets sont autorisés dans le champ Prénom");
                    });
                    dateInput.addEventListener("input", function() {
                        toggleValidity(dateInput, dateFeedback);
                    });

                    function toggleValidity(input, feedback, regex, errorMessage) {
                        if (input.id === "entreprise" && input.value !== "") {
                            input.classList.remove("is-invalid");
                            input.classList.add("is-valid");
                            feedback.style.display = "none";
                        } else if (input.validity.valid && input.value.match(regex)) {
                            input.classList.remove("is-invalid");
                            input.classList.add("is-valid");
                            feedback.style.display = "none";
                        } else {
                            input.classList.remove("is-valid");
                            input.classList.add("is-invalid");
                            feedback.style.display = "block";
                            feedback.innerText = errorMessage || "Champ obligatoire";
                        }
                    }
                    pseudoInput.addEventListener("input", function() {
                        toggleValidity(pseudoInput, pseudoFeedback, /^[a-zA-ZÀ-ÿ\d]+$/, "Seules les lettres et les chiffres sont autorisés dans le champ Pseudo");
                        if (pseudoInput.value.length < 6) {
                            formIsValid = false;
                            toggleValidity(pseudoInput, pseudoFeedback, null, "Le pseudo doit contenir au moins 6 caractères");
                        }
                    });
                    emailInput.addEventListener("input", function() {
                        var emailValue = emailInput.value;
                        // vérifier la validité de l'email
                        if (filter_var(emailValue, FILTER_VALIDATE_EMAIL)) {
                            emailInput.classList.remove("is-invalid");
                            emailInput.classList.add("is-valid");
                            emailFeedback.style.display = "none";
                        } else {
                            emailInput.classList.remove("is-valid");
                            emailInput.classList.add("is-invalid");
                            emailFeedback.innerText = "Email non valide";
                            emailFeedback.style.display = "block";
                        }
                    });
                    const submitButton = document.getElementById("submitButton");
                    submitButton.addEventListener("click", function(event) {
                        let formIsValid = true;
                        // Vérification du champ Nom
                        if (!nomInput.value) {
                            formIsValid = false;
                            toggleValidity(nomInput, nomFeedback);
                        }
                        // Vérification du champ Prénom
                        if (!prenomInput.value) {
                            formIsValid = false;
                            toggleValidity(prenomInput, prenomFeedback);
                        }
                        // Vérification du champ Pseudo
                        if (!pseudoInput.value) {
                            formIsValid = false;
                            toggleValidity(pseudoInput, pseudoFeedback);
                        }
                        // Vérification du champ Email
                        if (!emailInput.value) {
                            formIsValid = false;
                            toggleValidity(emailInput, emailFeedback);
                        }
                        // Vérification du champ Date de naissance
                        if (!dateInput.value) {
                            formIsValid = false;
                            toggleValidity(dateInput, dateFeedback);
                        }
                        // Vérification du champ Mot de passe
                        if (!password.value || password.classList.contains("is-invalid")) {
                            formIsValid = false;
                        }
                        // Vérification du champ Confirmation de mot de passe
                        if (!confirmPassword.value || confirmPassword.classList.contains("is-invalid")) {
                            formIsValid = false;
                        }
                        // Vérification du champ sélection d'entreprise
                        if (!entrepriseSelect.value) {
                            formIsValid = false;
                            toggleValidity(entrepriseFeedback);
                        }
                        // Validation des CGU
                        const cguCheckbox = document.getElementById("cgu");
                        const cguValidationFeedback = document.getElementById("cguValidationFeedback");
                        if (cguCheckbox && submitButton) {
                            if (!cguCheckbox.checked) {
                                event.preventDefault(); // Empêche l'envoi du formulaire
                                cguValidationFeedback.style.display = "block"; // Affiche l'alerte des CGU
                                formIsValid = false; // Met à jour le statut de validation du formulaire
                            } else {
                                cguValidationFeedback.style.display = "none"; // Cache l'alerte si les CGU sont acceptées
                            }
                        }
                        // Si le formulaire est valide on l'envoi
                        if (formIsValid) {}
                    });
                });
            </script>

</body>

</html>