jQuery(document).ready(function ($) {
  console.log("test");

  $(".btnIniciar").on("click", function () {
    //siempre con . o #
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".login").slideToggle();
    $("#usu, #pwd").on("input", function () {
      const inputContent = $(this).val().trim();
      $("#btn2").toggle(inputContent.length > 0);
    });
  });
  $(".btnCrear").on("click", function () {
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".tipoCuenta").slideToggle();
  });

  $("#proveedor").on("click", function (){
    $(".tipoCuenta").hide();
    $(".title1").text("Crear una cuenta proveedor");
    $(".formularioProveedor").show();
  })
});
