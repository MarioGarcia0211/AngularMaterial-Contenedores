<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'database.php';
 
// delete message prompt will be here
 
// select all data
$query = "SELECT id, cnt, longi, fecha, YEAR(STR_TO_DATE(fecha, '%e/%c/%Y')) AS año, MONTH(STR_TO_DATE(fecha, '%e/%c/%Y')) AS mes, MONTHNAME(STR_TO_DATE(fecha, '%e/%c/%Y')) AS nombreMes, DAY(STR_TO_DATE(fecha, '%e/%c/%Y')) AS dia FROM `contenedor`;";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>