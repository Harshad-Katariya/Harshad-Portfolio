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

const date = new Date();
let year = date.getFullYear();
let h4_tag = document.createElement('h4')

h4_tag.innerHTML = `Copy Right ${year} © By Harshad All Rights Reserved`

document.querySelector('.footer').append(h4_tag)
