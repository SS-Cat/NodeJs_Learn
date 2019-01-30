// let app = require(`./config/server`);

// /*let rotaHome = */require(`./app/routes/home`)(app);

// /*let rotaNoticias = */require(`./app/routes/noticias`)(app);

// /*let rotaformInclusaoNoticia = */require(`./app/routes/formulario_inclusao_noticia`)(app);

/* eslint-disable no-console */
require(`./config/server`).listen(3000, () => {
	console.log(`Server ON`);
});