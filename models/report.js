NEWSCHEMA('Report').make(function(schema) {

	schema.define('url', 'URL', true);
	schema.define('notes', 'String(1000)');
	schema.define('recaptcha', 'String', true);

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

	schema.setSave(function(error, model, options, callback, controller) {
		var data = model.$clean();
		data.recaptcha = undefined;
		data.datecreated = F.datetime;
		data.ip = controller.ip;
		NOSQL('report').insert(data);
		callback(SUCCESS(true));
	});
});