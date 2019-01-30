module.exports.formulario_inclusao_noticia = function (application, req, res) {
	res.render(`admin/form_add_noticia`, {
		validation: ``,
		noticia: ``
	});
};

module.exports.noticias_save = function (application, req, res) {
	const news = req.body;
	// res.send(news);
	// console.log(news);

	req.assert(`titulo`, `Título é Obrigatório`).notEmpty();
	req.assert(`resumo`, `Resumo é Obrigatório`).notEmpty();
	req.assert(`resumo`, `Resumo deve conter entre 10 e 100 caracteres`).len(10, 100);
	req.assert(`autor`, `Autor é Obrigatório`).notEmpty();
	req.assert(`data_noticia`, `Data é Obrigatória`).notEmpty() /*.isDate({format: `YYYY-MM-DD`})*/ ;
	req.assert(`noticia`, `Noticia é Obrigatório`).notEmpty();

	const error = req.validationErrors();
	if (error) {
		res.render(`admin/form_add_noticia`, {
			validation: error,
			noticia: news
		});
		return;
	}

	const connection = application.config.dbConnection();
	const noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(news, () => {
		res.redirect(`/noticias`);
	});
};