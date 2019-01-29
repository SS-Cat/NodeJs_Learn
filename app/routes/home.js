module.exports = function name(app) {
	app.get(`/`, (req, res) => {
		res.render(`home/index`);
	});
};