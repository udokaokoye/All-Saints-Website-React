<?php
include './connection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['mode'])) {
        if ($_GET['mode'] === 'upl') {
            $evt_title = $_POST['evt_title'];
            $evt_date = $_POST['evt_date'];
            $evt_time = $_POST['evt_time'];

            $query = "INSERT INTO `events` (`evt_title`, `evt_date`, `evt_time`) VALUES 
            ('".mysqli_real_escape_string( $link, $evt_title )."', 
            '".mysqli_real_escape_string( $link, $evt_date )."', 
            '".mysqli_real_escape_string( $link, $evt_time )."')";

            if (mysqli_query($link, $query)) {
                echo json_encode('SUCCESS');
            } else {
                echo json_encode('FAILED');
            }
        }

        if ($_GET['mode'] === 'dwl') {
            $query = "SELECT * FROM `events` ORDER BY id DESC";
            $result = mysqli_query($link, $query);
            $data = [];
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }

            echo json_encode($data);
        }

        if ($_GET['mode'] === 'del') {
            $id = $_POST['id'];
            $query = "DELETE FROM `events` WHERE `id` = '$id'";
            if (mysqli_query($link, $query)) {
                echo json_encode('SUCCESS');
            } else {
                echo json_encode('FAILD');
            }

            
        }
    }
}


?>
