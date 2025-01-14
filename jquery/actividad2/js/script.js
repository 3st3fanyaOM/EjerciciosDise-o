jQuery(document).ready(function ($) {
  console.log("test");
//$("h2").hide();
//   $("h2").on("mouseenter", function () {
//     $(this).hide(); //cambia el estado visible a no visible
//   });

  $("h2").css("background-color", "yellow"); //cambia los fondos
  $("h2").css({
    //varios estilos
    "font-size": "3em",
    'color': "blue",
  });

  $("h2").on("click", function (){
    $(this).hide();
  })
});
