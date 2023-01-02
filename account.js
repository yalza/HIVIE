"use strict";

// hover user

var btnUser = document.querySelector(".nav__user");

btnUser.addEventListener("mouseenter", function () {
  document.querySelector(".nav__user>span").classList.remove("hidden");
  document.querySelector(".man__acc").classList.remove("hidden");
});

btnUser.addEventListener("mouseleave", function () {
  document.querySelector(".nav__user>span").classList.add("hidden");
  document.querySelector(".man__acc").classList.add("hidden");
});
console.log("111");
// login

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

// acc
// account

var list = document.querySelectorAll(".acc__nav span");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    if (!list[i].classList.contains("acc__nav-enter"))
      list[i].classList.add("acc__nav-enter");
    document.querySelector(`.container__ctn-${i+1}`).classList.remove("hidden");
    for (let j = 0; j < list.length; j++) {
      if (i != j) {
        if (list[j].classList.contains("acc__nav-enter"))
          list[j].classList.remove("acc__nav-enter");
        document
          .querySelector(`.container__ctn-${j+1}`)
          .classList.add("hidden");
      }
    }
  });
}
