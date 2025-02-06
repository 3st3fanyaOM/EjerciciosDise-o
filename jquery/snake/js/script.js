$(document).ready(function () {
  $(".btn-reiniciar").hide();
  const $jaula = $(".jaula");
  const $btnInicio = $(".btn-inicio");
  const $btnReiniciar = $(".btn-reiniciar");
  const $contador = $(".contador");
  const box = 20; // Tamaño de cada cuadro de la serpiente y la comida
  let snake = [{ x: 9 * box, y: 10 * box }]; // Posición inicial de la serpiente
  let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
  let score = 0;
  let d; // Dirección de la serpiente
  let game;
  let timeLeft = 60;
  let timer;

  // Función para dibujar la serpiente y la comida
  function draw() {
    $jaula.empty();

    // Dibujar la serpiente
    snake.forEach((segment, index) => {
      const $segment = $("<div>").addClass("serpiente");
      $segment.css({ left: segment.x, bottom: segment.y });
      $jaula.append($segment);
    });

    // Dibujar la comida
    const $comida = $("<div>").addClass("comida");
    $comida.css({ left: food.x, bottom: food.y });
    $jaula.append($comida);
  }

  // Función para mover la serpiente
  function move() {
    let head = { x: snake[0].x, y: snake[0].y };

    if (d === "LEFT") head.x -= box;
    if (d === "UP") head.y += box;
    if (d === "RIGHT") head.x += box;
    if (d === "DOWN") head.y -= box;

    // Verificar colisiones con los bordes (muerte)
    if (
      head.x < 0 ||
      head.x >= $jaula.width() ||
      head.y < 0 ||
      head.y >= $jaula.height()
    ) {
      clearInterval(game);
      clearInterval(timer);
      alert("¡Game Over! Puntuación: " + score);
      $btnReiniciar.prop("disabled", false);
      return;
    }

    // Verificar colisión con la comida
    if (head.x === food.x && head.y === food.y) {
      score++;
      food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box,
      };
    } else {
      snake.pop(); // Eliminar la cola si no come
    }

    // Verificar colisión consigo misma
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        clearInterval(game);
        clearInterval(timer);
        alert("¡Game Over! Puntuación: " + score);
        $btnReiniciar.prop("disabled", false);
        return;
      }
    }

    snake.unshift(head); // Agregar la nueva cabeza
    draw();
  }

  // Función para iniciar el juego
  function startGame() {
    clearInterval(game);
    clearInterval(timer);
    snake = [{ x: 9 * box, y: 10 * box }];
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box,
    };
    score = 0;
    d = undefined;
    timeLeft = 60;
    $contador.text(timeLeft);
    $btnReiniciar.prop("disabled", true);
    $btnInicio.prop("disabled", true);
    game = setInterval(move, 200);
    startTimer();
  }

  // Función para iniciar el temporizador
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      $contador.text(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(game);
        clearInterval(timer);
        alert("¡Tiempo terminado! Puntuación: " + score);
        $btnReiniciar.prop("disabled", false);
      }
    }, 1000);
  }

  // Evento para iniciar el juego
  $btnInicio.click(startGame);

  // Evento para reiniciar el juego
  $btnReiniciar.click(function () {
    startGame();
    $btnInicio.prop("disabled", false);
  });

  // Control de la serpiente con las teclas
  $(document).keydown(function (e) {
    if (e.keyCode === 37 && d !== "RIGHT") d = "LEFT";
    if (e.keyCode === 38 && d !== "DOWN") d = "UP";
    if (e.keyCode === 39 && d !== "LEFT") d = "RIGHT";
    if (e.keyCode === 40 && d !== "UP") d = "DOWN";
  });

  // Dibujar el estado inicial
  draw();
});
