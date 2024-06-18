<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once '../config.php';
require_once '../Models/login.php';

// Vérifie si l'utilisateur est connecté
if (!isset($_SESSION['user'])) {
    // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
    header("Location: ../controllers/controller-signin.php");
    exit();
}

// Récupère les informations de l'utilisateur
$pseudo = $_SESSION['user']['player_pseudo'] ?? "Pseudo non défini";
$email = $_SESSION['user']['player_mail'] ?? "Email non défini";
$player_id = $_SESSION['user']['player_id'] ?? null;

// Gestion du formulaire
$errors = array(); // Tableau pour stocker les erreurs

if (isset($_POST['save_modification'])) {
    $new_pseudo = $_POST['player_pseudo'] ?? "";
    $new_email = $_POST['player_mail'] ?? "";

    // Contrôle du pseudo
    if (empty($new_pseudo)) {
        $errors["player_pseudo"] = "Champ obligatoire";
    } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\d]+$/", $new_pseudo)) {
        $errors["player_pseudo"] = "Seules les lettres et les chiffres sont autorisés dans le champ Pseudo";
    } elseif (strlen($new_pseudo) < 6) {
        $errors["player_pseudo"] = "Le pseudo doit contenir au moins 6 caractères";
    } elseif (Player::checkPseudoExists($new_pseudo) && $new_pseudo != $pseudo) {
        $errors["player_pseudo"] = 'Pseudo déjà utilisé';
    }

    // Contrôle de l'email 
    if (empty($new_email)) {
        $errors["player_mail"] = "Champ obligatoire";
    } elseif (!filter_var($new_email, FILTER_VALIDATE_EMAIL)) {
        $errors["player_mail"] = "Le format de l'adresse email n'est pas valide";
    } elseif (Player::checkMailExists($new_email) && $new_email != $email) {
        $errors["player_mail"] = 'Mail déjà utilisé';
    }

    // Si des erreurs sont détectées, redirigez l'utilisateur vers le formulaire avec les erreurs
    if (empty($errors)) {
        try {
            Player::updateProfil($player_id, $new_pseudo, $new_email);
            $_SESSION['user']['player_pseudo'] = $new_pseudo;
            $_SESSION['user']['player_mail'] = $new_email;
            header("Location: ../controllers/controller-profil.php");
            exit();
        } catch (Exception $e) {
            echo "Erreur lors de la mise à jour du profil : " . $e->getMessage();
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_profile'])) {
    $delete_result = Player::deleteUser($player_id);

    if ($delete_result === true) {
        header("Location: ../index.php?message=Profil supprimé avec succès");
        exit();
    } else {
        echo "Erreur lors de la suppression du profil : " . $delete_result;
        exit();
    }
}

include_once '../views/view-profil.php';
?>