var jugado = document.getElementsByClassName("boton");
var contadorT = document.getElementById("contador");
var reset = document.getElementById("reset");
var contadoresG = document.getElementsByClassName("contadorG");
var srcO = `<img src="imgs/O.png">`;
var srcX = `<img src="imgs/X.png">`;
let turno = 0;
let victoriasO = 0;
let victoriasX = 0;
let partidas = 0;
var alerta = document.getElementById("alerta");
var fondo = document.getElementById("fondo");
var ganador = document.getElementById("ganador");
var continuar = document.getElementById("continuar");

var winX = "Ganador X";
var winO = "Ganador O";
var empate = "empate";
var Win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function colocar(boton) {
  if (turno % 2 === 0) {
    boton.innerHTML = srcO;
  } else {
    boton.innerHTML = srcX;
  }
  turno++;
  contador.innerHTML = turno;
  boton.disabled = true;
}
function deshabilitar() {
  for (let i = 0; i < 9; i++) {
    jugado[i].disabled = true;
  }
}
for (let i = 0; i < jugado.length; i++) {
  jugado[i].addEventListener("click", function (e) {
    colocar(jugado[i]);
    gano();
  });
}
function resetear() {
  turno = 0;
  contador.innerHTML = turno;
  for (let i = 0; i < jugado.length; i++) {
    jugado[i].innerHTML = ``;
    jugado[i].disabled = false;
  }
}
reset.addEventListener("click", function (e) {
  resetear();
});

function gano() {
  if (
    jugado[0].innerHTML != "" &&
    jugado[1].innerHTML != "" &&
    jugado[2].innerHTML != "" &&
    jugado[3].innerHTML != "" &&
    jugado[4].innerHTML != "" &&
    jugado[5].innerHTML != "" &&
    jugado[6].innerHTML != "" &&
    jugado[7].innerHTML != "" &&
    jugado[8].innerHTML != ""
  ) {
    partidas++;
    contadoresG[1].innerHTML = partidas;
    alerta.style.display = "flex";
    fondo.style.display = "block";
    ganador.innerHTML = empate;
    deshabilitar();
  } else {
    for (var j = 0; j < Win.length; j++) {
      if (
        jugado[Win[j][0]].innerHTML === srcX &&
        jugado[Win[j][1]].innerHTML === srcX &&
        jugado[Win[j][2]].innerHTML === srcX
      ) {
        victoriasX++;
        partidas++;
        contadoresG[1].innerHTML = partidas;
        contadoresG[2].innerHTML = victoriasX;
        deshabilitar();
        alerta.style.display = "flex";
        fondo.style.display = "block";
        ganador.innerHTML = winX;
      } else if (
        jugado[Win[j][0]].innerHTML === srcO &&
        jugado[Win[j][1]].innerHTML === srcO &&
        jugado[Win[j][2]].innerHTML === srcO
      ) {
        victoriasO++;
        partidas++;
        contadoresG[1].innerHTML = partidas;
        alerta.style.display = "flex";
        fondo.style.display = "block";
        ganador.innerHTML = winO;
        deshabilitar();

        contadoresG[0].innerHTML = victoriasO;
      }
    }
  }
}

continuar.addEventListener("click", function (e) {
  alerta.style.display = "none";
  fondo.style.display = "none";
  ganador.innerHTML = "";
});
