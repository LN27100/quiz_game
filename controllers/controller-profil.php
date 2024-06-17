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

// Récupère le pseudo de l'utilisateur
$pseudo = isset($_SESSION['user']['player_pseudo']) ? ($_SESSION['user']['player_pseudo']) : "Pseudo non défini";
$email = isset($_SESSION['user']['player_mail']) ? ($_SESSION['user']['player_mail']) : "Email non défini";
$player_id = isset($_SESSION['user']['player_id']) ? $_SESSION['user']['player_id'] : null;


// Gestion du formulaire
$errors = array(); // Tableau pour stocker les erreurs




    // Gestion du formulaire
    if (isset($_POST['save_modification'])) {
        $player_id = isset($_SESSION['user']['player_id']) ? $_SESSION['user']['player_id'] : 0;
        $new_pseudo = isset($_POST['player_pseudo']) ? ($_POST['player_pseudo']) : "";
        $new_email = isset($_POST['player_mail']) ? ($_POST['player_mail']) : "";


        // Contrôle du pseudo
            if (empty($_POST["player_pseudo"])) {
                $errors["player_pseudo"] = "Champ obligatoire";
            } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\d]+$/", $_POST["player_pseudo"])) {
                $errors["player_pseudo"] = "Seules les lettres et les chiffres sont autorisés dans le champ Pseudo";
            } elseif (strlen($_POST["player_pseudo"]) < 6) {
                $errors["player_pseudo"] = "Le pseudo doit contenir au moins 6 caractères";
            } elseif (Player::checkPseudoExists($_POST["player_pseudo"]) && $_POST["player_pseudo"] != $_SESSION["user"]["player_pseudo"]) {
                $errors["player_pseudo"] = 'Pseudo déjà utilisé';
            }


        // Contrôle de l'email 
            if (empty($_POST["player_mail"])) {
                $errors["player_mail"] = "Champ obligatoire";
            } elseif (!filter_var($_POST["player_mail"], FILTER_VALIDATE_EMAIL)) {
                $errors["player_mail"] = "Le format de l'adresse email n'est pas valide";
            } elseif (Player::checkMailExists($_POST["player_mail"]) && $_POST ["player_mail"] != $_SESSION["user"]["player_mail"]){
                $errors["player_mail"] = 'Mail déjà utilisé';
            }


        // Si des erreurs sont détectées, redirigez l'utilisateur vers le formulaire avec les erreurs
        if (empty($errors)) {
            try {
                Player::updateProfil($player_id, $new_pseudo, $new_email);
                $_SESSION['user']['player_pseudo'] = $new_pseudo;
                $_SESSION['user']['player_mail'] = $new_email;
            } catch (Exception $e) {
                echo "Erreur lors de la mise à jour du profil : " . $e->getMessage();
            }
            // Redirigez l'utilisateur vers la page du profil après la mise à jour
            header("Location: ../controllers/controller-profil.php");
            exit();
        }
    }

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_profile'])) {
            // Appelle la méthode pour supprimer le profil
            $delete_result = Player::deleteUser($player_id);
       
            if ($delete_result === true) {
                // Suppression réussie, redirigez vers la page d'accueil avec un message de succès
                header("Location: ../index.php?message=Redirection+reussie");
                exit();
            } else {
                echo "Erreur lors de la suppression du profil : " . $delete_result;
                exit();
            }
        }


// Inclure la vue home uniquement si l'utilisateur est connecté
include_once '../views/view-profil.php';
?>