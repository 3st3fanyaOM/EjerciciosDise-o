jQuery(document).ready(function ($) {
  console.log("test");

  $("#btn1, #contenido").hide(); //esconde el boton 1 y el contenido

  $("#btn2").on("click", function () {//click btn2 
    $(this).fadeOut(1000, function () {//desaparece en 1000
      $("#btn1").fadeIn(1000, function () {//btn1 aparece en 1000
        $("#contenido").slideDown(1000);//contenido se despliega en 1000
      });
    });
  });
});
