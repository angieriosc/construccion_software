const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret:
      "top08dilu28934jjbr4u3ruifsdkhf4urhehhuhrieuwhrsndfb",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const csrf = require('csurf');
const csrfProtection = csrf();

//...Y después del código para inicializar la sesión... 
app.use(csrfProtection); 

const rutasUsuarios = require("./routes/usuarios.routes");
app.use("/users", rutasUsuarios);


//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Registrar el middleware con el módulo construcciones
const rutasConstrucciones = require("./routes/construcciones.routes");
app.use("/construcciones", rutasConstrucciones);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
