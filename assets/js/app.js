$(document).ready(()=> {
	$('.language').hide();
	$('.login').hide();
	$('.principal').hide();
	$('.profile').hide();

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
		$('.principal').hide();
	});
	$('#btnback').click(()=>{
		$('.language').show();
		$('.login').hide();
	});

/*Seccion Principal*/
	$('#iniciar').click(()=>{
		$('.language').hide();
		$('.login').hide();
		$('.principal').show();
	});
});

/* PERFIL */
	$('#perfil').click(()=>{
		$('.language').hide();
		$('.login').hide();
		$('.principal').hide();
		$('.profile').show();
	})

/*Filtrar Restaurantes*/

function filter(id) {
	var filt = $('#selector').val();
	$('#comida').val('');
	if(id == 'comida'){
		$('#comida').show();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').hide();
	}
	if(id == 'mexico'){
		$('#comida').hide();
		$('#mexico').show();
		$('#japon').hide();
		$('#thai').hide();
	}
	if(id == 'japon'){
		$('#comida').hide();
		$('#mexico').hide();
		$('#japon').show();
		$('#thai').hide();
	}
	if(id == 'thai'){
		$('#comida').hide();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').show();
	}
}





/* Intento para ocultar vista splash desde jQuery

	$(document).ready(function() {
	function splashMobile($, viewport){

		if( viewport.is('<=sm') ) {
			$('.language').hide();
			$('.login').hide();
			$('.principal').hide();
		
			setTimeout(()=> {
				$(".content").fadeOut(500);
			},3000);
			setTimeout(()=> {
				$(".language").fadeIn(500);
			});
		}if( viewport.is('>sm') ) {
			$('.login').show();
			$('.principal').hide();
		}
		}

			$('#btn1').click(()=>{
				$('.language').hide();
				$('.login').show();
				$('.principal').hide();
			});
			$('#btnback').click(()=>{
				$('.language').show();
				$('.login').hide();
			});

			$('#iniciar').click(()=>{
				$('.language').hide();
				$('.login').hide();
				$('.principal').show();
			});
});

function filter(id) {
	var filt = $('#selector').val();
	$('#comida').val('');
	if(id == 'comida'){
		$('#comida').show();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').hide();
	}
	if(id == 'mexico'){
		$('#comida').hide();
		$('#mexico').show();
		$('#japon').hide();
		$('#thai').hide();
	}
	if(id == 'japon'){
		$('#comida').hide();
		$('#mexico').hide();
		$('#japon').show();
		$('#thai').hide();
	}
	if(id == 'thai'){
		$('#comida').hide();
		$('#mexico').hide();
		$('#japon').hide();
		$('#thai').show();
	}
}


*/
