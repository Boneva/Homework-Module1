$(document).ready(function(){
    /* Open lightbox on image click */
    $('.cliff img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Check if lightbox has an image
        if ($('.box').contents('img').length > 0) {
            $('.box').contents().remove('img'); // If true, clear image
        }

        // Clone the clicked image and append it to the lightbox
        var img = $(this).clone();
        $('.box').append(img);
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});