$(".menu-icon").click(function(){
    $(".mobile-nav").slideToggle();
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });
};

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 500) {
          $("header").addClass("new-header");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("new-header");
      }
  });
});

var btn = $('.top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '10');
});