// Alias for API endpoint
RESTBuilder.patroll = function(url) {
	return new RESTBuilder(F.config.service + url);
};