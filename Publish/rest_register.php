<?php

require('./headers.php');
session_start();
require('./db_user_controller.php');

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($user->email) || !isset($user->pw)) {
    http_response_code(400);
    echo "user not defined. Give valid email and password";
    return;
}


// Oikeasti pitäisi käyttäjänimi ja salasana
// tutkia järkevästi (mitkä merkit sallittuja jne ja ilmoittaa käyttäjälle)
// $uname = strip_tags($user->uname);

registerUser($user->email, $user->pw);

// $_SESSION['sahkoposti'] = $user->email;

http_response_code(200);
echo "User". $user->email ."registered";

?>