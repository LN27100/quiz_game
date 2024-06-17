<?php
require_once '../config.php';
require_once '../Models/login.php';
session_start();


// Récupère le pseudo de l'utilisateur
$pseudo = isset($_SESSION['user']['player_pseudo']) ? ($_SESSION['user']['player_pseudo']) : "cher joueur";


// Inclure la vue home uniquement si l'utilisateur est connecté
include_once '../views/view-home.php';
?>