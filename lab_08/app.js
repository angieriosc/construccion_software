const express = require('express');
const app = express();
const filesystem = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const path = require('path');

//Middleware
app.get('/', (request, response, next) => {
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
        </script>
    </body>
    </html>`)
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/tttt', (request, response, next) => {
    console.log(request.body)
    response.send('Respuesta de la ruta "/ttt"'); 
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/lab.html', (req, res) => {
    // Obtener la ruta absoluta al archivo lab.html
    const filePath = path.join(__dirname, 'lab.html');
    // Enviar el archivo lab.html como respuesta al cliente
    res.sendFile(filePath);
});

// Middleware
app.use((req, res, next) => {
    console.log('Middleware!');
    next();
});



// Iniciar el servidor
app.listen(3000);
