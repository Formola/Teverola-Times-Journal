<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $nome = addslashes($data->data->nome);
        $cognome = addslashes($data->data->cognome);
        $ruolo = $data->data->ruolo;
        $stipendio = $data->data->stipendio;
        $id = $data->data->id_user;


        if ( $ruolo == "UTENTE" ) {
            echo "we";
            $query = " UPDATE `utente` 
            SET `UserType`='$ruolo',`Nome`='$nome',`Cognome`='$cognome',`Salary`= NULL , `DataInizioAbbonamento` = current_timestamp() , `DataFineAbbonamento` = DATE_ADD( current_timestamp(), INTERVAL 1 MONTH )
            WHERE User_ID = '$id' ";
            
            $result = queryToDB($query);

            if ( $result == 1 ){
                echo "Query inviata con successo";
            } 
        } else if ( $ruolo == "ADMIN" ){

            $query = " UPDATE `utente` 
                    SET `UserType`='$ruolo',`Nome`='$nome',`Cognome`='$cognome',`Salary`= NULL , `DataInizioAbbonamento` = NULL , `DataFineAbbonamento` = NULL
                    WHERE User_ID = '$id' ";
            
            $result = queryToDB($query);

            if ( $result == 1 ){
                echo "Query inviata con successo";
            }   
        } else {
            $query = " UPDATE `utente` 
            SET `UserType`='$ruolo',`Nome`='$nome',`Cognome`='$cognome',`Salary`='$stipendio', `DataInizioAbbonamento` = NULL , `DataFineAbbonamento` = NULL
            WHERE User_ID = '$id' ";
            
            $result = queryToDB($query);

            if ( $result == 1 ){
                echo "Query inviata con successo";
            } 
        }

    }


?>