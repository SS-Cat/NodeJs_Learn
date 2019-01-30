module.exports.index = function (application, req, res) {

	const connection = application.config.dbConnection();
	const noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias((error, result) => {
		if(error) res.send(error);
		res.render(`home/index`, {noticias: result});
	});
};