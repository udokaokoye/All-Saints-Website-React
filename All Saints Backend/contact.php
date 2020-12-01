<?php
include "./connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $lastname = $_POST['lastName'];
    $firstname = $_POST['firstName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $query = "INSERT INTO `contact` (`last_name`, `first_name`, `phone_no`, `email`, `message`) VALUES 
    ('".mysqli_real_escape_string( $link, $lastname )."', 
    '".mysqli_real_escape_string( $link, $firstname )."', 
    '".mysqli_real_escape_string( $link, $phone )."', 
    '".mysqli_real_escape_string( $link, $email )."', 
    '".mysqli_real_escape_string( $link, $message )."')";

if (mysqli_query($link, $query)) {
    echo json_encode("SUCCESS");
} else {
    echo json_encode("FAILED");
}
}




?>