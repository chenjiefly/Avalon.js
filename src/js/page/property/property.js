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
                }
            });
            
            var flag = true;
            setInterval(function() {
                vm.time = new Date(); 

                if (flag) {
                    //如果是数组，注意保证它们的元素的类型是一致的
                   //只能全是字符串，或是全是布尔，不能有一些是这种类型，另一些是其他类型
                   //这时我们可以使用set方法来更新（它有两个参数，第一个是index，第2个是新值）
                    vm.simpleArray.set(0, 1000);
                    vm.simpleArray.set(1, 2000);
                    vm.simpleArray.set(2, 3000);
                    vm.objectArray.set(0, {name: "xxx", value: "yyy"});
                    vm.object = {
                       o1: "aaaa",
                       o2: "bbbb",
                       o3: "cccc"
                   };
                } else {
                    vm.simpleArray.set(0, 2000);
                    vm.simpleArray.set(1, 3000);
                    vm.simpleArray.set(2, 1000);
                    vm.objectArray.set(0, {name: "aaa", value: "bbb"});
                    vm.object = {
                       o3: "cccc",
                       o2: "bbbb", 
                       o1: "aaaa"
                   };
                }
                flag = !flag;
               
           }, 1000);

            avalon.scan(); // avalon.scan是一个非常重要的方法，它有两个可选参数，第一个是扫描的起点元素，默认是HTML标签，第2个是VM对象
        }); 
    }
};

module.exports = mod;
