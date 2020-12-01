<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['user'])) {
        if ($_GET['user'] === 'editor') {
            $lastname = $_POST['lastname'];
            $firstname = $_POST['firstname'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $password = password_hash($password, PASSWORD_DEFAULT);
            $userid = uniqid();
            $query = "INSERT INTO `editors` (`user_id`, `firstName`, `lastName`, `email`, `password`) 
            VALUES (
                '".mysqli_real_escape_string( $link, $userid )."', 
                '".mysqli_real_escape_string( $link, $firstname )."', 
                '".mysqli_real_escape_string( $link, $lastname )."', 
                '".mysqli_real_escape_string( $link, $email )."', 
                '".mysqli_real_escape_string( $link, $password )."'
                )";

                if (mysqli_query($link, $query)) {
                    echo json_encode('SUCCESS');
                }  else {
                    echo json_encode("FAILED");
                }
        }

        if ($_GET['user'] === 'admin') {
            $lastname = $_POST['lastname'];
            $firstname = $_POST['firstname'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $password = password_hash($password, PASSWORD_DEFAULT);
            $userid = uniqid();
            $query = "INSERT INTO `admins` (`user_id`, `lastName`, `firstName`, `email`, `password`) 
            VALUES (
                '".mysqli_real_escape_string( $link, $userid )."', 
                '".mysqli_real_escape_string( $link, $lastname )."', 
                '".mysqli_real_escape_string( $link, $firstname )."', 
                '".mysqli_real_escape_string( $link, $email )."', 
                '".mysqli_real_escape_string( $link, $password )."'
                )";

                if (mysqli_query($link, $query)) {
                    echo json_encode('SUCCESS');
                }  else {
                    echo json_encode("FAILED");
                }
        }
    }
}


?>