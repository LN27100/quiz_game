<?php
require_once '../config.php';
require_once '../Models/results.php';

// Récupérer les données envoyées par la requête POST
$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['score'], $data['player_pseudo'], $data['theme'])) {
    // Extraire les données
    $playerPseudo = $data['player_pseudo'];
    $theme = $data['theme'];
    $score = $data['score'];

    try {
        // Enregistrer le score dans la base de données
        Scores::create($playerPseudo, $theme, $score);

        // Répondre avec un message de succès
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
        exit;
    } catch (PDOException $e) {
        // En cas d'erreur PDO
        http_response_code(500); // Erreur interne du serveur
        echo json_encode(['error' => 'Erreur lors de l\'enregistrement du score: ' . $e->getMessage()]);
        exit;
    }
} else {
    // Si les données sont manquantes ou incorrectes
    http_response_code(400); // Mauvaise requête
    echo json_encode(['error' => 'Données manquantes pour enregistrer le score.']);
    exit;
}
?>
