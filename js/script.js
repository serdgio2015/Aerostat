$(document).ready(function() {

$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg-parallax').css('top',-(scrolled*0.2)+'px');
}




$(window).scroll(function() {
    	if($(window).scrollTop() > 200) {
			$('.topWindow').fadeIn();
		}
		else {
			$('.topWindow').fadeOut();
		}
    })
    $('.topWindow').click(function() {
    	$('body,html').animate({scrollTop: 0},400);
    })





$('#toggle-header').on('click',function() {
	if($(window).width() < 768) { 
    	$('#list-header').slideToggle(200);
	}

	
})

$('#toggle-footer').on('click',function() {
	$('#list-footer').slideToggle(200);
})





/*var w = $('.gallery__slider-item').width();	*/
var w = 271;

	$('.gallery__arrow-prev').click(function slid(event) {
		var l = $('.gallery__slider-list').position().left;
			if(l > -w*3) {
			$('.gallery__slider-list').animate({left: l-w});
		}	
	})

	$('.gallery__arrow-next').click(function slid(event) {
		var l = $('.gallery__slider-list').position().left;
			if(l < 0) {
			$('.gallery__slider-list').animate({left: l+w});
		}	
	})



/*$('.accordion-questions__accordion-link').on('click', function() { 
	$('.accordion-questions__accordion-link').removeClass('accordion-questions__accordion-link--active');
	$(this).addClass('accordion-questions__accordion-link--active');
	$('.accordion-questions__accordion-paragraf').slideUp(200);
	$(this).closest('.accordion-questions__accordion-item').find('.accordion-questions__accordion-paragraf').slideDown(200);
})*/


$('.accordion-questions__accordion-link').on('click', function(){
    $(this).closest('.order-box__faq').find('.accordion-questions__accordion-paragraf').slideUp(200);
    $(this).closest('.order-box__faq').find('.accordion-questions__accordion-link').removeClass('accordion-questions__accordion-link--active');
    var this_block_content = $(this).closest('.accordion-questions__accordion-item').find('.accordion-questions__accordion-paragraf');
    var this_block_link = $(this).closest('.accordion-questions__accordion-item').find('.accordion-questions__accordion-link');
    if(this_block_content.is(':hidden')){
      this_block_content.slideDown(200);
      this_block_link.addClass('accordion-questions__accordion-link--active');
    }
  });




$('a').on('click', function(e) {
		e.preventDefault();
	})


	$('.order-box__pay__item').on('click', function() {
		$('.order-box__pay__item').removeClass('order-box__pay__item--active');
		$(this).addClass('order-box__pay__item--active');
		var paragraf = $(this).attr('href');
		$('.order-box__pay__paragraf').removeClass('order-box__pay__paragraf--active');
		$(paragraf).addClass('order-box__pay__paragraf--active');
	})



	
});