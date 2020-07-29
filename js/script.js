$(".bar-toggle").click(function(){
   $(".menu-item").fadeToggle() 
});

$(".search").click(function(){
   $(".search-box").fadeToggle() 
});

$(".closebtn").click(function(){
   $(".search-box").fadeOut() 
});

$('.venobox').venobox();

$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
          if(scrolling > 150){
          $('.menu').addClass('fixed');
      }
        else{
            $('.menu').removeClass('fixed');
        }
});
var html_body = $('html, body');
    $('.menu-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 150
                }, 1500);
                return false;
            }
        }
    });
var html_body = $('html, body');
    $('#footer a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });