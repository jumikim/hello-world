$(function() {

	var $this,
		$parent,
		thisIndex,
		winWidth = $(window).width(),
		num = 0,
		touchX,
		touchY,
		moveX,
		moveY,
		__movePoint,
		__movePointY,
		resultX;
	
	// visual 
	setInterval(function(){
		++num;
		var liSize = $('.visual-img li').length-1;
		$('.visual-img li.curr').removeClass('curr');
		$('.visual-img li').eq(num).addClass('curr');
		if(num == liSize){
			num = -1;
		}
	}, 4000);

	// logo rolling
	var $panel = $('.logo-area ul');
	var logoWidth = $panel.find('li').outerWidth(true);
	var logoSize = $panel.find('li').length;
	var logoAll = logoWidth *  logoSize;
	var rolling;
	$panel.css('width', logoAll);

	rollingAuto();

	/* 마우스 오버시 롤링 멈춤
	$panel.on('mouseover', function(){
		clearInterval(rolling);
	});
	$panel.on('mouseleave', function(){
		rollingAuto();
	});
	*/

	function rollingAuto(){
		rolling = setInterval(function(){
			rollingShow();
		}, 2000);
	}

	function rollingShow(){
		$panel.css('width', logoAll);
		$panel.stop().animate({'left' : - logoWidth + 'px'}, function() {
			$(this).css('left', 0);
			$('.logo-area li:first-child').appendTo('.logo-area ul');
		})
	};

	$('.kv-slide .slider').bxSlider( {
	    mode: 'horizontal',// 가로 방향 수평 슬라이드
	    speed: 500,        // 이동 속도를 설정
	    pager: true,      // 현재 위치 페이징 표시 여부 설정
	    moveSlides: 1,     // 슬라이드 이동시 개수
	    minSlides: 1,      // 최소 노출 개수
	    maxSlides: 1,      // 최대 노출 개수
	    slideMargin: 0,    // 슬라이드간의 간격
	    auto: false,        // 자동 실행 여부
	    autoHover: false,   // 마우스 호버시 정지 여부
	    controls: true    // 이전 다음 버튼 노출 여부
	});

	$('.customers .slider-w .slider').bxSlider( {
	    mode: 'horizontal',// 가로 방향 수평 슬라이드
	    speed: 500,        // 이동 속도를 설정
	    pager: true,      // 현재 위치 페이징 표시 여부 설정
	    moveSlides: 1,     // 슬라이드 이동시 개수
	    minSlides: 1,      // 최소 노출 개수
	    maxSlides: 1,      // 최대 노출 개수
	    slideMargin: 0,    // 슬라이드간의 간격
	    auto: false,        // 자동 실행 여부
	    autoHover: false,   // 마우스 호버시 정지 여부
	    controls: true    // 이전 다음 버튼 노출 여부
	});

	$('.customers .slider-m  .slider').bxSlider( {
	    mode: 'horizontal',// 가로 방향 수평 슬라이드
	    speed: 500,        // 이동 속도를 설정
	    pager: true,      // 현재 위치 페이징 표시 여부 설정
	    moveSlides: 1,     // 슬라이드 이동시 개수
	    minSlides: 1,      // 최소 노출 개수
	    maxSlides: 3,      // 최대 노출 개수
	    slideMargin: 0,    // 슬라이드간의 간격
	    auto: false,        // 자동 실행 여부
	    autoHover: false,   // 마우스 호버시 정지 여부
	    controls: true    // 이전 다음 버튼 노출 여부
	});

	$('.slider').bind('mousedown touchstart', function(e){
		touchX = e.pageX;
		touchY = e.pageY;
		if(e.type == 'touchstart'){
			touchX = e.originalEvent.touches[0].pageX;
			touchY = e.originalEvent.touches[0].pageY;
		};

		$('.slider').bind('mousemove touchmove', function(e){
			moveX = e.pageX;
			moveY = e.pageY;
			if(e.type == 'touchmove'){
				moveX = e.originalEvent.touches[0].pageX;
				moveY = e.originalEvent.touches[0].pageY;
			};

			__movePoint = moveX - touchX;
			__movePointy = moveY - touchY;

			if (Math.abs(__movePointy) < Math.abs(__movePoint)) {
				e.preventDefault();
			}

			resultX = moveX - touchX;
		});
	});


	addYoutube();
	function addYoutube() {
		var btn = $(".btn-youtube");
		btn.on("click",function(){
			var videourl = $(this).attr("data-youtube");
			var key = "";
			if (videourl.indexOf("?v=")>-1) {
				key = videourl.split("?v=")[1];
			} else if (videourl.indexOf("youtu.be")>-1) {
				key = videourl.split("https://youtu.be/")[1];
			}
			var url = "https://www.youtube.com/embed/"+key+"?showinfo=0&amp;wmode=transparent&amp;autoplay=1&amp;rel=0";
			var html = '<iframe id="vod-player" class="vod-player" allowfullscreen title="Video player" src="'+url+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
			$('.youtube_wrap .youtube_box').html("").append(html);


			$('.youtube_wrap').addClass('view');
			return false;

		});
		$('.youtube_wrap .close').on('click', function () {
			$('.youtube_box').html('');
			$('.youtube_wrap').removeClass('view');
			 return false;
		});
	}

    $(window).on('resize', function(){
    	if($(window).width() <= 767){
    		$('#contents').addClass('mobile');
    	} else {
    		$('#contents').removeClass('mobile');
    	}
    	
    	if(winWidth <= 1024){
    		$('.content-slide .slider').bxSlider( {
			    mode: 'horizontal',
			    speed: 500,        
			    pager: true,      
			    moveSlides: 1,    
			    slideWidth: 280, 
			    minSlides: 1,     
			    maxSlides: 1,     
			    slideMargin: 0,   
			    auto: false,      
			    autoHover: false, 
			    controls: true    
			});
    	}

    	teamAlign();
 	});

    teamAlign();
 	function teamAlign() {
 		var winWidth = $(window).width();
 		$('.team li').removeClass();
 		if(winWidth > 768 && winWidth < 1440){
    		$('[data-tablet-right]').addClass('right');
    	} else {
    		$('[data-align-right]').addClass('right');
    	}
 	}

	// select-box
	$('.select-box button').on('click mouseover', function (){
		$(this).next().css('display', 'block');
		$(this).addClass('on');
	});
	$('.select-box').on('mouseleave', function (){
		console.log('z')
		$('.select-box div').css('display', 'none');
		$(this).parent().find('button').removeClass('on');
	});
	$('.select-box li a').on('click', function (){
		$('.select-box div').css('display', 'none');
		var thisText = $(this).html();
		$(this).parents('.select-box').find('button').html(thisText);
	});

	// top button
	$('.top').on('click', function(){
		$('html, body').animate({scrollTop:0}, 800, function () {
		});
	});

	$('.more').on('click', function(){
		var moreHei = $('.team ul').height();
		$('.more-box').animate({'height' : moreHei});
		$(this).css('opacity', 0);
		
		$(window).on('resize', function(){
			$('.more-box').css('height', 'auto');
		});
	});

	/*
	// faq
	$('.faq-tab a').on('click', function(){
		$this = $(this).parent();
		thisIndex = $(this).parent().index();
		$thisCont = $(this).closest('.faq-tab').next().find('ul');
		$this.siblings().removeClass('on');
		$this.addClass('on');
		$thisCont.removeClass('curr');
		$thisCont.eq(thisIndex).addClass('curr');
		$('.faq-list li').removeClass('view');
		return false;
	});
	$('.faq-list li a').on('click', function(){
		$this = $(this).parent();
		thisIndex = $(this).parent().index();
		$thisCont = $(this).closest('.faq-list').find('ul.curr li');
		$thisCont.removeClass('view');
		$thisCont.eq(thisIndex).addClass('view');
		return false;
	});
	*/
	
	// select box
	$('.select_box button').on('click', function (){
		if(!$(this).hasClass('on')){
			$(this).next().slideDown();
			$(this).addClass('on');
			$(this).parent().addClass('open');
			$('.route_wrap > .dim').fadeIn();
		} else {
			$(this).next().slideUp();
			$(this).removeClass('on');
			$(this).parent().removeClass('open');
			$('.route_wrap > .dim').fadeOut();
		};
		if($('.select_box').hasClass('open')){
			$('body').removeClass('overScroll');
		};
	});

	$('.select_box li a').on('click', function (){
		var thisText = $(this).html();
		$('.select_box .select_list').slideUp();
		$('.route_wrap > .dim').fadeOut();
		$(this).parents('.select_box').find('button').html(thisText);
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.select_box button').removeClass('on');
		$('.select_box').removeClass('open');
	});

	$('.btn-menu').on('click', function(){
		$('#contents').addClass('dim');
		// $('.mobile-wrap').show();
		// $('.mobile-wrap').addClass('view');
		$('.mobile-nav').animate({'left': 0}, 500);
		$('html').addClass('nav-open');
	});
	$('.mobile-nav .close, .mobile-nav a').on('click', function(){
		$('#contents').removeClass('dim');
		$('.mobile-nav').animate({'left': '-100%'}, 500);
		$('html').removeClass('nav-open');
	});

	// Q & A *** 190421 수정
	$('.qna-list li a').on('click', function () {
		$(this).parent().parent().find('.answer').slideToggle();
		if (!$(this).parent().parent().hasClass('on')){
			$('.qna-list li.on').removeClass('on');
			$(this).parent().parent().addClass('on');
		} else {
			$(this).parent().parent().removeClass('on');
		}
		return false;
	});

	/* apps slide */
	var $slideWrap = $('.slide-wrap'),
			$slideUl = $('.swiper-wrapper'),
			appsArrow =  $slideWrap.find('nav a');
	appSlide();
	$('.bxslider').bxSlider();

	function appSlide(){
		appsArrow.on('click', function(e){
				e.preventDefault();
				var appsIndex = $('.swiper-wrapper').find('li.current').index();
				var indiIndex = $('.indicator').find('li.on').index();
				var appLast = $('.swiper-wrapper li').length-1;
				console.log(appLast)
				$('.swiper-wrapper li').removeClass();
				$('.indicator li').removeClass();
				slideWidth = $slideUl.find('li').width();
				if($(this).hasClass('btn_prev')){
					$('.swiper-wrapper li').eq(appsIndex-1).addClass('current');
					$('.indicator li').eq(indiIndex-1).addClass('on');
					$('.swiper-wrapper li:last-child').prependTo('.swiper-wrapper');
					$slideUl.find('li').css({'left' : slideWidth});
					$slideUl.css('transform', 'translateX('+(-slideWidth)+'px)');
				} else {
					$('.swiper-wrapper li').eq(appsIndex+1).addClass('current');
					if(appLast == indiIndex){
						indiIndex = -1;
					}
					$('.indicator li').eq(indiIndex+1).addClass('on');
					$('.swiper-wrapper li:first-child').appendTo('.swiper-wrapper');
					$slideUl.find('li').css({'left' : -slideWidth});
					$slideUl.css('transform', 'translateX('+(slideWidth)+'px)');			
				}
				$('.swiper-wrapper li.current').prev().addClass('prev');
				$('.swiper-wrapper li.current').next().addClass('next');
				
		});
	}

	$('.indicator a').on('click', function(){
		return false;
	});
});



