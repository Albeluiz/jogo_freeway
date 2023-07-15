//codigo do carro

let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 3.5, 8, 5, 7, 6];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro() {
  for(let i =0; i < imagemCarros.length; i ++ ){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
 
  }
}


function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
    xCarros[3] -= velocidadeCarros[3];
    xCarros[4] -= velocidadeCarros[4];
    xCarros[5] -= velocidadeCarros[5];
  
      
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -50){
      xCarros[0] = 700
  }

if (xCarros[1] < -50){
      xCarros[1] = 700
  }

if (xCarros[2] < -50){
      xCarros[2] = 700
  }
if (xCarros[3] < -50){
      xCarros[3] = 700
  }

if (xCarros[4] < -50){
      xCarros[4] = 700
}
if (xCarros[5] < -50){
      xCarros[5] = 700
}
  
if (xCarros[6] < -50){
      xCarros[6] = 700
}
}