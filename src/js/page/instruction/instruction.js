var $ = require('jquery'),
    avalon = require('../../lib/avalon');

// require('globalCss'); 
require('../../../css/global.less');

var mod = {
    init: function() {
        avalon.ready(function() {
            avalon.define({ 
                $id: "AAA",
                name: "liger",
                color: "green"
            });
            avalon.define({
                $id: "BBB",
                name: "sphinx", 
                color: "red"
            });
            avalon.define({
                $id: "CCC",
                name: "dragon" //不存在color，就近原则，最近的BBB有color:red
            });
            avalon.define({
                $id: "DDD",
                name: "sirenia" //不存在color，使用了ms-important，表示不向上找作用域
            });

            avalon.scan(); // avalon.scan是一个非常重要的方法，它有两个可选参数，第一个是扫描的起点元素，默认是HTML标签，第2个是VM对象
        });
    }
};

module.exports = mod;
