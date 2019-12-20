
var isMenuShow = false;
function login() {
    location.href = '/login/login.html'
}
function home() {
    location.href = '../index.html'
}

function navTo(id) {
    $('.is-active').removeClass('is-active');
    isMenuShow = false;
    // console.log($("#" + id).offset().top)
    const aTop = document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    const bTop = $("#" + id).offset().top;
    $('html,body').animate({ scrollTop: bTop - (aTop > bTop ? 30 : -20) }, 500);
}
function onToggleMenu() {
    if (isMenuShow) {
        isMenuShow = false;
        // $('.navbar1').removeClass('navbar2');
        $('.navbar-menu').removeClass('is-active');
    } else {
        isMenuShow = true;
        // $('.navbar-menu').addClass('menuTouch');
        // $('.navbar-menu').slideDown();
        // $('.navbar1').addClass('navbar2');
        $('.navbar-menu').addClass('is-active');
    }
}