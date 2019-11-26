$(function(){
	// $('.section').on({
	// 	'mouseenter': function(){
	// 		$(this).addClass('active');
	// 		$('.section:not(.active)').addClass('hidden');
	// 	},
	// 	'mouseleave': function(){
	// 		$(this).removeClass('active');
	// 		$('.section:not(.active)').removeClass('hidden');
	// 	},
	// });
	var device = (function() {
		var ua = navigator.userAgent;
		if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
		    return 'sp';
		}
	})();
    // if( device == 'sp' ) {
    //     // $("#nav-toggle").on('click', function() {
    //     //     $(this).toggleClass('active');
    //     //     if ($(this).hasClass('active')) {
    //     //         $('#nav-cont').addClass('active');
    //     //     } else {
    //     //         $('#nav-cont').removeClass('active');
    //     //     }
    //     // });
    //     // $("#nav-cont a").on('click', function() {
    //     //     $('#nav-toggle, #nav-cont').removeClass('active');
    //     // });
    // }else {}
    // $('.works_list_movie a').on('click', function(){
    //     var movie = $(this).attr('value');
    //     console.log(movie);
    //     $('#modal').addClass('active');
    //     $('#modal-movie video').attr('src', './img/' + movie + '.mp4');
    // });
    // $('#modal-overlay, #close_btn').on('click', function(){
    //     $('#modal').removeClass('active');
    // });
    // animation
    $('.anim').waypoint(function(event, direction) {
        $(this).addClass('anim-active')
    }, {
        offset: '90%'
    });
    // loading
    $(window).ready(function(){
    	var load = $('.loading');
    	load.addClass('hide');
    	setTimeout(function(){
    		load.css('display', 'none');
    	}, 2500);
    });
    // navigation
	$('.header__nav a').on('click', function(){
		$('.header__nav').removeClass('active');
	});
	$('.header__btn').on('click', function(){
		$(".header__nav, .header__btn").toggleClass('active');
	});
	// yellow stroke
	var cont = $('.cont').length;
	$(window).ready(function(){
		for(var i = 0; i < cont; i++){
			var str = '<span></span>';
			var result = str.repeat(i + 1);
			$('.top section:eq('+ i + ')').append(result);
		}
	});
	$(window).on('scroll', function(){
		var position = $(this).scrollTop();
		var sect1 = $('#about');
		var sect2 = $('#achieve');
		var sect3 = $('#contact');
		var sect1_h = sect1.offset().top;
		var sect2_h = sect2.offset().top - 100;
		var sect3_h = sect3.offset().top - 100;
		if (position <= sect2_h && position > sect1_h) {
			sect1.addClass('active');
			sect1.find('span').addClass('active');
		} else if (position < sect3_h && position >= sect2_h) {
			sect2.addClass('active');
			sect2.find('span').addClass('active');
		} else if (position >= sect3_h) { 
			sect3.addClass('active');
			sect3.find('span').addClass('active');
		}
	});
	// smooth scroll
    $('a[href^="#"]').on('click', function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
