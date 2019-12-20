// 金额转换万字单位 start
function unitConvert(num) {
    if (num) {
        var moneyUnits = ["", "万"],
            dividend = 10000,
            curentNum = num, //转换数字
            curentUnit = moneyUnits[0]; //转换单位 
        for (var i = 0; i < 2; i++) {
            curentUnit = moneyUnits[i];
            if (strNumSize(curentNum) < 5) {
                return num;
            }
        }
        curentNum = curentNum / dividend;
        var m = {
            num: 0,
            unit: ""
        }
        m.num = curentNum.toFixed(2);
        m.unit = curentUnit;
        return m.num + m.unit;
    }
}

function strNumSize(tempNum) {
    var stringNum = tempNum.toString()
    var index = stringNum.indexOf(".")
    var newNum = stringNum
    if (index != -1) {
        newNum = stringNum.substring(0, index)
    }
    return newNum.length;
}
// 金额转换万字单位 end
var myChart = echarts.init(document.getElementById('china-map'));
// var oBack = document.getElementById("back");

// http://39.105.130.231:8080/practice/owDataCount/countAll
// {
//     "success": true, 
//     "message":"返回的说明语句",
//     "data": {
//             "schools": "院校数量", 
//             "companys": "企业数量", 
//             "students": "学生数量"
//          }
// }
// http://39.105.130.231:8080/practice/owDataCount/findAll
// 全国省份数据
var toolTipData = [{
    "idx": "",
    "provincecode": "",
    "provincename": "天津",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "河北",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "山西",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "内蒙古",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "辽宁",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "吉林",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "黑龙江",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "上海",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "江苏",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "浙江",
    "schools": 100,
    "companys": 100,
    "students": 100
}
    , {
    "idx": "",
    "provincecode": "",
    "provincename": "安徽",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "福建",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "江西",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "山东",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "河南",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "湖北",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "湖南",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "广东",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "广西",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "海南",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "重庆",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "四川",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "贵州",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "云南",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "西藏",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "陕西",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "甘肃",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "青海",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "宁夏",
    "schools": 100,
    "companys": 100,
    "students": 100
}, {
    "idx": "",
    "provincecode": "",
    "provincename": "新疆",
    "schools": 100,
    "companys": 100,
    "students": 100
}

    // "provinceName": "新疆",
    // "provinceKey": 650000,
    // "cityName": null,
    // "cityKey": null,
    // "shopCount": 43,
    // "totalPrice": 294423.4,
    // "orderCount": 11741,
    // "onlineCount": 0
]
var seriesData = [];
for (var i = 0; i < toolTipData.length; i++) {
    seriesData[i] = {};
    seriesData[i].name = toolTipData[i].provincename;
    seriesData[i].value = toolTipData[i].schools + toolTipData[i].companys + toolTipData[i].students;
    seriesData[i].provinceKey = toolTipData[i].provincecode;
}

var max = Math.max.apply(Math, seriesData.map(function (o) {
    return o.value
})),
    min = 0; // 侧边最大值最小值
var maxSize4Pin = 40,
    minSize4Pin = 30;

var mapName = '';

function getGeoCoordMap(name) {
    name = name ? name : 'china';
    /*获取地图数据*/
    var geoCoordMap = {};
    myChart.showLoading(); // loading start
    var mapFeatures = echarts.getMap(name).geoJson.features;
    myChart.hideLoading(); // loading end
    mapFeatures.forEach(function (v) {
        var name = v.properties.name; // 地区名称
        geoCoordMap[name] = v.properties.cp; // 地区经纬度
    });
    return geoCoordMap;
}

function convertData(data) { // 转换数据
    var geoCoordMap = getGeoCoordMap(mapName);
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]; // 数据的名字对应的经纬度
        if (geoCoord) { // 如果数据data对应上，
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

function initEcharts(pName, Chinese_) {
    var tmpSeriesData = seriesData;
    var tmp = toolTipData;
    var option = {
        // title: {
        //     text: Chinese_ || pName,
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: function (params, a, b) { // 鼠标滑过显示的数据
                var toolTiphtml = ''
                for (var i = 0; i < tmp.length; i++) {
                    if (params.name == tmp[i].provincename) {
                        toolTiphtml += tmp[i].provincename + '<br>院校：' +
                            unitConvert(tmp[i].schools) + ' 企业：' + tmp[i].companys
                            + '<br>学生：' + tmp[i].students;
                    }
                }
                return toolTiphtml;
            }
        },
        geo: {
            show: true,
            map: pName,
            roam: false,
            // top: 20,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    // areaColor: '#3c8dbc', // 没有值得时候颜色
                    // borderColor: '#097bba',
                    areaColor: '#fff', // 没有值得时候颜色
                    borderColor: '#545454',
                },
                emphasis: {
                    // areaColor: '#fbd456', // 鼠标滑过选中的颜色
                    areaColor: '#fff', // 鼠标滑过选中的颜色
                }
            }
        },
        visualMap: { // 视觉映射组件
            show: false,
            min: min,
            max: max, // 侧边滑动的最大值，从数据中获取
            left: '5%',
            top: '96%',
            inverse: true, //是否反转 visualMap 组件
            // itemHeight:200,  //图形的高度，即长条的高度
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
            seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
            orient: "horizontal",
            inRange: {
                // color: ['#dbfefe', '#1066d5'] // 蓝绿
                // color: ['#f2fbf2', '#f1d522'] // 蓝绿
            }
        },
        series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: tmpSeriesData,
            symbolSize: '1',
            label: {
                normal: {
                    show: false,
                    formatter: '{b}',
                    position: 'right'
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#895139' // 字体颜色
                }
            }
        },
        {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: false, //是否开启鼠标缩放和平移漫游
            data: tmpSeriesData,
            // top: "3%",//组件距离容器的距离
            // geoIndex: 0,
            // aspectScale: 0.75,       //长宽比
            // showLegendSymbol: false, // 存在legend时显示
            // selectedMode: 'false',
            label: {
                normal: {
                    show: true, //显示省份标签
                    textStyle: {
                        color: "#895139"
                    } //省份标签字体颜色
                },
                emphasis: { //对应的鼠标悬浮效果
                    show: true,
                    textStyle: {
                        color: "#323232"
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: .5, //区域边框宽度
                    // borderColor: '#0550c3', //区域边框颜色
                    // areaColor: "#0b7e9e", //区域颜色
                    borderColor: '#545454', //区域边框颜色
                    areaColor: "#fff", //区域颜色
                },
                emphasis: {
                    borderWidth: .5,
                    // borderColor: '#4b0082',
                    areaColor: "#ece39e",
                    borderColor: '#f1d522', //区域边框颜色
                    // areaColor: "#fff", //区域颜色
                }
            }
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'circle', //气泡pin
            symbolSize: function (val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                // 调整地图圆点大小，根据综合值决定大小
                return (a * val[2] + b) * .5;
            },
            label: {
                normal: {
                    show: false,
                    formatter: function (params) {
                        return params.data.value[2];
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 9
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: (a) => {
                        // 调整圆点颜色
                        const per = 1; // 最亮为头部底色，表示最大值，0为透明
                        return `rgba(241, 213, 34, ${per})`
                    }
                }
            },
            zlevel: 6,
            data: convertData(tmpSeriesData),
        },
        ]
    };
    // 针对海南放大
    if (pName == '海南') {
        option.series[1].center = [109.844902, 19.0392];
        option.series[1].layoutCenter = ['50%', '50%'];
        option.series[1].layoutSize = "300%";
    } else { //非显示海南时，将设置的参数恢复默认值
        option.series[1].center = undefined;
        option.series[1].layoutCenter = undefined;
        option.series[1].layoutSize = undefined;
    }
    myChart.setOption(option);
    /* 响应式 */
    $(window).resize(function () {
        myChart.resize();
    });

    myChart.off("click");
}