jQuery(document).ready(function ($) {
  console.log("test");

  $(".btnIniciar").on("click", function () {
    //siempre con . o #
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".login").slideToggle();
    $("#usu, #pwd").on("input", function () {
      const inputContent = $(this).val().trim();
      if (inputContent.length == 0) {
        $("#btn2").attr("disabled", "true");
      } else {
        $("#btn2").attr("disabled", "false");
      }
    });
  });

  $(".btnCrear").on("click", function () {
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".tipoCuenta").slideToggle().css("display", "flex");
  });

  $("#proveedor").on("click", function () {
    $(".tipoCuenta").hide();
    $(".title1").text("Crear una cuenta proveedor");
    $(".contenedor-formulario-proveedor").show();
  });

  $("#cliente").on("click", function () {
    $(".tipoCuenta").hide();
    $(".title1").text("Crear una cuenta cliente");
    $(".contenedor-formulario-cliente").show();
  });
});
