<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'database.php';
 
// delete message prompt will be here
 
// select all data
$set = "SET lc_time_names = 'es_CO';";
$es = $con->prepare($set);
$es->execute();
$results = $es->fetchAll(PDO::FETCH_ASSOC);

$query = "SELECT DATE_FORMAT(STR_TO_DATE(fecha, '%e/%c/%Y'), '%Y%m') AS añomes, MONTHNAME(STR_TO_DATE(fecha, '%e/%c/%Y')) AS nombreMes, MONTH(STR_TO_DATE(fecha, '%e/%c/%Y')) AS mes, YEAR(STR_TO_DATE(fecha, '%e/%c/%Y')) AS año, COUNT(DATE_FORMAT(STR_TO_DATE(fecha, '%e/%c/%Y'), '%Y%m')) AS total FROM `contenedor` GROUP BY 1 HAVING COUNT(DATE_FORMAT(STR_TO_DATE(fecha, '%e/%c/%Y'), '%Y%m')) > 1 ORDER BY `total` DESC LIMIT 1";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>