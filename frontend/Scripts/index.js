const logo = document.getElementById("logo");
const home = document.getElementById("home");
const questions = document.getElementById("questions");
const book = document.getElementById("book");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");
const requestCoins = document.getElementById("requestCoins");

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
