$(function () {
    // 1. Select the form and the message container
    var form = $('#contact-form');
    var formMessages = $('.ajax-response');

    // 2. Set up the submission event listener
    $(form).submit(function (e) {
        // Prevent the default browser submit (no page refresh)
        e.preventDefault();

        // Get the submit button for feedback
        var submitBtn = $(this).find('button[type="submit"]');
        var originalBtnText = $(submitBtn).text();

        // Show "Sending..." and disable to prevent multiple clicks
        $(submitBtn).prop('disabled', true).html('<span>Sending...</span>');

        // Serialize data and add flags so PHP knows it's an AJAX request
        var formData = $(form).serialize() + '&is_ajax=1&submit_contact=1';

        // 3. The AJAX Request
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function (response) {
            // Trim whitespace to ensure clean comparison
            var res = response.trim();

            if (res === "SUCCESS") {
                // Premium SweetAlert Success Popup
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you! Your inquiry has been successfully recorded.',
                    icon: 'success',
                    confirmButtonColor: '#AB052D',
                    confirmButtonText: 'Great!'
                });

                // Clear the form fields
                $(form)[0].reset();
                
                // Provide text feedback below the button
                $(formMessages).removeClass('error').addClass('success')
                               .text("Thank you! Your message has been sent.")
                               .fadeIn().delay(3000).fadeOut();

                // Restore button after a short delay
                setTimeout(function () {
                    $(submitBtn).prop('disabled', false).text(originalBtnText);
                }, 2000);

            } else {
                // Handle specific errors returned by PHP (e.g., "Error: Invalid email")
                console.error("Server Response:", res);
                
                Swal.fire({
                    title: 'Oops!',
                    text: res.includes("Error") ? res : "Something went wrong. Please check your details.",
                    icon: 'error',
                    confirmButtonColor: '#AB052D'
                });

                $(submitBtn).prop('disabled', false).text("Try Again");
            }
        })
        .fail(function () {
            // This triggers if the server crashes (500 error) or URL is wrong
            Swal.fire({
                title: 'Server Error',
                text: 'Could not connect to the server. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#AB052D'
            });
            $(submitBtn).prop('disabled', false).text(originalBtnText);
        });
    });
});