const contra = document.getElementById("contra");
const mens = document.getElementById("mensajeValidacion");
var expresion = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validar_contra() {
    if (expresion.test(contra.value)) {
        mens.innerHTML = "Contraseña válida.";
    } else {
        mens.innerHTML = "La contraseña debe contener al menos una mayúscula, un signo y tener al menos 8 caracteres.";
        botonAyuda();
    }
}

const botonAyuda = () => {
    // Verificar si ya existe el botón de ayuda
    if (!document.getElementById("botonAyuda")) {
        const botonAyuda = document.createElement("button");
        botonAyuda.innerHTML = "¿Necesitas ayuda?";
        botonAyuda.id = "botonAyuda";
        botonAyuda.addEventListener("click", mostrarAyuda);
        mens.appendChild(botonAyuda);
        // Ocultar el botón de ayuda después de 5 segundos
        setTimeout(function() {
            mens.removeChild(botonAyuda);
        }, 5000);
    }
}

const mostrarAyuda = () => {
    alert("un ejemplo de contraseña válida es D345abc?p");
}

// Cambiar dinámicamente el estilo del texto cada 2 segundos
setInterval(function() {
    const texto = document.querySelector('.texto');
    texto.style.color = getRandomColor(); // Cambiar color aleatorio
}, 2000);

// Función para obtener un color aleatorio en formato hexadecimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
