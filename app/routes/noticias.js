let dbConnection = require(`../../config/dbConnection`);

module.exports = function name(app) {

	app.get(`/noticias`, function (req, res) {

		let connection = dbConnection();

		connection.query(`select * from noticias`, (erro, result) => {
			if(erro) res.send(erro);
			res.render(`noticias/noticias`, {noticias: result});
			
			// console.log(result);
			// res.send(result);
		});
	});
};