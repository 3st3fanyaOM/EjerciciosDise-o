jQuery(document).ready(function ($) {
  console.log("test");

  $(".btn").on("click", function () {//siempre con . o #
    $(".acceso").slideUp();
    $(".title1").text("Cuenta")
    $(".login").slideToggle();
  });
});
