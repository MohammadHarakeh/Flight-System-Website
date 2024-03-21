const logo = document.getElementById("logo");
const home = document.getElementById("home");
const questions = document.getElementById("questions");
const book = document.getElementById("book");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");
const requestCoins = document.getElementById("requestCoins");
const flightCard = document.getElementById("flight-card");

let flightData = [];

logo.addEventListener("click", () => {
  window.location.href = "/frontend/index.html";
});

home.addEventListener("click", () => {
  window.location.href = "/frontend/index.html";
});

questions.addEventListener("click", () => {
  window.location.href = "/frontend/Pages/faq.html";
});

// book.addEventListener("click", () => {
//     window.location.href = "";
//   });

profile.addEventListener("click", () => {
  window.location.href = "/frontend/Pages/profile.html";
});

logout.addEventListener("click", () => {
  window.location.href = "/frontend/Pages/signin.html";
});

requestCoins.addEventListener("click", () => {
  window.location.href = "/frontend/Pages/request_coin.html";
});

fetch("http://127.0.0.1/Flight-System-Website/backend/getFlightData.php", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    flightData = data.flight_info;
    console.log("Flight data loaded:", flightData);
    let numFlights = flightData.length;
    console.log(numFlights);
    createFlightCard(numFlights);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

function createFlightCard(numFlights) {
  const flightCardWrapper = document.getElementById("flight-card-wrapper");

  let flightCardsHTML = "";

  for (let i = 0; i < numFlights; i++) {
    const arrivalCity = flightData[i].ArrivalCity;
    const departureCity = flightData[i].DepartureCity;
    const price = flightData[i].price;
    const flightID = flightData[i].FlightID;

    flightCardsHTML += `
    <div class="flight-card">
      <div class="flight-card-data">
      <p>Flight ID: ${flightID}</p>
        <p>Departure City: ${departureCity}</p>
        <p>Arrival City: ${arrivalCity}</p>
        <p>Price: ${price}</p>
      </div>
      <div class="button-container">
      <div class="buttons">
        <div class="book">
          <a id="review-flight" class="review-flight">Review Flight</a>
        </div>
        <div class="book">
          <a id="book-flight">Book Flight</a>
        </div>
        </div>
      </div>
  </div>`;
  }
  flightCardWrapper.innerHTML = flightCardsHTML;

  const reviewFlight = document.querySelectorAll(".review-flight");
  reviewFlight.forEach((reviewFlight) => {
    reviewFlight.addEventListener("click", function () {
      console.log("click");
      window.location.href = "/frontend/Pages/add_feedback.html";
    });
  });
}
