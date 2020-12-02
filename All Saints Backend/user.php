<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset( $_GET['qr'] ) ) {
        if ( $_GET['qr'] === 'editor' ) {
            $query = 'SELECT * FROM `editors` ORDER BY id DESC';
            $result = mysqli_query( $link, $query );
            $data = [];
            while ( $row = mysqli_fetch_array( $result ) ) {
                array_push( $data, $row );
            }
            echo json_encode( $data );
        }

        if ( $_GET['qr'] === 'admin' ) {
            $query = 'SELECT * FROM `admins` ORDER BY id DESC';
            $result = mysqli_query( $link, $query );
            $data = [];
            while ( $row = mysqli_fetch_array( $result ) ) {
                array_push( $data, $row );
            }
            echo json_encode( $data );
        }
    }

    if ( isset( $_GET['del'] ) ) {
        $table = $_GET['del'];
        $id = $_POST['id'];
        $query = "DELETE FROM `$table` WHERE `id` = '$id'";

        if ( mysqli_query( $link, $query ) ) {
            echo json_encode( 'YESSSSSSSSSSSSSs' );
        } else {
            echo json_encode( 'NOOOOOOOOOOOOOOOOOOOOOOoo' );
        }

        // echo json_encode( $_POST['id'] );
    }
}

?>