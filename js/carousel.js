$(document).ready(function () {
	$('.slides_small_item').click(function () {
		$('.slides_small_item').removeClass('slides_small_item-active');
		$(this).addClass('slides_small_item-active');
		$('.slides img').css('display', 'none');
		switch (true) {
			case $(this).hasClass('slide1'):
				$('.slides .slide1').css('display', 'block');
				break;
			case $(this).hasClass('slide2'):
				$('.slides .slide2').css('display', 'block');
				break;
			case $(this).hasClass('slide3'):
				$('.slides .slide3').css('display', 'block');
				break;
			case $(this).hasClass('slide4'):
				$('.slides .slide4').css('display', 'block');
				break;
			case $(this).hasClass('video'):
				$('.slides .video').css('display', 'block');
				break;
		}
	})
})