<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $nome = addslashes($data->data->nome);
        $cognome = addslashes($data->data->cognome);
        $img = $data->data->img;
        $pw = $data->data->password;
        $id = $data->data->user_id;

        $query = "UPDATE `utente` 
                  SET `Nome`='$nome',`Cognome`='$cognome',`img`='$img' , `Password`='$pw'
                  WHERE User_ID = '$id' ";

        $result = queryToDB($query);

        if ( $result == 1) {
            echo "Query eseguita con successo" ;
        }
    }


?>