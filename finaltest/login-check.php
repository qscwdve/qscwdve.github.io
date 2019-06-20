    
    
<?php 
/*
    if($_POST){
        $a= $_POST['username'];
        $b = $_POST['password'];
        $sql = "INSERT INTO joinmembers (username, password) 
        VALUES ('$a', '$b')"; 
        if(saveData($sql))
            $status = array("status"=>true);
    }
*/

//------------------------------------------------




/*
for($i=1;$i<=6;$i++){

    $select_query = "SELECT username,password,score FROM joinmembers ";
    //$hi = $select_query;
    //$result_set = mysqli_query($conn);
    //$row = mysqli_fetch_row($result_set);   //id mysql
    $result_set = mysqli_query($link, $select_query);
       $row = mysqli_fetch_row($result_set);

$count_result[$i] = $row[0];


}
*/
   /*
   if(!$row){
    echo "쿼리결과가 없습니다.";
    exit;
  }
  
 // print_r($row);

   
   while ($row = mysqli_fetch_row($result_set)){

    print_r($row);

    echo '<br>';

 } 


 echo $row['username'];
 print_r ($row['password']);

echo "hi";
*/
/*
for($h=0;$h<$row;$h++) {
$a=$row['username'];
$b=$row['password'];

}*/

 


//$select_query = "SELECT password FROM joinmember";
//$hihi = $select_query;
//$result_sets = mysqli_query($conns);
//$rows = mysqli_fetch_row($result_sets); //password mysql



require_once("sess.php");


$link = mysqli_connect("localhost", "root", "", "joinmember");

$select_query = "SELECT username,password,score FROM joinmembers";
$result_set = mysqli_query($link, $select_query);
   $row = mysqli_fetch_row($result_set);    



   $count_result = array();

while ($row = mysqli_fetch_row($result_set)){

    print_r($row);

    echo '<br>';
    echo $row[0];
    echo '<br>';
    echo $row[1];
    echo '<br>';
    echo $row[0];
    echo '<br>';
    echo $row[1];
    echo '<br>';

    


if($_POST){
    //$sql = "SELECT * FROM joinmember ORDER BY name";
        $user = $_POST['username'];
        $pass = $_POST['password'];
        //mysql_select_db("joinmember", $s);
    if($user == $row[0] && $pass== $row[1]){
        $_SESSION['logged_in'] = true;
        $_SESSION['logged_user'] = $user;
        header('Location: http://localhost/finaltest/games/game.php');
        exit;
    }
}

}

    header('Location: http://localhost/finaltest/mislogin.php');
/*
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $name = $_POST["name"];
}
foreach($connect->query('SELECT * FROM joinmember') as $row){
     if($row["이름"] == $name){
          echo " | ";
          echo $row["이름"]." | ";
          echo $row["출석"]." | ";
          break;
      }
  }
*/



/*
        require_once("sess.php");
        if($_POST){
                $user = $_POST['username'];
                $pass = $_POST['password'];
                
            if($user == "superman" && $pass=="korea"){
                $_SESSION['logged_in'] = true;
                $_SESSION['logged_user'] = $user;
                header('Location: http://localhost/finaltest/welcome.php');
                exit;
            }
            else{
                header('Location: http://localhost/finaltest/mislogin.php');
                exit;
            }
        }
        */
    ?>