const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para manejar la página principal
app.get('/', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Lab Javascript</title>
        </head>
        <body>
            <h1>Lab 08</h1>
            <h3>Promedios</h3>
            <p>Ingresa los números para calcular su promedio, separados por comas:</p>
            <input type='text' id='prominput'></input>
            <button onclick='promedio()'>Calcular</button>

            <h2>Formulario de Texto</h2>
            <form id="formularioTexto">
                <label for="texto">Ingrese su texto:</label><br>
                <textarea id="texto" name="texto" rows="4" cols="50"></textarea><br>
                <button onclick='escribirEnArchivo(); return false;'>Enviar</button>
            </form>

            <h3>Inverso</h3>
            <label for='inversoInput'>Ingresa los números separados por comas:</label>
            <input type='text' id='inversoInput'></input>
            <button onclick='inverso()'>Calcular inverso</button> 

            <form action="/guardarDatos" method="post">
                <input type="text" name="dato" placeholder="Ingrese un dato">
                <button type="submit">Enviar</button>
            </form>

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
                
                    var resultado = "Inverso: " + inverso.join(',');
                    console.log(resultado);
                    alert(resultado);
                }
            </script>
        </body>
        </html>
    `);
});

// Ruta para manejar la solicitud POST y guardar datos en un archivo de texto
app.post('/guardardatos', (req, res) => {
    const dato = req.body.dato;

    // Guardar datos en un archivo de texto
    const filePath = path.join(__dirname, 'datos.txt');
    fs.appendFile(filePath, dato + '\n', (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Datos guardados correctamente');
            res.send('Datos guardados correctamente');
        }
    });
});

app.use('/tttt', (request, response, next) => {
    console.log(request.body)
    response.send('Respuesta de la ruta "/ttt"'); 
});
app.get('/lab.html', (req, res) => {
    // Obtener la ruta absoluta al archivo lab.html
    const filePath = path.join(__dirname, 'lab.html');
    // Enviar el archivo lab.html como respuesta al cliente
    res.sendFile(filePath);
});

app.use((req, res) => {
    res.status(404).send('Error 404 Página no encontrada');
});


app.listen(3001);
