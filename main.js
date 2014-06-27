$(document).on('ready', function() {
  

	var $el;

	$('.button').click(function() {
		$el = $(this);
		$el.hide().after('<textarea></textarea>');
	});

	$('body').on('blur', 'textarea', function() {
		$(this).hide();
		$el.show().html($(this).val());
	});


	var $el;

	$('.editable').click(function() {
		$el = $(this);
		$el.hide().after('<textarea></textarea>');
	});

	$('body').on('blur', 'textarea', function() {
		$(this).hide();
		$el.show().html($(this).val());
	});

});