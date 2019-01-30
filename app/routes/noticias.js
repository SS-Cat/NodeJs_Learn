// let dbConnection = require(`../../config/dbConnection`);

module.exports = function name(app) {

	app.get(`/noticias`, function (req, res) {

		const connection = app.config.dbConnection();
		const noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		noticiasModel.getNoticias((erro, result) => {
			if(erro) res.send(erro);
			res.render(`noticias/noticias`, {noticias: result});
		});

		/*
		connection.query(`select * from noticias`, (erro, result) => {
			if(erro) res.send(erro);
			res.render(`noticias/noticias`, {noticias: result});
			
			// console.log(result);
			// res.send(result);
		});
		*/
	});
};