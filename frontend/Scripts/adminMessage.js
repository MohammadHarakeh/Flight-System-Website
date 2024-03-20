const adminReceiver = document.getElementById("admin-receiver");
const senderID = localStorage.getItem("UserID");

try {
  fetch(
    "http://127.0.0.1/Flight-System-Website/backend/message.php?UserID=" +
      senderID,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);

      if (data.status === "error") {
        console.log(data.message);
      } else if (data.status === "success") {
        adminReceiver.textContent = data.message;
      }
    });
} catch (error) {
  console.error("Error:", error);
}
