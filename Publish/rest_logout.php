<?php

require('./headers.php');
session_start();
require('./db_user_controller.php');
session_destroy();
unset($_SESSION["username"]);

http_response_code(200);
echo "Logged out";

?>