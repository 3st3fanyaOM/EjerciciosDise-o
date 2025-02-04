// $(document).ready(function () {
//     console.log("test");
//     $(".btn-reiniciar").hide();//esconder boton reiniciar partida
//     //variables
//     const boardSize = 20; // Tablero de 20x20 celdas
//     const cellSize = 20;  // Tamaño de cada celda
//     let gameInterval, timeInterval;
//     let snake, food, direction, gameStarted, gameOver, timeLeft;
//     let gameWalls = true; 

//     // Iniciar juego
//     $(".btn-inicio").click(function () {
//         startGame();
//     });

//     // Reiniciar juego
   
//     $(".btn-reiniciar").click(function () {
//         startGame();
//     });

//     // Comienza el juego
//     function startGame() {
//         $(".btn-inicio").hide();
//         $(".btn-reiniciar").show();
//         $(".jaula").empty();
//         $(".contador").text(60);
//         timeLeft = 60;
//         gameOver = false;
//         gameStarted = true;

//         // Inicializar variables del juego
//         snake = [{ x: 5, y: 5 }];
//         food = generateFood();
//         direction = 'right';

//         // Dibujar el tablero
//         drawBoard();
//         drawSnake();
//         drawFood();
        
//         // Contador de tiempo
//         clearInterval(timeInterval);
//         timeInterval = setInterval(function () {
//             timeLeft--;
//             $(".contador").text(timeLeft);
//             if (timeLeft <= 0 || gameOver) {
//                 endGame();
//             }
//         }, 1000);

//         // Iniciar intervalos de movimiento
//         clearInterval(gameInterval);
//         gameInterval = setInterval(moveSnake, 200);

//         // Mover la serpiente con las teclas de dirección
//         $(document).on('keydown', function (e) {
//             if (e.which == 37 && direction != 'right') direction = 'left';
//             if (e.which == 38 && direction != 'down') direction = 'up';
//             if (e.which == 39 && direction != 'left') direction = 'right';
//             if (e.which == 40 && direction != 'up') direction = 'down';
//         });
//     }

//     // Mover la serpiente
//     function moveSnake() {
//         if (gameOver) return;

//         let head = { ...snake[0] };

//         if (direction === 'left') head.x--;
//         if (direction === 'up') head.y--;
//         if (direction === 'right') head.x++;
//         if (direction === 'down') head.y++;

//         // Si atravesamos las paredes
//         if (gameWalls) {
//             if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
//                 endGame();
//                 return;
//             }
//         } else {
//             // Si atravesamos las paredes, aparecer por el otro lado
//             if (head.x < 0) head.x = boardSize - 1;
//             if (head.x >= boardSize) head.x = 0;
//             if (head.y < 0) head.y = boardSize - 1;
//             if (head.y >= boardSize) head.y = 0;
//         }

//         // Si la serpiente se choca consigo misma
//         if (snake.some(s => s.x === head.x && s.y === head.y)) {
//             endGame();
//             return;
//         }

//         snake.unshift(head);

//         // Si la serpiente come la comida
//         if (head.x === food.x && head.y === food.y) {
//             food = generateFood();
//         } else {
//             snake.pop();
//         }

//         // Dibujar el tablero y la serpiente
//         drawBoard();
//         drawSnake();
//         drawFood();
//     }

//     // Dibujar el tablero
//     function drawBoard() {
//         for (let y = 0; y < boardSize; y++) {
//             for (let x = 0; x < boardSize; x++) {
//                 let cell = $('<div>').addClass('cell').css({
//                     width: cellSize,
//                     height: cellSize,
//                     position: 'absolute',
//                     top: y * cellSize,
//                     left: x * cellSize
//                 });
//                 $(".jaula").append(cell);
//             }
//         }
//     }

//     // Dibujar la serpiente
//     function drawSnake() {
//         $(".snake").remove();
//         snake.forEach((segment, index) => {
//             let snakePart = $('<div>').addClass('snake').css({
//                 width: cellSize,
//                 height: cellSize,
//                 backgroundColor: 'black',
//                 position: 'absolute',
//                 top: segment.y * cellSize,
//                 left: segment.x * cellSize
//             });
//             $(".jaula").append(snakePart);
//         });
//     }

//     // Dibujar la comida
//     function drawFood() {
//         $(".food").remove();
//         let foodElement = $('<div>').addClass('food').css({
//             width: cellSize,
//             height: cellSize,
//             backgroundColor: 'black',
//             position: 'absolute',
//             top: food.y * cellSize,
//             left: food.x * cellSize
//         });
//         $(".jaula").append(foodElement);
//     }

//     // Generar comida en una posición aleatoria
//     function generateFood() {
//         let x = Math.floor(Math.random() * boardSize);
//         let y = Math.floor(Math.random() * boardSize);
//         return { x, y };
//     }

//     // Terminar el juego
//     function endGame() {
//         gameOver = true;
//         clearInterval(gameInterval);
//         clearInterval(timeInterval);
//         alert("¡Juego terminado!");
//     }
// });

$(document).ready(function () {
  let direccion = 'RIGHT'; // Dirección inicial de la serpiente
  let intervalo;
  let serpiente = [{ x: 30, y: 50 }]; // Coordenadas de la serpiente
  let comida = {};
  let juegoActivo = false;
  let tiempoRestante = 60;
  let intervalTiempo;

  // Mostrar el botón de reiniciar al terminar
  $(".btn-inicio").on("click", function () {
    if (!juegoActivo) {
      juegoActivo = true;
      $(".btn-inicio").text("PAUSE");
      $(".btn-reiniciar").show();
      iniciarJuego();
    }
  });

  $(".btn-reiniciar").on("click", function () {
    reiniciarJuego();
  });

  // Función para iniciar el juego
  function iniciarJuego() {
    generarComida();
    intervalo = setInterval(moverSerpiente, 100); // Intervalo para mover la serpiente
    intervalTiempo = setInterval(actualizarTemporizador, 1000); // Actualizar el temporizador
    $(document).on("keydown", cambiarDireccion);
  }

  // Función para mover la serpiente
  function moverSerpiente() {
    let cabeza = { ...serpiente[0] };

    // Actualizar la cabeza de la serpiente dependiendo de la dirección
    if (direccion === 'UP') cabeza.y -= 20;
    if (direccion === 'DOWN') cabeza.y += 20;
    if (direccion === 'LEFT') cabeza.x -= 20;
    if (direccion === 'RIGHT') cabeza.x += 20;

    // Si la serpiente se come la comida
    if (cabeza.x === comida.x && cabeza.y === comida.y) {
      serpiente.unshift(cabeza); // Añadir un segmento a la cabeza
      generarComida(); // Generar nueva comida
    } else {
      serpiente.unshift(cabeza); // Mover la cabeza
      serpiente.pop(); // Eliminar el último segmento
    }

    // Verificar colisiones con las paredes
    if (cabeza.x < 0 || cabeza.x >= 500 || cabeza.y < 0 || cabeza.y >= 500 || colisionConSerpiente(cabeza)) {
      clearInterval(intervalo);
      clearInterval(intervalTiempo);
      alert("Game Over!");
      reiniciarJuego();
    }

    actualizarPantalla();
  }

  // Función para actualizar la pantalla
  function actualizarPantalla() {
    $(".jaula").empty(); // Limpiar la jaula

    // Dibujar la serpiente
    serpiente.forEach(segmento => {
      $("<div class='serpiente'></div>").css({
        top: segmento.y + "px",
        left: segmento.x + "px"
      }).appendTo(".jaula");
    });

    // Dibujar la comida
    $("<div class='comida'></div>").css({
      top: comida.y + "px",
      left: comida.x + "px"
    }).appendTo(".jaula");
  }

  // Función para generar la comida en una posición aleatoria
  function generarComida() {
    comida = {
      x: Math.floor(Math.random() * 25) * 20,
      y: Math.floor(Math.random() * 25) * 20
    };
  }

  // Función para cambiar la dirección
  function cambiarDireccion(evento) {
    if (evento.key === "ArrowUp" && direccion !== "DOWN") {
      direccion = "UP";
    }
    if (evento.key === "ArrowDown" && direccion !== "UP") {
      direccion = "DOWN";
    }
    if (evento.key === "ArrowLeft" && direccion !== "RIGHT") {
      direccion = "LEFT";
    }
    if (evento.key === "ArrowRight" && direccion !== "LEFT") {
      direccion = "RIGHT";
    }
  }

  // Función para comprobar si la serpiente colisiona con ella misma
  function colisionConSerpiente(cabeza) {
    for (let i = 1; i < serpiente.length; i++) {
      if (serpiente[i].x === cabeza.x && serpiente[i].y === cabeza.y) {
        return true;
      }
    }
    return false;
  }

  // Función para actualizar el temporizador
  function actualizarTemporizador() {
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      clearInterval(intervalTiempo);
      alert("Time's up! Game Over!");
      reiniciarJuego();
    }
    $(".contador").text(tiempoRestante);
    tiempoRestante--;
  }

  // Función para reiniciar el juego
  function reiniciarJuego() {
    serpiente = [{ x: 200, y: 200 }];
    direccion = "RIGHT";
    tiempoRestante = 60;
    $(".contador").text(tiempoRestante);
    juegoActivo = false;
    $(".btn-inicio").text("START");
    $(".btn-reiniciar").hide();
  }
});

