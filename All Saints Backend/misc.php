<?php
include './connection.php';

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $show_txt = $_POST['show_txt'];
    $banner_txt = $_POST['banner_txt'];
    $image = $_POST['live_img'];
    $live_txt = $_POST['live_txt'];
    $live_service = $_POST['live_service'];
    $cnt_phone = $_POST['cnt_phone'];
    $cnt_email = $_POST['cnt_email'];
    $live_img_width = $_POST['live_img_width'];
    if ( isset( $_FILES['live_img'] ) ) {
        $path = 'Images/';
        $file_name = $_FILES['live_img']['name'];
        $file_tmp = $_FILES['live_img']['tmp_name'];
        $file_type = $_FILES['live_img']['type'];
        $file = $path . $file_name;
        if ( move_uploaded_file( $file_tmp, $file ) ) {
            $error = false;
            $image = URLROOT . $file;
        } else {
            $error = true;
        }
    }
    $query = "INSERT INTO `random` (`showcase_text`, `banner_txt`, `live_img`, `live_img_width`, `live_txt`, `live_service`, `cnt_phone`, `cnt_email`) 
    VALUES ( 
        '".mysqli_real_escape_string( $link, $show_txt )."', 
        '".mysqli_real_escape_string( $link, $banner_txt )."', 
        '".mysqli_real_escape_string( $link, $image )."', 
        '".mysqli_real_escape_string( $link, $live_img_width )."', 
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