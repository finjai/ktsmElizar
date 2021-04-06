$(document).ready(function() {
    $('.accordeon .accordeon-head').on('click', f_acc);
});

function f_acc(){
    $('.accordeon .accordeon-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(1000);
}
