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
    $(".contenedor-formulario-proveedor").css("display", "flex");
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
  });

  //funcionalidad mostrar/ocultar contraseña
  $(".toggle-password").on("click", function () {
    let inputId = $(this).data("target");
    let input = $("#" + inputId);
    let type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);

    // Alternar icono ojo abierto y ojo cerrado
    $(this).toggleClass("fa-eye fa-eye-slash");
  });

  // Función para habilitar/deshabilitar botones y checkboxes
  function comprobarFormulario() {
    let todosLlenosProveedor = $(
      ".formulario-proveedor input, .formulario-proveedor select"
    )
      .toArray()
      .every((input) => input.value.trim() !== "");
    let todosLlenosCliente = $(
      ".formulario-cliente input, .formulario-cliente select"
    )
      .toArray()
      .every((input) => input.value.trim() !== "");

    let checkbox1 = $("#terminos");
    let checkbox2 = $("#terminos2");
    let boton = $(".btn-crear");

    // Habilitar checkbox1 (proveedor)
    checkbox1.prop("disabled", !todosLlenosProveedor);

    // Habilitar checkbox2 (cliente)
    checkbox2.prop("disabled", !todosLlenosCliente);

    // Habilitar el botón
    if (
      (todosLlenosProveedor && checkbox1.prop("checked")) ||
      (todosLlenosCliente && checkbox2.prop("checked"))
    ) {
      boton.prop("disabled", false).addClass("btn-activo");
    } else {
      boton.prop("disabled", true).removeClass("btn-activo");
    }
  }

  // Comprobar los campos y los checks
  $("input, select").on("input change", comprobarFormulario);

  // Comprobar los checkboxes cuando se cambien
  $("#terminos").on("change", comprobarFormulario);
  $("#terminos2").on("change", comprobarFormulario);

  // mostrar cuenta creada
  $(".btn-crear").on("click", function () {
    $(
      ".contenedor-formulario-proveedor, .contenedor-formulario-cliente"
    ).slideUp(500, function () {
      $("#mensaje-exito")
        .fadeIn(500)
        .addClass("mensaje")
        .css("display", "flex"); //addClass no leva el .
    });
  });
});
