NEWSCHEMA('Contact').make(function(schema) {

	schema.define('firstname', 'Capitalize(30)', true);
	schema.define('lastname', 'Capitalize(30)', true);
	schema.define('phone', 'Phone');
	schema.define('body', 'String(5000)');
	schema.define('email', 'Email', true);

	schema.setSave(function(error, model, options, callback, controller) {
		var data = model.$clean();
		data.ip = controller.ip;
		data.datecreated = F.datetime;
		NOSQL('contactform').insert(data);
		callback(SUCCESS(true));

		// Add this email address to newsletter
		$$$('Newsletter').make(data).$save();

		// @TODO: send email

	});

});