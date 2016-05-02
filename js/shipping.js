
// $.noConflict();

// jQuery(document).ready(function($) {
// 	$('#step2-run').removeAttr('disabled');
// 	Brisqq.checkAvailability('WC1B 3JA', function (isAvailable, price, error) {
// 	console.log(isAvailable, price);
// 		$('#step2-output').show();
// 		var customerData = {
// 			contactName: 'Johnattan Smith',
// 			contactPhone: '+44771234567',
// 			contactEmail: '',
// 			address: '14 Bedford Square'
// 		};
// 		Brisqq.displayBox(customerData, '#shipping_method_2_info');	
// });
// });


// jQuery( document ).ready(function( $ ) {
// Brisqq.checkAvailability('WC1B 3JA', function (isAvailable, price, error) {
// 	console.log(isAvailable, price);
// });
// 	var customerData = {
// 	contactName: 'Johnattan Smith',
// 	contactPhone: '+44771234567',
// 	contactEmail: 'johnsmith@test.com',
// 	address: '14 Bedford Square'
// }
// 	$("#customFields").hide();
// 	$("#customFields").detach().appendTo("#co-shipping-method-form");

// 	$('form#co-shipping-method-form').click(function(){
// 		if($('#s_method_envato_customshippingmethod_envato_customshippingmethod').is(':checked')) { 
// 			$("#customFields").show();
// 		}else {
// 			$("#customFields").hide();
// 		}
// 	});
// 	// Brisqq.displayBox(customerData, '#checkout-shipping-method-load > dl > dt');
// });



// Brisqq.checkAvailability('WC1B 3JA', function (isAvailable, price, error) {
// 	console.log(isAvailable, price);
// 		// $('#step2-output').show();
// 		// if (isAvailable == true) {			
// 			var customerData = {
// 				contactName: 'Johnattan Smith',
// 				contactPhone: '+44771234567',
// 				contactEmail: '',
// 				address: '14 Bedford Square'
// 			};
// 			Brisqq.displayBox(customerData, '#customFields');	
// 		// }
// });




// var $j = jQuery.noConflict(); 
// $j(document).ready(function() {
// 	$j.post( "http://local.mag19.com/integration/index.html", function( data ) {
//   $j( "#customFields" ).html( data );
// });
// });



var $j = jQuery.noConflict(); 
$j(document).ready(function() {
	$j('iframe').css({"width": "610px", "height": "300px"});
	$j('iframe').hide();
	$j("iframe").detach().appendTo("#co-shipping-method-form");

	$j('form#co-shipping-method-form').click(function(){
		if($j('#s_method_envato_customshippingmethod_envato_customshippingmethod').is(':checked')) { 
			$j("#content-3-8").show();
		}else {
			$j("#content-3-8").hide();
		}
	});
});


document.observe('dom:loaded', function(){
	Ajax.Responders.register({
		onComplete: function(response) {
			// if ('http://local.mag19.com/index.php/checkout/onepage/getAdditional/' == response.url)
		   		// alert('f');
			if ('http://local.mag19.com/index.php/checkout/onepage/progress/?prevStep=shipping' == response.url) {

				$j("iframe").detach().insertBefore(".sp-methods");
				$j("iframe").show();				
				// alert('hello');				
			}
		}
	});
});
