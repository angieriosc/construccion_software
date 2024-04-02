const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const bodyParser = require("body-parser");

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware

const rutasConstrucciones = require("./routes/construcciones.routes");

app.use("/", rutasConstrucciones);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

//Registrar el middleware con el módulo construcciones

app.listen(2000);
