//código do Ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;
let dev = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(LEFT_ARROW)){
  yAtor -= 3;
}
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMover())
  yAtor += 3;
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++ ){
    colisao = collideRectCircle(xCarros[i], yCarros[i],       comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosiçãoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosiçãoInicial(){
  yAtor = 366;
}


function incluiPontos(){
  textSize(30);
  textStyle(BOLD);
  text(meusPontos, width / 5, 20);
  color('magenta');
    
}

function autor() {
  textSize(10);
  textStyle(BOLD);
  fill(255, 0, 0); // Define a cor do texto como vermelho (255 para vermelho, 0 para verde, 0 para azul)
  text("By AlbeluizDEV  Instruções: Utilizar as Setas do Teclado: Para cima e para Baixo", width = 340, 380);
 
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosiçãoInicial();
  }
 
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}


function podeSeMover(){
  return yAtor < 366;
}











