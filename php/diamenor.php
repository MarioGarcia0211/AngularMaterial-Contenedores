<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'database.php';
 
// delete message prompt will be here
 
// select all data
$set = "SET lc_time_names = 'es_CO';";
$query = "SELECT STR_TO_DATE(fecha, '%e/%c/%Y') AS convertidofecha, YEAR(STR_TO_DATE(fecha, '%e/%c/%Y')) AS convertidoAño, MONTH(STR_TO_DATE(fecha, '%e/%c/%Y')) AS convertidoMes, MONTHNAME(STR_TO_DATE(fecha, '%e/%c/%Y')) AS nombreMes, DAY(STR_TO_DATE(fecha, '%e/%c/%Y')) AS convertidoDia, COUNT(STR_TO_DATE(fecha, '%e/%c/%Y')) AS totalDia FROM `contenedor` GROUP BY 1 HAVING COUNT(STR_TO_DATE(fecha, '%e/%c/%Y')) > 1 ORDER BY `totalDia` ASC LIMIT 1;";

$es = $con->prepare($set);
$es->execute();
$results = $es->fetchAll(PDO::FETCH_ASSOC);

$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>