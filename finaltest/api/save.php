<?php
    /*  Filename: products_save.php
    *   Date: 
    *   Author: Your name
    *   Objective: 
    *   @functions:
    */
include_once ("db_functions.php");
$status = array("status"=>false);
if($_POST){
    $a= $_POST['username'];
    $b = $_POST['password'];
    $sql = "INSERT INTO joinmembers (username, password) 
    VALUES ('$a', '$b')"; 
    if(saveData($sql))
        $status = array("status"=>true);
}
echo json_encode($status);