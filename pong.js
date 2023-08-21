//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let Altura = 90;

//velocidade da raquete
let xRaquete = 5;
let yRaquete = 150;

//velocidade do oponente
let xRaqueteOponente = 586;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo 
let meusPontos = 0;
let velocidadeDoOponente = 0;

//sons do jogo
let ponto; 
let raquetada; 
let trilha; 
 
function preload(){ 
  trilha =loadSound('trilha.mp3 '); 
  raquetada =loadSound("raquetada.mp3");
  ponto =loadSound("ponto.mp3"); 
}
  function setup() {
    createCanvas(600, 400); 
    trilha.loop(); 
  }
  function draw() {
        background(0); 
       movimentaBolinha(); 
    verificacolisaoborda(); 
    mostrarraquete(Raquete, yRaquete); 
    movimentaminharaquete(); 
    //verificacolisacRaquete();
    verificacolisaoRaquete(xRaquete,yRaquete);
    mostraRaquete(Raquetelponente, yRaqueteOponente);
    movimentaRaqueteOponente(); 
    verificacalisaoRaquete(xRaqueteOponente, yRaqueteOponente); 
    incluiplacar (); 
    marcaponto(); 
  }
  
function movimentaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

    function movimentaBolinha (){
  xBolinha += velocidadexBolinha; 
  yBolinha+= velocidadeyBolinha; 
    }
  function verificaColisaoBolinha(){ 
    if(Bolinha- raios> width )
       xBolinha += velocidadeXbolinha;
       yBolinha += velocidadeYbolinha;
       }
     
    function verificaColisaoborda(){
      if(xBolinha + raio> width ||
      xBolinha - raio< 0){ 
       velocidadeXBolinha *= -1;
     }
if (yBolinha + raio> height ||
    yBolinha + raio < 0){ 
  velocidadeYBolinha *= -1;
}
  }
  
function mostraRaquete(x, y){ 
  rect(x, y, raqueteComprimento,
raqueteAltura);
}

function movimentaMinhaRaquete(){ 
  if (keyISdowm( UP_arrow )){
     yRaquete -= 10;
  }


if (KeyIsdow(DoWM_ARROWN)){
    yRaquete += 10;
}
}
  function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento && 
        yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){ velocidadeXBolinha = -1;
                                                                                 }
  }

function verificaColisaoRaquete(x, y){
    colidiu = collideRectCircle(x,
y, raqueteComprimento, raqueteAltura,
 xBolinha, Bolinha,raio);
if (colidiu){
    velocidadeXBolinha *= -1; 
  raquetada.play();
}
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - 
    raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}
function incluiPlacar(){
  stroke(255);
  textAlign (CENTER); textSize(16);
  fill(color(255, 140, 0)); rect(150, 10, 40, 20)
  rect (150, 10, 40, 20);
  fill(255);
  text (meusPontos, 170, 26);
  fill (color(255, 140, 0));
  rect (450, 10, 40, 20);
  fill(255);
  text (pontosDoOponente, 470, 26);
} 
  
function marcaPonto(){ 
  if (xBolinha > 590){
 meusponto += 1;
    ponto.play();
  }
  if (xBolinha < 10){ 
  pontosDoOponente += 1;
    ponto.play();
  }
}
