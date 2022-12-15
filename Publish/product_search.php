<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);

$phrase = $parameters[1];

$sql = "SELECT * FROM tuote WHERE tuotenimi LIKE '%$phrase%'";
$query = $db->query($sql);
$results = $query->fetch();
echo json_encode($results);

?>