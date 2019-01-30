module.exports = function name(app) {
	app.get(`/formulario_inclusao_noticia`, function (req, res) {
		res.render(`admin/form_add_noticia`);
	});

	app.post(`/noticias/save`, function (req, res) {
		const news = req.body;
		// res.send(news);
		const connection = app.config.dbConnection();
		const noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		noticiasModel.salvarNoticia(news, () => {
			res.redirect(`/noticias`);
		});
	});
};