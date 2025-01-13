// $(document).ready(function () {
//   console.log("test");
//   $('.bloque').hide();
// });

//si $ no esta definido
jQuery(document).ready(function ($) {
  console.log("test");
  $(".bloque").hide(); //seleccionamos bloque y lo ocultamos
  //$("button").click(function () {//hace referencia al elemento en el que ha ocurrido el evento
  //$(this).hide();//esconde el boton que se ha pulsado
  //});
  $("#mostrar").click(function () {
    $("#contenido").toggle(); //cambia el estado visible a no visible
  });
});
