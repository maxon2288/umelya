$(document).ready(function() {
    $('.disk-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                    maxlength: 17,
                    minlength: 17,
                },
                email: {
                    required: true,
                    email: true,
                }
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.reg-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                email: {
                    required: true,
                    email: true,
                },
                name: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 5,
                },
                passwordAgain: {
                    required: true,
                    equalTo: "#password",
                    minlength: 5,
                },
                phone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                }
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.ctc-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                massage: {
                    required: true,
                }
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.sc-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                email: {
                    required: true,
                    email: true,
                },
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
    $('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
                name: {
                    required: true,
                },
			},

			errorPlacement: function (error, element) {
			},

         });
	 });
});