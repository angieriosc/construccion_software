const Zebrand = require('../models/zebrands.model');

exports.get_zebr = (request, response, next) => {
    response.render('zebrand'); 
};


exports.post_zebr = (request, response, next) => {
    console.log(request.body);
    const zebrand = new Zebrand(request.body.nombre, request.body.imagen);
    zebrand.save();
    // Renderiza la vista Zebrands.ejs con los botones actualizados
    response.render('Zebrands', {
        botones: Zebrand.fetchAll(),
        mensaje: '¡Botón agregado correctamente!'
    });
};

exports.get_root = (request, response, next) => {
    response.render('Zebrands', {
        botones: Boton.fetchAll() // Pasar la lista de botones a la vista
    });
}

exports.get_inicio = (request, response, next) => {
    response.render('inicio'); 
};

exports.get_correos = (request, response, next) => {
    response.render('correos'); 
};

exports.get_analitica = (request, response, next) => {
    response.render('analitica'); 
};

exports.get_resenas = (request, response, next) => {
    response.render('resenas'); 
};

exports.get_usuarios = (request, response, next) => {
    response.render('usuarios'); 
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('Zebrands', {
        botones: Zebrand.fetchAll(),
        mensaje: '¡Botón agregado correctamente!' // Aquí defines el mensaje
    });
}

// Otras funciones del controlador...
