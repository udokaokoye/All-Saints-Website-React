<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset( $_GET['mode'] ) ) {
        if ( $_GET['mode'] === 'upl' ) {
            $chat_id = $_POST['chat_id'];
            $query = "UPDATE `chat` SET `likes` = 'true' WHERE `id` = '$chat_id'";
            if ( mysqli_query( $link, $query ) ) {
                echo json_encode( 'SUCCESS' );
            } else {
                echo json_encode( 'FAILED' );
            }
        }
    }
}

?>