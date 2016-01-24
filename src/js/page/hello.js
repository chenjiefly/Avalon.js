var $ = require('jquery'),
    avalon = require('../lib/avalon');

var mod = {
    init: function() {
        var vm = avalon.define({
            $id: "test",
            name: "司徒正美"
        });
    }
};

module.exports = mod;