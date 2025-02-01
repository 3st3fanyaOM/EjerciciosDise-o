$(document).ready(function () {
    const boardSize = 20; // Tablero de 20x20 celdas
    const cellSize = 20;  // Tamaño de cada celda
    let gameInterval, timeInterval;
    let snake, food, direction, gameStarted, gameOver, timeLeft;
    let gameWalls = true; // Cambia a 'false' para permitir atravesar las paredes

    // Iniciar juego
    $(".btn-inicio").click(function () {
        startGame();
    });

    // Reiniciar juego
    $(".btn-reiniciar").click(function () {
        startGame();
    });

    // Comienza el juego
    function startGame() {
        $(".btn-inicio").hide();
        $(".btn-reiniciar").show();
        $(".jaula").empty();
        $(".contador").text(60);
        timeLeft = 60;
        gameOver = false;
        gameStarted = true;

        // Inicializar variables del juego
        snake = [{ x: 5, y: 5 }];
        food = generateFood();
        direction = 'right';

        // Dibujar el tablero
        drawBoard();
        drawSnake();
        drawFood();
        
        // Contador de tiempo
        clearInterval(timeInterval);
        timeInterval = setInterval(function () {
            timeLeft--;
            $(".contador").text(timeLeft);
            if (timeLeft <= 0 || gameOver) {
                endGame();
            }
        }, 1000);

        // Iniciar intervalos de movimiento
        clearInterval(gameInterval);
        gameInterval = setInterval(moveSnake, 200);

        // Mover la serpiente con las teclas de dirección
        $(document).on('keydown', function (e) {
            if (e.which == 37 && direction != 'right') direction = 'left';
            if (e.which == 38 && direction != 'down') direction = 'up';
            if (e.which == 39 && direction != 'left') direction = 'right';
            if (e.which == 40 && direction != 'up') direction = 'down';
        });
    }

    // Mover la serpiente
    function moveSnake() {
        if (gameOver) return;

        let head = { ...snake[0] };

        if (direction === 'left') head.x--;
        if (direction === 'up') head.y--;
        if (direction === 'right') head.x++;
        if (direction === 'down') head.y++;

        // Si atravesamos las paredes
        if (gameWalls) {
            if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
                endGame();
                return;
            }
        } else {
            // Si atravesamos las paredes, aparecer por el otro lado
            if (head.x < 0) head.x = boardSize - 1;
            if (head.x >= boardSize) head.x = 0;
            if (head.y < 0) head.y = boardSize - 1;
            if (head.y >= boardSize) head.y = 0;
        }

        // Si la serpiente se choca consigo misma
        if (snake.some(s => s.x === head.x && s.y === head.y)) {
            endGame();
            return;
        }

        snake.unshift(head);

        // Si la serpiente come la comida
        if (head.x === food.x && head.y === food.y) {
            food = generateFood();
        } else {
            snake.pop();
        }

        // Dibujar el tablero y la serpiente
        drawBoard();
        drawSnake();
        drawFood();
    }

    // Dibujar el tablero
    function drawBoard() {
        for (let y = 0; y < boardSize; y++) {
            for (let x = 0; x < boardSize; x++) {
                let cell = $('<div>').addClass('cell').css({
                    width: cellSize,
                    height: cellSize,
                    position: 'absolute',
                    top: y * cellSize,
                    left: x * cellSize
                });
                $(".jaula").append(cell);
            }
        }
    }

    // Dibujar la serpiente
    function drawSnake() {
        $(".snake").remove();
        snake.forEach((segment, index) => {
            let snakePart = $('<div>').addClass('snake').css({
                width: cellSize,
                height: cellSize,
                backgroundColor: 'green',
                position: 'absolute',
                top: segment.y * cellSize,
                left: segment.x * cellSize
            });
            $(".jaula").append(snakePart);
        });
    }

    // Dibujar la comida
    function drawFood() {
        $(".food").remove();
        let foodElement = $('<div>').addClass('food').css({
            width: cellSize,
            height: cellSize,
            backgroundColor: 'red',
            position: 'absolute',
            top: food.y * cellSize,
            left: food.x * cellSize
        });
        $(".jaula").append(foodElement);
    }

    // Generar comida en una posición aleatoria
    function generateFood() {
        let x = Math.floor(Math.random() * boardSize);
        let y = Math.floor(Math.random() * boardSize);
        return { x, y };
    }

    // Terminar el juego
    function endGame() {
        gameOver = true;
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        alert("¡Juego terminado!");
    }
});
