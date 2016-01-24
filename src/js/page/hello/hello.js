var $ = require('jquery'),
    avalon = require('../../lib/avalon');

var mod = {
    init: function() {
        avalon.ready(function() {
            var vm = avalon.define({
                $id: "box", // 对应ms-controller 
                $skipAarray: ["firstName"], // 不想监听的属性
                w: 100,
                h: 100,
                time: new Date(),
                simpleArray: [1, 2, 3, 4],
                objectArray: [{name: "a", value: "aa"}, {name: "b", value: "bb"}, {name: "c", value: "cc"}, {name: "d", value: "dd"}],
                object: {
                    o1: "k1",
                    o2: "k2",
                    o3: "k3"
                },
                firstName: "司徒",
                lastName: "正美",
                fullName: { //一个包含set或get的对象会被当成PropertyDescriptor，
                    set: function(val) { //里面必须用this指向scope，不能使用scope
                        var array = (val || "").split(" ");

                        this.firstName = array[0] || "";
                        this.lastName = array[1] || "";
                    },
                    get: function() {
                        return this.firstName + "·" + this.lastName;
                    }
                },
                click: function() {
                    vm.w = parseFloat(vm.w) + 10;
                    vm.h = parseFloat(vm.h) + 10;
                }
            });

            vm.lastName += ' - 作者'; // 修改VM属性
            avalon.scan(); // avalon.scan是一个非常重要的方法，它有两个可选参数，第一个是扫描的起点元素，默认是HTML标签，第2个是VM对象
        }); 
    }
};

module.exports = mod;
