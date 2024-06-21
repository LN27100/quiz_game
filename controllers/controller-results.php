<?php
require_once '../config.php';
require_once '../Models/Scores.php';

session_start();

// Récupère le pseudo du joueur connecté
$pseudo = $_SESSION['user']['player_pseudo'] ?? null;

if ($pseudo) {
    // Récupère les scores du joueur
    $scores = Scores::getInfos($pseudo);

    // Initialisation d'un tableau pour regrouper les scores par thème
    $scoresByTheme = [];

    // Regrouper les scores par thème
    foreach ($scores as $score) {
        $theme = $score['theme'];
        if (!isset($scoresByTheme[$theme])) {
            $scoresByTheme[$theme] = [];
        }
        $scoresByTheme[$theme][] = $score;
    }
} else {
    $scoresByTheme = [];
}

include_once '../views/view-results.php';
?>
