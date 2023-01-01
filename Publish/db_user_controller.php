<?php

require('../Publish/dbafunktio.php');

/**
 * Inserts a new user in the database
 */

function registerUser($email, $pw) {

    $db = SqliteConnection('../mydatabase.db');
    $pw = password_hash($pw, PASSWORD_DEFAULT);

    $sql = "INSERT INTO kayttaja (sahkoposti, salasana, admin) VALUES (?,?, 0)";
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

    $sql = "SELECT salasana, admin FROM kayttaja WHERE sahkoposti=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($email));

    $row = $statement->fetch(PDO::FETCH_ASSOC);
    $hashedpw = $row['salasana'];
    $is_admin = $row['admin'];

    if(isset($hashedpw)) {
        if(password_verify($pw, $hashedpw)) {
            return ['email' => $email, 'admin' => $is_admin];
        } else {
            return null;
        }
    }

    return null;
 }

?>