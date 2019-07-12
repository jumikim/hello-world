

var ss = $('.swiper-wrapper li');

$('.btn_prev').on('click', function(e){
	e.preventDefault();

});
$('.btn_prev').on('click', function (e) {
	
	for (var i = 0; i < ss.length ; i++){
		console.log(i)
		if($('.swiper-wrapper').children[i] === $('.current-step')) {
			var s = i;
			if ( i == ss.length - 1 ) {
				$('.swiper-wrapper').children[0].classList.remove('next-step')
			} else {
				$('.swiper-wrapper').children[i+1].classList.remove('next-step')
			}
			
			$('.current-step').classList.add('next-step')
			$('.current-step').classList.remove('current-step')
			$('.prev-step').classList.add('current-step')
			$('.prev-step').classList.remove('prev-step')
			
			if ( i == 0 ) {
				var s = ss.length - 2;
				$('.swiper-wrapper').children[s].classList.add('prev-step')
			} else {
				if (i == 1) {
					$('.swiper-wrapper').children[ss.length-1].classList.add('prev-step')
				} else {
					$('.swiper-wrapper').children[i-2].classList.add('prev-step')
				}
			}
			break;
		}
	} 
})

$('.btn_next').on('click', function (e) {
	e.preventDefault();
	for (var i = 0; i < ss.length ; i++){
		if($('.swiper-wrapper').children[i] === $('.current-step')) {
			var s = i;
			if ( i == 0 ) {
				s = ss.length;
				$('.swiper-wrapper').children[s-1].classList.remove('prev-step')
			} else {
				$('.swiper-wrapper').children[i-1].classList.remove('prev-step')
			}

			$('.current-step').classList.add('prev-step')
			$('.current-step').classList.remove('current-step')
			$('.next-step').classList.add('current-step')
			$('.next-step').classList.remove('next-step')

			if ( i == ss.length - 2 ) {
				$('.swiper-wrapper').children[0].classList.add('next-step')
			} else {
				if ( i == ss.length - 1 ) {
					$('.swiper-wrapper').children[1].classList.add('next-step')    
				}else{
					$('.swiper-wrapper').children[i+2].classList.add('next-step')
				}
			}
			break;
		}
	} 
})