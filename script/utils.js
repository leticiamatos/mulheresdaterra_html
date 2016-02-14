$(function() {

	if ( $('body').hasClass('home')){

    // Vertical Scrolling Navigation
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'easeInOutCubic',      // the easing function for animation
      scrollTime: 800,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: 0           // offste (in px) for fixed top navigation
    });


		// Get window height
		var windowHeight = $( window ).height();
		$('.video').height( windowHeight );
		$('.home_cntt').height( windowHeight - 55 );

		// Home Mapa - As Mulheres - active inactive box
		$( ".map-bullet" ).click(function() {
		  $( ".map-section" ).removeClass( "map-active" );
		  $( this ).parent().toggleClass( "map-active" );
		});
		$( ".map-section .close" ).click(function() {
			console.log("olar");
		  $( this ).parent().parent().parent().toggleClass( "map-active" );
		});

	
		// Mulheres da Terra - Fotos
		$('.mulheres_slider').bxSlider({
			minSlides: 2,
			maxSlides: 7,
			slideWidth: 250,
			speed: 2000,
			infiniteLoop: false,
			slideMargin: 0,
			pager: false
		});

		// Galerias
		$('.galeria_slider-01, .galeria_slider-02, .galeria_slider-03, .galeria_slider-04').bxSlider({
			minSlides: 2,
			maxSlides: 4,
			slideWidth: 400,
			speed: 2000,
			infiniteLoop: false,
			slideMargin: 0,
			pager: false
		});


		// Madrinhas
		$('.madrinhas_slide').bxSlider({
			minSlides: 2,
			maxSlides: 6,
			slideWidth: 290,
			speed: 2000,
			infiniteLoop: false,
			slideMargin: 0,
			pager: false
		});
		// About = Nós
		$('.nos_slide').bxSlider({
			minSlides: 2,
			maxSlides: 6,
			slideWidth: 235,
			speed: 2000,
			infiniteLoop: false,
			slideMargin: 0,
			pager: false
		});

		// Open Box About
		$( ".madrinhas_slide li, .nos_slide li" ).click(function() {
		  var slide_classname = this.className;
		  var box_classname = slide_classname + '-box';
		  console.log(box_classname);
		  $( "." + box_classname ).addClass( "box-active" );
		});
		$('.box-item .close').click(function(){
		  $( this ).parent().removeClass( "box-active" );
		})

	} else if ( $('body').hasClass('blog')){
		$('.hover_effect').hover(function(){
			$(this).toggleClass('active');
		})
	}
	// Image Orientation - set class
	$( "img" ).each(function( ) {
		var img_width = this.width;
		var img_height = this.height;
		var img_src = this.src;
		
		var output = "width: " +  img_width + " height: " + img_height + " src: " + img_src;

		if (img_height > img_width){
	  		$(this).addClass('ori_vert');
	  		output += " ori_vert";
		} else{
	  		$(this).addClass('ori_horiz');
	  		output += " ori_horiz";
		}
		//console.log(output);
	});

	// Menu Dropdown 
	$( ".menu_link" ).click(function() {
		$( ".menu_wpr" ).toggle("blind");
	});
	$( ".menu_ext_link" ).click(function() {
		$( ".menu_ext_wpr" ).toggle("blind");
	});

	// Fancybox Galery modal
	$(".fancybox").fancybox({
		openEffect  : 'none',
		closeEffect	: 'none'
	});

});
	
$(window).scroll(function () {

	// menu effect
	if ( $('body').hasClass('home')){

		var windowHeight = $( window ).height();

		var topPage = $(this).scrollTop();
	  
  	if (topPage > windowHeight - 55) {
		$('body').addClass('header_extended');
		$('body').removeClass('header_normal');
  	}
  	else{
  		$('body').addClass('header_normal');
  		$('body').removeClass('header_extended');
  	}
  }
});
