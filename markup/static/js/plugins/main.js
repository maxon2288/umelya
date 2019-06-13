
$(document).ready(function () {
	popup ();
	M.AutoInit();
	// forms();

	var swiper = new Swiper('.first__slider', {
		spaceBetween: 10,
		speed: 1300,
		slidesPerView: 1,
		parallax: true,
		// grabCursor: true,
		clicable: false,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.first-pagination',
			type: 'bullets',
			renderBullet: function (index, className) {
			  return '<div class="swiper-pagination-bullet"><hgroup class="circle-load"><svg width="32px" height="32px" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="8" stroke-width="2" stroke="#1963AE" fill="none"></circle><circle cx="16" cy="16" r="8" stroke-width="2" stroke="#DAE6EE" fill="none" class="circle-load-svg"></circle></svg></hgroup></div>';
			}
		},
	});

	$('.phone-mask').mask("+ 7 000 000 00 00");
	
	function fields() {
		$(".m-field, m-field-2").each(function() {
			var it = $(this);
			var placeholder = it.attr("placeholder");
			it.wrap("<div class='m-field__container'></div>");
			it.closest(".m-field__container").append("<div class='m-placeholder'>"+placeholder+"</div>")
			it.attr("placeholder", '')
		});
	
		$(".m-field, .m-field-2").change(function() {
			if ($(this).val().length > 0) {
				$(this).addClass("is-focus");
			} else {
				$(this).removeClass("is-focus");
			}
		});	
	}
	fields();

	$(document).on("click", ".acc__deliv-button", function() {
		$(".acc__deliv-fields-container").append(
			'<div class="acc__deliv-fields">'+
				'<div class="acc-field__container">'+
					'<input type="text" name="name" class="acc-field" placeholder="" value="">'+
				'<div class="placeholder">Город</div>'+
			'</div>'+
			'<div class="m-field__container">'+
				'<input type="text" name="name" class="m-field" placeholder="">'+
				'<div class="m-placeholder">Адрес доставки</div>'+
			'</div>'+
		'</div>')
	});	

	$(".html img").each(function() {
		$(this).wrap("<figure></figure>");
	});
	var swiper = new Swiper('.first-min-slider', {
		spaceBetween: 10,
		speed: 1300,
		parallax: true,
		grabCursor: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.first-min-pagination',
			type: 'bullets',
			renderBullet: function (index, className) {
				return '<div class="swiper-pagination-bullet"><hgroup class="circle-load"><svg width="32px" height="32px" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="8" stroke-width="2" stroke="#DAE6EE" fill="none"></circle><circle cx="16" cy="16" r="8" stroke-width="2" stroke="#2F86DD" fill="none" class="circle-load-svg"></circle></svg></hgroup></div>';
			  }
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
	$(".tabs__container-1").each(function() {
		$('.tabs__tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs__tabs").find(".tabs__tab").removeClass("active");
			it.addClass("active");
			$(".tabs__block").removeClass("active");
			it.closest(".tabs__container-1").find("." + href).addClass('active');
		});
	});
	var swiper = new Swiper(".prod-slider", {
		speed: 400,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		},
		navigation: {
			nextEl: '.prod-next',
			prevEl: '.prod-prev',
		},	
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	$(".tabs__container-2").each(function() {
		$('.tabs__tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs__tabs").find(".tabs__tab").removeClass("active");
			it.addClass("active");
			$(".tabs__block").removeClass("active");
			it.closest(".tabs__container-2").find("." + href).addClass('active');
			it.closest('.tabs__container-2').find("." + href + " input").val('');
			it.closest('.tabs__container-2').find("." + href + " input").removeClass("is-focus");
			var swiper = new Swiper(".prod-slider", {
				speed: 400,
				slidesPerView: 4,
				spaceBetween: 30,
				breakpoints: {
					1024: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 1,
					}
				},
				navigation: {
					nextEl: '.prod-next',
					prevEl: '.prod-prev',
				},	
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				},
			});
		});
	});

	$(".acc-field").each(function() {
		var plh = $(this).attr("placeholder");
		$(this).attr("placeholder", '');
		$(this).wrap("<div class='acc-field__container'></div>")
		$(this).closest(".acc-field__container").append(
			'<div class="placeholder">'+plh+'</div>'
		)
	});


	$(document).on("click", ".like-active", function() {
		$(this).addClass("like-notactive");
		$(this).removeClass("like-active");

		var text = +$(".header-like .header-output").text();
		$(".header-like .header-output").text(text - 1);
		console.log(text);
		
		$(".header-output").each(function() {
			if ($(this).text()  != 0) {
				$(this).addClass("visible");
			} else {
				$(this).removeClass("visible");
			}
		});
	});
	$(document).on("click", ".like-notactive", function() {
		$(this).addClass("like-active");
		$(this).removeClass("like-notactive");

		var text = +$(".header-like .header-output").text();
		console.log(text);
		$(".header-like .header-output").text(text + 1);
		
		$(".header-output").each(function() {
			if ($(this).text() != 0) {
				$(this).addClass("visible");
			} else {
				$(this).removeClass("visible");
			}
		});
	});

	$(document).on("click", ".basket-active", function() {
		$(this).addClass("basket-notactive");
		$(this).removeClass("basket-active");
		var text = +$(".header-basket .header-output").text();
		$(".header-basket .header-output").text(text - 1);
		$(this).attr("data-popupBlock", "basket-popup")
		console.log(text);
		$(this).find("span").text("В корзину")		
		$(".header-output").each(function() {
			if ($(this).text()  != 0) {
				$(this).addClass("visible");
			} else {
				$(this).removeClass("visible");
			}
		});
	});
	$(document).on("click", ".basket-notactive", function() {
		$(this).addClass("basket-active");
		$(this).removeClass("basket-notactive");
		$(this).find("span").text("удалить из корзины");
		$(this).attr("data-popupBlock", "basket-delete")

		var text = +$(".header-basket .header-output").text();
		console.log(text);
		$(".header-basket .header-output").text(text + 1);
		
		$(".header-output").each(function() {
			if ($(this).text() != 0) {
				$(this).addClass("visible");
			} else {
				$(this).removeClass("visible");
			}
		});
	});

	$(".data-id").click(function() {
		var id = $(this).attr("data-id");
		var popup = $(this).attr("data-popupBlock");
		$("." + popup).find("form").attr("action", id)
	});
	

	$(".header-output").each(function() {
		if ($(this).text() >= 1) {
			$(this).addClass("visible");
		} else {
			$(this).removeClass("visible");
		}
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
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
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
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.video__slider', {
		speed: 400,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.video-next',
			prevEl: '.video-prev',
		},
		breakpoints: {
			1023: {
				slidesPerView: 1,
			}
		},
	});
	$(".header-search").click(function() {
		$(".header__search").addClass("visible");	
		$(".header__menu, .header__phone").addClass("invisible")

	});
	
	$(document).click(function (e){ // событие клика по веб-документу
		var div = $(".header__features"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$(".header__search").removeClass("visible");	
				$(".header__menu, .header__phone").removeClass("invisible")
		}
	});
	$(document).on("click", ".m-placeholder", function() {
		$(this).closest(".m-field__container").find("input").focus();
	});
	var swiper = new Swiper('.reason-slider', {
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 43,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.reason-next',
			prevEl: '.reason-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
	var swiper = new Swiper('.best-slider', {
		speed: 1400,
		slidesPerView: 1,
		spaceBetween: 43,
		parallax: true,
		navigation: {
			nextEl: '.best-next',
			prevEl: '.best-prev',
		},
		pagination: {
			el: '.best-pagination',
			type: 'bullets',
		},
	});
	var prSlider = new Swiper('.pr-slider', {
		speed: 700,
		slidesPerView: 1,
		spaceBetween: 43,
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
	var swiper = new Swiper('.rev-slider', {
		speed: 400,
		slidesPerView: 4,
		spaceBetween: 43,
		navigation: {
			nextEl: '.rev-next',
			prevEl: '.rev-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			},
		},
	});

	const controls = '<div class="plyr__controls play">'+'    <button type="button" class="play__button" data-plyr="play">'+'	<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">'+'	<path d="M13.7096 8.64707L1.20701 0.0754375C1.07465 -0.0149932 0.903067 -0.024422 0.761658 0.0488654C0.619818 0.12301 0.531006 0.268728 0.531006 0.42816V17.5714C0.531006 17.7309 0.619818 17.877 0.761658 17.9511C0.824602 17.9837 0.893582 18 0.962131 18C1.04792 18 1.13329 17.9743 1.20701 17.9241L13.7096 9.35252C13.8265 9.27237 13.8959 9.1408 13.8959 8.99979C13.8959 8.85879 13.826 8.72722 13.7096 8.64707Z" fill="#1963AE"/>'+'	</svg>	'+'    </button>	'+'	<div class="play__text play__time plyr__time--current" aria-label="Current time">00:00</div>'+'	<div class="play__text plyr__time--duration" aria-label="Duration">00:00</div>'+'	<div class="plyr__progress">'+'        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">'+'        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>'+'        <span role="tooltip" class="plyr__tooltip">00:00</span>'+'    </div>'+'    <button type="button" class="plyr__control play__mute" aria-label="Mute" data-plyr="mute">'+'	<svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>'+'	<svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>'+'	<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>'+'	<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>'+'    </button>'+'	</div>';

console.log(controls);

if ($(window).width() <= 1023) {
	var swiper = new Swiper('.first__bottom', {
		speed: 400,
		slidesPerView: 2,
		spaceBetween: 43,
		autoplay: {
			delay: 2500,
		},
		navigation: {
			nextEl: '.reason-next',
			prevEl: '.reason-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
		},
	});
}
	
// Setup the player
// const player = new Plyr('#player', { controls });

	$(".js-player-instance").each(function() {

		var source = $(this).attr('data-source');
		
		const player = new Plyr('.js-player-instance', {
			autoplay: false,
			controls: controls,
		});
		player.source = {
			type: 'audio',
			sources: [{
					src: source,
					type: 'audio/mp3'
				}]
		};
	});

	$(".m-table, .html table").each(function() {
		$(this).wrap("<div class='m-table__container'></div>")
	});

	$(".scene").each(function() {
		var scene = $(this).get(0);
		var parallaxInstance = new Parallax(scene);
	});

	$('.main-select').niceSelect();

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


	$(".pr__thumb").mouseenter(function() {
		var index = +$(this).index();
		prSlider.slideTo(index);
		$(".pr__thumb").removeClass("active");
		$(this).addClass("active");

	});

	$(document).on("click", ".nice-select.acc-select .option", function() {
		$(".acctab").removeClass('active');
		var it = $(this);
		var tab = it.attr("data-value");
		console.log(tab);
		$("." + tab).addClass('active');
	});


	
})

$(document).ready(function() {
    $('.disk-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                    maxlength: 17,
                    minlength: 17,
                },
                email: {
                    required: true,
                    email: true,
                }
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
                // console.log(1)
                // $(".form input, .form textarea").val('');
                $.ajax({
                    // type: 'POST',
                    // url: 'mail.php',
                    success: function(){
                        console.log("fdsfdsa");
                    }
                });
            },  

         });
	 });
    $('.popup-rev-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                    maxlength: 17,
                    minlength: 17,
                },
                email: {
                    required: true,
                    email: true,
				},
				textarea: {
					required: true,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				
				$.ajax({
					success: function(){
						$(".popupClose").trigger("click");
						$(".trigger-thanx-rev").trigger("click");
                    }
                });
            },  

         });
	 });
	 
    $('.reg-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                email: {
                    required: true,
                    email: true,
                },
                name: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 5,
                },
                passwordAgain: {
                    required: true,
                    equalTo: "#password",
                    minlength: 5,
                },
                phone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                }
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.ctc-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                massage: {
                    required: true,
                }
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.sc-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                email: {
                    required: true,
                    email: true,
                },
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
			},

			errorPlacement: function (error, element) {
			},

         });
	 });




















	 
	 
	 
	 
	 
});