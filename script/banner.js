	$(window).load(function(){
		var sum=0;
		$('.banner-container li iframe, .banner-container li img').each(function(){ 
			sum += $(this).width();
		});		
	});
	$(function(){
		var winWidth = $(".banner-container").width();
		var ulWidthCount = 0;
		ulWidthCount = $('.banner-container li').size();
		$(".banner-container li").width(winWidth/ulWidthCount);
		$(".banner-container li").hover(function(){			
			ulWidthCount = $('.banner-container li').size();
			var galerie_Width = $(this).find("iframe, img").width();
			var bannerLi = winWidth - galerie_Width;
			// allowws the code to fade in oout every time the user hover
			var remWidth = ulWidthCount - 1;
			var appWidth = bannerLi/remWidth;
			// allows the galeries shows to stay in block
			$(".banner-container li").stop(true, false).animate({width: appWidth},500);
			// allows the galeries to  fade out
			$(this).stop(true, false).animate({width: galerie_Width},500);
			// opacity
			$(this).find("span.overlay").stop(true, false).fadeOut();
		}, 
		);	
	});

