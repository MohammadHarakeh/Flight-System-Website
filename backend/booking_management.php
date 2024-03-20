<?php

include('connection.php');

$query = $mysqli ->prepare('SELECT * FROM bookings');

$query ->execute();

$query ->store_result();

$query ->bind_result($BookingID, $UserID, $FlightID, $BookingDate, $NumberofPassenger, $SeatNumbers, $PaymentStatus);

$response = [];

while ($query ->fetch()) {
    $news = [
        'BookingID' => $BookingID,
        'UserID' => $UserID,
        'FlightID' => $FlightID,
        'BookingDate' => $BookingDate,
        'NumberofPassenger' => $NumberofPassenger,
        'SeatNumbers' => $SeatNumbers,
        'PaymentStatus' => $PaymentStatus
    ];
    $response[] = $news;
}

// $update_booking = $mysqli->query('UPDATE bookings SET flightID = ?, BookingDate = ?, NumberofPassenger = ?, SeatNumbers = ?, PaymentStatus = ? WHERE UserID = ?'); 

echo json_encode($response);

$mysqli ->close();