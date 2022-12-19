<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'), PHP_URL_PATH);

$parameters = explode('/', $uri);
$trnro = $parameters[1];

$sql = "SELECT * FROM tuote where name like '%$phrase%";
$results = $query->fetchAll(PDO::FETCH_ASSOC);
header('HTTP/1.1 200 OK');
echo json_encode($results);

?>
