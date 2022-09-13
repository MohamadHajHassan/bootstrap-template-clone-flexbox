<?php
include("connection.php");

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$text_message = $_POST["message_text"];

$query = $mysqli->prepare("INSERT INTO messages(name, email, phone, text_message) VALUE(?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $text_message);
$query->execute();

$response = [];
$response["Successful Submission"] = true;

echo json_encode($response);
?>