const express = require(`express`)();
const consign = require(`consign`);
const bodyParser = require(`body-parser`);
const expressValidator = require(`express-validator`);

express.set(`view engine`, `ejs`);
express.set(`views`, `./app/views`);

express.use(bodyParser.urlencoded({extended: true}));
express.use(expressValidator());

consign()
	.include(`./app/routes`)
	.then(`./config/dbConnection.js`)
	.then(`./app/models`)
	.then(`./app/controllers`)
	.into(express);

module.exports = express;