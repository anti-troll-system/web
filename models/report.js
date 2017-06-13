NEWSCHEMA('Report').make(function(schema) {

	schema.define('url', 'URL', true);
	schema.define('notes', 'String(1000)');

	schema.addWorkflow('reCAPTCHA', function(error, model, options, callback, controller) {
		RESTBuilder.make(function(builder) {
			builder.url('https://www.google.com/recaptcha/api/siteverify');
			builder.set('secret', F.config.recaptcha);
			builder.set('response', model.recaptcha);
			controller && builder.set('remoteip', controller.ip);
			builder.urlencoded();
			builder.exec(function(err, response) {
				if (err || !response.success)
					error.push('error-recaptcha');
				callback(SUCCESS(true));
			});
		});
	});

	schema.addWorkflow('verify', function(error, model, options, callback) {
		var builder = RESTBuilder.patroll('/verify/');
		builder.json(options);
		builder.exec(callback);
	});

	schema.setSave(function(error, model, options, callback, controller) {
		model.ip = controller.ip;
		var builder = RESTBuilder.patroll('/report/');
		builder.json(model);
		builder.exec(callback);
		NOSQL('reports').insert(model);
	});
});