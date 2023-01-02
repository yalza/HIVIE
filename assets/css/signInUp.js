//  log in sig up

var addAcc = document.querySelector(".man");
var overlay = document.querySelector(".overlay");
var logIn = document.querySelector(".log__in");
var sigUp = document.querySelector(".sig__up");
var btnLogIn = document.querySelector(".log__in h3");
var btnSigUp = document.querySelector(".sig-up-btn button");
var htmlA = document.querySelector("html");

addAcc.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  logIn.classList.remove("hidden");
  htmlA.classList.add("fix");
});
btnLogIn.addEventListener("click", function () {
  logIn.classList.add("hidden");
  sigUp.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  htmlA.classList.remove("fix");
  if (!logIn.classList.contains("hidden")) logIn.classList.add("hidden");
  if (!sigUp.classList.contains("hidden")) sigUp.classList.add("hidden");
});