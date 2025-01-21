jQuery(document).ready(function ($) {
  console.log("test");
  consoleIni();
  let cad = "Hola";
  muestraCadena(cad);

  $(".btn").on("click", function () {
    //vuando pulse btn llama a func
    inicio(this); //le paso x param el boton
  });

  //funcion para evento pulsar tecla
  $(document).on("keydown", function (event) {
    //console.log(event.key);
    switch (event.key) {
      case "ArrowUp":
        console.log("Arriba");
        moverArriba(event.key);
        break;
      case "ArrowDown":
        console.log("Abajo");
        break;
      case "ArrowRight":
        console.log("Derecha");
        moverDerecha(event.key);
        break;
      case "ArrowLeft":
        console.log("Izquierda");
        break;
    }
  });
});

function moverDerecha(keydown) {
  let nuevoValor;
  let interv = setInterval(() => {
    nuevoValor = parseInt($(".bloque").css("left")); //definir posicion
    console.log(nuevoValor);
    $(".bloque").css("left", nuevoValor + 10);
    if (nuevoValor > 400) clearInterval(interv);
  }, 250);
}

function moverArriba() {
  let nuevoValor;
  let interv = setInterval(() => {
    nuevoValor = parseInt($(".bloque").css("bottom")); //definir posicion
    console.log(nuevoValor);
    $(".bloque").css("bottom", nuevoValor + 10);
    if (nuevoValor > 400) clearInterval(interv);
  }, 250);
}

function consoleIni() {
  console.log("todo ok");
}

function muestraCadena(cadena) {
  console.log(cadena);
  consoleIni();
}

function inicio(btn) {
  //funcion para esconder btn
  $(btn).hide();
}
