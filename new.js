let filas = parseInt(prompt("Ingrese el número de filas de la matriz"))
let columnas = parseInt(prompt("Ingrese el número de columnas de la matriz"))
let matriz1 = []
let matriz2 = []
let resultado = []

const crearMatriz = (matriz, idElemento) => {
  document.getElementById(idElemento).innerHTML=""
  for (let i = 0; i < filas; i++) {
    matriz[i] = []
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = parseInt(prompt(`Ingrese el valor del elemento de la matriz en la posición ${[i]}${[j]}`))
    }
    console.log(matriz)
  }
}

const pintarMatriz = (matriz1, matriz2) => {
  let tabla = "<table class='p-2 table-secondary'>";
  for (let i = 0; i < filas; i++) {
    tabla += "<tr>";
    for (let j = 0; j < columnas; j++) {
      tabla += `<td><input type="number" class="form-control bg-primary" value="${matriz1[i][j]}"/></td>`;
    }
    for (let j = 0; j < columnas; j++) {
      tabla += `<td><input type="number" class="form-control bg-primary" value="${matriz2[i][j]}"/></td>`;
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  document.getElementById("resultado").innerHTML = tabla;
}

crearMatriz(matriz1, "matriz1")
crearMatriz(matriz2, "matriz2")
pintarMatriz(matriz1, matriz2)
