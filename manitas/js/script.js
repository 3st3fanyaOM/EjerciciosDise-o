document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("floatingPassword");
  const eyeIcon = document.getElementById("eyeIcon");
  var btnDeny = document.getElementById("btnDeny");
  var btnAccept = document.getElementById("btnAccept");

  // Mostrar u ocultar contraseña al hacer clic en el ícono de ojito
  if (togglePassword && passwordInput && eyeIcon) {
    togglePassword.addEventListener("click", () => {
      // Alternar entre texto y contraseña
      const isPassword = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", isPassword ? "text" : "password");

      // Cambiar el ícono
      eyeIcon.classList.toggle("bi-eye");
      eyeIcon.classList.toggle("bi-eye-slash");
    });
  }

  // Cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  function cookieConsent() {
    if (!getCookie("allowCookies")) {
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
    }
  }

  // Ejecutar al cargar la página para comprobar si ya se aceptaron las cookies
  cookieConsent();

  // Agregar eventos solo si los botones existen
  btnDeny = document.getElementById("btnDeny");
  btnAccept = document.getElementById("btnAccept");

  if (btnDeny) {
    btnDeny.addEventListener("click", () => {
      eraseCookie("allowCookies");
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = bootstrap.Toast.getInstance(toastEl);
        toast.hide();
      }
    });
  }

  if (btnAccept) {
    btnAccept.addEventListener("click", () => {
      setCookie("allowCookies", "1", 7);
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = bootstrap.Toast.getInstance(toastEl);
        toast.hide();
      }
    });
  }

  // Botón de reseteo solo si existe en la página
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      eraseCookie("allowCookies");
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
    });
  }

  /*funciones para cargar detalle servicio*/
  if (window.jQuery) {
    console.log("jQuery cargado correctamente.");

    // Mostrar detalles del servicio
    $(".info").click(function () {
      var target = $(this).data("target");
      $("#servicios")
        .addClass("flex-mode ocultar-tarjetas")
        .find(".detalles-servicio")
        .removeClass("show");
      $(target).addClass("show").css("width", "100%"); // Muestra el detalle seleccionado
    });

    // Ocultar detalles y volver al grid
    $(".cerrar-info").click(function () {
      $("#servicios")
        .removeClass("flex-mode ocultar-tarjetas") // Vuelve al grid y muestra las tarjetas
        .find(".detalles-servicio") // Busca todos los detalles
        .removeClass("show"); // Oculta el detalle visible
    });
  } else {
    console.log("jQuery no está cargando");
  }

  /* boton subir */
  var btnSubir = $("#btnSubir");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btnSubir.fadeIn(); //btn desaparece al subir
    } else {
      btnSubir.fadeOut(); //btn aparece al hacer scroll hacia abajo
    }
  });

  btnSubir.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow"); //cuando lo pulsas sube suavemente
  });
});
