function contarNumeros() {
    const entrada = document.getElementById('numerosInput').value;
    const numeros = entrada.split(',').map(Number);

    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos++;
        } else if (numeros[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    alert("Cantidad de numeros negativos: " + negativos +
        "\nCantidad de ceros: " + ceros +
        "\nCantidad de numeros positivos: " + positivos);
    console.log("Cantidad de numeros negativos: " + negativos +
    "\nCantidad de ceros: " + ceros +
    "\nCantidad de numeros positivos: " + positivos);
}

function promedios() {
    const entrada_2 = document.getElementById('matrizInput').value;
    const filas = entrada_2.split(';');
    const promedios = [];

    for (var i = 0; i < filas.length; i++) {
        const numeros = filas[i].split(',').map(Number);
        var suma = 0;
        for (var j = 0; j < numeros.length; j++) {
            suma += numeros[j];
        }
        const promedio = suma / numeros.length;
        promedios.push(promedio);
    }
    var resultado = "Promedios: ";
    for (var i = 0; i < promedios.length-1; i++) {
        resultado += "   Fila" + (i + 1) + " :" + promedios[i];
    }
    console.log(resultado);
    alert(resultado);
}


function inverso() {
    const entrada = document.getElementById('inversoInput').value;
    const numeros_i = entrada.split(',').map(Number);
    const inverso = []; 

    // Invertir el arreglo
    for (var i = numeros_i.length - 1; i >= 0; i--) {
        inverso.push(numeros_i[i]);
    }

    var resultado = "Inverso: ";
    for (var i = 0; i < inverso.length; i++) {
        resultado += inverso[i];
        if (i !== inverso.length - 1) {
            resultado += ",";
        }
    }
    console.log(resultado);
    alert(resultado);
}

function calc_sumaRecursiva(n) {
    var resultado = 0;
	if (n==0){
		resultado = 0;
	} 
    else {
        if (n <= 1) {
		    resultado = 1;
	    } else {
		    resultado = (n + calc_sumaRecursiva(n - 1));
	     }
    }
    return resultado;
}

function sumaRecursiva(){
    const n = document.getElementById('sumInput').value; 
    const resultado = "El resultado es: " + calc_sumaRecursiva(Number(n));
    console.log(resultado);
    alert(resultado);
}

console.log("Generación de tabla de cuadrados y cubos");
const numero = prompt("Ingresa un numero:");

document.write("<h1>Lab_04</h1>");
document.write("<h3>Tabla de Cuadrados y Cubos hasta " + numero + "</h3>");
document.write("<table border='2'>");
document.write("<tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (var i = 1; i <= parseInt(numero); i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");
}
document.write("</table>");
document.write("<br>");
document.write("<h3>Resultado Suma</h3>");
var num_1 = Math.floor(Math.random() * 20);
var num_2 = Math.floor(Math.random() * 20);
var tiempoInicio = new Date().getTime();
const result_suma = prompt('¿Cuanto es '+ num_1 + "+" +num_2 + "?")
var tiempoFin = new Date().getTime();
var tiempoTranscurrido = (tiempoFin - tiempoInicio)/1000;
if(result_suma  == num_1+num_2){
    document.write("Correcto " + num_1 + " + " + num_2 + " es igual a " + result_suma)
    document.write("<br>");
    document.write('El usuario tardo ' + tiempoTranscurrido + ' segundos en responder');
}
else{
    document.write("Incorrecto "+ num_1 + " + " + num_2 + " no es igual a " + result_suma)
    document.write("<br>");
    document.write('El usuario tardo ' + tiempoTranscurrido + ' segundos en responder');
}

document.write("<h3>Contador de numeros</h3>");
document.write("<label for='numerosInput'>Ingresa los numeros separados por comas:</label>");
document.write("<input type='text' id='numerosInput'></input>");
document.write("<button onclick='contarNumeros()'>Contar</button>");

document.write("<h3>Promedios</h3>");
document.write("<p>Ingresa la matriz, los numeros separalos por comas. Termina la fila con punto y coma (;).</p>");
document.write("<textarea id='matrizInput' rows='7' cols='30'></textarea>");
document.write("<button onclick='promedios()'>Calcular</button>");

document.write("<h3>Inverso</h3>");
document.write("<label for='inversoInput'>Ingresa los numeros separados por comas:</label>");
document.write("<input type='text' id='inversoInput'></input>");
document.write("<button onclick='inverso()'>Calcular inverso</button>");

document.write("<h3>Suma Recursiva</h3>");
document.write("<label for='sumInput'>Ingresa un numero y se calculara la suma de todos los numeros positivos anteriores mas el numero ingresado de manera recursiva:</label>");
document.write("<input type='text' id='sumInput'></input>  ");
document.write("<button onclick='sumaRecursiva()'>Calcular suma</button>");