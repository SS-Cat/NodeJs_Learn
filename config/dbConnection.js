let mysql = require(`mysql`);

function connMySQl() {
	// console.log(`Conectado com DB`);
	return mysql.createConnection({
		host: `localhost`,
		user: `root`,
		password: `root`,
		database: `portal_noticias`
	});
}
module.exports = function () {
	// console.log(`AutoLoad carrego modulo de conexao com DB`);
	return connMySQl;
};