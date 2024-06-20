<?php
require_once '../config.php';

class Scores
{
    /**
     * Méthode permettant de créer un score
     */
    public static function create(int $playerPseudo, string $theme, int $score)
    {
        try {
            // Connexion à la base de données
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Stockage de la requête dans une variable
            $sql = "INSERT INTO score (player_pseudo, theme, score) 
                    VALUES (:player_pseudo, :theme, :score)";

            // Préparation de la requête
            $query = $db->prepare($sql);

            // Relier les valeurs aux marqueurs nominatifs
            $query->bindValue(':player_pseudo', $playerPseudo, PDO::PARAM_STR);
            $query->bindValue(':theme', $theme, PDO::PARAM_STR);
            $query->bindValue(':score', $score, PDO::PARAM_INT);

            $query->execute();
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
            die();
        }
    }

    /**
     * Méthode permettant de récupérer les scores d'un utilisateur avec son pseudo comme paramètre
     * 
     * @return array Tableau associatif contenant les infos de l'utilisateur
     */
    public static function getInfos(string $playerPseudo): array
    {
        try {
            // Création d'un objet $db selon la classe PDO
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);

            // Stockage de la requête dans une variable
            $sql = "SELECT * FROM score WHERE player_pseudo = :player_pseudo";

            // Préparation de la requête pour éviter les injections SQL
            $query = $db->prepare($sql);

            // Relier les paramètres à nos marqueurs nominatifs à l'aide d'un bindValue
            $query->bindValue(':player_pseudo', $playerPseudo, PDO::PARAM_STR);

            // Exécution de la requête
            $query->execute();

            // Récupération du résultat de la requête dans une variable
            $result = $query->fetchAll(PDO::FETCH_ASSOC);

            // Retourner le résultat
            return $result ?? [];
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
            die();
        }
    }
}
