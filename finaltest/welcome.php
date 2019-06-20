    
<?php
    require_once("sess.php");
    if($_SESSION['logged_in']==false){
        header('Location: http://localhost/login/login.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="logout.php">logout</a>
    <h1>Welcome <?php echo $_SESSION['logged_user'];?> </h1>
</body>
</html>