

$(function () {
    oldTop = newTop = document.body.scrollTop || document.documentElement.scrollTop;//兼容写法
    AOS.init({
        offset: 200,
        duration: 800,
        once: true
    });
    window.onscroll = onbodyScroll;
    initData();
});

function initData() {
    $.ajax({
        // url: 'http://39.105.130.231:8080/practice/owDataCount/countAll',
        url: '/data/all.json',
        type: 'get',
        dataType: 'json',
        success: (rsl) => {
            if (rsl && rsl.success) {
                // 地图，总数量赋值
                initMapData(rsl.data);
                // 获取省份数据
                initProviceData();
            }
        }
    });
}

function initMapData(data) {
    $('#countOfSchool').html(data.wcl);
    $('#countOfCompany').html(data.ycl);
    $('#countOfStudent').html(data.sum);
}

function initProviceData() {
    $.ajax({
        // url: 'http://39.105.130.231:8080/practice/owDataCount/countAll',
        url: './data/province.json',
        type: 'get',
        dataType: 'json',
        success: (rsl) => {
            if (rsl && rsl.success) {
                toolTipData = rsl.data;
                for (var i = 0; i < toolTipData.length; i++) {
                    seriesData[i] = {};
                    seriesData[i].name = toolTipData[i].provincename;
                    seriesData[i].value = toolTipData[i].schools + toolTipData[i].companys + toolTipData[i].students;
                    seriesData[i].provinceKey = toolTipData[i].provincecode;
                }
                max = Math.max.apply(Math, seriesData.map(function (o) {
                    return o.value
                }))
                // 初始化echarts-map，在获取完数据后展示地图
                initEcharts("china", "中国");
            }
        }
    });
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
