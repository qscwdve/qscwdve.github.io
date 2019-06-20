<?php
    //LOGOUT
    session_destroy();
    header('Location: http://localhost/finaltest/login.php');
    exit;
