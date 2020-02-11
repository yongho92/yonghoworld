			$(document).ready(function(){

				var swiper = new Swiper('.swiper-container1', {
				  autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				  },
				  pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				  loop:true,
				});
				
			});
