<?php

include './connection.php';

$BookingID = $_POST['BookingID'];
$flightID = $_POST['flightID'];
$bookingDate = $_POST['bookingDate'];
$numberOfPassenger = $_POST['numberOfPassenger'];
$seatNumbers = $_POST['seatNumbers'];
$paymentStatus = $_POST['paymentStatus'];
$userID = $_POST['userID'];

$update_booking = $mysqli->prepare('UPDATE bookings SET flightID = ?, BookingDate = ?, NumberofPassenger = ?, SeatNumbers = ?, PaymentStatus = ? WHERE UserID = ? AND BookingID = ?');

$update_booking->bind_param('isissii', $flightID, $bookingDate, $numberOfPassenger, $seatNumbers, $paymentStatus, $userID, $BookingID);

if($update_booking->execute()) {
    $response['status'] = "success";
    $response['message'] = "Booking updated successfully.";
} else {
    $response['status'] = "error";
    $response['message'] = "Failed to update booking.";
}

echo json_encode($response);

$mysqli->close();
?>
