$(document).ready(function () {
  // Obtenemos el elemento canvas y su contexto para poder dibujar
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let bandera = false;

  // Definimos el tamaño de cada celda del juego
  const box = 20; // Cada "cuadro" del juego mide 20px
  const canvasSize = 20; // Tamaño del tablero (20x20 casillas)
  canvas.width = canvasSize * box;
  canvas.height = canvasSize * box;

  // Variables del juego
  let snake, direction, comida, game, timer, timeLeft, mode;

  // empezar el juego
  function initGame() {
    snake = [{ x: 10 * box, y: 10 * box }]; // La serpiente empieza en el centro del tablero
    direction = "RIGHT"; // Dirección inicial de la serpiente
    generarComida(); // Generamos la comida en una posición aleatoria
    timeLeft = 60; // 60 segundos
    $(".contador").text(timeLeft); // Mostramos el tiempo en pantalla
    startTimer();
  }

  // Función para generar comida en una ubicación aleatoria
  function generarComida() {
    comida = {
      x: Math.floor(Math.random() * canvasSize) * box,
      y: Math.floor(Math.random() * canvasSize) * box,
    };
  }

  // Función para dibujar el juego
  function dibujar() {
    // Limpiamos el canvas antes de dibujar
    ctx.fillStyle = "grey"; //función de canva para dar estilo
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujamos la comida en rojo
    ctx.fillStyle = "red";
    ctx.fillRect(comida.x, comida.y, box, box); //coloca la comida

    // Dibujamos la serpiente
    ctx.fillStyle = "lime"; //color relleno
    snake.forEach((segment, index) => {
      //snake es un array
      ctx.fillRect(segment.x, segment.y, box, box); //dibuja un rectangulo solido en canva, box rectangulo de serpiente, ejemplo segment.x = 100 y segment.y = 100 se dibujaria 20x20
      if (index === 0) {
        //primer elemento del array
        ctx.strokeStyle = "darkgreen"; // Borde para la cabeza
        ctx.strokeRect(segment.x, segment.y, box, box);
      }
    });
  }

  // Función para actualizar el estado del juego en cada iteración
  function actualizarJuego() {
    let cabeza = { ...snake[0] }; // asignamos la cabeza a cabeza

    // Movemos la cabeza en la dirección indicada
    if (direction === "LEFT") cabeza.x -= box;
    if (direction === "UP") cabeza.y -= box;
    if (direction === "RIGHT") cabeza.x += box;
    if (direction === "DOWN") cabeza.y += box;

    // si choca con la apred muere
    if (
      cabeza.x < 0 ||
      cabeza.y < 0 ||
      cabeza.x >= canvas.width ||
      cabeza.y >= canvas.height
    ) {
      return gameOver();
    }

    // si choca consigo misma muere
    if (
      snake.some((segment) => segment.x === cabeza.x && segment.y === cabeza.y)
    ) {
      return gameOver();
    }

    // cuando reinicia se le pone la cabeza
    snake.unshift(cabeza);

    // Si la serpiente come la comida, generamos nueva comida, si no, eliminamos la última parte
    if (cabeza.x === comida.x && cabeza.y === comida.y) {
      generarComida();
    } else {
      snake.pop(); // Eliminamos la última parte para mantener el tamaño
    }
  }

  // finalizar el juego
  function gameOver() {
    if (bandera) return;
    bandera = true;
    clearInterval(game); // Detenemos el bucle del juego
    clearInterval(timer); // Detenemos el temporizador si estaba activo
    $(".btn-reiniciar").show(); // Mostramos el botón de reinicio
    $(".contador").text("0"); // Mostramos 0 en el contador de tiempo
    setTimeout(() => {
      alert("Juego Terminado");
    }, 10);
  }

  // iniciar temporizador
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--; // Restamos un segundo
      $(".contador").text(timeLeft); // Actualizamos el contador en pantalla
      if (timeLeft <= 0) {
        clearInterval(timer);
        gameOver(); // Si el tiempo llega a 0, el juego termina
      }
    }, 1000);
  }

  // Bucle principal del juego (se ejecuta cada 100ms)
  function gameLoop() {
    actualizarJuego(); // Actualizamos la posición de la serpiente
    dibujar(); // Dibujamos los elementos en el canvas
  }

  // Capturamos las teclas de dirección para mover la serpiente
  $(document).keydown((e) => {
    if (bandera) return;
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  });

  // Evento para iniciar el juego cuando se presiona el botón "INICIAR"
  $(".btn-inicio").click(() => {
    initGame(); // Inicializamos los valores del juego
    game = setInterval(gameLoop, 200); // la serpiente se mueve cada 2 s
    startTimer(); //iniciamos el temporizador

    $(".btn-inicio").hide(); // Ocultamos el botón de inicio
    $(".btn-reiniciar").hide(); // Ocultamos el botón de reinicio
  });

  // reiniciar juego
  $(".btn-reiniciar")
    .click(() => {
      bandera = false;
      $(".btn-inicio").show();
      $(".btn-reiniciar").hide();
      initGame();
      game = setInterval(gameLoop, 200);
      startTimer();
    })
    .hide(); //ocultar reiniciar al principio
});
