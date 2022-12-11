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
    $_SESSION['sahkoposti'] = $verifield_email;
    http_response_code(200);
    echo $verifield_email;
} else {
    http_response_code(401);
    echo "Väärä sähköposti ja salasana";
}

?>