"use strict";
var btnPrev = document.querySelector(
  ".detail-ctn-2 .detail__movie-list .btn-prev"
);
var btnNext = document.querySelector(
  ".detail-ctn-2 .detail__movie-list .btn-next"
);

btnNext.addEventListener("click", function () {
  console.log("aaa");
  var list = document.querySelectorAll(
    ".detail-ctn-2 .detail__movie-list .item__movie"
  );
  document
    .querySelector(".detail-ctn-2 .detail__movie-list .list-item")
    .appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(
    ".detail-ctn-2 .detail__movie-list .item__movie"
  );
  document
    .querySelector(".detail-ctn-2 .detail__movie-list .list-item")
    .prepend(list[list.length - 1]);
});

//   -----------------------------------
var btnPrev = document.querySelector(
  ".detail-ctn-3 .detail__movie-list .btn-prev"
);
var btnNext = document.querySelector(
  ".detail-ctn-3 .detail__movie-list .btn-next"
);

btnNext.addEventListener("click", function () {
  console.log("aaa");
  var list = document.querySelectorAll(
    ".detail-ctn-3 .detail__movie-list .item__movie"
  );
  document
    .querySelector(".detail-ctn-3 .detail__movie-list .list-item")
    .appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(
    ".detail-ctn-3 .detail__movie-list .item__movie"
  );
  document
    .querySelector(".detail-ctn-3 .detail__movie-list .list-item")
    .prepend(list[list.length - 1]);
});

var cmt = document.querySelector(".fa-comment");

cmt.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".comment").classList.remove("hidden");
  document.querySelector("html").classList.add("fix");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".comment").classList.add("hidden");
  document.querySelector("html").classList.remove("fix");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !cmt.classList.contains("hidden")) {
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".comment").classList.add("hidden");
    document.querySelector("html").classList.remove("fix");
  }
});

//  back;

document.querySelector(".back__video i").addEventListener("click", function () {
  history.back();
});
