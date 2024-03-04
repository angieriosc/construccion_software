const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);
    
    if (request.url == "/") {

      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`
          <h1 class="title">Hola mundo de Minecraft!</h1>
          <div class="columns">
      `);

      let tarjetas_construcciones = '';
      for(let construccion of construcciones) {
        tarjetas_construcciones += `
          <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${construccion.imagen}" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="${construccion.imagen}" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">${construccion.nombre}</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
              
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
        </div>
        `;
      }
      response.write(tarjetas_construcciones);
      response.write(`</div>`);
      response.write(footer);
      response.end();

    } else if (request.url == "/construir" && request.method == "GET") {

      response.write(header);
      response.write(`
        <h1 class="title">Agregar una construcción</h1>
          <form action="/construir" method="POST">
            <label class="label" for="nombre">Nombre</label>
            <input name="nombre" id="nombre" type="text" class="input"><br>
            <label class="label" for="imagen">Imagen</label>
            <input name="imagen" id="imagen" type="text" class="input"><br><br>
            <input class="button is-success" type="submit" value="Construir">
          </form>
      `);
      response.write(footer);
      response.end();

    } else if (request.url == "/construir" && request.method == "POST") {

      const datos = [];

      request.on('data', (dato) => {
          console.log(dato);
          datos.push(dato);
      });

      return request.on('end', () => {
          const datos_completos = Buffer.concat(datos).toString();
          console.log(datos_completos);
          const nombre = datos_completos.split('&')[0].split('=')[1];
          console.log(nombre);
          const imagen = datos_completos.split('&')[1].split('=')[1];
          console.log(imagen);
          construcciones.push({nombre: nombre, imagen: imagen});
          return response.end();
      });

    } else {

      //Código de respuesta para recurso no encontrado
      response.statusCode = 404;

      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`<h1 class="title">Ups, esta aldea no existe</h1>`);
      response.write(footer);
      
      response.end();
    }
    
});

server.listen(3000);
