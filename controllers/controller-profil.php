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

$default_img = "avatarDefault.jpg";

// Récupère les informations de l'utilisateur
$pseudo = $_SESSION['user']['player_pseudo'] ?? "Pseudo non défini";
$email = $_SESSION['user']['player_mail'] ?? "Email non défini";
$player_id = $_SESSION['user']['player_id'] ?? null;
// Vérifie si une photo d'utilisateur est définie dans la session
if (isset($_SESSION['user']['player_photo']) && !empty($_SESSION['user']['player_photo'])) {
    $img = $_SESSION['user']['player_photo'];
} else {
    $img = $default_img;
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
            // Stocker uniquement le nom du fichier dans la session et la base de données
            $_SESSION['user']['player_photo'] = $new_file_name;
            Player::updateProfileImage($_SESSION['user']['player_id'], $new_file_name);
            header("Location: ../controllers/controller-profil.php"); // Redirection vers la page de profil
            exit(); // Arrêter le script après la redirection
        } else {
            echo "Erreur lors du téléchargement du fichier : " . $_FILES['profile_image']['error'];
        }
    } catch (Exception $e) {
        echo "Erreur lors de la mise à jour de l'image de profil : " . $e->getMessage();
    }
}


include_once '../views/view-profil.php';
?>
