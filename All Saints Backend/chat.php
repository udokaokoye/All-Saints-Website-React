<?php
 include './connection.php';

 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     if (isset($_GET['qr'])) {
         if ($_GET['qr'] === 'upl') {
             $chat = $_POST['chat'];
             $user = $_POST['user'];
            $query = "INSERT INTO `chat` (`user`, `message`) VALUES 
            (
            '".mysqli_real_escape_string( $link, $user )."', 
            '".mysqli_real_escape_string( $link, $chat )."'
             )";
            if (mysqli_query($link, $query)) {
                echo json_encode('SUCCESS');
            }
         }

         if ($_GET['qr'] === 'dwl') {
            $query = "SELECT * FROM `chat`";
            $result = mysqli_query($link, $query);
            $data = [];
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }

            echo json_encode($data);
        }
     }
 }
?>