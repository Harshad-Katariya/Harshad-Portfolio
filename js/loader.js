$(window).on('load',function(){
	setTimeout(function(){ 
	$('.loader').fadeOut('fast');
	},3000);
});
$(document).ready(function () {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 'slow');
});