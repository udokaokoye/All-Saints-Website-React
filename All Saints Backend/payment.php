<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $giving_for = $_POST['giving_for'];
    $amount = $_POST['amount'];
    $ref = $_POST['ref_id'];

    $query = "INSERT INTO `payments` (`fullname`, `email`, `phone`, `giving_for`, `amount`, `ref`) VALUES 
    (
        '".mysqli_real_escape_string( $link, $fullname )."', 
        '".mysqli_real_escape_string( $link, $email )."', 
        '".mysqli_real_escape_string( $link, $phone )."', 
        '".mysqli_real_escape_string( $link, $giving_for )."', 
        '".mysqli_real_escape_string( $link, $amount )."', 
        '".mysqli_real_escape_string( $link, $ref )."'
        )";

    if (mysqli_query($link, $query)) {
        echo json_encode("SUCCESS");
    } else {
        echo json_encode("FAILED");
    }
}

?>