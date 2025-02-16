$(document).ready(function () {
    if (!localStorage.getItem("cookiesAccepted")) {
      let $toastEl = $("#toastCookies"); // jQuery selecciona el elemento
      let toast = new bootstrap.Toast($toastEl[0]); // Bootstrap aún necesita el elemento JS puro
  
      toast.show();
  
      $("#acceptCookies").on("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        toast.hide();
      });
    }
  });
