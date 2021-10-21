//FUNCIONES CLASE IV

// Sin parametros
function restar(){
     let numero1 = parseInt (prompt("Ingrese el primer numero"));
     let numero2 = parseInt (prompt("Ingrese el segundo numero"));
     let resta =numero1 - numero2;
     console.log("El resultado de la resta es: " + resta);
}

restar();

//Con parametros
let resultado;

function restarConParametros(num1, num2) {
        resultado = num1 - num2;
}
let anioContratacion = parseInt(prompt("Ingrese año de contratación"));
const ANIOACTUAL = 2021;
restarConParametros(ANIOACTUAL, anioContratacion);
console.log("Su año de contratación es: " + resultado + "años");

//con parametros y retorno
function concatenarTextos(texto1, texto2) {
    let textoConcatenado = texto1 + " " + texto2;
    return textoConcatenado;
}

let nombre = prompt ("Ingresar nombre");
let apellido = prompt("Ingresar apellido");
let nombreCompleto = concatenarTextos (nombre, apellido);
console.log("Buenos dias " + nombreCompleto);

//Ejemplo calculadora

function calculadora(primerNumero, operacion, segundoNumero) {
    switch(operacion) {
          case "+":
              return primerNumero + segundoNumero;
              break;
           case "-":
              return primerNumero - segundoNumero;
              break;   
           case "*":
              return primerNumero * segundoNumero;
              break;  
           case "/":
              return primerNumero / segundoNumero;
              break;
           default:
              return 0;
              break;
    }
}
console.log(calculadora(10, "*", 5));
let valor1 = parseFloat(prompt("Ingrese un numero"));
let valor2 = parseFloat(prompt("Ingrese otro numero"));
let ope = prompt("Ingrese la operación a realizar + - * /");
let resultadoFinal = calculadora(valor1, ope, valor2);
alert("El resultado de " +valor1+ " " +ope+ " " +valor2+ "=" +resultadoFinal);

//FUNCIONES FLECHAS
//Sin parametros

let saludo = () => {
    let ingresaNombre = prompt ("Ingresa tu nombre");
    alert("Que tengas un día lleno de energias" + " " + ingresaNombre);
}

saludo();

//opciones con parametros
const saludo2 = (unNombre) => {
      alert("Que tengas un día lleno de ventas " + unNombre);
}
// ejemplos varios de como solicitar nommbre
//1
saludo2("Jonathan");
//2
let nomb = prompt("Ingresa tu nombre");
saludo2(nomb);
//3 
saludo2(prompt("¿Cual es tu nombre?"));

//Desafio complementario

let precio = parseFloat(prompt("Ingresa Precio Neto"))
let ivaFijoChile = 19
let iva = precio * ivaFijoChile / 100;
let precioConIva = precio + iva;
alert("Tu precio con Iva es" + precioConIva)


