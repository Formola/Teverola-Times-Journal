<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $title = $data->data->title;
        $argomento = $data->data->argomento;
        $body = $data->data->body;
        $img = $data->data->img;
        $journalist_id = $data->data->id_utente;

        $query = "INSERT INTO `articolo` (`ID_Article`, `Titolo`, `Argomento`, `body`, `img`, `DataPubblicazione`, `Utente`) 
                  VALUES (NULL ,'$title','$argomento','$body','$img', current_timestamp() ,'$journalist_id') ";
        $result = queryToDB($query);

        if ( $result == 1 ){
            echo "Query inviata con successo";
        }   

    }

?>