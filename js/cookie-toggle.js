document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieClose = document.getElementById("cookieClose");

  cookieClose.addEventListener("click", function () {
    cookieBanner.classList.add("hide");
  });
});
