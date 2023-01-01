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

listItems = document.querySelectorAll(".nav__left-list li a");

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