<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input -> name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$sql = "INSERT INTO tuoteryhma (trnimi) values('$name')";
$trnimi = $db -> exec($sql);
$data = array('trnro' => $db -> lastInsertId(), 'trnimi' => $name);
print json_encode($data);

?>