const http = require('http');
const filesystem = require('fs');

// Función para calcular el promedio de un arreglo de números
function calcularPromedio(numeros) {
    const sumatoria = numeros.reduce((acc, num) => acc + num, 0);
    return sumatoria / numeros.length;
}

// Ejemplo de uso
const arreglo = [5, 10, 15, 20];
console.log("El promedio del arreglo es:", calcularPromedio(arreglo));

// Función para escribir un string en un archivo de texto
function escribirEnArchivo(texto, nombreArchivo) {
    filesystem.writeFile(nombreArchivo, texto, (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
            return;
        }
        console.log("Se ha escrito correctamente en el archivo:", nombreArchivo);
    });
}

// Ejemplo de uso
const textoSaludo = "¡Hola mundo desde Node.js!";
const nombreArchivoSaludo = "saludo.txt";
escribirEnArchivo(textoSaludo, nombreArchivoSaludo);

// Encuentra el máximo de un arreglo de números
function encontrarMaximo(arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

// Ejemplo de uso
const numeros = [10, 30, 5, 80, 20];
console.log("El máximo del arreglo es:", encontrarMaximo(numeros));

const footer = '<footer><p>Este es el pie de página.</p></footer>';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(footer);
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${PORT}/`);
});

const serverHTML = http.createServer((req, res) => {
    filesystem.readFile('pagina.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Error: Página no encontrada");
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

serverHTML.listen(PORT, () => {
    console.log(`El servidor HTML se está ejecutando en http://localhost:${PORT}/`);
});
