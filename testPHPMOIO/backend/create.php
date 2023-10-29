<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$codeemail = $data['email'];
$senha = $data['senha'];

$q = mysqli_query($con, "INSERT INTO 'loguin' ('id','email','senha') VALUES ('null', '$codeemail', '$senha')");

if($q) {
    http_response_code(201);
    $message['status'] = "Sucesso";
}else{
    http_response_code(422);
    $message['status'] = "Erro";
}

echo json_encode($message);
echo mysqli_error($con);
