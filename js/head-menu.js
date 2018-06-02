$(document).ready(function() {
    $('.section-head__link').click(function() {
        $('.section-head__link').removeClass('active-link');
        $(this).addClass('active-link');
        $(this).location.href = url.value;
        return false;
    });
});