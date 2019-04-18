
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();
	M.AutoInit();
	// forms();

	var swiper = new Swiper('.first__slider', {
		spaceBetween: 10,
		speed: 1300,
		parallax: true,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});

	$('.phone-mask').mask("+ 7 000 000 00 00");

	$(".m-field").each(function() {
		var it = $(this);
		var placeholder = it.attr("placeholder");
		it.wrap("<div class='m-field__container'></div>");
		it.closest(".m-field__container").append("<div class='m-placeholder'>"+placeholder+"</div>")
		it.attr("placeholder", '')
	});

	
	$(document).on("click", ".like-active", function() {
		$(this).addClass("like-notactive");
		$(this).removeClass("like-active");
	});
	$(document).on("click", ".like-notactive", function() {
		$(this).addClass("like-active");
		$(this).removeClass("like-notactive");
	});

	$(".html img").each(function() {
		$(this).wrap("<figure></figure>");
	});
	var swiper = new Swiper('.first-min-slider', {
		spaceBetween: 10,
		speed: 1300,
		parallax: true,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.prod-slider', {
		speed: 400,
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.prod-next',
			prevEl: '.prod-prev',
		},	
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});

	//tabs------------
	$(".tabs__container").each(function() {
		$('.tabs__tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs__tabs").find(".tabs__tab").removeClass("active");
			it.addClass("active");
			$(".tabs__block").removeClass("active");
			it.closest(".tabs__container").find("." + href).addClass('active');
			it.closest('.tabs__container').find("." + href + " input").val('');
			it.closest('.tabs__container').find("." + href + " input").removeClass("is-focus");
		});
	});
	$(".lightgallery").lightGallery(); 
	var swiper = new Swiper('.reviews-slider', {
		speed: 400,
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.sert-slider-next',
			prevEl: '.sert-slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.news-slider-container', {
		speed: 400,
		slidesPerView: 3,
		spaceBetween: 43,
		navigation: {
			nextEl: '.news-slider-next',
			prevEl: '.news-slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.reason-slider', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 43,
		navigation: {
			nextEl: '.reason-next',
			prevEl: '.reason-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.basket-slider', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 43,
		navigation: {
			nextEl: '.reason-next',
			prevEl: '.reason-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});

	$(".scene").each(function() {
		var scene = $(this).get(0);
		var parallaxInstance = new Parallax(scene);
	});

	$(document).ready(function() {
		$('select').niceSelect();
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         });
	 });


	$(".m-bg-cont").each(function() {
		var img = $(this).find("img").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});

	$('.number-input-container').each(function() {
		var it = $(this);
		it.find(".number-increment").click(function(e) {
		   let $input = $(this).siblings('.number-input'),
			   val = parseInt($input.val()),
			   max = parseInt($input.attr('max')),
			   step = parseInt($input.attr('step'));
		   let temp = val + step;
		   $input.val(temp <= max ? temp : max);
		   it.find(".number-result").text($input.val());
	   });
	   it.find(".number-decrement").click(function(e) {

		   let $input = $(this).siblings('.number-input'),
			   val = parseInt($input.val()),
			   min = parseInt($input.attr('min')),
			   step = parseInt($input.attr('step'));
		   let temp = val - step;
		   $input.val(temp >= min ? temp : min);
		   it.find(".number-result").text($input.val());
	   });
	})

	 
})