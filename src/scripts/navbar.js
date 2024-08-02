document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarItems = document.querySelector(".navbar-items");

  toggleButton.addEventListener("click", function () {
    navbarItems.classList.toggle("active");
  });
});
