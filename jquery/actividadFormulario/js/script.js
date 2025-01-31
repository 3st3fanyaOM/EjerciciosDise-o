jQuery(document).ready(function ($) {
  console.log("test");

  $(".btnIniciar").on("click", function () {
    $(".acceso").slideUp(); //sube el div acceso
    $(".title1").text("Cuenta"); //cambia el titulo a Cuenta
    $(".login").slideToggle(); //muestra el login
  });

  $("#btn2").attr("disabled", "disabled"); //deshabilita el btn por que estan vacios
  $('input[type="text"],input[type="password"]').keypress(function () {
    //si pulsas teclas
    //console.log("ENTRA");
    if ($("#usu").val() != "" && $("#pwd").val() != "") {
      $("#btn2").removeAttr("disabled"); //habilita el btn cuando hay contenido
    }
  });
  //crear cuenta
  $(".btnCrear").on("click", function () {
    $(".acceso").slideUp();
    $(".title1").text("Cuenta");
    $(".tipoCuenta").slideToggle().css("display", "flex");
  });
  //crear cuenta proveedor
  $("#proveedor").on("click", function () {
    $(".tipoCuenta").hide();
    $(".title1").text("Crear una cuenta proveedor");
    $(".contenedor-formulario-proveedor").show();
  });
  //crear cuenta cliente
  $("#cliente").on("click", function () {
    $(".tipoCuenta").hide();
    $(".title1").text("Crear una cuenta cliente");
    $(".contenedor-formulario-cliente").show();
  });

  //si sale de un input y lo deja vacio, cambia de estilo y muestra msj error
  $("input").on("blur", function () {
    console.log("hola");
    if ($(this).val().trim() === "") {
      $(this).css({
        border: "2px solid #e91f1f",
        "background-color": "#ffe6e6",
      });
      $(this).siblings(".error-message").show();
    } else {
      $(this).css({
        border: "",
        "background-color": "",
      });
      $(this).siblings(".error-message").hide();
    }

    //funcionalidad mostrar/ocultar contraseña
    $("#ojito1").on("click", function () {
      $("#pass1").attr("type", function (index, attr) {
        return attr == "text" ? "password" : "text";
      });
    });

    $("#ojito2").on("click", function () {
      $("#pass2").attr("type", function (index, attr) {
        return attr == "text" ? "password" : "text";
      });
    });

    $("#ojito3").on("click", function () {
      $("#pass3").attr("type", function (index, attr) {
        return attr == "text" ? "password" : "text";
      });
    });

    $("#ojito4").on("click", function () {
      $("#pass4").attr("type", function (index, attr) {
        return attr == "text" ? "password" : "text";
      });
    });
  });
});
