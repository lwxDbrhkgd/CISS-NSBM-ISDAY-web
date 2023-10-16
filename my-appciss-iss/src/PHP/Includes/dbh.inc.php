<?php

$Servername = "localhost";
$dbUsername = "Ciss123";
$dbPassword = "DEo3SFWBGFSvX50i"; 
$dbName = "ciss";

$conn = mysqli_connect($Servername, $dbUsername, $dbPassword, $dbName); //connect to database
if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}
else{

}