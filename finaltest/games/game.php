<?php
    require_once("../sess.php");
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
    <title>Game Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<a href="../logout.php">logout</a>
    <h1>Welcome to my game page!</h1>
    <br>
    <div id="score_area">user ID :&nbsp;  <?php echo $_SESSION['logged_user']; ?> &nbsp; &nbsp;&nbsp; &nbsp;
        score : <input type="text" value="0" id="score" readonly="true" style="border: none"></div>
    <br>
    <div id="main">
        <h1 id="start" onclick="start()">Game start</h1>
    </div>
    <br>
    <div id="answer_area">answer : <input type="text" value="" id="answer" onkeydown="change()"> </div>
    <script src="app.js"></script>
</body>
</html>