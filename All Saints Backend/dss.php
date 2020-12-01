<?php
include './connection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['mode'])) {
        if ($_GET['mode'] === 'upl') {
            $dss_date = $_POST['dss_date'];
            $dss_content = $_POST['dss_content'];

            $query = "INSERT INTO `dss` (`date`, `content`) VALUES 
            ('".mysqli_real_escape_string( $link, $dss_date )."', 
            '".mysqli_real_escape_string( $link, $dss_content )."')";

            if (mysqli_query($link, $query)) {
                echo json_encode('SUCCESS');
            } else {
                echo json_encode('FAILED');
            }
        }

        if ($_GET['mode'] === 'dwl') {
            $query = "SELECT * FROM `dss` ORDER BY id DESC LIMIT 1";
            $result = mysqli_query($link, $query);
            $row = mysqli_fetch_array($result);
            // $data = [];
            // while ($row = mysqli_fetch_array($result)) {
            //     array_push($data, $row);
            // }

            echo json_encode([$row[1], nl2br($row[2])]);
        }
    }
}


?>