
var oldTop = newTop = 0;
var scrollStatus = '';
var onbodyScroll = null;
var minTop = 80
$(function () {
    oldTop = newTop = document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    AOS.init({
        offset: 200,
        duration: 800,
        once: true
    });
    window.onscroll = onbodyScroll;
    // 初始化地图
    initMap();
});

onbodyScroll = function () {
    if ($('.is-active').length !== 0) {
        return;
    }
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
}

function remove2() {
    // $('.app-header').addClass('app-header2');
    $('.app-header').animate({
        height: 90
    }, 200);
}

function initMap() {
    // 初始化echarts-map，在获取完数据后展示地图
    initEcharts("china", "中国");
}

function onApply() {
    $('.modal').slideDown('normal', () => {
        $('.modal').addClass('is-active');
    });
}

function onCloseModal() {
    $('.modal').removeClass('is-active');
    $('.modal').slideUp();
}