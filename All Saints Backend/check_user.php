<?php
include './connection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['user'];
    $query = "SELECT * FROM `chat` WHERE `user` = '$user'";
            $result = mysqli_query( $link, $query );
            if ( mysqli_num_rows( $result ) > 0 ) {
                echo json_encode("EXISTS");
            } else {
                echo json_encode("NOT EXIST");
            }
}


?>