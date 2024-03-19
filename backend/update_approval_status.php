<?php

include('connection.php');

    $requestID = $_POST['requestID'];
    $newStatus = $_POST['ApprovalStatus'];

    $query = $mysqli->prepare('UPDATE coinsrequest SET ApprovalStatus = ? WHERE requestID = ?');
    $query->bind_param('si', $newStatus, $requestID);

    $response = [];

    if ($query->execute()) {
        $response['success'] = true;
        $response['message'] = "Approval status updated";
    } else {
        $response['success'] = false;
        $response['message'] = "Error updating approval status";
    }

echo json_encode($response);

$mysqli->close();
