<?php

require('../Publish/dbafunktio.php');

/**
 * Inserts a new user in the database
 */

function registerUser($email, $pw) {

    $db = SqliteConnection('../mydatabase.db');
    $pw = password_hash($pw, PASSWORD_DEFAULT);

    $sql = "INSERT INTO kayttaja (sahkoposti, salasana) VALUES (?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($email, $pw));
    
}   

/**
 * Checks the user email if user have been already registered
 */

 function getUsers() {
    // Connect to the database
    $db = SqliteConnection('../mydatabase.db');

    // Retrieve all the users
    $sql = "SELECT sahkoposti FROM kayttaja";
    $result = $db->prepare($sql);
    $result->execute();
    $users = $result->fetchAll();

    return $users;
}

/**
 * Checks the user credentials and returns the username
 */

function checkUser($email, $pw) {

    $db = SqliteConnection('../mydatabase.db');

    $sql = "SELECT salasana FROM kayttaja WHERE sahkoposti=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($email));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)) {
        return password_verify($pw, $hashedpw) ? $email: null;
    }

    return null;

}

/**
 * Getting personal messages for the user
 */

 function getUserMessages($uname) {

    $db = $db = SqliteConnection('../mydatabase.db');

    $sql = "SELECT msg FROM messagetable WHERE username=?";
    $statement = $db->prepare($sql);
    $statement -> execute(array($uname));

    return $statement->fetchAll(PDO::FETCH_COLUMN,0);
    
 }

?>