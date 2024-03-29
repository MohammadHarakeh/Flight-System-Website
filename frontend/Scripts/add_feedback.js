const form = document.getElementById("flightReviewForm");

const userID = localStorage.getItem("UserID");

if (userID) {
  document.getElementById("UserID").value = userID;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const flightID = document.getElementById("FlightID").value;
    const rating = document.getElementById("Rating").value;
    const reviewText = document.getElementById("reviewText").value;

    const formData = new FormData();
    formData.append("UserID", userID);
    formData.append("FlightID", flightID);
    formData.append("Rating", rating);
    formData.append("reviewText", reviewText);

    axios
        .post("http://localhost/Flight-System-Website/backend/add_feedback.php", formData)
        .then((response) => {
            const data = response.data;
            if (data.success) {
                alert("Feedback added successfully!");
                form.reset();
                window.location.href = "/frontend/index.html";
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error submitting review. Please try again.");
        });
});
