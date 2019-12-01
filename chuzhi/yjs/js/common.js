function login() {
    location.href = '/login/login.html'
}
function home() {
    location.href = '../index.html'
}

function navTo(id) {
    // console.log($("#" + id).offset().top)
    const aTop = document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    const bTop = $("#" + id).offset().top;
    $('html,body').animate({ scrollTop: bTop - (aTop > bTop ? 40 : 0) }, 500);
    // location.hash = id
}