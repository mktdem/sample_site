$(function() {
	$(window).resize(function() {
		if($(this).width() > 770 && !$('#menu').is(':visible')) {
			$('#menu').show();
		}
		if($(this).width() < 770) {
			$('#menu').hide();
			$('#toggle').css('background-color', '#446c99');
		}
	});
	$(document).ready(function() {
		(function() {
			var bgflag = true;
			$('#toggle').click(function() {
				$('#menu').slideToggle(500, function() {
					if(bgflag == true) {
						var bgcolor = '#47d18e';
					} else {
						var bgcolor = '#446c99';
					}
					bgflag = ~bgflag;
					$('#toggle').css('background-color', bgcolor);
				});
				$('p', this).fadeOut(500, () => $('p', this).fadeIn(300));
			});
		}());
	});
});