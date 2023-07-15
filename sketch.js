let button;
let buttonPausar;
let jogoIniciado = false;
let jogoPausado = false;


function preload() {
  // Carregar o arquivo de som da trilha sonora
  somDaTrilha = loadSound('trilhaSonora.mp3');
}

function setup() {
  createCanvas(700, 400);

  button = createButton('Iniciar Jogo');
  button.position(50, 10);
  button.mousePressed(iniciarJogo);

  buttonPausar = createButton('Pausar Jogo');
  buttonPausar.position(550, 10);
  buttonPausar.mousePressed(pausarJogo);
}

function draw() {
  if (jogoIniciado && !jogoPausado) {
    // Chame as funções relacionadas ao jogo apenas quando o jogo for iniciado e não estiver pausado
    background(imagemDaEstrada,500);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    autor();
    marcaPonto();
  } else {
    // Exiba uma mensagem ou tela de espera até o jogo ser iniciado ou enquanto estiver pausado
    background(imagemInicio,50);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(15);
    fill(255,0,0);
    if (!jogoIniciado) {
      text("Clique em 'Iniciar Jogo' para começar", width / 2, height / 2 - 65,);
    } else if (jogoPausado) {
      text("Jogo pausado. Clique em 'Continuar' para retomar", width / 1, height / 2-65);
    }
  }
}

function iniciarJogo() {
  jogoIniciado = true;
  button.remove(); // Remove o botão "Iniciar Jogo"
  somDaTrilha.loop();
}

function pausarJogo() {
  jogoPausado = !jogoPausado;
  if (jogoPausado) {
    somDaTrilha.pause();
  } else {
    somDaTrilha.loop();
  }
}




function toque(event) {
  // O método `toque` é chamado sempre que o usuário toca na tela.
  // Neste caso, usaremos ele para mover o ator na direção do toque.
  let x = event.x;
  let y = event.y;

  // Se o toque for feito à esquerda do ator, mova-o para a esquerda.
  if (x < ator.x) {
    ator.x -= 5;
  }

  // Se o toque for feito à direita do ator, mova-o para a direita.
  if (x > ator.x) {
    ator.x += 5;
  }

  // Se o toque for feito acima do ator, mova-o para cima.
  if (y < ator.y) {
    ator.y -= 5;
  }

  // Se o toque for feito abaixo do ator, mova-o para baixo.
  if (y > ator.y) {
    ator.y += 5;
  }
}