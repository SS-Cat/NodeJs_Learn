let app = require(`./config/server`);

// /*let rotaHome = */require(`./app/routes/home`)(app);

// /*let rotaNoticias = */require(`./app/routes/noticias`)(app);

// /*let rotaformInclusaoNoticia = */require(`./app/routes/formulario_inclusao_noticia`)(app);

app.listen(3000, () => {
	// eslint-disable-next-line no-console
	console.log(`Ligado`);
});