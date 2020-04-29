    //header opacity
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>= 50){
			$('.bg, .menu').css({'opacity' : '0.9'})
		}
		else {
			$('.bg, .menu').css({'opacity' : '1'})
		}
	});
});

$(document).ready(function(){
	$(window).hover(function(){
		$('.dropdown-menu').hover(
		    function(){
		        $('.dropdown').css('color','#FFf');
		    },
		    function(){
		        $('.dropdown').css('color','#fff');
    		})
	})
});	

$(document).ready(function(){
	$(window).hover(function(){
		$('.dropdown').hover(
		    function(){
		        $('.dropdown').css('color','#fff');
		    },
		    function(){
		        $('.dropdown').css('color','#1b2445');
    		})
	})
});	

