exports.install = function() {

	// Merging static files
	F.merge('/default/js/default.js', '/js/jctajr.min.js', '/js/JS.Responsive.custom.min.js', '=default/public/js/default.js', '=default/public/js/ui.js');
	F.merge('/default/css/default.css', '/css/bootstrap.min.css', '=default/public/css/default.css', '=default/public/css/ui.css', '=default/public/css/style.css');

	// Localization & Minification
	F.localize('/default/components/*.html', ['compress']);

};
