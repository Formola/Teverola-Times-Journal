<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $nome = $data->data->nome;
        $cognome = $data->data->cognome;
        $img = $data->data->img;
        $id = $data->data->user_id;

        $query = "UPDATE `utente` 
                  SET `Nome`='$nome',`Cognome`='$cognome',`img`='$img' 
                  WHERE User_ID = '$id' ";

        $result = queryToDB($query);

        if ( $result == 1) {
            echo "Query eseguita con successo" ;
        }
    }


?>