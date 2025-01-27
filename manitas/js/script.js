const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("floatingPassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", () => {
  // Alternar entre texto y contraseña
  const isPassword = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPassword ? "text" : "password");

  // Cambiar el ícono
  eyeIcon.classList.toggle("bi-eye");
  eyeIcon.classList.toggle("bi-eye-slash");
});
