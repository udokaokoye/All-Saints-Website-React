<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['table'])) {
        $table = $_GET['table'];
        $id = $_POST['id'];
        $query = "DELETE FROM `$table` WHERE `id` = '$id'";

        if (mysqli_query($link, $query)) {
            echo json_encode("SUCCESS");
        } else {
            echo json_encode("FAILED");
        }
    }
}

?>