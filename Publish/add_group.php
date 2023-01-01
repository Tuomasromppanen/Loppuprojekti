<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input -> name ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (empty($name)) {
    exit;
}

$sql = "INSERT INTO tuoteryhma (trnimi) values('$name')";
$stmt = $db->prepare($sql);
$stmt->execute();
$trnro = $db->lastInsertId();
$data = array('trnro' => $trnro, 'trnimi' => $name);
print json_encode($data);

?>