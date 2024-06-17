<?php
require_once '../config.php';

class Player {

    /**
     * Méthode permettant de créer un utilisateur
     * @param string $pseudo Pseudo de l'utilisateur
     * @param string $email Email de l'utilisateur
     * @param string $mot_de_passe Mot de passe de l'utilisateur
     */
    public static function create(string $pseudo, string $email, string $mot_de_passe)
    {
        try {
            // Connexion à la base de données
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Stockage de la requête dans une variable
            $sql = "INSERT INTO player (player_pseudo, player_email, player_password)
                    VALUES (:pseudo, :email, :mdp)";

            // Préparation de la requête
            $query = $db->prepare($sql);

            // Relier les valeurs aux marqueurs nominatifs
            $query->bindValue(':pseudo', htmlspecialchars($pseudo), PDO::PARAM_STR);
            $query->bindValue(':email', $email, PDO::PARAM_STR);
            $query->bindValue(':mdp', password_hash($mot_de_passe, PASSWORD_DEFAULT), PDO::PARAM_STR);

            $query->execute();
        } catch (PDOException $e) {
            echo 'Erreur :' . $e->getMessage();
            die();
        }
    }

    /**
     * Méthode permettant de récupérer les infos d'un utilisateur avec son email comme paramètre
     * 
     * @param string $email Adresse mail de l'utilisateur
     * 
     * @return array Tableau associatif contenant les infos de l'utilisateur
     */
    public static function getInfos(string $email): array
    {
        try {
            // Création d'un objet $db selon la classe PDO
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);

            // Stockage de la requête dans une variable
            $sql = "SELECT * FROM player WHERE player_email = :email";

            // Préparation de la requête pour éviter les injections SQL
            $query = $db->prepare($sql);

            // Relier les paramètres à nos marqueurs nominatifs à l'aide d'un bindValue
            $query->bindValue(':email', $email, PDO::PARAM_STR);

            // Exécution de la requête
            $query->execute();

            // Récupération du résultat de la requête dans une variable
            $result = $query->fetch(PDO::FETCH_ASSOC);

            // Retourner le résultat
            return $result ?? [];
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
            die();
        }
    }
}
?>
