var btnPrev = document.querySelector(".my .btn-prev");
var btnNext = document.querySelector(".my .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".my .item__movie");
  document.querySelector(".my .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".my .item__movie");
  document.querySelector(".my .list-item").prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".continue__watch .btn-prev");
var btnNext = document.querySelector(".continue__watch .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".continue__watch .item__movie");
  document.querySelector(".continue__watch .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".continue__watch .item__movie");
  document
    .querySelector(".continue__watch .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".trending__movie .btn-prev");
var btnNext = document.querySelector(".trending__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".trending__movie .item__movie");
  document.querySelector(".trending__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".trending__movie .item__movie");
  document
    .querySelector(".trending__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".new__movie .btn-prev");
var btnNext = document.querySelector(".new__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".new__movie .item__movie");
  document.querySelector(".new__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".new__movie .item__movie");
  document
    .querySelector(".new__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".type__movie-type .btn-prev");
var btnNext = document.querySelector(".type__movie-type .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".type__movie-type .item__movie");
  document.querySelector(".type__movie-type .list-item").appendChild(list[0]);
  console.log(list.length);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".type__movie-type .item__movie");
  document
    .querySelector(".type__movie-type .list-item")
    .prepend(list[list.length - 1]);
  console.log(list.length);
});

var btnPrev = document.querySelector(".hero__movie .btn-prev");
var btnNext = document.querySelector(".hero__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".hero__movie .item__movie");
  document.querySelector(".hero__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".hero__movie .item__movie");
  document
    .querySelector(".hero__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".love__movie .btn-prev");
var btnNext = document.querySelector(".love__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".love__movie .item__movie");
  document.querySelector(".love__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".love__movie .item__movie");
  document
    .querySelector(".love__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".anime__movie .btn-prev");
var btnNext = document.querySelector(".anime__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".anime__movie .item__movie");
  document.querySelector(".anime__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".anime__movie .item__movie");
  document
    .querySelector(".anime__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".actor__movie .btn-prev");
var btnNext = document.querySelector(".actor__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".actor__movie .item__movie");
  document.querySelector(".actor__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".actor__movie .item__movie");
  document
    .querySelector(".actor__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".watched__movie .btn-prev");
var btnNext = document.querySelector(".watched__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".watched__movie .item__movie");
  document.querySelector(".watched__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".watched__movie .item__movie");
  document
    .querySelector(".watched__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".viet__movie .btn-prev");
var btnNext = document.querySelector(".viet__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".viet__movie .item__movie");
  document.querySelector(".viet__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".viet__movie .item__movie");
  document
    .querySelector(".viet__movie .list-item")
    .prepend(list[list.length - 1]);
});

var btnPrev = document.querySelector(".korea__movie .btn-prev");
var btnNext = document.querySelector(".korea__movie .btn-next");

btnNext.addEventListener("click", function () {
  var list = document.querySelectorAll(".korea__movie .item__movie");
  document.querySelector(".korea__movie .list-item").appendChild(list[0]);
});

btnPrev.addEventListener("click", function () {
  var list = document.querySelectorAll(".korea__movie .item__movie");
  document
    .querySelector(".korea__movie .list-item")
    .prepend(list[list.length - 1]);
});

//  go top

const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// hover user

btnUser = document.querySelector(".nav__user");

btnUser.addEventListener("mouseenter", function () {
  document.querySelector(".nav__user>span").classList.remove("hidden");
  document.querySelector(".man__acc").classList.remove("hidden");
});

btnUser.addEventListener("mouseleave", function () {
  document.querySelector(".nav__user>span").classList.add("hidden");
  document.querySelector(".man__acc").classList.add("hidden");
});

// nav bar

var listItems = document.querySelectorAll(".nav__left-list li a");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    if (listItems[i].classList.length == 0) {
      listItems[i].classList.add("nav__list-enter");
      for (let j = 0; j < listItems.length; j++) {
        if (j != i) {
          listItems[j].classList.remove("nav__list-enter");
        }
      }
    }
  });
}

// popup movie detail

var listMovies = document.querySelectorAll(".conn .item__movie a");

for (let i = 0; i < listMovies.length; i++) {
  listMovies[i].addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".movie__detail").classList.remove("hidden");
    document.querySelector("html").classList.add("fix");
  });

  document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".movie__detail").classList.add("hidden");
    document.querySelector("html").classList.remove("fix");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !listMovies[i].classList.contains("hidden")) {
      document.querySelector(".overlay").classList.add("hidden");
      document.querySelector(".movie__detail").classList.add("hidden");
      document.querySelector("html").classList.remove("fix");
    }
  });
}

// movie detail

var list = document.querySelectorAll(".detail-foot-list span");
var listDt = document.querySelectorAll(".detail-ctn");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    if (list[i].classList.length == 0) {
      list[i].classList.add("detail-foot-item-enter");
      if (listDt[i].classList.contains("hidden"))
        listDt[i].classList.remove("hidden");
      for (let j = 0; j < list.length; j++) {
        if (j != i) {
          list[j].classList.remove("detail-foot-item-enter");
          if (!listDt[j].classList.contains("hidden")) {
            listDt[j].classList.add("hidden");
          }
        }
      }
    }
  });
}

// detail ctn 2

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

// detail ctn 3

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
