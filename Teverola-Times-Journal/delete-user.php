<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    $id = $data->source;

    //controllo per lasciare sempre almeno 1 admin
    if ( $id != 0) {
        $query = "DELETE FROM `utente` WHERE User_ID = '$id'";
        $result = queryToDB($query);
        if ( $result == 1 ){
            echo "Query inviata con successo";
        }   
    }

?>