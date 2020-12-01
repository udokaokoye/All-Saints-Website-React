<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset( $_GET['auth'] ) ) {
        if ( $_GET['auth'] === 'editor' ) {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = "SELECT * FROM `editors` WHERE `email` = '$email'";
            $result = mysqli_query( $link, $query );
            if ( mysqli_num_rows( $result ) > 0 ) {
                $row = mysqli_fetch_array( $result );
                $hashed_password = $row['password'];
                $user_id = $row['user_id'];
                if ( password_verify( $password, $hashed_password ) ) {
                    echo json_encode( ['VALID', $user_id] );
                } else {
                    echo json_encode( ['INVALID PASSWORD'] );
                }
            } else {
                echo json_encode( ['NOT FOUND'] );
            }

            // echo json_encode( $email );
        }

        if ( $_GET['auth'] === 'admin' ) {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = "SELECT * FROM `admins` WHERE `email` = '$email'";
            $result = mysqli_query( $link, $query );
            if ( mysqli_num_rows( $result ) > 0 ) {
                $row = mysqli_fetch_array( $result );
                $hashed_password = $row['password'];
                $user_id = $row['user_id'];
                if ( password_verify( $password, $hashed_password ) ) {
                    echo json_encode( ['VALID', $user_id] );
                } else {
                    echo json_encode( ['INVALID PASSWORD'] );
                }
            } else {
                echo json_encode( ['NOT FOUND'] );
            }

            // echo json_encode( $email );
        }
    }
} else {
    echo json_encode( 'WRONG' );
}

?>