document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("floatingPassword");
  const eyeIcon = document.getElementById("eyeIcon");
  const btnDeny = document.getElementById("btnDeny");
  const btnAccept = document.getElementById("btnAccept");

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

  if (btnDeny && btnAccept) {
    btnDeny.addEventListener("click", () => {
      eraseCookie("allowCookies");
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = bootstrap.Toast.getInstance(toastEl);
        toast.hide();
      }
    });

    btnAccept.addEventListener("click", () => {
      setCookie("allowCookies", "1", 7);
      var toastEl = document.querySelector(".toast");
      if (toastEl) {
        var toast = bootstrap.Toast.getInstance(toastEl);
        toast.hide();
      }
    });

    cookieConsent();
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

  
});
