<?php
require_once '../config.php';
require_once '../Models/Scores.php';

session_start();

// Récupère le pseudo du joueur connecté
$pseudo = $_SESSION['user']['player_pseudo'] ?? null;

if ($pseudo) {
    // Récupère les scores du joueur
    $scores = Scores::getInfos($pseudo);
} else {
    $scores = [];
}

include_once '../views/view-results.php';
?>
