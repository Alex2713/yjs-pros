function login() {
    location.href = '/login/login.html'
}
function home() {
    location.href = '../index.html'
}

function navTo(id) {
    // console.log($("#" + id).offset().top)
    const bTop = $("#" + id).offset().top;
    $('html,body').animate({ scrollTop: bTop - 90 }, 500);
    // location.hash = id
}