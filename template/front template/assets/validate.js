/* <![CDATA[ */


// Jquery validate form contact
jQuery(document).ready(function(){
	
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message-contact").slideUp(750,function() {
		$('#message-contact').hide();

 		$('#submit-contact')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_contact: $('#name_contact').val(),
			lastname_contact: $('#lastname_contact').val(),
			email_contact: $('#email_contact').val(),
			phone_contact: $('#phone_contact').val(),
			message_contact: $('#message_contact').val(),
			verify_contact: $('#verify_contact').val()
		},
			function(data){
				document.getElementById('message-contact').innerHTML = data;
				$('#message-contact').slideDown('slow');
				$('#contactform .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-contact').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});
		return false;
	});
});

// Jquery validate form register doctor
jQuery(document).ready(function(){
	
	$('#register_doctor').submit(function(){

		var action = $(this).attr('action');

		$("#message-register").slideUp(750,function() {
		$('#message-register').hide();

 		$('#submit-register')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_register: $('#name_register').val(),
			lastname_register: $('#lastname_register').val(),
			specialization: $('#specialization').val(),
			city_register: $('#city_register').val(),
			country_register: $('#country_register').val(),
			address_register: $('#address_register').val(),
			mobile_register: $('#mobile_register').val(),
			office_phone_register: $('#office_phone_register').val(),
			email_register: $('#email_register').val(),
			verify_register: $('#verify_register').val()
		},
			function(data){
				document.getElementById('message-register').innerHTML = data;
				$('#message-register').slideDown('slow');
				$('#register_doctor .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-register').removeAttr('disabled');
				if(data.match('success') != null) $('#register_doctor').slideUp('slow');

			}
		);

		});
		return false;
	});
});

// Jquery validate form booking visit
jQuery(document).ready(function(){
	
	$('#booking').submit(function(){

		var action = $(this).attr('action');

		$("#message-booking").slideUp(750,function() {
		$('#message-booking').hide();

 		$('#submit-booking')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			doctor_name_booking: $('#doctor_name_booking').val(),
			name_booking: $('#name_booking').val(),
			lastname_booking: $('#lastname_booking').val(),
			email_booking: $('#email_booking').val(),
			booking_date: $('#booking_date').val(),
			booking_time: $('#booking_time').val(),
			booking_visit: $('#booking_visit').val(),
			booking_message: $('#booking_message').val(),
			verify_booking: $('#verify_booking').val()
		},
			function(data){
				document.getElementById('message-booking').innerHTML = data;
				$('#message-booking').slideDown('slow');
				$('#booking .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-booking').removeAttr('disabled');
				if(data.match('success') != null) $('#booking').slideUp('slow');

			}
		);

		});
		return false;
	});
});
/* ]]> */