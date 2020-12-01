<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['mode'])) {
        if ($_GET['mode'] == 'already_logged') {
            $user_id = $_POST['user_id'];
            $query = "SELECT * FROM `editors` WHERE `user_id` = '$user_id'";
            $result = mysqli_query( $link, $query );
            if (mysqli_num_rows( $result ) > 0) {
                echo json_encode("SUCCESS");
            } else {
                echo json_encode("FAILED");
            }
        }

        if ($_GET['mode'] == 'admin') {
            $user_id = $_POST['admin_id'];
            $query = "SELECT * FROM `admins` WHERE `user_id` = '$user_id'";
            $result = mysqli_query( $link, $query );
            if (mysqli_num_rows( $result ) > 0) {
                echo json_encode("SUCCESS");
            } else {
                echo json_encode("FAILED");
            }
        }
    }
} else {
    echo "GET";
}

?>