var common = {};

SETTER(true, 'loading', 'hide', 1000);

ON('ready', function() {
	EMIT('resize', $(window));
	$('.mainmenu').find('a[href="{0}"]'.format(NAVIGATION.url)).addClass('selected');
	setTimeout(function() {
		$('body').addClass('animate');
	}, 100);
});

$(window).on('resize', function() {
	EMIT('resize', $(window));
});

function mainmenu() {
	SET('common.mainmenu', common.mainmenu ? false : true);
}