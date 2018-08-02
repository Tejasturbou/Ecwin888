$('.previous, #sports-menu').click(function(){
	$('#women').attr('src', 'images/img4.png');
	$('#women').css('animation', 'flow-left 1s');
	$('#women').attr('id', 'sports');
	$('.change-heading').text('Sports');
});


$('.next, #promotions-menu').click(function(){
	$('#sports').attr('src', 'images/img3.png');
	$('#sports').css('animation', 'flow-left 1s');
	$('#sports').attr('id', 'women');
	$('.change-heading').text('Promotions');
});

