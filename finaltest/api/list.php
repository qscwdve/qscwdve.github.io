<?php
    /*  Filename: restuarants.php
    *   Date: 
    *   Author: Your name
    *   Objective: 
    *   @functions:
    */
include_once ("db_functions.php");
$sql = "SELECT * FROM joinmember ORDER BY name";
$rs = getData($sql);
//var_dump($rs);
$restos = array();
if($rs){
    while ($row = $rs->fetch_assoc()) {
        $restos[] = $row;
    }
   
}
//var_dump($products);
$data = json_encode($restos);
echo "$data";