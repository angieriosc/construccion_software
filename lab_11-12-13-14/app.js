const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// Registrar el middleware con el módulo construcciones
const rutasZe = require('./routes/zebrands.routes');


const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
      //'public/uploads': Es el directorio del servidor donde se subirán los archivos 
      callback(null, 'public/uploads');
  },
  filename: (request, file, callback) => {
      //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
      //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
      callback(null, file.originalname);
  },
});
app.use(multer({ storage: fileStorage }).single('image'));

// Configurar connect-flash
app.use(cookieParser());
app.use(session({
  secret: 'tu_secreto_aqui',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// Usar las rutas definidas
app.use('/', rutasZe);

// Manejar errores 404
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

app.listen(3000);
