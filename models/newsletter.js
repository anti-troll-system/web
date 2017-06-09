NEWSCHEMA('Newsletter').make(function(schema) {

	schema.define('email', 'Email', true);

	schema.setSave(function(error, model, options, callback, controller) {
		var data = model.$clean();
		data.datecreated = F.datetime;
		controller && (data.ip = controller.ip);
		NOSQL('newsletter').insert(data, true).where('email', data.email);
		callback(SUCCESS(true));
	});

});