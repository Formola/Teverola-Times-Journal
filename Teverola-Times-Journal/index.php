<?php
    declare(strict_types=1);
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;


    require_once('vendor/autoload.php');
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    session_start();

    function queryToDB($query)
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "teverola-times-journal";
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        if (!$conn) {
            die("Connessione fallita");
        }
        $result = mysqli_query($conn, $query);

        if (!$result) {
            exit("Errore: impossibile eseguire la query" . mysqli_error($conn));
        }

        mysqli_close($conn);

        return $result;
    }

    if (isset($_GET["type"])) {

        if ($_GET["type"] == "fetch-session") {
            if (! preg_match('/Bearer\s(\S+)/', apache_request_headers()["Authorization"], $matches)) {
                header('HTTP/1.0 400 Bad Request');
                echo 'Token not found in request';
                exit;
            }
            $jwt = $matches[1];
            if (! $jwt) {
                // No token was able to be extracted from the authorization header
                header('HTTP/1.0 400 Bad Request');
                exit;
            }
            try {
                $secret_Key  = '68V0zWFrS72GbpPreidkQFLfj4v9m3Ti+DXc8OB0gcM=';
                $token = JWT::decode($jwt, new Key($secret_Key, 'HS512'));
                $decoded_array = (array) $token;
            } catch(Exception $e) {
                $arr = ["jwt-validate" => false, "error" => "Invalid session."];
                echo json_encode($arr);
                exit;
            }
            $now = new DateTimeImmutable();
            $serverName = "localhost";
    
            if ($token->iss !== $serverName ||
                $token->nbf > $now->getTimestamp() ||
                $token->exp < $now->getTimestamp())
            {
                header('HTTP/1.1 401 Unauthorized');
                exit;
            }
            
            $query = "SELECT * FROM `utente` WHERE Email='".$decoded_array["userName"]."';";
            $result = queryToDB($query);
            while ($row = $result->fetch_assoc()) {
                $myArray[] = $row;
            }
            $arr = ["jwt-validate" => true, "user" => $myArray[0]];
            echo json_encode($arr);
        }
    
        if ($_GET["type"] == "user-login") {
            $data = $_GET["data"];
            $decodedData = json_decode($data, true);
            $query = "SELECT * FROM `utente` WHERE Email='" . $decodedData["email"] . "' AND Password='" . $decodedData["password"] . "'";
            $result = queryToDB($query);
            if (mysqli_num_rows($result) == 0) {
                http_response_code(401);
                $arr = array("error" => "wrong credentials");
                echo json_encode($arr);
            } else {
                while ($row = $result->fetch_assoc()) {
                    $myArray[] = $row;
                }
    
                $userDecoded = $myArray[0];
    
                // CREATE JWT
                $secret_Key  = '68V0zWFrS72GbpPreidkQFLfj4v9m3Ti+DXc8OB0gcM=';
                $date   = new DateTimeImmutable();
                $expire_at     = $date->modify('+1 month')->getTimestamp();      // Add 1 Year
                $domainName = "localhost";
                $email   = $userDecoded["Email"];                                           // Retrieved from filtered POST data
                $request_data = [
                    'iat'  => $date->getTimestamp(),         // Issued at: time when the token was generated
                    'iss'  => $domainName,                       // Issuer
                    'nbf'  => $date->getTimestamp(),         // Not before
                    'exp'  => $expire_at,                           // Expire
                    'userName' => $email,                     // User name
                ];
    
                $encodedJWT = JWT::encode(
                    $request_data,
                    $secret_Key,
                    'HS512'
                );
                
                $arrayObject = array("user" => $userDecoded, "jwt" => $encodedJWT);
                echo json_encode($arrayObject);
            }
        }

        if ( $_GET["type"] == "get-all-users"){

            $query = "SELECT User_ID,UserType,Nome,Cognome,Email,Salary,DataInizioAbbonamento,DataFineAbbonamento FROM `utente` WHERE 1;";
            $result = queryToDB($query);
            
            echo '[';
            for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
            }
            echo ']';
        }

        if ( $_GET["type"] == "get-articles"){

            $query = "SELECT * from articolo WHERE 1;";
            $result = queryToDB($query);
            
            echo '[';
            for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
            }
            echo ']';
        }

        if ( $_GET["type"] == "get-journalists"){

            $data = $_GET["data"];
            $decodedData = json_decode($data, true);
            $id = $decodedData["user_id"];

            $query = "SELECT Nome,Cognome,Email,img FROM `utente` WHERE User_ID = '$id';";
            $result = queryToDB($query);
            
            echo '[';
            for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
            }
            echo ']';
        }

        if ( $_GET["type"] == "get-user"){

            $data = $_GET["data"];
            $decodedData = json_decode($data, true);
            
            $id = $decodedData["id"];
            print_r($id);
            
            $query = "SELECT * FROM `utente` WHERE User_ID = '$id' ";
            $result = queryToDB($query);
            
            
            for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                echo json_encode(mysqli_fetch_object($result));
            } 
        }

        if ( $_GET["type"] == "get-from-searchbar"){

            $data = $_GET["data"];
            $decodedData = json_decode($data, true);
            if(isset($decodedData["keyword"])){
                $txt = $decodedData["keyword"];
                $query = "SELECT * FROM `articolo` WHERE Argomento = '$txt';";
                $result = queryToDB($query);
                
                echo '[';
                for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
                }
                echo ']';
            }
        }
    }

    

    if(isset($_POST)){

        $request = file_get_contents("php://input");
        $data=json_decode($request,true);
        

        if(isset($_POST["data"])){

            
            
            $data = $_POST["data"];

            print_r($data);
            
            $decodedData = json_decode($data, true);
            $query =  "SELECT * FROM `utente` Email='".$decodedData["email"]."';";
            $result = queryToDB($query);
            if (mysqli_num_rows($result) == 1) {
                http_response_code(401);
                $arr = array("error" => "utente già registrato con questa email");
                echo json_encode($arr);
            } else {
                $query = "INSERT INTO 
                            `utente` (`User_ID`, `Email`, `UserType`, `Password`, `Nome`, `Cognome`, `DataInizioAbbonamento`, `DataFineAbbonamento`, `img`, `Salary`) 
                            VALUES ( NULL,".$decodedData["email"].", \"UTENTE\" , ".$decodedData["password"]." , ".$decodedData["nome"]." ,".$decodedData["cognome"].", NULL,NULL,NULL,NULL);";

                $result = queryToDB($query);

            }
        }
    }


?>