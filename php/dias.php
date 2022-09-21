<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'database.php';
 
// delete message prompt will be here
 
// select all data
$query = "SELECT STR_TO_DATE(fecha, '%e/%c/%Y') AS fecha, YEAR(STR_TO_DATE(fecha, '%e/%c/%Y')) AS año, MONTH(STR_TO_DATE(fecha, '%e/%c/%Y')) AS mes, DAY(STR_TO_DATE(fecha, '%e/%c/%Y')) AS dia, COUNT(STR_TO_DATE(fecha, '%e/%c/%Y')) AS totalxDia FROM `contenedor` GROUP BY 1 HAVING COUNT(STR_TO_DATE(fecha, '%e/%c/%Y'));";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>