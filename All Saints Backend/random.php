<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset( $_GET['qr'] ) ) {
        if ( $_GET['qr'] === 'showcase_text' ) {
            $query = 'SELECT `showcase_text` FROM `random`';
            $result = mysqli_query( $link, $query );
            $row = mysqli_fetch_array( $result );
            echo json_encode( $row );
        }

        if ( $_GET['qr'] === 'all' ) {
            $query = 'SELECT * FROM `random` ORDER BY id DESC LIMIT 1';
            $result = mysqli_query( $link, $query );
            $row = mysqli_fetch_array( $result );
            echo json_encode( $row );

            // echo json_encode( 'Hello' );
        }
    }
} else {
    echo json_encode( 'WRONG' );
}

?>