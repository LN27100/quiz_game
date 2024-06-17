<?php
require_once '../config.php';
require_once '../Models/login.php';
session_start();

// Vérifiez si un formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Tableau d'erreurs (stockage des erreurs)
    $errors = [];

    // Vérifiez si l'email est vide
    if (empty($_POST["email"])) {
        $errors["email"] = "Champ obligatoire";
    } else {
        // Récupérez la valeur de l'email depuis le formulaire
        $email = $_POST["email"];
    }

    // Vérifiez si le mot de passe est vide
    if (empty($_POST["password"])) {
        $errors["password"] = "Champ obligatoire";
    }

    // Si aucune erreur, procédez à la vérification de l'utilisateur
    if (empty($errors)) {
        // Vérifiez si l'email existe dans la base de données
        $utilisateurInfos = Player::checkMailExists($email);

        if (!$utilisateurInfos) {
            $errors['email'] = 'Utilisateur Inconnu';
        } else {
            // Comparaison du mot de passe
            if (password_verify($_POST["password"], $utilisateurInfos['player_password'])) {
                // Mot de passe correct

                // Stockez les infos dans la variable de session
                $_SESSION['user'] = $utilisateurInfos;

                // Redirigez vers la page d'accueil
                header("Location: ../index.html");
                exit();
            } else {
                $errors['password'] = 'Mauvais mot de passe';
            }
        }
    }
}

// Inclure la vue du formulaire de connexion
include_once '../views/view-signin.php';
?>
