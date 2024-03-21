<?php

include './connection.php';

$query = "SELECT FlightID, AVG(Rating) AS AverageRating FROM flightreviews GROUP BY FlightID";

$result = $mysqli->query($query);

$response = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $response[] = array(
            'FlightID' => $row['FlightID'],
            'AverageRating' => $row['AverageRating']
        );
    }
}

echo json_encode($response);

$mysqli->close();
?>
