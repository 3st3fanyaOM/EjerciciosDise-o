jQuery(document).ready(function () {
  console.log("test");

  let veces = 0;
  let empieza;

  //generar un nuevoBloque div
  function generarBloque() {
    if (veces < 10) {
      let x = Math.floor(Math.random() * 500);
      let y = Math.floor(Math.random() * 500);

      let nuevoBloque = $("<div class='bloque'></div>");
      nuevoBloque.css({
        position: "absolute",
        top: x + "px", //generado por random
        left: y + "px", //generado por random
        width: "50px",
        height: "50px",
        background: "red",
      });

      $("body").append(nuevoBloque);

      //desaparecer el bloque y generar uno nuevoBloque
      nuevoBloque.on("mouseenter", function () {
        $(this).fadeOut(500, function () {
          $(this).remove();
          veces++;

          if (veces < 10) {
            generarBloque(); // Generar un nuevoBloque bloque automáticamente
          } else {
            let fin = new Date().getTime();
            let tiempoTotal = Math.round((fin - empieza) / 1000); //pasar a secs
            alert("Tiempo de juego: " + tiempoTotal + " segundos");
            $(".btn-inicio").text("Nuevo juego");
            veces = 0;
          }
        });
      });
    }
  }

  // Evento de inicio del juego
  $(".btn-inicio").on("click", function () {
    if (veces === 0) {
      empieza = new Date().getTime(); // guardar hora de inicio
    }

    generarBloque(); // saca el primer bloque
  });
});
