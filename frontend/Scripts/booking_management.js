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
            <td>
                <button class="edit-btn">Edit</button>
            </td>
          `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });

// tableBody.addEventListener("click", event => {
//     const target = event.target;
//     if (target.classList.contains("edit-btn")) {
//         const row = target.closest("tr");
//         const cells = row.querySelectorAll("td");
        
//         // Get the data from the selected row
//         const userID = cells[0].textContent;
//         const flightID = cells[1].textContent;
//         const bookingDate = cells[2].textContent;
//         const numberOfPassenger = cells[3].textContent;
//         const seatNumbers = cells[4].textContent;
//         const paymentStatus = cells[5].textContent;

//         // For demonstration purposes, let's log the data
//         console.log("Editing BookingID:", booking.BookingID);
//         console.log("User ID:", userID);
//         console.log("Flight ID:", flightID);
//         console.log("Booking Date:", bookingDate);
//         console.log("Number of Passenger:", numberOfPassenger);
//         console.log("Seat Numbers:", seatNumbers);
//         console.log("Payment Status:", paymentStatus);

//         // Now you can use this data to populate a form or a modal for editing
//         // For example, you can display a modal with input fields pre-filled with this data
//         // When the user submits the edited data, you can update the table row with the new values
//     }
// });

// confirmBtn.addEventListener("click", () => {
//     const UserID = document.getElementById("UserID").value;
//     const FlightID = document.getElementById("flightID").value;
//     const BookingDate = document.getElementById("bookingDate").value;
//     const NumberofPassenger = document.getElementById("numberofPassenger").value;
//     const SeatNumbers = document.getElementById("seatNumbers").value;
//     const PaymentStatus = document.getElementById("paymentStatus").value;
//     toggleButtons();
  
//     formData = new FormData();
//     formData.append("UserID", UserID);
//     formData.FlightID("FlightID",FlightID);
//     formData.append("BookingDate", BookingDate);
//     formData.append("NumberofPassenger", NumberofPassenger);
//     formData.append("SeatNumbers", SeatNumbers);
//     formData.append("PaymentStatus", PaymentStatus);
  
//     try {
//       fetch("http://127.0.0.1/Flight-System-Website/backend/edit_booking_management.php", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           console.log(response);
//           return response.json();
//         })
//         .then((data) => {
//           if (data.status === "error") {
//             console.log("Error updating data");
//           } else if (data.status === "success") {
//             exitEditing();
//             UserID.textContent = UserID;
//           }
//         });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   });
  