const tableBody = document.getElementById("bookingBody");

axios
    .get("http://localhost/Flight-System-Website/backend/booking_management.php")
    .then(response => {
        const data = response.data;
        data.forEach(booking => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${booking.UserID}</td>
            <td>${booking.FlightID}</td>
            <td>${booking.BookingDate}</td>
            <td>${booking.NumberofPassenger}</td>
            <td>${booking.SeatNumbers}</td>
            <td>${booking.PaymentStatus}</td>
          `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
