jQuery(document).ready(function($) {	
	Brisqq.checkAvailability('WC1B 3JA', function (isAvailable, price, error) {
	console.log(isAvailable, price);
		var customerData = {
			contactName: 'Johnattan Smith',
			contactPhone: '+44771234567',
			contactEmail: '',
			address: '14 Bedford Square'
		};
		Brisqq.displayBox(customerData, '#shipping_method_2_info');	
});


	/////////////////////////////////////////////////////////////////////

	// $('#step1-run').on('click', function (event) {

	// 	Brisqq.checkAvailability('WC1B 3JA', function (isAvailable, price, error) {

	// 		if (error !== null) {
	// 			$('#step1-output pre').html('<code class="language-js">' + error + '</code>');
	// 		} else {
	// 			$('#step1-output pre').html('<code class="language-js">' + isAvailable + ' ' + price + '</code>');
	// 		}

	// 		$('#step1-output').show();

	// 		console.log(isAvailable, price);

	// 		$('#step2-run').removeAttr('disabled');

	// 	});

	// });

	/////////////////////////////////////////////////////////////////////

	// $('#step2-run').on('click', function (event) {

	// 	$('#step2-output').show();

	// 	var customerData = {
	// 		contactName: 'Johnattan Smith',
	// 		contactPhone: '+44771234567',
	// 		contactEmail: '',
	// 		address: '14 Bedford Square'
	// 	};

	// 	Brisqq.displayBox(customerData, '#shipping_method_2_info');

	// 	$('#step3-run').removeAttr('disabled');

	// });

	// /////////////////////////////////////////////////////////////////////

	// $('#step3-run').on('click', function (event) {

	// 	Brisqq.confirmDelivery(function (isConfirmed, error) {
	// 		$('#step3-output').show();
	// 		if (error !== null) {
	// 			$('#step3-output-code').html(isConfirmed + ' ' + error.error);
	// 		} else {
	// 			$('#step3-output-code').html(isConfirmed + ' null');
	// 		}
	// 		console.log(isConfirmed, error);
	// 	});

	// });

	/////////////////////////////////////////////////////////////////////

});