<?php

function dbafunktio() {
    
    $ini = parse_ini_file('myconf.ini');
    echo 'test';  
    $host = $ini["host"];
    $dbname = $ini["db"];
    $username = $ini["username"];
    $pw = $ini["pw"];
    
    try {
    
        $dbcon = new PDO("mysql:host=$host;dbname=$dbname", $username, $pw);
        return $dbcon;

    }catch(PDOException $e) {
        http_response_code(505);
        echo "Service is currently unavailable";
        // echo $e->getMessage();

}

return null;

}

function SqliteConnection($filename) {
    try {
    
        $dbcon = new PDO("sqlite:".$filename); 
        return $dbcon;

    }catch(PDOException $e) {

        echo $e->getMessage();

}

return null;
}