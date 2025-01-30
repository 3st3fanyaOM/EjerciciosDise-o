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
    if ($(this).val().trim() === "") {
      $(this).css({
        border: "2px solid #d2a6a6",
        "background-color": "#ffe6e6",
      });
      $(this).next(".error-message").show();
    } else {
      $(this).css({
        border: "",
        "background-color": "",
      });
      $(this).next(".error-message").hide();
    }
    //funcionalidad mostrar/ocultar contraseña
    $(".fa-regular").on("click", function () {
      $('#mostrar').click(function(){
        //Comprobamos que la cadena NO esté vacía.
        if($(this).hasClass('fa-regular') && ($("#password").val() != ""))
        {
        $('#password').removeAttr('type');
        $('#mostrar').addClass('fas-fa-eye-slash').removeClass('fas-fa-eye');
        $('.pwdtxt').html("Ocultar contraseña");
        }
        else
        {
        $('#password').attr('type','password');
        $('#mostrar').addClass('fas-fa-eye').removeClass('fas-fa-eye-slash');
        $('.pwdtxt').html("Mostrar contraseña");
        }
        });
      // let valorPwd = $(".passw");
      // let tipo = valorPwd.attr("type") === "password" ? "text" : "password";
      // valorPwd.attr("type", tipo);

      // let icono =
      //   tipo === "password"
      //     ? "./img/icons8-ocultar-24.png"
      //     : "./img/icons8-visible-24.png";
    });
  });
});
