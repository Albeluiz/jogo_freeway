//imagens e sons do jogo

let imagemdaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemInicio;


let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemInicio = loadImage("imagens/freeway.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]



somDaTrilha = loadSound("sons/trilha.mp3");
somDaColisao = loadSound("sons/colidiu.mp3");
somDoPonto = loadSound("sons/pontos.wav");

}



