$(window).on('k-resize', function() {

	var mq = window.matchMedia( "(min-width: 767px)" );

	if (mq.matches) {

		!$('#col-xtra #col-xtra-content').length && $('#col-xtra-content').appendTo('#col-xtra');

	} else {

		!$('footer.main #col-xtra-content').length && $('#col-xtra-content').appendTo('footer.main');

	}

});