<?php

require('./headers.php');
session_start();
require('./db_user_controller.php');
session_destroy();

echo 'Session destroyed';

?>