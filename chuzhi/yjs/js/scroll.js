
var oldTop = newTop = 0;
var scrollStatus = '';
var onbodyScroll = null;

onbodyScroll = function () {
    newTop = document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    if (+newTop > +oldTop) {
        if (scrollStatus === 'down') {
            oldTop = newTop;
            return;
        }
        if (+newTop > minTop) {
            scrollStatus = 'down';
            // 隐藏头部
            hideHeader();
        }
    } else {
        if (scrollStatus === 'up') {
            if (+newTop <= minTop) {
                // 删除样式2
                remove2();
            }
            oldTop = newTop;
            return;
        }
        scrollStatus = 'up';
        if (+newTop > minTop) {
            // 添加样式2
            add2AndShowHeader();
        }
    }
    // console.log(`scrollStatus:${scrollStatus}`);
    oldTop = newTop;
}

function hideHeader() {
    $('.app-header').animate({
        marginTop: -90
    }, 200)
}

function add2AndShowHeader() {
    // $('.app-header').removeClass('app-header2');
    $('.app-header').animate({
        marginTop: 0,
        height: 64
    }, 200);
    $('.header-container img').animate({
        height: 42
    }, 100);
}

function remove2() {
    // $('.app-header').addClass('app-header2');
    $('.app-header').animate({
        height: 90
    }, 200);
    $('.header-container img').animate({
        height: 60
    }, 100);
}