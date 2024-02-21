const boton = document.getElementById("boton_construir");

const construir_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://th.bing.com/th/id/OIP.C6QT0gxNAxWjQrrRSD8NMQAAAA?rs=1&pid=ImgDetMain";
    boton.innerHTML ="Mejorar casa";
    boton.className ="button is-warning";
    boton.onclick = terminar_casa;
    
};

const terminar_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://i.ytimg.com/vi/qlYbpkzYlPE/maxresdefault.jpg";
    boton.innerHTML ="Destruir casa";
    boton.className ="button is-danger";
    boton.onclick = destruir_casa;
    
};

const destruir_casa = () => {
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://minecraft.tools/es/css/img/index/02.jpg";
    boton.innerHTML ="Construir casa";
    boton.className ="button is-primary";
    boton.onclick = construir_casa;
    
};

destruir_casa();
