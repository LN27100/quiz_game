<?php
require_once '../config.php';
require_once '../Models/login.php';

session_start();

// Détruire toutes les variables de session
$_SESSION = array();

// Détruire la session
session_destroy();

// Rediriger vers la page de connexion
header("Location: controller-home.php");
exit();
?>