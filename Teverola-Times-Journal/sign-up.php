<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include("index.php");

    $data = json_decode(file_get_contents("php://input"));

    if(isset($data)){

        $nome = $data->data->nome;
        $cognome = $data->data->cognome;
        $email = $data->data->email;
        $password = $data->data->password;
        
        $check = "SELECT COUNT(*) as count_email FROM `utente` WHERE Email = '$email' ";
        $result_check = queryToDB($check);
        $row = mysqli_fetch_assoc($result_check);

        //print_r($row["count_email"]);

        if ( $row["count_email"] == 0) {
            
            $query = "INSERT INTO  `utente` 
            (`User_ID`, `Email`, `UserType`, `Password`, `Nome`, `Cognome`, `DataInizioAbbonamento`, `DataFineAbbonamento`, `img`, `Salary`) 
            VALUES (NULL, '$email','UTENTE','$password', '$nome','$cognome', current_timestamp() , DATE_ADD( current_timestamp(), INTERVAL 1 MONTH ) , NULL , NULL )";

            $result = queryToDB($query);
            echo "Registrazione avvenuta con successo";

        } else if ( $row["count_email"] == 1 ) {
            echo "Utente gia registrato con questa Email";
        }
    }
?>