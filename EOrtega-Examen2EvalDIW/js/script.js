jQuery(document).ready(function ($) {
  console.log("test");

  if (sessionStorage.getItem("cookie") != 1) {
    $(".bloque-cookies").show();
  }

  $("button").on("click", function () {
    $(".bloque-cookies").fadeOut();
    sessionStorage.setItem("cookie", 1);
  });

  // Bootstrap modal initialization (pure JS version)
  console.log($(".bloque-cookies"));
  let miModalElement = document.getElementById("exampleModal"); // Get the modal element by ID
  if (miModalElement) {
    let miModal = new bootstrap.Modal(miModalElement);
    miModal.show(); // Show the modal
  }

  $("#exampleModal button").on("click", function () {
    $(".bloque-cookies").fadeOut();
    if (miModalElement) {
      miModal.hide(); // Hide the modal
    }
    sessionStorage.setItem("modals", 1);
  });

  $("#enviar").on("click", function () {
    $(".contacto").slideUp();
    $(".gracias").slideToggle(); // Corrected from `slideToogle()` to `slideToggle()`
  });

  $("#nosotros").on("click", function () {
    $(".nosotros").slideToggle(); // Corrected from `slideToogle()` to `slideToggle()`
  });

  $("#oscuro").on("click", function () {
    $("body").toggleClass("oscuro");
  });
});
