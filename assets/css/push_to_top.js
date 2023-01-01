// PUSH TO TOP
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});