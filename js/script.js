(function($) { $("#edit-field-performance-type-none").remove(); }(jQuery));

jQuery(document).ready(function() {
    jQuery('body').addClass('responsified');
    // Add any default in select box
    jQuery("#myDropDown option").each(function(a, b) {
        if ($(this).html() == textToSelect) $(this).attr("selected", "selected");
    });

    // Add a class to remove my-videos block from user-login/password/register form.
    if ((jQuery("#page-wrapper form").hasClass("user-login-form") || jQuery("#page-wrapper form").hasClass("user-register-form") || jQuery("#page-wrapper form").hasClass("user-pass"))) {
        jQuery("body").addClass('remove-my-videos-block');
    }

});

(function($, Drupal) {
    Drupal.behaviors.simple = {
        attach: function(context, settings) {

            function windowSize() {
                var width = $(window).width();
                if (width < 768) {

                    var login = $('.main-navigation .login-header').html();
                    var mobileloginlinkblock = '<div class="mobile-login-block">' + login + '</div>';
                    $('.mobile-login-block').remove();
                    $('.main-navigation #block-ultimenumainmenu .responsified ul').append(mobileloginlinkblock);

                    var searchblock = $('.search--block').html();
                    var mobilesearchblock = '<div class="views-exposed-form-mobile">' + searchblock + '</div>';
                    $('.views-exposed-form-mobile').remove();
                    $('.main-navigation #block-ultimenumainmenu .responsified ul .mobile-login-block').append(mobilesearchblock);

                } else {
                    $('.mobile-login-block').remove();
                    $('.views-exposed-form-mobile').remove();
                }
            }
            windowSize();
            $(window).resize(function() {
                windowSize();
            });

        }
    };
})(jQuery, Drupal);