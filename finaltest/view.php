<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>View Page</title>
    <style>
        #main{
            margin:auto;
            width:500px;
            text-align:center;
        }
    </style>
</head>
<body>
    <div id="main">
    <h1>Information</h1>
<?php 
    if($_GET){
        include_once("api/db_functions.php");
        $rec = getRestaurant($_GET['username']);
        if($rec == null)
            echo "<h1>Invalid Request</h1>";
        else{
            
            $username =  $rec['username'];
            $password = $rec['password'];
           
            //FOR STARS
            for($x=0; $x<$stars;$x++){
                echo "&#9733;";
            }
            //IMAGE
            echo "<br/><img src='$photo' width='300px';/>";
            //NAME
            echo "<h1>$username</h1>";
            //STREET
            echo "<p>$password</p>";
            //PHONE

            //STREET
            echo "<p>Contact Information</p>";
        }
    }
    else{
        echo "<h1>Invalid Request</h1>";
    }
?>



</div>

</body>
</html>