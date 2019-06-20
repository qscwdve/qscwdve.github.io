    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    
    <form method="POST" action="login-check.php">
        ID: <br/>
        <input type="text" name="username"/>
        <br/>
        Password: <br/>
        <input type="password" name="password"/>
        <br/>
        <input type="Submit" value="Login"/>
        
    </form>
    <form method="host" action="joinmember-check.php">
    <br/>
        <input type="Submit" value="joinmember"/>
    </form>
</body>
</html>