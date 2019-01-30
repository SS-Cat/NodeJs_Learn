module.exports = function name(app) {
	app.get(`/formulario_inclusao_noticia`, function (req, res) {
		res.render(`admin/form_add_noticia`, {validation: ``, noticia: ``});
	});

	app.post(`/noticias/save`, function (req, res) {
		const news = req.body;
		// res.send(news);
		// console.log(news);

		req.assert(`titulo`, `Título é Obrigatório`).notEmpty();
		req.assert(`resumo`, `Resumo é Obrigatório`).notEmpty();
		req.assert(`resumo`, `Resumo deve conter entre 10 e 100 caracteres`).len(10, 100);
		req.assert(`autor`, `Autor é Obrigatório`).notEmpty();
		req.assert(`data_noticia`, `Data é Obrigatória`).notEmpty()/*.isDate({format: `YYYY-MM-DD`})*/;
		req.assert(`noticia`, `Noticia é Obrigatório`).notEmpty();

		const error = req.validationErrors();
		if(error) {
			res.render(`admin/form_add_noticia`, {validation: error, noticia: news});
			return;
		}

		const connection = app.config.dbConnection();
		const noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		noticiasModel.salvarNoticia(news, () => {
			res.redirect(`/noticias`);
		});
	});
};