<?php
require_once '../config.php';
require_once '../Models/Scores.php';
require_once '../Models/login.php';


session_start();

// Vérifie si une photo d'utilisateur est définie dans la session
if (isset($_SESSION['user']['player_photo']) && !empty($_SESSION['user']['player_photo'])) {
    // Utilise la photo de l'utilisateur s'il en existe une
    $img = $_SESSION['user']['player_photo'];
} else {
    // Utilise une photo par défaut si aucune photo d'utilisateur n'est définie
    $img = "../assets/uploads/avatarDefault.jpg";
}

// Vérifier si la requête est de type POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données envoyées par la requête POST
    $data = $_POST;

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
} else {
    // Gérer d'autres logiques ou inclure la vue home si nécessaire
    $pseudo = isset($_SESSION['user']['player_pseudo']) ? ($_SESSION['user']['player_pseudo']) : "cher joueur";
    include_once '../views/view-home.php';
}


