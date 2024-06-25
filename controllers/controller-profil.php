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
// Vérifie si une photo d'utilisateur est définie dans la session
if (isset($_SESSION['user']['player_photo']) && !empty($_SESSION['user']['player_photo'])) {
    $img = $_SESSION['user']['player_photo'];
} else {
    $img = "../assets/uploads/avatarDefault.jpg";
}

// Gestion du formulaire
$errors = array(); // Tableau pour stocker les erreurs

// Gestion de la mise à jour de l'image de profil
if (isset($_FILES['profile_image'])) {
    try {
        // Dossier de sauvegarde des images
        $uploadDir = '../assets/uploads/';

        // Vérification du dossier de sauvegarde des images
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $file_extension = pathinfo($_FILES['profile_image']['name'], PATHINFO_EXTENSION);
        // Construire un nom de fichier unique en combinant "profile_", l'ID de l'utilisateur et l'extension du fichier
        $new_file_name = "profile_" . $_SESSION['user']['player_id'] . "." . $file_extension;

        // Construire le chemin complet du fichier en concaténant le dossier de sauvegarde avec le nouveau nom de fichier
        $uploadFile = $uploadDir . $new_file_name;

        if (move_uploaded_file($_FILES['profile_image']['tmp_name'], $uploadFile)) {
            $_SESSION['user']['player_photo'] = $uploadFile;
            Player::updateProfileImage($_SESSION['user']['player_id'], $uploadFile);
            header("Location: ../controllers/controller-profil.php"); // Redirection vers la page de profil
            exit(); // Arrêter le script après la redirection
        } else {
            $uploadDir = '../assets/uploads/avatarDefault.jpg';
            echo "Erreur lors du téléchargement du fichier : " . $_FILES['profile_image']['error'];
        }
    } catch (Exception $e) {
        echo "Erreur lors de la mise à jour de l'image de profil : " . $e->getMessage();
    }
}

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