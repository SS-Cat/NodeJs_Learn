let express = require(`express`)();
let consign = require(`consign`);
let bodyParser = require(`body-parser`);

express.set(`view engine`, `ejs`);
express.set(`views`, `./app/views`);

express.use(bodyParser.urlencoded({extended: true}));

consign()
	.include(`./app/routes`)
	.then(`./config/dbConnection.js`)
	.then(`./app/models`)
	.into(express);

module.exports = express;