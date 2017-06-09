// Alias for API endpoint
RESTBuilder.antitroll = function(url) {
	return new RESTBuilder(F.config.service + url);
};