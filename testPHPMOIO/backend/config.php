<?php

header('Acess-Control-Allow-Origin: *');
header('Acess-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Acess-Control-Allow-Headers: token, content Type');
header('Acess-Control-Max-Age: 1728000');
header('Acess-Control-Allow-Length: 0');
header('Acess-Type: text/plain');

$con = mysqli_connect("localhost","root","","testPHP") or die ("could not connect DB");





?>
