jQuery(document).ready(function () {
  console.log("test");
  let bloque = [{ x: 0, y: 0 }];
  let veces = 0;
  //botón de inicio para empezar.
  $(".btn-inicio").on("click", function () {
    //mostrar aleatoriamente bloques
    if(veces <11){
    let x = Math.floor(Math.random() * 50);
    let y = Math.floor(Math.random() * 50);
    
    $("bloque").css("top",x);
    $("bloque").css("left",y);
    veces++;
     //cuando pase por encima desaparece
     //$(bloque).on("blur", function ({
      //$(bloque).hide();
    });
    
    //cuando pase por encima desaparece
    //$(bloque).on("blur", function ({
      //$(bloque).hide();
    //});
    });

  
    

    // llegar a 10
    // muestre el tiempo entre el clic de inicio y pasar por encima del décimo bloque.

    //al finalizar botón REINICIAR volver a empezar (botón de inicio).
    //$(".btn-inicio").text("REINICIAR PARTIDA");


    // Generar bloque en una posición aleatoria

