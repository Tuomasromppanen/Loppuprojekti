<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

// $db = SqliteConnection('../mydatabase.db');

// $sql = "SELECT * FROM tuote";
// $query = $db->query($sql);
// $results = $query->fetchAll(PDO::FETCH_ASSOC);
// header('HTTP/1.1 200 OK');
// echo json_encode($results);¨

$db = SqliteConnection('../mydatabase.db');

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'), PHP_URL_PATH);

$parameters = explode('/', $uri);
$trnro = $parameters[1];

$sql = "SELECT * FROM tuoteryhma where trnro = $trnro";
$query = $db->query($sql);
$category = $query->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT * FROM tuote where trnro = $trnro";
$query = $db->query($sql);
$products = $query->fetchAll(PDO::FETCH_ASSOC);



header('HTTP/1.1 200 OK');
echo json_encode(array(
    "tuoteryhma" => $category['trnimi'],
    "tuotteet" => $products,
    
), JSON_PRETTY_PRINT);


?>