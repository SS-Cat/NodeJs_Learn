module.exports = function name(application) {

	application.get(`/formulario_inclusao_noticia`, function (req, res) {
		application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
	});

	application.post(`/formulario_inclusao_noticia`, function (req, res) {
		application.app.controllers.admin.noticias_save(application, req, res);
	});
};