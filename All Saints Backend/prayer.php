<?php
include "./connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $lastname = $_POST['lastName'];
    $firstname = $_POST['firstName'];
    $prayer = $_POST['prayer'];
    $query = "INSERT INTO `prayer` (`last_name`, `first_name`, `prayer`) VALUES 
    ('".mysqli_real_escape_string( $link, $lastname )."', 
    '".mysqli_real_escape_string( $link, $firstname )."', 
    '".mysqli_real_escape_string( $link, $prayer )."')";

if (mysqli_query($link, $query)) {
    echo json_encode("SUCCESS");
} else {
    echo json_encode("FAILED");
}
}




?>