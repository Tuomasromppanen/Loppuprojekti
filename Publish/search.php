<?php

require('../Publish/dbafunktio.php');
require('../Publish/headers.php');

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'),PHP_URL_PATH);
$paramenters = explode('/', $uri);

$phrase = $paramenters[1];

$db = SqliteConnection('../mydatabase.db');

$sql = "SELECT * FROM tuote WHERE tuotenimi LIKE '%$phrase%'";
$query = $db->query($sql);
$results = $query->fetchAll(PDO::FETCH_ASSOC);
header('HTTP/1.1 200 OK');
echo json_encode($results);


// $sql = "SELECT * FROM tuote";
// $query = $db->query($sql);
// $results = $query->fetchAll(PDO::FETCH_ASSOC);
// header('HTTP/1.1 200 OK');

// $responseJson = json_encode($results);
// header('Content-type: application/json');
// echo $responseJson;

?>
