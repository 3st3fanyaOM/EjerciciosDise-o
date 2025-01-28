jQuery(document).ready(function ($) {
  console.log("test");

  $(".btnIniciar").on("click", function () {
    //siempre con . o #
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".login").slideToggle();
  });

  $("#btn2").attr("disabled", "disabled");
  $('input[type="text"],input[type="password"]').keypress(function () {
    console.log("ENTRA");
    if ($("#usu").val() != "" && $("#pwd").val() != "") {
      $("#btn2").removeAttr("disabled");
    }
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

  $("input").on("change", function () {
    if ($(this).val() == "") {
      $(this).addClass("inputs-vacios");
      $(this).after("<p>No se puede dejar en blanco</p>").addClass("p-error");
    } else {
      $(this).removeClass("inputs-vacios");
      $(this).next("p.error-message").remove();
    }
  });

  // $(function () {
  //   $("input").keyup(function () {
  //     var $input = $(this);
  //     if ($input.val() === "") {
  //       $("input").addClass("inputs-vacios");
  //       $("input").append("<p>No se puede dejar en blanco</p>");
  //     } else {
  //       $input.removeClass("inputs-vacios");
  //     }
  //   });
  // });
});
