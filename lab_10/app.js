const express = require('express');
const app = express();
const filesystem = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    response.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Lab Javascript</title>
    </head>
    <body>
        <div id="tasksContainer"></div>
        <h1>Lab 08</h1>
        <script src="app.js"> </script>
        <h3>Promedios</h3>
        <p>Ingresa los numeros para calcular su promedio, los numeros separalos por comas.</p>
        <textarea id='prominput' rows='1' cols='30'></textarea>
        <button onclick='promedio()'>Calcular</button>
        <h2>Formulario de Texto</h2>
        <form id="formularioTexto">
            <label for="texto">Ingrese su texto:</label><br>
            <textarea id="texto" name="texto" rows="4" cols="50"></textarea><br>
            <button onclick='escribirEnArchivo(); return false;'>Enviar</button>
        </form>
        <h3>Inverso</h3>
        <label for='inversoInput'>Ingresa los numeros separados por comas:</label>
        <input type='text' id='inversoInput'></input>
        <button onclick='inverso()'>Calcular inverso</button> 
        <button onclick="abrirOtraPagina()">Abrir Otra Página</button>
    
        <script>

            function promedio() {
                const entrada_2 = document.getElementById('prominput').value;
                const numeros = entrada_2.split(',').map(Number);
                var suma = 0;
            
                for (var i = 0; i < numeros.length; i++) {
                    suma += numeros[i];
                }
            
                const promedio = suma / numeros.length;
            
                var resultado = "El promedio es: " + promedio.toFixed(2); // Redondeamos el promedio a 2 decimales
                console.log(resultado);
                alert(resultado);
            }
            function escribirEnArchivo() {
                // Obtener el texto ingresado por el usuario
                const texto = document.getElementById('texto').value;
            

                // Finalmente, puedes mostrar un mensaje de éxito o realizar otras acciones según tus necesidades.
                document.getElementById('respuesta').textContent = texto;
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
            function abrirOtraPagina() {
                // Redirige al usuario a otra página (por ejemplo, "otra_pagina.html")
                window.location.href = 'lab.html';
            }
        </script>
    </body>
    </html>`)
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/tttt', (request, response, next) => {
    console.log(request.body)
    response.send('Respuesta de la ruta "/ttt"'); 
});


// Función para calcular el promedio de un arreglo de números
function calcularPromedio(numeros) {
    const sumatoria = numeros.reduce((acc, num) => acc + num, 0);
    return sumatoria / numeros.length;
}

// Middleware
app.use((req, res, next) => {
    console.log('Middleware!');
    next();
});

// Ruta para calcular promedio
app.post('/calcularPromedio', (req, res, next) => {
    response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora de Promedio</title>
    </head>
    <body>
        <h1>Calculadora de Promedio</h1>
        <form action="http://localhost:3000/calcularPromedio" method="post">
            <label for="numeros">Ingrese números separados por comas:</label><br>
            <input type="text" id="numeros" name="numeros"><br>
            <button type="submit">Calcular Promedio</button>
        </form>
    </body>
    </html>
    `)
    const numeros = req.body.numeros.split(',').map(num => parseInt(num));
    const promedio = calcularPromedio(numeros);
    res.send(`El promedio del arreglo es: ${promedio}`);
});

// Ruta para escribir en archivo
app.post('/escribirEnArchivo', (req, res, next) => {
    const texto = req.body.texto;
    const nombreArchivo = req.body.nombreArchivo;
    escribirEnArchivo(texto, nombreArchivo);
    res.send(`Se ha escrito en el archivo: ${nombreArchivo}`);
});

// Ruta para encontrar máximo
app.post('/encontrarMaximo', (req, res, next) => {
    const numeros = req.body.numeros.split(',').map(num => parseInt(num));
    const maximo = encontrarMaximo(numeros);
    res.send(`El máximo del arreglo es: ${maximo}`);
});

// Iniciar el servidor
app.listen(3000);
