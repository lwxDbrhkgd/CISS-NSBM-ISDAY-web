<?php
//empty inputs error handling
function emptyInputSignup($name, $stuId, $batch, $degree, $phone, $email){
  $result;

  if(empty($name) || empty($stuId) || empty($batch) || empty($degree) || empty($phone) || empty($email)){
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;

}

function invaliedEmail($email){
  $result;

  if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function invaliedphone($phone){
  $result;

  if(!preg_match("/^[0-9]*$/", $phone)){
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}


function createuser($conn, $name, $stuId, $batch, $degree, $phone, $email){

  $sql = "INSERT INTO users (userName, usersId, userBatch, userDegree, userPhone, userEmail) VALUES (?, ?, ?, ?, ?, ?)";
  $stmt = mysqli_stmt_init($conn);
  
  if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("location: ../index.php?error=sqlerror");
      exit();
  } else {
      mysqli_stmt_bind_param($stmt, "ssssss", $name, $stuId, $batch, $degree, $phone, $email);
      mysqli_stmt_execute($stmt);
      header("location: ../index.php?signup=success");
      exit();
  }
}
