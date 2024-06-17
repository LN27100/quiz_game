<?php

// Lier le fichier config
require_once '../config.php';
require_once '../Models/login.php';

// Permet d'afficher le formulaire
$showform = true;

// Vérification de la soumission du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    // Récupération des données du formulaire en les rendant "safe" (enlever les caractères spéciaux etc.)
    $pseudo = trim($_POST['pseudo']);
    $email = trim($_POST['email']);
    $mot_de_passe = trim($_POST['mdp']);
    $conf_mot_de_passe = trim($_POST['conf_mot_de_passe']);

    // Contrôle du pseudo
    if (empty($pseudo)) {
        $errors["pseudo"] = "Champ obligatoire";
    } elseif (!preg_match("/^[a-zA-ZÀ-ÿ\d]+$/", $pseudo)) {
        $errors["pseudo"] = "Seules les lettres et les chiffres sont autorisés dans le champ Pseudo";
    } elseif (strlen($pseudo) < 6) {
        $errors["pseudo"] = "Le pseudo doit contenir au moins 6 caractères";
    } elseif (Player::checkPseudoExists($pseudo)) {
        $errors["pseudo"] = 'Pseudo déjà utilisé';
    }

    // Contrôle de l'email
    if (empty($email)) {
        $errors["email"] = "Champ obligatoire";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Le format de l'adresse email n'est pas valide";
    } elseif (Player::checkMailExists($email)) {
        $errors["email"] = 'Email déjà utilisé';
    }

     // Contrôle du mot de passe
     if (empty($mot_de_passe)) {
        $errors["mdp"] = "Champ obligatoire";
    } elseif (strlen($mot_de_passe) < 8) {
        $errors["mdp"] = "Le mot de passe doit contenir au moins 8 caractères";
    } elseif (!preg_match("/[A-Z]/", $mot_de_passe)) {
        $errors["mdp"] = "Le mot de passe doit contenir au moins une majuscule";
    } elseif (!preg_match("/[a-z]/", $mot_de_passe)) {
        $errors["mdp"] = "Le mot de passe doit contenir au moins une minuscule";
    } elseif (!preg_match("/\d/", $mot_de_passe)) {
        $errors["mdp"] = "Le mot de passe doit contenir au moins un chiffre";
    } elseif (!preg_match("/[\W_]/", $mot_de_passe)) {
        $errors["mdp"] = "Le mot de passe doit contenir au moins un caractère spécial";
    }

    // Contrôle de la confirmation du mot de passe
    if ($mot_de_passe !== $conf_mot_de_passe) {
        $errors["conf_mot_de_passe"] = "Les mots de passe ne correspondent pas";
    }

    // Contrôle des CGU
    if (empty($_POST["cgu"]) || $_POST["cgu"] !== "on") {
        $errors["cgu"] = "Veuillez accepter les conditions générales d'utilisation pour continuer.";
    }

    // On s'assure qu'il n'y a pas d'erreur dans le formulaire
    if (empty($errors)) {
        Player::create($pseudo, $email, $mot_de_passe);
        $showform = false;
    }
}

include_once '../views/view-signup.php';

?>
