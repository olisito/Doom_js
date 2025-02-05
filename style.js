/* const boton1 = document.getElementById("botoncito");

function onclick() {
    const titulo = document.getElementById("titulo");
    const titulotext = prompt(" dime tu nombre");
    titulo.setAttribute("class", "cambios");
    document.body.setAttribute("class", "colorbody");
    titulo.innerText = titulotext;
}
boton1.addEventListener("dblclick", onclick);
 */
/* 
const start = document.getElementById("botoncito");
function sumita() {
    const titulo = document.getElementById("titulo");
    let num = 0;
    let suma = 0;
    do {
        num = parseInt(prompt(" DI UN NUMERO PARA SUMAR O pÙLSA 0 PARA SALIR"));
        suma += num;
    } while (num != 0);
    titulo.innerHTML = "EL RESULTADO ES: <span>" + suma + "</span>";
    const span = document.getElementsByTagName("span")[0];
    if (suma < 50) {
        span.setAttribute("class", "red");
    } else {
        suma >= 50;
        span.setAttribute("class", "green");
    }
}
start.addEventListener("click", sumita);

 */

const agregar = document.getElementById("agregar");
const sumatoria = document.getElementById("sumatoria");
let nums = 0;
let suma = 0;
function addlist() {
    const input = document.getElementById("number").value;
    const newlist = document.getElementById("lista");
    const elementli = document.createElement("li");
    elementli.appendChild(elementli);
    newlist.innerText = "el numero añadido es: " + input.value;
}
agregar.addEventListener("click", addlist);

function sumarlo() {}
