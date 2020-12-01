<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    // $query = 'SELECT * FROM `random`';
    // $result = mysqli_query( $link, $query );
    // $row = mysqli_fetch_array( $result );

    // print_r( $row );

    // $_SESSION['id'] = 'TESTTTTT';

    echo json_encode( 'CORRECT' );
} else {
    echo password_hash('advantage0907756', PASSWORD_DEFAULT);
    // echo uniqid();
}

?>