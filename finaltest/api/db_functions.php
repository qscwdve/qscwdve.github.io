<?php
/*
    Filename:     db_function.php 
    Author :    Your name
    @date  : etc
*/
$host = "localhost";
$user = "root";
$pass = "";
$db = "joinmember";
// @  - add this beside a function to hide error 
$link = @mysqli_connect($host,$user,$pass,$db);
function saveData($insertQuery){
    global $link;
    if($link){
        $link->query($insertQuery);
        return $link;
    }
    return false;
}
function getData($query){
    global $link;
    $rs = null;
    if($link){
        $rs = $link->query($query);
    }
    return $rs;
}   
function getRestaurant($id){
    $query = "SELECT * FROM joinmembers WHERE id='$id'";
    global $link;
    $rs = null;
    if($link){
        $rs = $link->query($query);
    }
    $row = null;
    if($rs) 
        $row = $rs->fetch_assoc();
    return $row;
}
