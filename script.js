var mdzIndex = 10;
$('.js-modal-open').on('click', function (e) {
	e.preventDefault();
	mdzIndex++;
	var mdId = $(this).data('modal-id');
	if (mdId === null || mdId === '') return true;
	$('#' + mdId).addClass('js-is-active').css({ 'z-index': mdzIndex });
});

$('.js-modal-close').on('click', function () {
	$(this).closest('.js-modal').removeClass('js-is-active').css({ 'z-index': '' });
	if ($('.js-modal.js-is-active').length === 0) {
		mdzIndex = 10;
	}
});

$('.js-modal').on('click', function (e) {
	if ($(e.target).hasClass('js-modal')) {
		$(this).find('.js-modal-close').trigger('click');
	}
});

//toggle about
function myFunction() {
	var x = document.getElementById("myDIV");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

//IMAGE HOVER
$(document).ready(function () {

	//target the parent div with the function
	$(".item").hover(function (evt) {

		//find the image and animate the opacity
		$(this).find("img").stop().animate({
			opacity: 0
		}, 0);
		//find and show the caption 
		$(this).find(".caption").show();
	},
		function (evt) {
			//reverse the animations on mouseout
			$(this).find("img").stop().animate({
				opacity: 1
			}, 100);
			$(this).find(".caption").hide();
		}
	);
});
