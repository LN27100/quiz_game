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
            $sql = "INSERT INTO player (player_pseudo, player_mail, player_password)
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
            $sql = "SELECT * FROM player WHERE player_mail = :email";

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
    
    /**
     * Methode permettant de récupérer les informations d'un utilisateur avec son mail comme paramètre
     * 
     * @param string $email Adresse mail de l'utilisateur
     * 
     * @return bool
     */
    public static function checkMailExists(string $email): bool
    {
        // le try and catch permet de gérer les erreurs, nous allons l'utiliser pour gérer les erreurs liées à la base de données
        try {
            // Création d'un objet $db selon la classe PDO
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);

            // stockage de ma requete dans une variable
            $sql = "SELECT * FROM `player` WHERE `player_mail` = :email";

            // je prepare ma requête pour éviter les injections SQL
            $query = $db->prepare($sql);

            // on relie les paramètres à nos marqueurs nominatifs à l'aide d'un bindValue
            $query->bindValue(':email', $email, PDO::PARAM_STR);

            // on execute la requête
            $query->execute();

            // on récupère le résultat de la requête dans une variable
            $result = $query->fetch(PDO::FETCH_ASSOC);

            // on vérifie si le résultat est vide car si c'est le cas, cela veut dire que le mail n'existe pas
            if (empty($result)) {
                return false;
            } else {
                return true;
            }
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
            die();
        }
    }

    /**
     * Methode permettant de vérifier si le pseudo existe déjà dans la base de données
     * 
     * @param string $pseudo Pseudo à vérifier
     * 
     * @return bool
     */
    public static function checkPseudoExists(string $pseudo): bool
    {
        try {
            $db = new PDO(DBNAME, DBUSER, DBPASSWORD);

            $sql = "SELECT * FROM `player` WHERE `player_pseudo` = :pseudo";

            $query = $db->prepare($sql);
            $query->bindValue(':pseudo', $pseudo, PDO::PARAM_STR);
            $query->execute();

            $result = $query->fetch(PDO::FETCH_ASSOC);

            if (empty($result)) {
                return false;
            } else {
                return true;
            }
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
            die();
        }
    }

     /**
     * * Méthode pour modifier le profil utilisateur
     */
    public static function updateProfil(int $player_id, string $new_pseudo, string $new_email)
{   
    try {
        $db = new PDO(DBNAME, DBUSER, DBPASSWORD, array(PDO::ATTR_PERSISTENT => true));
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "UPDATE player 
                SET player_pseudo = :new_pseudo, 
                    player_mail = :new_email, 
                WHERE player_id = :player_id";

        $query = $db->prepare($sql);

        $query->bindValue(':new_pseudo', $new_pseudo, PDO::PARAM_STR);
        $query->bindValue(':new_email', $new_email, PDO::PARAM_STR);
        $query->bindValue(':player_id', $player_id, PDO::PARAM_INT);

        $query->execute();
    } catch (PDOException $e) {
        error_log('Erreur lors de la mise à jour du profil : ' . $e->getMessage());
        throw new Exception('Une erreur s\'est produite lors de la mise à jour du profil.');
    }
}

/**
 * Méthode pour supprimer le profil utilisateur
 * @param int $user_id est l'id de l'utilisateur
 * @return bool|string Renvoie true si la suppression est réussie, sinon renvoie un message d'erreur
 */

public static function deleteUser(int $player_id) {
    try {
        $db = new PDO(DBNAME, DBUSER, DBPASSWORD);

        $sql = "DELETE FROM player WHERE player_id = :player_id";
        $query = $db->prepare($sql);
        $query->bindValue(':player_id', $player_id, PDO::PARAM_INT);
        $query->execute();

          // Détruire la session
          session_destroy();

          // Supprimer le mot de passe de la session
          unset($_SESSION['player_password']);

        
        return true;
    } catch (PDOException $e) {
        // Si une erreur se produit, retourner le message d'erreur
        return 'Erreur : ' . $e->getMessage();
    }
}

}
?>
