const tableBody = document.getElementById("coinRequestBody");

const updateApprovalStatus = (requestID, newStatus) => {
    const formData = new FormData();
    formData.append("requestID", requestID);
    formData.append("ApprovalStatus", newStatus);

    axios
        .post("http://localhost/Flight-System-Website/backend/update_approval_status.php", formData)
        .then((response) => {
            const data = response.data;
            if (data.success) {
                console.log("Approval status updated successfully!");
            } else {
                console.error("Error updating approval status:", data.message);
            }
        })
        .catch((error) => {
            console.error("Error updating approval status:", error);
        });
};

axios
    .get("http://localhost/Flight-System-Website/backend/get_request_coin.php")
    .then(response => {
        const data = response.data;
        data.forEach(request => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${request.UserID}</td>
            <td>${request.coinsAmount}</td>
            <td>
                <select class="status-select" data-requestid="${request.requestId}">
                    <option value="Pending" ${request.ApprovalStatus === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="Accept" ${request.ApprovalStatus === "Accept" ? "selected" : ""}>Accept</option>
                    <option value="Reject" ${request.ApprovalStatus === "Reject" ? "selected" : ""}>Reject</option>
                </select>
            </td>
          `;
            tableBody.appendChild(row);
        });

        document.querySelectorAll(".status-select").forEach(select => {
            select.addEventListener("change", (event) => {
                const requestID = event.target.getAttribute("data-requestid");
                const newStatus = event.target.value;
                updateApprovalStatus(requestID, newStatus);
            });
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
