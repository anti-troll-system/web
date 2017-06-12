var common = {};

JS.Responsive
       .addHorizontalBreakPoint( 'x-small',  320 )
       .addHorizontalBreakPoint( 'small',    480 )
	   .addHorizontalBreakPoint( 'smadium',  767 )
       .addHorizontalBreakPoint( 'medium',   992 )
       .addHorizontalBreakPoint( 'large',   1280 )
       .addHorizontalBreakPoint( 'x-large', 1920 );
	   
JS.Responsive.init();

SETTER(true, 'loading', 'hide', 1000);

ON('ready', function() {
	EMIT('resize', $(window));
	$('.mainmenu').find('a[href="{0}"]'.format(NAVIGATION.url)).addClass('selected');
	setTimeout(function() {
		$('body').addClass('animate');
		onresize()
	}, 100);
});

$(window).on('resize', function() {
	EMIT('resize', $(window));
	onresize();
});

function mainmenu() {
	SET('common.mainmenu', common.mainmenu ? false : true);
}


// -------------------------

function onresize() {
	
	// we want to have content with minimum height
	// that footer is always at the bottom of the page
	var windowHeight = $(window).height(),
		footerHeight = $('footer')[0].offsetHeight,
		contentHeight = windowHeight - footerHeight;
	$('.content').css('min-height', contentHeight+'px');
}