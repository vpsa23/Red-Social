
$(document).ready(()=> {
	$('.language').hide();
	$('.login').hide()


	/*Vista splash con duración de 2 a 5 segundos*/
	setTimeout(()=> { 
		$(".content").fadeOut(500);
	},3000);
	setTimeout(()=> { 
		$(".language").fadeIn(500);
	});

	/*login*/
	$('#btn1').click(()=>{
		$('.language').hide();
		$('.login').show();
	});

});

