// $(document).ready(function () {
//   console.log("test");
//   $('.bloque').hide();
// });

//Eventos
// Click
// Hide
// Show. --pone display:block 
// FadeIn. -- quita opacidad gradual
// FadeOut. --
// Change -- cuando introduces datos o seleccionas algo FORMULARIOS
// Mouseenter --raton se situa en sitio -- HOVER

//https://api.jquery.com/

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

  //AQUI SE PUEDE ESCRIBIR CODIGO JS

  
});
