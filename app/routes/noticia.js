module.exports = function name(app) {

	app.get(`/noticia`, function (req, res) {

		const connection = app.config.dbConnection();
		const noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticia((erro, result) => {
			if(erro) res.send(erro);
			res.render(`noticias/noticia`, {noticias: result});
		});
	});
};