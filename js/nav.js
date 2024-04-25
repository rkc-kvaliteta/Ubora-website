var w;
var h;

function showWidth() {
    w = window.innerWidth;
    h = window.innerHeight;
    console.log(w + "and" + h);

    if( w <= 767) {
        console.log("Going");
        var portfolioimg = document.getElementById("map-image");
        portfolioimg.classList.add("img-responsive");
    }
}

$(document).ready(function(){
	
    $('.navbar a').on('click',function () {
        

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
    }); 

});

