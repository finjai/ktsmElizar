var togglebutton = document.getElementById("toggle-button");
var backdrop = document.querySelector(".backdrop");
var mobileNav = document.getElementById("mobile-nav");

  togglebutton.addEventListener("click", function () {

      mobileNav.classList.toggle("open");

      backdrop.classList.toggle("open");
  });

  backdrop.addEventListener("click", function () {

      backdrop.classList.remove("open");

      mobileNav.classList.remove("open");

  });



