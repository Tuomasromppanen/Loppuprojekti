<?php

require('../Publish/dbafunktio.php');
require('../Publish/headers.php');

$db = SqliteConnection('../mydatabase.db');
$sql = "SELECT tuotenimi FROM tuote";
$query = $db->query($sql);
$results = $query->fetchAll(PDO::FETCH_ASSOC);
header('HTTP/1.1 200 OK');

$responseJson = json_encode($results);
header('Content-type: application/json');
echo $responseJson;



?>