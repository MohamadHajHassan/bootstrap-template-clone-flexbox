<?php
include("connection.php");

$query = $mysqli->prepare("SELECT text_message FROM messages");
$query->execute();
$array = $query->get_result();

$response = [];

while($m = $array->fetch_assoc()){
    $response[] = $m;
}

$json = json_encode($response);
echo $json;
?>