<?php

include ("connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM flights";
    $result = mysqli_query($mysqli, $query);

    if ($result) {
        $flightInfo = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $flightInfo[] = $row;
        }
        $response = [
            'status' => 'success',
            'flight_info' => $flightInfo
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Error fetching flights'
        ];
    }

    echo json_encode($response);
}

?>
