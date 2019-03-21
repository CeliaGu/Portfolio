// jQuery v3.3.1 is supported
let mouseY;
let offset = $('.frame').offset();

//If mouse inside frame
$(".frame").mouseenter(function() {
	$("body").mousemove(function(e) {
		// Get Mouse Pos
    mouseY = e.pageY - $('.frame').offset().top;
		// Mouse Pos = Div Height
		$('.top').css('height', mouseY )
	});
});

//If mouse leaves frame
$(".frame").mouseleave(function() {
	// Return to Middle
	$('.top').animate({height:'100px'}, 500);
});
