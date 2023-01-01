<?php

require('./headers.php');
session_start();
require('./db_user_controller.php');

if(isset($_SESSION['sahkoposti'])) {
    http_response_code(200);
    echo $_SESSION['sahkoposti'];
    return;
}

if(!isset($_POST['email']) || !isset($_POST['pw'])) {
    http_response_code(401);
    echo "Sähköpostia ei löydy";
    return;
}

$email = $_POST['email'];
$pw = $_POST['pw'];

$verifield_email = checkUser($email, $pw);

if($verifield_email) {
    $email = $verifield_email['email'];
    $is_admin = $verifield_email['admin'];
    $_SESSION['sahkoposti'] = $email;
    $_SESSION['admin'] = $is_admin;
    http_response_code(200);
    echo json_encode(['email' => $email, 'admin' => $is_admin]);
} else {
    http_response_code(401);
    echo "Väärä sähköposti ja salasana";
}

?>