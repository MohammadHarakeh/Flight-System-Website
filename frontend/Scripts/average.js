const displayAverageRatings = () => {
    axios.get('http://localhost/Flight-System-Website/backend/get_average_ratings.php')
        .then(response => {
            const ratings = response.data;
            displayRatings(ratings);
        })
        .catch(error => {
            console.error('Error fetching ratings:', error);
        });
}

displayAverageRatings();

const displayRatings = (ratings) => {
    const tableBody = document.getElementById("ratingsTableBody");

    for (const rating of ratings) {
        const row = document.createElement("tr");
        const formattedRating = parseFloat(rating.AverageRating).toFixed(2);
        row.innerHTML = `
            <td>${rating.FlightID}</td>
            <td>${formattedRating}</td>
        `;
        tableBody.appendChild(row);
    }
}
