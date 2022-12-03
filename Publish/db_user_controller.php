<?php

require('../Publish/dbafunktio.php');

/**
 * Inserts a new user in the database
 */

function registerUser($uname, $pw) {

    $db = SqliteConnection('../Publish/dbafunktio.php');
    $pw = password_hash($pw, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usertable (username, passwd) VALUES (?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname, $pw));
    
}   

/**
 * Checks the user credentials and returns the username
 */

function checkUser($uname, $pw) {

    $db = SqliteConnection('../Publish/dbafunktio.php');

    $sql = "SELECT passwd FROM usertable WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)) {
        return password_verify($pw, $hashedpw) ? $uname: null;
    }

    return null;

}

/**
 * Getting personal messages for the user
 */

 function getUserMessages($uname) {

    $db = $db = SqliteConnection('../Publish/dbafunktio.php');

    $sql = "SELECT msg FROM messagetable WHERE username=?";
    $statement = $db->prepare($sql);
    $statement -> execute(array($uname));

    return $statement->fetchAll(PDO::FETCH_COLUMN,0);
    
 }

?>