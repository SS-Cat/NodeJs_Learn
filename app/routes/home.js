module.exports = function name(application) {
	application.get(`/`, (req, res) => {
		application.app.controlles.home.index(application, req, res);
	});
};