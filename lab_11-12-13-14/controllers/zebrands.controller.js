const Zebrand = require('../models/zebrands.model');


exports.get_zebr = (request, response, next) => {
    response.render('zebrand'); 
};

exports.post_zebr = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const zebrand = new Zebrand(request.body.nombre, request.body.imagen);
    response.cookie('username', 'angie_rios_8', { maxAge: 900000, httpOnly: true });
    zebrand.save();
    request.flash('success', '¡Botón agregado correctamente!');
    response.redirect('/'); 
};


exports.post_upload = (req, res, next) => {
    // Manejar el archivo subido
    console.log(req.file);
    const file = req.file;
    const fileName = file.originalname; // Nombre del archivo
    const filePath = file.path; // Ruta del archivo
    
    // Renderizar la vista EJS con el archivo subido
    res.render('upload', { fileName: fileName, filePath: filePath });;
};

exports.get_root = (request, response, next) => {
    console.log('Route /');
    response.render('Zebrands', {
        botones: Zebrand.fetchAll(),
        mensaje: request.flash('success')
    });
};


exports.get_upload = (request, response, next) => {
    response.render('upload'); 
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
