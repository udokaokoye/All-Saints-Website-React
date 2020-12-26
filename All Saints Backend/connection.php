<?php
define( 'URLROOT', 'http://192.168.1.4/All Saints Backend/' );
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
header( 'Access-Control-Allow-Headers: *' );
// header( 'Content-Type: application/json; charset=utf-8' );

$link = mysqli_connect( 'localhost', 'cathedral', 'advantage0907756', 'cathedral' );

if ( mysqli_connect_error() ) {
    die( 'There Was An Error Connecting To The Database' );
}
?>