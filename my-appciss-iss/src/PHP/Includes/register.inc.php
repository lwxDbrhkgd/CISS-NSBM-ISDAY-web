<?php

if(isset($_POST["submit"])){
  $name = $_POST["name"];
  $stuId= $_POST["stuid"];
  $batch = $_POST["st_batch"];
  $degree = $_POST["degree"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];


  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  include_once 'dbh.inc.php';
  include_once 'functions.inc.php';

  $emptyInputs=emptyInputSignup($name, $stuId, $batch, $degree, $phone, $email);  //check for empty inputs
  $invaliedEmail=invaliedEmail($email); //check for invalied email
  $invaliedphone=invaliedphone($phone); //check for invalied phone number



//empty inputs error handling

if ($emptyInputs !== false){
  header("location: ../index.php?error=emptyinput");
  exit();
}
if ($invaliedEmail !== false){
  header("location: ../index.php?error=invaliedemail");
  exit();
}
if ( $invaliedphone !== false){
  header("location: ../index.php?error=invaliedphone"); 
  exit();
}


createuser($conn, $name, $stuId, $batch, $degree, $phone, $email);





}

else{
  header("location: ../index.php");
  exit();
}