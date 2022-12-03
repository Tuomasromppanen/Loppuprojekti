<?php

require('./headers.php');
session_start();
require('./db_user_controller.php');

if(isset($_SESSION['username'])) {
    http_response_code(200);
    echo $_SESSION['username'];
    return;
}

if(!isset($_POST['uname']) || !isset($_POST['pw'])) {
    http_response_code(401);
    echo "User not defined";
    return;
}

$uname = $_POST['uname'];
$pw = $_POST['pw'];

$verifield_uname = checkUser($uname, $pw);

if($verifield_uname) {
    $_SESSION['username'] = $verifield_uname;
    http_response_code(200);
    echo $verifield_uname;
} else {
    http_response_code(401);
    echo "Wrong username and password";
}

?>