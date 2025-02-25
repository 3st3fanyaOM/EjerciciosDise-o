document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("floatingPassword");
  const eyeIcon = document.getElementById("eyeIcon");
  var btnDeny = document.getElementById("btnDeny");
  var btnAccept = document.getElementById("btnAccept");

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
    $(".info").click(function () {
      var target = $(this).attr("data-target"); // Obtiene el ID del detalle a mostrar
      $(".detalles-servicio").hide(); // Oculta cualquier otro detalle abierto
      $(target).fadeIn(); // Muestra solo el seleccionado
    });

    $(".cerrar-info").click(function () {
      $(this).closest(".detalles-servicio").fadeOut(); // Oculta el modal al hacer clic en X
    });
  } else {
    console.error(
      "jQuery no está cargado. Asegúrate de incluir jQuery en tu HTML."
    );
  }

  /* boton subir */
  var btnSubir = $("#btnSubir");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btnSubir.fadeIn();
    } else {
      btnSubir.fadeOut();
    }
  });

  btnSubir.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
