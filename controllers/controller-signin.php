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
        $utilisateurInfos = Player::checkMailExists($email);

        if (!$utilisateurInfos) {
            $errors['email'] = 'Utilisateur Inconnu';
        } else {
            // Vérifier si le mot de passe n'est pas null avant d'utiliser password_verify
            if (!isset($utilisateurInfos['player_password'])) {
                $errors['password'] = 'Mot de passe non défini pour cet utilisateur';
            } else {
                if (password_verify($_POST["password"], $utilisateurInfos['player_password'])) {
                    $_SESSION['user'] = $utilisateurInfos;
                    header("Location: ../controller-home.php");

                    exit();
                } else {
                    $errors['password'] = 'Mauvais mot de passe';
                }
            }
        }
    }
}

include_once '../views/view-signin.php';
?>
