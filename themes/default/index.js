exports.install = function() {

	// Merging static files
	F.merge('/default/js/default.js', '/js/spa.min.js', '=default/public/js/default.js', '=default/public/js/ui.js');
	F.merge('/default/css/default.css', '/css/spa.min.css', '=default/public/css/default.css', '=default/public/css/ui.css');

	// Localization & Minification
	F.localize('/default/components/*.html', ['compress']);

};
