<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $titolo = addslashes($data->data->title);
        $argomento = addslashes($data->data->argomento);
        $img = $data->data->img;
        $body = addslashes($data->data->body);
        $id = $data->data->id_utente;
        $id_articolo = $data->data->id_articolo;

        $query = " UPDATE `articolo` 
                   SET `Titolo`='$titolo',`Argomento`='$argomento',`body`='$body' ,`img`='$img'
                   WHERE Utente = '$id' AND ID_ARTICLE = '$id_articolo' ";
        $result = queryToDB($query);

        if ( $result == 1) {
            echo "Query eseguita con successo" ;
        }

    }

?>