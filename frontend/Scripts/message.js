document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const message = document.getElementById("message").value.trim();
    const senderID = localStorage.getItem("UserID");
    const recipientID = 1;

    if (message === "") {
      alert("Please enter a message.");
      return;
    }

    const formData = new FormData();
    formData.append("send_message", "true");
    formData.append("UserID", senderID);
    formData.append("recipientID", recipientID);
    formData.append("message", message);

    try {
      fetch("http://127.0.0.1/Flight-System-Website/backend/message.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data.status === "error") {
            console.error("Error updating data:", data.message);
          } else if (data.status === "success") {
            console.log(data.message);
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  });
