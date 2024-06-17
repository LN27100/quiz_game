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
        // Récupérez et échappez la valeur de l'email depuis le formulaire
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors["email"] = "Adresse e-mail invalide";
        }
    }

    // Vérifiez si le mot de passe est vide
    if (empty($_POST["mdp"])) {
        $errors["mdp"] = "Champ obligatoire";
    } else {
        // Récupérez le mot de passe depuis le formulaire
        $mdp = $_POST["mdp"];
    }

    // Si aucune erreur, procédez à la vérification de l'utilisateur
    if (empty($errors)) {
        $utilisateurInfos = Player::getInfos($email);

        if (!$utilisateurInfos) {
            $errors['email'] = 'Utilisateur inconnu';
        } else {
            // Vérifiez si le mot de passe n'est pas null avant d'utiliser password_verify
            if (!isset($utilisateurInfos['player_password'])) {
                $errors['mdp'] = 'Mot de passe non défini pour cet utilisateur';
            } else {
                // Vérifiez le mot de passe
                if (password_verify($mdp, $utilisateurInfos['player_password'])) {
                    // Initialisez les données de session pour l'utilisateur connecté
                    $_SESSION['user'] = $utilisateurInfos;

                    // Redirigez vers la page d'accueil du contrôleur
                    header("Location: ../controllers/controller-home.php");
                    exit();
                } else {
                    $errors['mdp'] = 'Mauvais mot de passe';
                }
            }
        }
    }
}

// Incluez la vue pour le formulaire de connexion
include_once '../views/view-signin.php';
?>
