<?php
require_once '../config.php';
require_once '../Models/results.php';

// Récupérer les données envoyées par la requête POST
$playerId = $_POST['player_id'] ?? null;
$theme = $_POST['theme'] ?? null;
$score = $_POST['score'] ?? null;

if ($playerId !== null && $theme !== null && $score !== null) {
    // Enregistrer le score dans la base de données
    Scores::create($playerId, $theme, $score);
} else {
    // Gérer les cas où des données sont manquantes
    http_response_code(400); // Bad Request
    echo "Erreur : Données manquantes pour enregistrer le score.";
}
?>
