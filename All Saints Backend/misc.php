<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $show_txt = $_POST['show_txt'];
    $banner_txt = $_POST['banner_txt'];
    $live_img = $_POST['live_img'];
    $live_txt = $_POST['live_txt'];
    $live_service = $_POST['live_service'];
    $cnt_phone = $_POST['cnt_phone'];
    $cnt_email = $_POST['cnt_email'];
    $query = "INSERT INTO `random` (`showcase_text`, `banner_txt`, `live_img`, `live_txt`, `live_service`, `cnt_phone`, `cnt_email`) 
    VALUES ( 
        '".mysqli_real_escape_string( $link, $show_txt )."', 
        '".mysqli_real_escape_string( $link, $banner_txt )."', 
        '".mysqli_real_escape_string( $link, $live_img )."', 
        '".mysqli_real_escape_string( $link, $live_txt )."', 
        '".mysqli_real_escape_string( $link, $live_service )."', 
        '".mysqli_real_escape_string( $link, $cnt_phone )."', 
        '".mysqli_real_escape_string( $link, $cnt_email )."'
    );";

    if ( mysqli_query( $link, $query ) ) {
        echo json_encode( 'SUCCESS' );
    } else {
        echo json_encode( 'FAILED' );
    }
} else {
    echo json_encode( 'WRONG' );
}

?>