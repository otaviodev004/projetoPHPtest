<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$programa =  $_GET['programa'];

// if($programa == "validationLoguin"){
//     $return = a;
// }