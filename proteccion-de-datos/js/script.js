jQuery(document).ready(function ($) {
  if (sessionStorage.getItem("cookie") != 1) {
    $(".bloque-cookies").show();
  }
  $("button").on("click", function () {
    $(".bloque-cookies").fadeOut();
    sessionStorage.setItem("cookie", 1);
    //sessionStorage.clear()
  });

  //bootstrap
  console.log($(".bloque-cookies"));
  let miModal = new boostrap.Modal($("#exampleModal")[0]);
  miModal.show();

  $("#exampleModal button").on("click", function () {
    $(".bloque-cookies").fadeOut();
    miModal.hide();
    sessionStorage.setItem("modals", 1);
    //sessionStorage.clear()
  });
});
