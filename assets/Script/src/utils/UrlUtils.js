"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtils = (function () {
    function UrlUtils() {
    }
    UrlUtils.getUrlParams = function () {
        var params = new Map();
        if (window.location == null) {
            return params;
        }
        var url = window.location.href;
        var num = url.indexOf("?");
        var str = url.substr(num + 1);
        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                var name_1 = arr[i].substring(0, num);
                var value = arr[i].substr(num + 1);
                params.set(name_1, value);
            }
        }
        return params;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;
