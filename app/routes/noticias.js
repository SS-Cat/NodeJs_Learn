// let dbConnection = require(`../../config/dbConnection`);

module.exports = function name(application) {

	application.get(`/noticias`, function (req, res) {

		application.app.controllers.noticias.noticias(application, req, res);
		// const connection = app.config.dbConnection();
		// const noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		// noticiasModel.getNoticias((erro, result) => {
		// 	if(erro) res.send(erro);
		// 	res.render(`noticias/noticias`, {noticias: result});
		// });

		/*
		connection.query(`select * from noticias`, (erro, result) => {
			if(erro) res.send(erro);
			res.render(`noticias/noticias`, {noticias: result});
			
			// console.log(result);
			// res.send(result);
		});
		*/
	});

	application.get(`/noticia`, function (req, res) {

		application.app.controllers.noticias.noticia(application, req, res);
		// const connection = app.config.dbConnection();
		// const noticiasModel = new app.app.models.NoticiasDAO(connection);

		// noticiasModel.getNoticia((erro, result) => {
		// 	if(erro) res.send(erro);			
		// 	res.render(`noticias/noticia`, {noticias: result});
		// });
	});
};