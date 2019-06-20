<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>joinmember</title>
</head>
<body>
    <h1>Thank you for signing up for membership.</h1><br/>
    <p>Please enter your ID and password.</p>
    <div id="entry">
    <form method="POST" action="login.php">
    <div id="entry">
        ID: <br/>
        <input type="text" id="username"/>
        <br/>
        Password: <br/>
        <input type="text" id="password"/>
        <br/>
        <button id="btn_save">Save</button>
        
    </div>
    </form>
    <script src="app.js"></script>

</body>
</html>