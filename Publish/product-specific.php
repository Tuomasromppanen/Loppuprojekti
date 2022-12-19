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

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$product_id = $parameters[1];

$sql = "SELECT * FROM tuote where id = $product_id";
$query = $db->query($sql);
$product = $query->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT koko FROM kokoluokat INNER JOIN tuote ON kokoluokat.id = tuote.id WHERE tuote.id = $product_id";
$query = $db->query($sql);
$koko_results = $query->fetchAll(PDO::FETCH_ASSOC);


header('HTTP/1.1 200 OK');
echo json_encode(array(
    "tuote" => $product,
    "koko" => $koko_results
    
), JSON_PRETTY_PRINT);




?>