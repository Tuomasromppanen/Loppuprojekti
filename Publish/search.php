<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

$uri = parse_url(filter_input(INPUT_SERVER, 'PATH_INFO'), PHP_URL_PATH);

$parameters = explode('/', $uri);
$phrase = $parameters[1];

$sql = "SELECT * FROM tuote where tuotenimi like '%$phrase%'";
$query = $db->query($sql);
$results = $query->fetchALL(PDO::FETCH_ASSOC);

header('HTTP/1.1 200 OK');
echo json_encode($results);

?>
